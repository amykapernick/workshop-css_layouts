---
tags: talks
layout: layouts/talk.html
title: Designing and rewriting asynchronous tasks from scratch
talkUrl: 'https://ndcoslo.com/talk/designing-and-rewriting-asynchronous-tasks-from-scratch/'
speakers: [kevin-gosse]
day: Wednesday
time: 17:40 - 18:40
venue: Room 1
---
You probably heard a lot about asynchronicity, the TPL, async/await... You may know by heart the ever-growing list of best-practices that you follow to the letter for fear that everything breaks down. But have you ever wondered why the API has been designed this way? What is hidden behind this complexity?

In this talk, we will try to put ourselves in the shoes of the Microsoft team years ago: starting from nothing and building an asynchronous task library from the ground up.

We'll start from the very definition of futures and promises, then work our way up and implement continuations, concurrency, scheduling, inlining, execution context, and support for the async/await keywords. By going through this process, you'll uncover the challenges lying behind the design of such an API, and get a finer understanding of the design decisions in the Microsoft implementation.