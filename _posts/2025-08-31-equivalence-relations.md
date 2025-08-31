---
layout: post
title: "Equivalence Relations"
date: 2025/08/31
favourite: true
publish: true
tags: []
clickbait_summary: ""
excerpt: ""
---

Greetings. This was my first week as a full-time student at UTD. So far my classes have been relatively simple - everything has just been summarizing basic prerequisite knowledge. Each of my four classes has been covering essentially the same material, only differing in the context of the subject. Of course, most of the students in these classes are already familiar with these topics. I have observed however, that if one of my classmates is having difficulty understanding anything so far, it is most often equivalence relations. This is particularly the case with my Abstract Algebra class. As such, I thought it would be worthwhile to write a post explaining equivalence relations in more detail as a resource for my fellow students. 

---

In Abstract Algebra, as the name suggests, it is often our goal to introduce another layer of abstraction beyond the structures we are all familiar with. Namely, we take common number systems, such as the natural numbers, the integers, and the rationals, and we distill them into abstract structures, such as semigroups, rings, fields, respectively. These examples are the ones that most immediately come to mind when abstract algebra is discussed. However, just as important and relevant to abstracting number systems is, loosely speaking, the abstraction of comparison. 

Each branch of mathematics can have many different notions of "equal." In regular plane geometry, we might consider two triangles to be equal if they have precisely the same side lengths. In number theory, two numbers could be considered equal if they have the same remainder modulo some other number. Two polynomials could be said to be equal if they have the same evaluation for every point in the domain. Further, different branches also have their own notion of "greater/less." Set theory uses $\subseteq / \supseteq$, number theory often uses the standard $< / >$, and so on. The general case of making comparisons is captured in the concept of relations. Evidently, relations are one of the most important and fundamental concepts to all of mathematics. Note that all of these examples are of binary relations. Relations can exist on any number of elements, but the vast majority of the time, we are interested in comparing only two elements (very often, comparing three or more can be described using binary relations). 

Let us now give more rigour to this definition of a relation. First, let us note that every relation exists with respect to some basis set. If a relation compares natural numbers, for example, it exists on the set $\mathbb{N}$. We describe a binary relation by considering the set of all ordered pairs for which the relation holds true - call this set $R$. That is, if $a$ and $b$ are related to each other, then we say that $(a,b) \in R$. As an example, consider the set $R$ for the usual relation $<$ on $\mathbb{N}$.

$$R = \{ (1,2), (1,3), (1,4), \ldots (2,3), (2,4), \ldots, \cdots \}$$

Here, $R$ consists of all ordered pairs $(a,b)$ for $a,b \in \mathbb{N}$ where $a < b$. We can determine this set $R$ from the given relation, but we could also describe a relation simply from the set $R$. That is, we could go the other way around: if the ordered pair $(a,b)$ is in $R$, then we conclude that $a$ and $b$ are related to each other, even if we don't know what that relation is. In this sense, we say that a relation and the set describing that relation are one and the same. We are now ready for the full definition of a relation:

$\textbf{Definition.}$ $R \subseteq X \times X$, where $R$ is the relation and $X$ is the basis set.

The notation $(a,b) \in R$ or $aRb$ are both used to denote that $a$ and $b$ are related by $R$. The former is used less when a particular symbol, such as < or = is used instead of a letter, since it is a little awkward to say something like $(a,b) \in \leq$.

To summarize, this definition of a relation allows us to abstract the notion of "comparison." We want to abstract certain relations we are familiar with, especially relations pertaining to some kind of "equality." There are plenty of other relations that we care about - such as ordering relations like $<$ or $\subset$ - but equivalence is often the most important. To abstract relations of equality, we identify three properties which every such relation must have: reflexivity, symmetry, and transitivity. In loose terms, these state "everything is equal to itself," "equality doesn't care about order," and "groups of things that are equal are all equal to each other," respectively. If these things hold for some relation, then we call it an equivalence relation. More precisely,

$\textbf{Definition.}$ A relation $R$ is called an equivalence relation if it is reflexive, symmetric, and transitive:
- $\textbf{Reflexive}$: $\forall a \in X, aRa$
- $\textbf{Symmetric}$: $\forall a,b \in X, aRb \implies bRa$
- $\textbf{Transitive}$ $\forall a,b,c \in X, aRb \land bRc \implies aRc$

It's worth saying again: equivalence relations are one of the most important concepts in mathematics. Many crucial concepts in a variety of fields of mathematics are equivalence relations: topology has homeomorphisms and algebra has isomorphisms, to name two.

