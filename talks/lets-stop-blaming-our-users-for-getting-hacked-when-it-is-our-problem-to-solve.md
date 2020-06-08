---
tags: talks
layout: layouts/talk.html
title: Let’s stop blaming our users for getting hacked when it is our problem to solve
talkUrl: 'https://ndcoslo.com/talk/lets-stop-blaming-our-users-for-getting-hacked-when-it-is-our-problem-to-solve/'
speakers: [scott-brady]
day: Thursday
time: 15:00 - 16:00
venue: Room 4
---
Users cannot secure your web applications through password choice alone. You cannot blame them for this; it is not their problem to solve. It is ours, as security professionals, identity professionals, and software developers.

Typical 2FA implementations such as TOTP and push notification have had some success, but they can be frustrating to use and are still vulnerable to basic phishing techniques. OWASP and NIST are now recommending FIDO2, which offers a realistic solution in the form of frictionless, possession-based authentication that has inbuilt anti-phishing techniques. But what does FIDO2 look like to a developer and how does it actually work?

In this talk, I’m going to look at:
- why common 2FA mechanisms aren’t up to scratch
- how to phish your friends using Evilginx
- spooky biometrics
- how to use WebAuthn and FIDO2 to protect your users