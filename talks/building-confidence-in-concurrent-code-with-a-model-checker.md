---
tags: talks
layout: layouts/talk.html
title: Building confidence in concurrent code with a model checker
talkUrl: 'https://ndcoslo.com/talk/building-confidence-in-concurrent-code-with-a-model-checker/'
speakers: [scott-wlaschin]
day: Wednesday
time: 16:20 - 17:20
venue: Room 3
---
As developers, we have a number of well-known practices to ensure code quality, such as unit tests, code review and so on. But these practices often break down when we need to design concurrent systems. Often, there can be subtle and serious bugs that are not found with conventional practices.

But there’s another approach that you can use -- model-checking -- that can detect potential concurrency errors at design time, and so dramatically increase your confidence in your code. In this talk, I’ll demonstrate and demystify TLA+, a powerful design and model-checking system. We’ll see how it can check your concurrent designs for errors, saving you time up front and frustration later!