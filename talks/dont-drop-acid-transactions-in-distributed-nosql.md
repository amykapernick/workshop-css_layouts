---
tags: talks
layout: layouts/talk.html
title: Don’t Drop ACID - Transactions in Distributed NoSQL
talkUrl: 'https://ndcoslo.com/talk/dont-drop-acid-transactions-in-distributed-nosql/'
speakers: [matthew-groves]
day: Thursday
time: 16:20 - 17:20
venue: Room 6
---
NoSQL document databases provide unique capabilities of scaling, flexibility, and performance for a wide variety of use cases. 

However, many developers from relational backgrounds are understandably nervous (for a variety of reasons) about using NoSQL in their next project. This session will address one of those reasons: ACID transactions (or lack thereof). This session will start with some background about why NoSQL databases didn’t (initially) have full ACID capabilities. Next, we’ll look at why lack of ACID may not be a big deal and some of the data modeling and querying techniques to use instead. Finally, we’ll look at the more recent trend of document databases adding distributed multi-document ACID capabilities and show a live demo of a NoSQL transaction. You’ll leave this session with a better understanding of how ACID works and when to use it.