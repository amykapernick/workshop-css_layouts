---
tags: talks
layout: layouts/talk.html
title: 'MQTT: How we used Go Concurrency to overcome internet connectivity problems in Africa'
talkUrl: 'https://ndcoslo.com/talk/mqtt-how-we-used-go-concurrency-to-overcome-internet-connectivity-problems-in-africa/'
speakers: [fadhili-juma]
day: Friday
time: 11:40 - 12:40
venue: Room 3
---
This is the beautiful story of Go Concurrency with the villages of Tanzania. 2G in Africa is not going anywhere any time soon. We serve microfinance banks with limited server resources in remote areas. These banks are successful in the villages of Africa because they provide cheap loans. In Tanzania and Africa by extension, Agency Banking is the best innovation that ever happened to address financial inclusion. In this model, commercial banks contract third party retail networks as bank agents across the villages. Upon successful application, vetting and approval, these agents are authorised to offer select banking services on behalf of the banks. Bank agents are issued with POS Terminals which have the agency banking application installed. Poor internet connectivity, poor electricity connectivity(agents have to travel for long distances to charge their POS Terminals), limited server capacity that just could not allow scalability, expensive internet bundles are the problems that these banks have to overcome in order to achieve their goal of Financial Inclusion.


MQTT is a lightweight TCP publish/subscribe protocol. It’s very useful in areas with very poor internet connectivity. It also consumes low power, meaning that it’s appropriate in areas with poor electricity connectivity like most African countries where we operate. We chose Golang because its so easy to build fast, efficient and concurrent systems with small memory print. In our setup, we have POS devices across the villages serving bank customers. The banks have contracted us to built for them this infrastructure. The POS devices connect and send requests to the server via a Cluster of MQTT Brokers. We have built a Golang adapter/driver on top of the Eclipse Paho MQTT Golang client to read message requests from the Brokers and write to Apache Kafka. Apache Kafka acts as the central data plane. From Kafka, we also have Go consumers that concurrently read transaction messages and do Card PIN Validation (for Transactions that involve ATM Cards) and then execute the transactions on the banks’ core banking systems. In this talk, I will be able to talk about how we used Go Concurrency to process messages from the MQTT Broker to Apache Kafka and from Apache Kafka to/from the disparate bank core banking systems.
