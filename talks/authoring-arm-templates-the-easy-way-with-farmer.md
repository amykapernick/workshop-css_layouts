---
tags: talks
layout: layouts/talk.html
title: Authoring ARM templates the easy way with FARMer
talkUrl: 'https://ndcoslo.com/talk/authoring-arm-templates-the-easy-way-with-farmer/'
speakers: [isaac-abraham]
day: Friday
time: 11:40 - 12:40
venue: Room 2
---
Azure Resource Manager templates have made repeatable deployments on Azure a reality. However, the true cost of these templates is the cost of authoring them, generally involving painstaking and error-prone management of JSON files.

Whilst improvements in tooling have helped ameliorate this problem, there's a need to rethink how we create ARM templates, which is where the FARMer project comes in.

In this session you'll be exposed to the following:

* Learn about the basics of ARM templates and the value proposition behind them
* Understand the cost of working with ARM templates
* See how we can use a .NET domain specific language (DSL) to rapidly author and work with ARM templates.
* See common use cases and cost-benefit of ARM templates
* Look at ways of dealing with elements such as parameterisation and variables through a programming language rather than through JSON and stringly-typed expressions
* Discuss how to deploy ARM templates through repeatable continuous integration and deployment tools