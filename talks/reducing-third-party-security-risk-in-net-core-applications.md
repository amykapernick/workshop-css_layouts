---
tags: talks
layout: layouts/talk.html
title: Reducing Third-Party Security Risk in .NET Core Applications
talkUrl: 'https://ndcoslo.com/talk/reducing-third-party-security-risk-in-net-core-applications/'
speakers: [niels-tanis]
day: Thursday
time: 16:20 - 17:20
venue: Room 4
---
When developing a .NET Core application a large portion of the application itself consists of external 3rd party dependencies which can be fetched from a package repository like Microsoft's NuGet.
How do those opensource projects/dependencies deal with security problems? We do need to keep an eye on security updates done in order to not introduce any unnecessary security risks into our application but will that be sufficient?

Finding and resolving security issues can take a lot of time and what about a compromised package in which a contributor has added functionality which has got malicious intent?
There is definitely a away we can improve the above and do a better job! In this session we'll take a look at e.g. compartmentalization and API review/reduction of those dependencies in order to reduce the risk profile of our developed .NET Core Applications.