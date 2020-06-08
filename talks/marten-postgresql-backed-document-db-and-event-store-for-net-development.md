---
tags: talks
layout: layouts/talk.html
title: 'Marten: Postgresql backed Document Db and Event Store for .Net Development'
talkUrl: 'https://ndcoslo.com/talk/marten-postgresql-backed-document-db-and-event-store-for-net-development/'
speakers: [jeremy-d-miller]
day: Friday
time: 16:20 - 17:20
venue: Room 9
---
Tired of the impedance mismatch between the model your application code wants for behavior and logic and the potentially very different data model that your relational database wants for storage? Scared of NoSQL databases because you’ve always heard that they aren’t transactional, lose your data under load, and lack all the production support tools you need? Fortunately, there’s now the Marten library that allows .Net developers to work with the very robust Postgresql database as a fully ACID-compliant, document database and event store.

In this talk, we’ll look at how Marten’s programming model allows developers to be more productive compared to using a more typical ORM tool against a relational database. We’ll also take a look at the integrated event store functionality and how Marten makes event sourcing easier and more manageable in many ways than previous tools.