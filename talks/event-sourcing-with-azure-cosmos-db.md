---
tags: talks
layout: layouts/talk.html
title: Event Sourcing with Azure Cosmos DB
talkUrl: 'https://ndcoslo.com/talk/event-sourcing-with-azure-cosmos-db/'
speakers: [sander-molenkamp]
day: Friday
time: 16:20 - 17:20
venue: Room 6
---
Event Sourcing is nothing more than storing current state as a series of events and rebuilding system state by replaying that series of events. Cosmos DB, the multi-model globally distributed database service on Azure is a great fit for implementing event sourced systems.

In this demo-heavy session I'll show you how to build an event store on Cosmos DB starting from scratch. Topics include bulk operations using stored procedures, partitioning strategies, and how to subscribe to new events using the Cosmos DB Change Feed. All while being globally-distributed, and without deploying or managing any servers.