/**
 * narration_stage.jsx · voiceover driver Stage
 *
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║ 🛑 Must read before using this tool: references/voiceover-pipeline.md ║
 * ║                                                                  ║
 * ║ Iron Rule #1: The entire film is a continuous movement narrative, not a set of independent scenes ║
 * ║          You are not making 7 slides. You are directing 1 movie. ║
 * ║                                                                  ║
 * ║ Iron Rule #2: The selected hero element persists across scenes, do not create a new layout for each segment ║
 * ║                                                                  ║
 * ║ Iron Rule #3: No hard cuts between scenes (opacity 1→0/0→1) ║
 * ║ Want morph, not cut ║
 * ║                                                                  ║
 * ║ Failure mode #1 (actual pitfalls of this skill v1): ║
 * ║ Each Scene has its own independent layout + cue, use fade-up + scene to switch ║
 * ║ Full page opacity switch = PowerPoint with dubbing = zero texture ║
 * ║                                                                  ║
 * ║ Correct approach: Put hero directly in <NarrationStage> child level (not into Scene) ║
 * ║ Use useNarration() to read time/scene/cue status in hero ║
 * ║ The hero determines its form based on the current time → Continuous movement across scenes ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * Usage (inline into HTML <script type="text/babel">):
 *   const { NarrationStage, Scene, Cue, useNarration } = NarrationStageLib;
 *
 *   const App = () => (
 *     <NarrationStage timeline={TIMELINE} audioSrc="voiceover.mp3"
 *                     width={1920} height={1080}>
 *       <Scene id="intro">
 * <h1>What is token</h1>
 *         <Cue id="question">
 * {(triggered) => triggered && <p>↑ This is the problem</p>}
 *         </Cue>
 *       </Scene>
 *       <Scene id="token-2">
 *         <Cue id="split">
 *           {(triggered, progress) => (
 *             <div style={{opacity: triggered ? 1 : 0.3}}>...</div>
 *           )}
 *         </Cue>
 *       </Scene>
 *     </NarrationStage>
 *   );
 *
 * Time source (automatically select one of the two):
 * - Video recording mode (window.__recording === true): use window.__time (external driver pushes frames)
 * - Live broadcast mode: use the currentTime of <audio> (strictly synchronized with the audio when the user clicks playback)
 *
 * Compatible with render-video.js:
 * - For the first frame of tick, set window.__ready = true
 * - Detect window.__recording when recording video to force audio not to be played, use window.__time
 * - Expose window.__totalDuration to the driver to calculate the total number of frames
 *
 * Dependencies: React 18 + ReactDOM 18 + Babel standalone (same as animations.jsx)
 */

