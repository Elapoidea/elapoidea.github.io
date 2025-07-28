---
layout: post
title: "First Post / Small Puzzle"
date: 2025-07-23
favourite: false
publish: true
tags: [recreational]
clickbate_summary: ""
excerpt: "Find all prime numbers $p$ such that $p^2 + 11$ has 6 divisors"
---

# Problem


Find all prime numbers $p$ such that $p^2 + 11$ has 6 divisors.

---

# Solution
The solution to this problem will arise from understanding how the divisors of a number relate to the number itself. By definition, if $d | n$, then there exists some $m$ such that $n = dm$. Divisors, then, are based on prime factors. To illustrate this fact, consider the general prime factorization of $n$:

$$n = \prod_{k \in \mathbb{N}}{p_k^{e_k}}$$

For distinct prime numbers $p_k$, and exponents $e_k \in \mathbb{N} \cup \{ 0 \}$. If $n = dm$, then it must be the case that

$$d = \prod_{k \in \mathbb{N}}{p_k^{f_k}}$$

Where $0 \leq f_k \leq e_k$. It follows that the number if divisors of $n$ is the number of ways of choosing all the $f_k$. Each $f_k$ could be a natural number between and including $0$ and $e_k$, so there are $e_k + 1$ choices. That is,

$$\sigma_0(n) = \prod_{e_k}{(e_k + 1)}$$

With the condition that $\sigma_0(n) = 6$, a specific structure of $n$'s exponents becomes necessary. It must be that for some choices of the $e_k$, that the product of all the $e_k + 1$ is equal to 6. As such, suppose that 6 is written as a product of natural numbers $a_1a_2a_3 \cdots a_l$. The $a$s correspond to the $e_k$s in that $e_k = a_k - 1$ Now, consider all the different unordered ways that 6 can be written as a product of natural numbers. The two base cases are $6 = 6, 2 \cdot 3$. All other cases could be built from those two by appending any number of multiplications by $1$. Thankfully, since in those cases $a_k = 1$, $e_k = 0$, making $n$ unchanged, as one would expect. 

This yields that for $i \neq j$, either $e_i = 5$ or $e_i = 1$ and $e_j = 2$. In other words, that for two distinct primes $p_1,p_2$, 

$$ n = p_1^5\ \text{ or }\ n = p_1p_2^2$$

The next stage for solving this problem, then, is to understand when either of these patterns emerge from $p^2 + 11$. To investigate this, first attempt 

$$ p = 2 \implies \sigma_0(2^2 + 11) = \sigma_0(15) = 4$$

This fails, so $p$ must be an odd prime. Let $p = 2m + 1$. This transforms the equation into

$$ (2m + 1)^2 + 11 = 4m^2 + 4m + 12 = 2^2(m^2 + m + 3)$$

The patterns of the prime factors required for 6 divisors can then be applied. A solution would be given if $m^2 + m + 3 = 8$, so that the equation becomes equal to $2^5$, or if $m^2 + m + 3$ is itself prime. Note that the first case can never occur; $m^2 + m$ is always even, so $m^2 + m + 3$ is always odd. It is reasonable to expect that the second case does occur. However, recalling the requirement that $2m + 1$ is also prime, trouble arises. Consider both conditions in $\mod 3$

$$
\begin{matrix*}[r|rrr]
m \equiv       & 0 & 1 & 2  \\
\hline
2m+1 \equiv    & 1 & 0 & 2  \\
m^2+m+3 \equiv & 0 & 2 & 0
\end{matrix*}
$$

Observe that regardless of the choice of $m$, either $2m+1$ or $m^2 + m + 3$ must be a multiple of 3. Therefore, since both must be prime, the only possibilities are if one of them is exactly equal to 3, and other other simultaneously happens to be prime. $m^2 + m + 3$ is not equal to 3 for any $m \geq 1$, and $2m+1 = 3 \implies m = 1$. Indeed, when $m = 1$, $m^2 + m + 3 = 5$, which is prime. Thus, the only solution to the problem is for $p = 3$.  
