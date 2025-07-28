---
layout: post
title: "Puzzle Solution"
date: 2025-07-24
favourite: true
publish: true
tags: [recreational]
clickbait_summary: ""
excerpt: "Find the prime factors of $111335555331101_6$"
---

# Problem

By hand, find the prime factors of  $111335555331101_6$

---

# Solution

Evidently, this number is unreasonably large to nicely find its prime factors. As such, there must be some trick embedded into the problem which once discovered makes the task simple. In problems such as this, that trick often relies on some pattern within the digits or in the base the number is in. At a glance, the number is nearly symmetric. If not for the $0$ in the $10_6$s place, it would be palindromic, which would have a good chance at revealing more information about the problem.

The crucial observation needed to elegantly solve this problem is that when digits are grouped in pairs, the number is, in fact, palindromic.

$$01-11-33-55-55-33-11-01_6$$

A common technique when working with bases can be attempted. From this, another pattern must be noticed. This next step is made more clear when the pairs of digits are represented in base 10 instead of base 6.

$$1:7:21:35:35:21:7:1_6$$

These values form the 8th row of Pascal's triangle. Recalling the polynomial form of a number in base $b$,

$$b^7 + 7b^6 + 21b^5 + 35b^4 + 35b^3 + 21b^2 +7b + 1$$

Since this polynomial has the coefficients of a row of Pascal's triangle, it can be compressed to a binomial expansion.

$$b^7 + 7b^6 + 21b^5 + 35b^4 + 35b^3 + 21b^2 +7b + 1 = (b+1)^7$$

Since $b = 6$, this yields that

$111335555331101_6 = 37^7$

Thus, since $37$ is prime, $37^7$ is the solution to the problem.

---

# Note

I designed this problem to stump undergraduate students. I wanted a problem that had a seemingly elegant solution, but which demanded observations that would be difficult to make.