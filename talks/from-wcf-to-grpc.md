---
tags: talks
layout: layouts/talk.html
title: From WCF to gRPC
talkUrl: 'https://ndcoslo.com/talk/from-wcf-to-grpc/'
speakers: [mark-rendle]
day: Thursday
time: 10:20 - 11:20
venue: Room 4
---
gRPC is a high-performance messaging protocol that is ideal for communication between microservices and other clients on internal networks. It's the ideal replacement for WCF or .NET Remoting, which are not supported on .NET Core.

In this talk, I'll explain the different models that gRPC enables, from Request/Response to full bi-directional streaming, and how they map to various WCF models. I'll show how to create gRPC services and clients using the dotnet CLI, and share best practices for using them in the real world.