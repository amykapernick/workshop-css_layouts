---
tags: talks
layout: layouts/talk.html
title: Anatomy of ASP.NET Core Requests
talkUrl: 'https://ndcoslo.com/talk/anatomy-of-asp-net-core-requests/'
speakers: [steve-gordon]
day: Wednesday
time: 16:20 - 17:20
venue: Room 2
---
Have you ever wondered how a browser/client request actually results in a response from ASP.NET Core? Have you ever been constrained by the default behaviour of ASP.NET Core and wanted to change how it works? If so, then this talk is for you.

In this session, Steve will explore the lifecycle of incoming requests in ASP.NET Core, touring through the layers from Kestrel, to hosting, to middleware and then on into MVC itself. You'll see how the pieces all fit together and learn about the places where you can inject your own implementations to customise, augment and override the ASP.NET Core defaults.

Steve will show the hidden extension points that can take you to power-user levels when building your ASP.NET Core applications, such as applying custom conventions, filters and model binding behaviour. You'll leave this talk with ideas for improving your ASP.NET Core applications and reducing code by refactoring cross-cutting concerns.

Don't fight the framework, customise it!