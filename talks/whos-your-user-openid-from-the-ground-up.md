---
tags: talks
layout: layouts/talk.html
title: Who's your user? OpenID from the ground-up
talkUrl: 'https://ndcoslo.com/talk/whos-your-user-openid-from-the-ground-up/'
speakers: [johannes-brodwall]
day: Wednesday
time: 10:20 - 11:20
venue: Room 1
---
There are few systems that can provide any value without knowing who the user is. But if you create yet another system that stores a password for your users, you are probably doing your users, yourself and your organization a huge disservice. And as organizations move from few monolithic services to distributed systems, having an integrated view of the user identity becomes essential.

Modern identity providers all implement the OpenID Connect. The effect is that authorizing with a social login provider like Google, Twitter or Github requires exactly the same steps as authorizing with an organizational identity provider like Microsoft Active Directory, an identity service run inhouse like Keycloak or a national identity provider run by the government like ID-porten in Norway.

This talk helps you understand the Oauth and OpenID Connect protocols. We will cover discovery documents, code flow, authorization and token endpoints and JSON web tokens. From this foundation, we discuss the different levels of trust we can place in different identity providers as well as how you register your application with different identity providers.

After watching this talk, you will learn the benefits of using an Open ID Connect provider, the steps necessary to sign up with the most useful providers, and how to implement and troubleshoot your integration with an identity provider. The demo application for the presentation is located at 