const NarrationStageLib = (() => {
  const NarrationContext = React.createContext({
    time: 0,
    scene: null,
    sceneTime: 0,
    isCueTriggered: () => false,
    cueProgress: () => 0,
  });

  /**
   * Main component: eat timeline + audio, provide context
   *
   * Props:
   * timeline timeline.json object (required)
   * audioSrc voiceover.mp3 path (required)
   * width/height Stage size, default 1920x1080
   * background default '#0e0e0e'
   * controls whether to display the bottom play bar, default true
   * children animation content (organized with <Scene>/<Cue>)
   */
  function NarrationStage({
    timeline,
    audioSrc,
    width = 1920,
    height = 1080,
    background = '#0e0e0e',
    controls = true,
    children,
  }) {
    const audioRef = React.useRef(null);
    const [time, setTime] = React.useState(0);
    const [playing, setPlaying] = React.useState(false);
    const recording = typeof window !== 'undefined' && window.__recording === true;

    // Exposed to render-video.js
    React.useEffect(() => {
      if (typeof window === 'undefined') return;
      window.__totalDuration = timeline.totalDuration;
      window.__ready = true;
    }, [timeline.totalDuration]);

    // time tick
    React.useEffect(() => {
      let raf;
      if (recording) {
        // Seek-render (render-video-seek.js injected into window.__seekRender): Freeze the self-driven clock,
        //Advanced frame by frame by external window.__seek(t). Each frame is a deterministic seek without rAF.
        if (typeof window !== 'undefined' && window.__seekRender) {
          window.__seek = (t) => setTime(Math.min(t, timeline.totalDuration));
          return;
        }
        //Video recording mode: rAF wall-clock self-drive starts from 0
        // Compatible with render-video.js (it relies on natural animation advancement + window.__seek reset)
        let startedAt = null;
        const tick = (now) => {
          if (startedAt === null) startedAt = now;
          setTime(Math.min((now - startedAt) / 1000, timeline.totalDuration));
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        // Expose __seek to render-video.js and call __seek(0) to reset after ready
        if (typeof window !== 'undefined') {
          window.__seek = (t) => {
            startedAt = performance.now() - t * 1000;
            setTime(t);
          };
        }
      } else {
        // Live broadcast mode: follow audio.currentTime
        const tick = () => {
          if (audioRef.current && !audioRef.current.paused) {
            setTime(audioRef.current.currentTime);
          }
          raf = requestAnimationFrame(tick);
        };
        tick();
      }
      return () => cancelAnimationFrame(raf);
    }, [recording, timeline.totalDuration]);

    // current scene
    const currentScene = React.useMemo(() => {
      if (!timeline.scenes) return null;
      // Find the segment with start <= time < end. Keep the last paragraph until end
      for (let i = 0; i < timeline.scenes.length; i++) {
        const s = timeline.scenes[i];
        const next = timeline.scenes[i + 1];
        if (time >= s.start && (!next || time < next.start)) return s;
      }
      return timeline.scenes[0];
    }, [time, timeline.scenes]);

    const sceneTime = currentScene ? Math.max(0, time - currentScene.start) : 0;

    // Find the cue state (compare according to absoluteTime, and can also check across scenes)
    const allCues = React.useMemo(() => {
      const map = {};
      for (const s of timeline.scenes || []) {
        for (const c of s.cues || []) {
          map[c.id] = c;
        }
      }
      return map;
    }, [timeline.scenes]);

    const isCueTriggered = React.useCallback(
      (cueId) => {
        const c = allCues[cueId];
        if (!c) return false;
        return time >= c.absoluteTime;
      },
      [allCues, time],
    );

    /** How many seconds after triggering 0→1, keep 1 after >1. Used to make fade-in animation after cue */
    const cueProgress = React.useCallback(
      (cueId, ramp = 0.5) => {
        const c = allCues[cueId];
        if (!c) return 0;
        const dt = time - c.absoluteTime;
        if (dt <= 0) return 0;
        if (dt >= ramp) return 1;
        return dt / ramp;
      },
      [allCues, time],
    );

    const ctx = { time, scene: currentScene, sceneTime, isCueTriggered, cueProgress, timeline };

    // play/pause/seek control
    const handlePlayPause = () => {
      if (!audioRef.current) return;
      if (audioRef.current.paused) {
        audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
    };

    const handleSeek = (e) => {
      if (!audioRef.current) return;
      const t = parseFloat(e.target.value);
      audioRef.current.currentTime = t;
      setTime(t);
    };

    const handleAudioEnded = () => setPlaying(false);

    return (
      <NarrationContext.Provider value={ctx}>
        <div
          style={{
            position: 'relative',
            width,
            height,
            background,
            overflow: 'hidden',
            color: '#fff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif',
          }}
        >
          {children}
        </div>
        {!recording && (
          <audio
            ref={audioRef}
            src={audioSrc}
            preload="auto"
            onEnded={handleAudioEnded}
          />
        )}
        {!recording && controls && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 16px',
              background: '#1a1a1a',
              color: '#ddd',
              fontFamily: 'monospace',
              fontSize: 13,
              width,
              boxSizing: 'border-box',
            }}
          >
            <button
              onClick={handlePlayPause}
              style={{
                padding: '6px 14px',
                background: '#fff',
                color: '#000',
                border: 0,
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              {playing ? '❚❚ Pause' : '▶ Play'}
            </button>
            <input
              type="range"
              min={0}
              max={timeline.totalDuration}
              step={0.01}
              value={time}
              onChange={handleSeek}
              style={{ flex: 1 }}
            />
            <span style={{ minWidth: 110, textAlign: 'right' }}>
              {time.toFixed(2)} / {timeline.totalDuration.toFixed(2)}s
            </span>
            <span
              style={{
                padding: '4px 10px',
                background: '#2a2a2a',
                borderRadius: 4,
                minWidth: 100,
                textAlign: 'center',
              }}
            >
              {currentScene ? currentScene.id : '—'}
            </span>
          </div>
        )}
      </NarrationContext.Provider>
    );
  }

  /**
   * Scene wrapper: only render children when the specified scene id is activated
   *
   * Props:
   * id scene id (corresponding to timeline.scenes[].id)
   * children render content; can be ReactNode or (sceneTime, sceneInfo) => ReactNode
   * keepMounted defaults to false. Set true to always mount and only switch visibility (used when animation continuity is needed)
   */
  function Scene({ id, children, keepMounted = false }) {
    const { scene, sceneTime } = React.useContext(NarrationContext);
    const isActive = scene && scene.id === id;
    if (!isActive && !keepMounted) return null;
    const content = typeof children === 'function' ? children(sceneTime, scene) : children;
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? 'auto' : 'none',
          transition: keepMounted ? 'opacity 0.2s' : undefined,
        }}
      >
        {content}
      </div>
    );
  }

  /**
   * Cue wrapper: monitor cue trigger status
   *
   * Props:
   * id cue id (corresponding to timeline.scenes[].cues[].id)
   * The ramp duration (seconds) of progress 0→1 after ramp cue is triggered, default 0.5
   * children must be a function: (triggered: bool, progress: 0-1) => ReactNode
   */
  function Cue({ id, ramp = 0.5, children }) {
    const { isCueTriggered, cueProgress } = React.useContext(NarrationContext);
    const triggered = isCueTriggered(id);
    const progress = cueProgress(id, ramp);
    return children(triggered, progress);
  }

  /** Hook: Get the narration status directly in the custom component */
  function useNarration() {
    return React.useContext(NarrationContext);
  }

  /**
   * splitChunkToLines · Cut a piece of text into short lines of ≤maxLen characters according to punctuation
   *
   * For subtitle display - Bilibili standard is a single line of ≤12 words for easy reading. This function:
   * 1. First use strong punctuation (.!?\n) to cut sentences and never cut across periods.
   * 2. Use each sentence ≤ maxLen directly, otherwise slice and merge according to weak punctuation (,,;:)
   * 3. Mixed Chinese and English: English/numbers are calculated as 0.5 characters for visual width
   * 4. Hard cutting (rare: a single punctuation segment exceeds maxLen)
   *
   * @param text original text
   * @param maxLen Maximum visual length of a single line, default 13 (≈12 words + one punctuation point)
   * @returns Array of chopped subtitle lines
   */
  function visualLen(s) {
    let n = 0;
    for (const ch of s) n += /[a-zA-Z0-9 .,'":;\-]/.test(ch) ? 0.5 : 1;
    return n;
  }
  function splitChunkToLines(text, maxLen = 13) {
    const lines = [];
    const sentences = [];
    let buf = '';
    for (const ch of text) {
      buf += ch;
      if ('.!?\n'.includes(ch)) { if (buf.trim()) sentences.push(buf.trim()); buf = ''; }
    }
    if (buf.trim()) sentences.push(buf.trim());
    for (const sent of sentences) {
      if (visualLen(sent) <= maxLen) { lines.push(sent); continue; }
      const parts = [];
      let pbuf = '';
      for (const ch of sent) {
        pbuf += ch;
        if (',,;:'.includes(ch)) { parts.push(pbuf); pbuf = ''; }
      }
      if (pbuf) parts.push(pbuf);
      let merged = '';
      for (const p of parts) {
        if (visualLen(merged) + visualLen(p) <= maxLen) merged += p;
        else { if (merged) lines.push(merged); merged = p; }
      }
      if (merged) {
        if (visualLen(merged) <= maxLen) lines.push(merged);
        else {
          let hbuf = '';
          for (const ch of merged) { hbuf += ch; if (visualLen(hbuf) >= maxLen) { lines.push(hbuf); hbuf = ''; } }
          if (hbuf) lines.push(hbuf);
        }
      }
    }
    return lines.filter(l => l.trim());
  }

  /**
   * Subtitles · Bilibili style subtitle component (white halo dark ink characters, no background, displayed according to chunks time)
   *
   * Automatically take the active chunk from the current scene.chunks and press splitChunkToLines to cut it into short lines.
   * Allocate chunk time windows to each line for display in proportion to the number of words.
   *
   * Required: timeline.scenes[].chunks[] (narrate-pipeline.mjs is output by default)
   *
   * Props (can override default style):
   * bottom pixels from the bottom, default 90 (no edge)
   * fontSize font size, default 32
   * color text color, default dark ink #1a1a1a (suitable for light paper and white background)
   * haloColor halo color, default rgba(245,241,232,0.9) (suitable for #f5f1e8 base)
   * maxLen Maximum visual length of a single line, default 13
   *
   * Deep scene: Change color to '#fff' and haloColor to 'rgba(0,0,0,0.85)'.
   */
  function Subtitles({ bottom = 90, fontSize = 32, color = '#1a1a1a', haloColor = 'rgba(245,241,232,0.9)', maxLen = 13 } = {}) {
    const { time, scene } = React.useContext(NarrationContext);
    if (!scene || !scene.chunks) return null;
    const active = scene.chunks.find(c => time >= c.absoluteStart && time < c.absoluteEnd);
    if (!active) return null;
    const lines = splitChunkToLines(active.text, maxLen);
    if (lines.length === 0) return null;
    const totalLen = lines.reduce((s, l) => s + visualLen(l), 0);
    const chunkDur = active.absoluteEnd - active.absoluteStart;
    let acc = active.absoluteStart;
    let activeLine = lines[lines.length - 1];
    let lineStart = active.absoluteStart;
    for (const line of lines) {
      const dur = (visualLen(line) / totalLen) * chunkDur;
      if (time < acc + dur) { activeLine = line; lineStart = acc; break; }
      acc += dur;
    }
    const lineProg = Math.min(1, (time - lineStart) / 0.15);
    return React.createElement('div', {
      style: { position: 'absolute', left: 0, right: 0, bottom, display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 50 },
    }, React.createElement('div', {
      key: lineStart,
      style: {
        fontFamily: '"PingFang SC", "Noto Sans SC", -apple-system, sans-serif',
        fontSize, fontWeight: 600, color,
        letterSpacing: '0.04em', lineHeight: 1.2, textAlign: 'center',
        textShadow: `0 0 6px ${haloColor}, 0 0 12px ${haloColor}, 0 1px 2px rgba(255,255,255,0.5)`,
        opacity: lineProg, transform: `translateY(${(1 - lineProg) * 4}px)`,
      },
    }, activeLine));
  }

  /**
   * useSceneFade · Soft fade helper for auxiliary elements within the scene
   *
   * The second iron rule requires that hard cutting between scenes is prohibited - but auxiliary elements (data cards, reference blocks) within the scene
   * Once the cue is triggered, it will stay on by default until the scene ends. If it does not fade out, when leaving this paragraph and entering the next paragraph
   * These elements will appear suddenly or disappear instantly. This hook provides unified soft switching of [entry fade-in → hold → exit fade-out].
   *
   * Usage (multiply op into the opacity of the auxiliary element):
   * const op = useSceneFade('md-side', 0.6, 0.8); // In 0.6s, out 0.8s
   *   <Cue id="agents-md">{(t, p) => (
   *     <div style={{ opacity: op * p }}>...</div>
   *   )}</Cue>
   *
   * In this way, the data card fades in within 0.6s of the md-side segment and begins to fade out 0.8s before the end of the segment.
   * Form an overlap with the auxiliary element of the next paragraph by fading in, and there will be no hard cut in the screen.
   *
   * @param sceneId  scene id
   * @param fadeIn Number of seconds to fade in (default 0.5)
   * @param fadeOut seconds to fade out (default 0.5)
   * @returns opacity ratio between 0-1
   */
  function useSceneFade(sceneId, fadeIn = 0.5, fadeOut = 0.5) {
    const { time, timeline } = React.useContext(NarrationContext);
    if (!timeline) return 0;
    const s = timeline.scenes.find(x => x.id === sceneId);
    if (!s) return 0;
    const inT = (time - s.start) / fadeIn;
    const outT = (s.end - time) / fadeOut;
    const v = Math.min(1, Math.min(inT, outT));
    return Math.max(0, v);
  }

  return { NarrationStage, Scene, Cue, useNarration, useSceneFade, Subtitles, splitChunkToLines };
})();

if (typeof window !== 'undefined') {
  Object.assign(window, { NarrationStageLib });
}
