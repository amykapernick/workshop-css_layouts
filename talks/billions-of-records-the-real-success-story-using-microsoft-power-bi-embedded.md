---
tags: talks
layout: layouts/talk.html
title: 'Billions of records: the real success story using Microsoft Power BI Embedded'
talkUrl: 'https://ndcoslo.com/talk/billions-of-records-the-real-success-story-using-microsoft-power-bi-embedded/'
speakers: [irina-dragunova]
day: Thursday
time: 11:40 - 12:40
venue: Room 6
---
Having billions of rows in the database and several slow data sources, requires special considerations when processing and presenting the data. So how do you solve the performance challenge? Do you build a solid caching strategy and design a complex web solution? Alternatively, you can bring the data as close to the end user as possible and keep the web application simple.

In this session, I will go through our architectural approach to processing and presenting large data sets in a web application to the end customers. I will present to you the whole data flow: how we process the data using Azure Databricks, build in-memory model in Azure Analysis Services, and visualize the data in web application using Microsoft Power BI Embedded. This approach makes it possible to filter and aggregate the data very efficiently, thus helping to provide a rich user experience to the customers.
We will also go through authentication flow and security of our application, discuss our challenges and lessons learned.

After this session, you will get a clear understanding of one possible approach to process and visualize big data. It can help you to develop your own application, and also to avoid some pitfalls.