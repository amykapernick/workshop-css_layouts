---
tags: talks
layout: layouts/talk.html
title: Running 30 year old software as a cloud native SaaS solution with Docker and Kubernetes on Azure
talkUrl: 'https://ndcoslo.com/talk/running-30-year-old-software-as-a-cloud-native-saas-solution-with-docker-and-kubernetes-on-azure/'
speakers: [sander-aernouts,roy-cornelissen]
day: Thursday
time: 13:40 - 14:40
venue: Room 2
---
Docker makes it easy to containerize existing applications and run them on arbitrary machines. 

Kubernetes takes it to the next level by offering fast and easy container orchestration at runtime. Containerization has been common practice in the Linux world for years, but lately, developers on the Microsoft stack have jumped on the Docker bandwagon too. That is all nice and dandy for .NET Core applications that are easily deployable in Docker on Linux, but what if you have 30-year-old Win32 and .NET software that has to be cloudified and run as a Software as a Service offering on-demand?


In this presentation, we’ll share the journey of our team that led us from hope to desperation to glory in turning an on-premise Client-Server application into a full-blown cloud-native service, with some ancient pieces still in there. It surely can be done!