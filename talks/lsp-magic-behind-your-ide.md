---
tags: talks
layout: layouts/talk.html
title: LSP - magic behind your IDE
talkUrl: 'https://ndcoslo.com/talk/lsp-magic-behind-your-ide/'
speakers: [krzysztof-cieślak]
day: Thursday
time: 09:00 - 10:00
venue: Room 6
---
Language Server Protocol (LSP) is a project that has changed how editor tooling is built over the past two years. It is a specification of the communication between a client (editor) and a server that provides language tooling capabilities such as autocomplete, tooltips, etc. It reduces the m-times-n problem to the m-plus-n problem —similar to how Virtual Machines solve the same problem for deploying code to many platforms.

In the talk, I'll give general overview of the protocol, show some of its capabilities and explain why it is so important. I'll also dive into some sample implementations, showing you how you can leverage LSP to create rich editing experience for many different editors.