Let's go through an example of creating and using an equivalence relation. We will construct the set of rational numbers from only the integers. That is, we will begin with the set of integers along with their operations of addition and multiplication, then extend them to include all rational numbers. Here, since the integers don't include multiplicative inverses, we can't utilize division - we may only use addition (and subtraction) and multiplication. Naturally, we will draw inspiration from fractions to extend the integers. Consider the set of all ordered pairs of integers where the second value is not 0, which we will call $Q$:

$$ Q = \mathbb{Z} \times \mathbb{Z}^* = \{ (a,b)\ |\ a,b \in \mathbb{Z}, b \neq 0 \} $$

We can treat these ordered pairs as fractions; $(a,b) \in Q$ can be corresponded with the fraction $\frac{a}{b}$. This allows us to find workarounds to our lack of division. However, though this set $Q$ includes all possible "fractions," it's not really the set of all rational numbers. When we talk of a rational number, we don't usually mean a specific fraction. We have some more abstract idea of what a particular rational number is, and we choose different manifestations of it as we require. There's a general notion of what "a half" is, for instance, but there are many different choices we could make that represent this fundamental idea of "a half". We could choose 1/2, which is the most obvious choice since it is reduced, but if we were working with several other fractions with denominators of 6, for example, we might choose 3/6 instead. 

We will say that these fractions all representing the same thing are equivalent. Normally, we would simply state that $\frac{a}{b} = \frac{c}{d}$. Unfortunately, we aren't able to use division so it won't be quite that easy. However, we can manipulate that statement to only be in terms of multiplication. This then yields the following relation:

$\textbf{Definition.}$ Let $\equiv$ be a relation on $Q$, where $(a,b) \equiv (c,d) \iff ad = bc$ for $(a,b),(c,d) \in Q$. 

It must be demonstrated that $\equiv$ is an equivalence relation. To do so, simply follow the definition of reflexivity, symmetry, and transitivity as steps in a proof. Let $(a,b) \in Q$, then $(a,b) \equiv (a,b)$ since $ab = ba$. Thus, $\equiv$ is reflexive. Similarly, for any $(a,b),(c,d) \in Q$, if $(a,b) \equiv (c,d)$ then $ad = bc$. However, this can be rearranged to $cb = da$, and thus $(c,d) \equiv (a,b)$, which satisfies the requirement for symmetry. Lastly, for $(a,b),(c,d),(e,f) \in X$, assume that $(a,b) \equiv (c,d)$ and $(c,d) \equiv (e,f)$. By definition, this means that $ad = bc$ and $cf = de$. Multiplying the second equation by $a$, we get $acf = ade$. Using the first equation, we can substitute $ad$ with $bc$ yielding $acf = bce$. Cancelling out $c$ we find $af = be$, implying that $(a,b) = (e,f)$. This proves that $\equiv$ is transitive, and completes the proof that $\equiv$ is an equivalence relation.

Using equivalence relations, we group elements into sets where all elements are equal. These sets are called equivalence classes, and are typically denoted using square brackets around a representative element. For example, the equivalence class of $(1,2)$ with respect to $\equiv$ is

$$ [(1,2)] = \{ (a,b) \in Q\ |\ (a,b) \equiv (1,2) \} = \{ (1,2), (2,4), (3,6), (4,8), \ldots \} $$

We will completely partition $Q$ into equivalence classes based on $\equiv$ to generate the set of what we now call rational numbers, $\mathbb{Q}$. 

$$ \mathbb{Q} = \{ [(a,b)]\ |\ (a,b) \in Q \} $$

This process of partitioning a set according to some equivalence relation is described by quotient groups. As such, the previous line can be replaced with the notation of quotient groups:

$$ \mathbb{Q} = Q/\equiv $$

This set $\mathbb{Q}$ is then the set of a rationals. As discussed previously, when we work with a rational number, we are usually considering it as all possible fractional forms simultaneously. The set $Q$ of all fractions under the equivalence relation $\equiv$ of fractional equivalence gives us a set that reflects this. Doing this is the beginning of the formal construction of the rational numbers. There is, of course, more work to be done to fully describe the rationals. Namely, we are missing operations on both the sets $Q$ and $\mathbb{Q}$. The operations on $Q$ will be simple to create - just as with equivalence relations, we will take inspiration from the operations on fractions to describe them on ordered pairs. It will then take some effort to extend these operations to equivalence classes within the set $\mathbb{Q}$. Further, care will need to be taken to create and demonstrate the soundness of an ordering relation. However, these tasks are not immediately relevant to my classes, so perhaps I will discuss them at a future point. I hope this article has been a helpful resource in explaining equivalence classes and has given a insightful example by applying them to create the set of rational numbers.