---
title: md or HTML, this is a stupid question
gap: 0.5
---

## opening
Two days ago, Thariq from the [[cue:thariq]]Claude Code team posted an explosive article.
The title is just one sentence, HTML is the new markdown.
He said that he almost no longer writes md files and lets AI generate HTML for him.
With 5 million views, there was an immediate quarrel on X.
One group is the md party, [[cue:two-camps]] believes that md is the source code of the AI ​​era.
The other group feels that Thariq is right, HTML is the ultimate answer.

## md-side
The evidence of the md party is actually quite strong.
Look at the AGENTS.md released by OpenAI last year. [[cue:agents-md]] More than 60,000 projects use it. AWS, Anthropic, Google, Microsoft, OpenAI, and half of the AI ​​industry have donated it to the Linux Foundation as an open standard.
Karpathy's llm-wiki, the main body is three layers of markdown, a single CLAUDE.md file, 50,000 stars.
Cloudflare has actually measured a set of data. [[cue:token-saving]] The same blog has 16,000 tokens in HTML, but only 3,000 tokens in MD.
Save 80%.
GitHub officials also said that documents are no longer describing code, [[cue:doc-is-code]] documents are code.

## html-side
But the HTML party is not wrong either.
I agree with several arguments in Thariq's article.
The first is spatial information. [[cue:spatial]]diff, call graph, and architecture diagram all have spatial dimensions. md compresses them into one line of text, and HTML can compare them left and right, so the understanding efficiency is not of the same order of magnitude.
The second is dynamic experience. [[cue:dynamic]] When making product prototypes, it is useless to describe the color and easing curve of the button when you press it. HTML can let you see it directly.
The third is structured reading. [[cue:structured]] Foldable chapters, tab code blocks, sidebar glossaries, and linear stacking of the same words are two different things.
Anthropic's current Live Artifacts and HTML have been upgraded from static products to interactive dashboards that can pull real-time data.

## the-real-question
After reading this, I want to say, [[cue:reveal]] These two are arguing over a stupid issue.
Both sides win.
But it’s a different issue that wins.
md The party answered, [[cue:question-md]]What do we use to write.
HTML The party answered, [[cue:question-HTML]]What do we show to others?
These are two questions.
How could anyone replace whom?

## the-split
I think the real problem is this.
The relationship between md and HTML is not a substitution, but [[cue:split]] is a division of labor relationship.
In the past, when you wrote md, you also read md yourself.
At that time there was a compromise, so md won.
But after the emergence of AI, [[cue:ai-changes]] had a new situation for the first time.
Production costs can be absorbed by AI.
The price of HTML is too heavy, AI will bear it for you.
You are only responsible for consumption.
The original demand for compromise has been split into extreme optimalities at both ends.
The production side needs to be light, fast, and token efficient, [[cue:md-side-win]] that is md.
The consumer side needs to be rich, visual, and easy to share, [[cue:HTML-side-win]] that is HTML.
Climb to the top at both ends.
No one needs that middle ground anymore.

## activity-proof
The cleanest living specimen is Thariq himself.
In March, he published a Skills guide, [[cue:thariq-march]] emphasizing that the core is markdown.
In May he announced that HTML is the new markdown.
The same person, [[cue:same-person]] reaches the top at both ends without fighting each other.
Same goes for the duo of Karpathy and Lex Fridman.
The core is a markdown wiki, and the [[cue:karpathy-lex]] shell is dynamic HTML.
Lex didn’t replace Karpathy, he added a consumer layer on top of Karpathy.

## closing
So next time you want to argue about this, [[cue:final]] ask yourself this first question.
What you are facing now is "writing" or "reading".
To write, [[cue:md-final]] uses md.
See, [[cue:HTML-final]] uses HTML.
The tool handles switching for you.
You can let go of your stance.
