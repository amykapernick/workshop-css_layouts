---
tags: talks
layout: layouts/talk.html
title: 'Beyond LINQ: Using Expression Trees in .NET'
talkUrl: 'https://ndcoslo.com/talk/beyond-linq-using-expression-trees-in-net/'
speakers: [maxim-arshinov]
day: Thursday
time: 15:00 - 16:00
venue: Room 6
---
You've probably worked with LINQ or lambda expressions in .NET, but you might not realize that when you do, you're actually using a really powerful feature of the .NET platform called expression trees. And once you learn a bit about how this technology works 'under the hood', you'll discover you can use expression trees to do all sorts of advanced things - from metaprogramming and code generation, to automating tests and even transpiling .NET code to JavaScript.

In this talk, Max will show you how he and his team started out using expression trees to avoid duplicating code in LINQ statements and ended up with a solution for automatic scaffolding of all sorts of data grids (including complex filters and sortings) and web forms (including dropdowns, dependent fields, and input validation) from just C# DTOs, to React and Angular components with integration tests attached. This approach helps his team deliver new features to clients faster and write less code than before.

He'll explain how to use the expression tree API directly, and talk you through the pitfalls and problems they encountered and how to work around them. As a result, you will learn how to start writing significantly less boring boilerplate code and increase your efficiency in daily tasks. As a bonus, you’ll get an idea of how to dramatically improve Reflection performance without using ‘black art’ like Reflection.Emit - and you’ll even learn how to write a library like AutoMapper, Simple Injector, LinqKit or Moq yourself, as all of these benefit from using expression trees internally.