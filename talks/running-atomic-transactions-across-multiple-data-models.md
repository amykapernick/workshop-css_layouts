---
tags: talks
layout: layouts/talk.html
title: Running atomic transactions across multiple data models?!?
talkUrl: 'https://ndcoslo.com/talk/running-atomic-transactions-across-multiple-data-models/'
speakers: [loris-cro]
day: Thursday
time: 15:00 - 16:00
venue: Room 7
---
What if you could atomically commit changes to your graph database, your full-text search index *and* also your event log all at once? Sounds crazy, but it’s possible!

In this session I will explore two advanced features of Redis: modules and transactions.

Modules allow you to use Redis as a “database development toolkit” by letting you leverage the Redis ecosystem (persistence, clustering, replication and transactions), while you are free to implement your new data model in C or Rust.

Through this API at Redis Labs we implemented RedisGraph, a module that implements a full-fledged Cypher-compliant graph database, and RediSearch, a full-text search engine, plus a few more developed by either us or the Redis community.

All these new data models become even more useful when used in combination with Redis Streams, an event log data type built into Redis since v5, especially when all operations are wrapped in a transaction.

Redis transactions are a bit of a scary topic for developers, especially if they’re already used to the mechanisms offered by SQL databases. In this talk I’ll explain how they work and what are their limitations, especially when using Redis in cluster mode.

Whether you plan to use Redis as a database or just as a cache, knowing these advanced features will give you an extra edge over many scalability problems.