---
tags: talks
layout: layouts/talk.html
title: Lightning Talks
talkUrl: 'https://ndcoslo.com/talk/lightning-talks-6/'
speakers: [andreas-mosti,marius-røed,lars-jakobsen,dmitry-konovalov,helge-grenager-solheim]
day: Wednesday
time: 15:00 - 16:00
venue: Room 6
---
Lightning talks (approx 10-15 minutes each)




	I will give some considerations when creating a large-scale low-latency system, designed to give users across the globe quick and snappy apps and applications. This will be based on a system we have developed within Microsoft which is used by SharePoint, OneDrive, semantic search and several other scenarios.


----------------------------------------



	

	When users make millions request to your site every single performance bottleneck could present a serious problem. Every millisecond becomes critical for your service stability. Where the line between premature optimization and neccessary adjustments should be drawn?
This session is intended to share and discuss common mistakes and antipatterns causing performance degradation. There will be given examples on how to achieve better performance both from WebApi prospective (.Net) and the database layer. We will also discuss how to test and estimate your service performance with k6 before going live to production. The talk is intended for backend developers primarily and is based on work done for yr.no - norwegian weather forecast service used worldwide with more than 10 millions unique users per week.


----------------------------------------




	

	Performant services are increasingly important, and every change to your service can affect that performance. So, what if you could make load tests part of your release pipeline?
In this talk we'll look at K6, an open source command line load testing tool, and show how you can check if your APIs can handle a massive burst of users in a short period of time. We'll also look at how you can add load tests to your Azure Devops Pipeline and make the build fail if the APIs don't perform.


----------------------------------------





The importance of having a mobile friendly web page is well established, but most mobile sites are still not optimized to perfection. The result is suffering conversion rates and loss of revenue. User expectations are growing rapidly, and it’s critical to stay ahead of the increasing demand. Your users are not only comparing your user experience against your competitors, but the “best in class” organizations. Mobile speed has become one of the most important factors in mobile web experience in recent years, and as a web developer you are responsible to make sure your web sites are performing in line with users' expectations.


Nobody cares how fast your web site is, just how fast it feels. Decreasing javascript bundles, optimizing images and fonts are some common techniques for improving load time, but will not solve the problem alone. This talk will give developers an introduction on how to combine actual page speed optimization with speed perception. We will explore how users are perceiving time and speed, and how can we utilize this when working with performance. Which speed indicators and measurements should developers focus on, and which techniques can be used to not only optimize the actual speed, but to increase the perception of speed, and then create the illusion of a fast website. Some keywords: Early completion, preemptive start, optimistic UI, precognition and visual illusions.


After this talk you will know what to focus on when working with mobile web performance, and know which techniques to use both thinking of actual and perceived speed.


---------------------------





The hype around serverless architecture have been buzzing for the last 3 years. It comes as a result of the rising popularity of cloud computing, where providers like Google, Microsoft and Amazon have raised the abstraction level when deploying software. Now, Function as a Service (FaaS), provider needs one thing: your code, in a bare-bones fashion, no binaries needed.


The main criticism the cloud providers get is portability and fear of "lock-in" in FaaS solutions. A function written for Amazon Lambda looks nothing like one written for Azure Functions, and Google Cloud Functions is different again. Some languages are not available at your provider of choice, making the threshold of getting started even higher. If you haven't moved to the cloud at all, running some kind of serverless solutions has also proven hard.


OpenFaaS is an open source serverless platform that leverages container technology to make sure that your functions can run anywhere: Your laptop, your on-premise hardware, your cluster in the cloud, your spare Raspberry Pis or a mix of all of it. OpenFaaS can also manage your microservices that haven't been split up into functions yet.


This talk will give a brief introduction to the key-features of OpenFaaS, and show how you're company can leverage serverless and FaaS, even if you haven't moved to the cloud yet.
