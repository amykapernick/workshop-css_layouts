---
tags: talks
layout: layouts/talk.html
title: Event-driven computing with Kubernetes
talkUrl: 'https://ndcoslo.com/talk/event-driven-computing-with-kubernetes/'
speakers: [jakob-ehn]
day: Wednesday
time: 11:40 - 12:40
venue: Room 5
---
Event-driven architectures is very common in a microservices world, enabling flexible and decoupled designs for the applications that we build.

But eventing is also very useful when it comes to our infrastructure and CI/CD platforms. Being able to chain together containers in simple or complex workflows, triggered by different events coming from inside or outside the cluster, opens up a world of possibilites.

In this session we will look at two event-based platforms for Kubernetes:

* Brigade brings event-based scripting to Kubernetes, making it easy to chain together containers and run them serially or in parallell, triggered by events such as GitHub events, Docker pushes or any other trigger. We'll look at how we can automate deployments to Kubernetes when a Pull Request is created, and removes it once the PR is completed

* KEDA (Kubernetes-based Event Driven Autoscaling) enables autoscaling for event driven Kubernetes workloads. KEDA supports multiple event sources, such as Kafka, RabbitMQ and Azure Service Bus, and natively integrates with Azure Function tooling. Scaling out the number of pods based on the number of messages in our message queue is a perfect example of the power that KEDA brings, which will be show during this session