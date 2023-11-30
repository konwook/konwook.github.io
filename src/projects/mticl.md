---
title: Multi-task ICL
date: 2023-09-01
repo: konwook/
topics: ["Python", "Reinforcement Learning", "Machine Learning", "Research"]
lead: Learning shared safety constraints from multi-task demos.
image: icl_ffig.svg
---

Regardless of the particular task we want them to perform in an environment, there are often shared safety constraints we want our agents to respect. Manually specifying such a constraint can be both time-consuming and error-prone. We show how to learn constraints from expert demonstrations of safe task completion by extending inverse reinforcement learning (IRL) techniques to the space of constraints. Intuitively, we learn constraints that forbid highly rewarding behavior that the expert could have taken but chose not to.

Unfortunately, the constraint learning problem is rather ill-posed and typically leads to overly conservative constraints that forbid all behavior that the expert did not take. We counter this by leveraging diverse demonstrations that naturally occur in multi-task settings to learn a tighter set of constraints. We validate our method with simulation experiments on high-dimensional continuous control tasks.

**Links: [Paper](https://arxiv.org/abs/2309.00711),
[Website](https://gokul.dev/icl/),
[Github](https://github.com/konwook/mticl)**
