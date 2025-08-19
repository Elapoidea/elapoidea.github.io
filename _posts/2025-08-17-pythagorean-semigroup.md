---
layout: post
title: "Pythagorean Semigroup"
date: 2025-08-17
favourite: true
publish: false
tags: []
clickbait_summary: ""
excerpt: "A semigroup can be established on Pythagorean triples in the complex plane"
---

A Pythagorean triple is a set of three natural numbers, $a,b,c \in \mathbb{N}$, such that $a^2 + b^2 = c^2$. It is well-known that Gaussian integers can be used to generate Pythagorean triples. This is generally introduced by noting that for any $m + ni$, $(m + ni)^2$ must necessarily have a square hypotenuse length. Then, by carrying out the complex multiplication, we see that $(m^2 - n^2) + (2mn)i$ has a magnitude of $m^2 + n^2$. It follows that

$$ a=m^2 - n^2,\ b=2mn,\ c=m^2 + n^2 $$

is a Pythagorean triple. This is known as Euclid's method, and, in fact, it generates every possible Pythagorean triple (within scalar multiples).

However, I have observed that Euclid's method can be expanded slightly to ultimately yield a semigroup structure.

---

Let $a + bi$ be said to be Pythagorean triple or simple Pythagorean if $\sqrt(a^2 + b^2) \in \mathbb{N}$ for $a,b \in \mathbb{Z}$. Let $P \subset \mathbb{Z}[i]$ be the set of all Pythagorean complex numbers. Additionally, $P$ will have the operation $\times$, which is the standard notion of multiplication on complex numbers. First, let us prove some properties of $\times$ from the ground up, beginning with commutativity. For $a + bi, c + di \in P$,

$$
\begin{align*}
    (a + bi) \times (c + di) &= ac - bd + i(ad + bc) = (c + di) \times (a + bi)
\end{align*}
$$

Next, associativity, now including $e + fi \in P$,

$$
\begin{align*}
    [(a + bi) \times (c + di)] \times (e + fi) &= (ac - bd + i(ad + bc)) \times (e + fi) \\
    &= ace - bde - adf - bcf + i(ade + bce + acf - bdf)  \\
    &= (a + bi) \times (ce - df + i(cf + de)) \\
    &= (a + bi) \times [(c + di) \times (e + fi)]
\end{align*}
$$

And, quite crucially, it also must be shown that $\times$ is closed within $P$. Since $a + bi, c + di \in P$, it follows that $\sqrt{a^2 + b^2} = n_1$ and $\sqrt{c^2 + d^2} = n_2$ for $n_1,n_2 \in \mathbb{N}$. It follows then,

$$\begin{align*}
    (a + bi) \times (c + di) &= (ac - bd + i(ad +bc)) \\
    &\implies \sqrt{(ac - bd)^2 + (ad + bc)^2} \\
    &= \sqrt{a^2c^2 - 2abcd + b^2d^2 + a^2d^2 + 2abcd + b^2c^2} \\
    &= \sqrt{(a^2 + b^2)(c^2 + d^2)} \\
    &= \sqrt{(a^2 + b^2)}\sqrt{(c^2 + d^2)} \\
    &= n_1n_2 \in \mathbb{N}
\end{align*}$$

Thus, $\(a + bi) \times (c + di) \in P$, so $\times$ is a closed operation in $P$. Then, note that many Pythagorean triples generated in this way are redundant. This can occur in the following three ways. For $a + bi \in P$,

1. $\pm a \pm bi \in P$
2. $b + ai \in P$
3. $ka + kbi \in P$, for all $k \in \mathbb{N} - \{0\}$ 

It would be ideal if these repetitions could be grouped into equivalence classes. To find a promising candidate, consider what qualities the functions used in the equivalence relation must have. They should ignore all signs, as to meet (1), and they should be symmetric, as to meet (2). An obvious place to start, then, is 

$$ a + bi \equiv c + di \iff |ab| = |cd| $$

However, this does not account for (3). To see what must be changed, set $c = ka, d = kb$. Then, the criterion becomes $\|ab\| = k^2\|ab\|$. If there were some squared coefficient already included, it could be set to be equal to $k^2$ so the equality would become true. That is, the following equivalence relation satisfies (3):

$$ a + bi \equiv c + di \iff \exists n,m \in \mathbb{N} - \{0\}, n^2|ab| = m^2|cd| $$

It must be verified that $\equiv$ is in fact an equivalence relation. $\equiv$ is reflexive after setting $n = m = 1$. It is symmetric since multiplication and $=$ is. For transitivity, assume that $a + bi \equiv c + di$ and $c + di \equiv e + fi$. Then, there exists $n_1,m_1,n_2,m_2 > 0$ such that

$$ n_1^2 |ab| = m_1^2 |cd| \land n_2^2 |cd| = m_2^2 |ef| $$

The, it follows that $\|cd\| = \frac{n_1^2}{m_1^2} \|ab\|$ so that $\frac{n_1^2n_2^2}{m_1^2} \|ab\| = m_2^2 \|ef\|$, or equivalently,

$$ n_1^2n_2^2|ab| = m_1^2m_2^2|ef| $$

After setting $n_3 = n_1n_2$ and $m_3 = m_1m_2$, we conclude that $a + bi \equiv e + fi$. Thus, $\equiv$ is an equivalence relation. It is worth observing that if $a + bi \equiv c + di$, then $c = qa$ and $d = qb$ for some $q \in \mathbb{Q}$. This can be seen by 