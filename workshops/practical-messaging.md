---
tags: workshops
layout: layouts/workshop.html
title: Practical Messaging
talkUrl: 'https://ndcoslo.com/workshop/practical-messaging/'
speakers: [ian-cooper]
day: 8 - 9 Jun
start: 09:00
end: 17:00
---
Increasingly developers are relying on distributed architectures to solve the problems of scaling their applications and their development teams. But that means they now have to consider the problem of getting the parts of their systems to talk to each other.


	

In this tutorial, we will look at messaging as the preferred solution to the problems of integrating a distributed solution, and understand the common messaging patterns. If you are unsure whether to use RPC or messaging for interoperability in your application, this workshop will give you the knowledge to make that call. If you have ever been put off moving from RPC-based solutions to messaging because of the need to learn messaging, this workshop will get you started. If you have been using messaging but want to gain a firmer understanding of the underlying patterns you can use to improve your applications, this workshop will help you master the fundamental messaging patterns.

The session includes hands-on exercises and take you from simple messaging scenarios like "Hello World" through to more complex ideas like routing, brokers, and publish-subscribe.

By the end of the workshop you should feel understand when and how to use messaging and become comfortable understanding how to implement it in your applications.

### Topics covered will include:

### Day 1: Messaging Architectures and Simple Patterns

- Integration Styles
- Why Prefer Messaging?
- Decoupled Invocation
- Work Queues
- Messaging Systems
- Pipes and Filters Architectures
- Channels, Endpoints, Routers
- Types of Messages
- Command. Events, & Documents
- Request-Reply
- Channels
- Point-to-Point
- Publish-Subscribe
- Data Type Channel
- Invalid Message Channel
- Dead Letter Channel
- Endpoints
- Polling Consumers
- Event Driven Consumers
- Competing Consumers
- Service Activator

### Day 2: Distributed Systems Advanced Patterns

- Routers
- Content Based Router
- Routing Slip
- Process Manager
- Management
- Message Store
- Control Bus
- Reliability
- CAP Theorem
- Eventual Consistency
- Guaranteed Delivery
- At Least Once
- Exactly Once
- Durability & Persistence
- Rabbit MQ Clusters
- .NET Frameworks
- Brighter
- Mass Transit
- NServiceBus
- Message Oriented Middleware
- Rabbit MQ
- Redis
- RDBMS
- Kafka
- SQS + SNS
- Kinesis
- Azure Service Bus

There will be hands on coding exercises in C#, JavaScript, and Python enabling you to implement simple and more complex messaging scenarios.

### Computer setup: 
We will use Rabbit MQ for examples. You need not have the latter installed on your machine, but if not you should have Docker installed on your machine, as the exercises provide Docker Compose files to run RMQ for use with the exercises.
