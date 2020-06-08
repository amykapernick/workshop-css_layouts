---
tags: talks
layout: layouts/talk.html
title: OpenMetrics, OpenTracing, OpenTelemetry - are we there yet?
talkUrl: 'https://ndcoslo.com/talk/openmetrics-opentracing-opentelemetry-are-we-there-yet/'
speakers: [alexey-zimarev]
day: Friday
time: 11:40 - 12:40
venue: Room 5
---
Microservices and distributed systems became a norm over the last couple of years. With all the benefits of having small, decoupled units of processing messages and requests, comes the pain. The pain of losing control. The pain of not knowing what exactly happened when users start to complain that some part of a large system misbehaves.

We learned about monitoring, metrics and traces - those pillars of observability. We use a bunch of tools to collect and categorise the information, but then we start drowning in the sea of logs, graphs and dashboards.

Over recent years we saw multiple products and protocols emerging and even become de-facto standards. It happened with Prometheus that formed a foundation for OpenMetrics and with OpenTracing that is now widely supported by popular libraries and by monitoring software vendors. Then, the OpenTelemetry initiative emerged, aiming to rule them all, but it's still work in progress.

It can be quite confusing for developers that want to instrument their systems and gain proper insights. During this talk, we'll go through the currently available standards and how we can instrument systems to collect logs, metrics and traces. Then, we'll try to look forward in time and see how OpenTelemetry might change all that, and what we can do to prepare for that future.

Code examples will be given using C# and .NET Core.