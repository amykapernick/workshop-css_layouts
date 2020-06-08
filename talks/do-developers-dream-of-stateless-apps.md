---
tags: talks
layout: layouts/talk.html
title: Do Developers Dream of Stateless Apps?
talkUrl: 'https://ndcoslo.com/talk/do-developers-dream-of-stateless-apps/'
speakers: [łukasz-gebel]
day: Thursday
time: 11:40 - 12:40
venue: Room 3
---
In Blade Runner by P. K. Dick, trained hunters had to retire problematic Androids. We, Developers, are similar to those hunters. Our job is to solve problems. State brings complexity and troubles. Getting rid of it is not always possible. How to make our stateful distributed system highly available?

It’s a story based on the experience that I gained while working on stateful distributed systems deployed in cloud environments (Azure, AWS). It includes what went well and what is more important, what went wrong. I’ll start with defining state and explain differences between stateful and stateless apps (it’s not so obvious!).

Then I’ll discuss the strategies that we can use in cloud environments to ensure high availability our or systems. We’ll go through scaling, multi-region deployments, and why sometimes we need to care where our machines are located.

In the third part of this talk, I’ll focus on tools that help us to deal with the state and their high availability features provided by cloud. I’ll show you the live demo of Azure SQL failover and compare it to Cosmos DB. I’ll also discuss Storage and Queues. Understanding the limitations of tools we use is as important as being aware of what happens under the hood. It is needed to build reliable architecture.

I’ll sum up the talk by explaining what is SLA and how to calculate it for your system (yes, there will be some math). So, are we problem hunters or we are haunted by problems? Join my presentation, make your system highly available and dream peaceful dreams.