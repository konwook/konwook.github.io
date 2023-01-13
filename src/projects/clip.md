---
title: How to Adapt CLIP
date: 2021-12-15
repo: konwook/ 
topics: ["Python", "Machine Learning", "Research"]
lead: Efficient fine-tuning of large-scale pretrained models.
image: clip.png
---
Pre-training large-scale vision and language models (e.g. [CLIP](https://openai.com/blog/clip/)) has shown promising results in representation and transfer learning. This research project (advised by Prof. Deepak Pathak, Dr. Igor Mordatch, and Dr. Michael Laskin) investigates the question of how to efficiently adapt these models to downstream tasks. We analyze several fine-tuning methods for a diverse set of image classification tasks across two spectra — the amount and similarity of the downstream and pretraining data.

Our primary contribution is to show that just tuning LayerNorm paramters is a surprisingly effective baseline across the board. We further demonstrate a simple strategy for combining LayerNorm-tuning with general fine-tuning methods to improve their performance and benchmark them on few-shot adaptation and distribution shift tasks. Finally, we provide an empirical analysis and recommend general recipes for efficient transfer learning of CLIP-like models.

**Links: [Paper](assets/pdf/clip.pdf), 
[Poster](assets/pdf/clip_poster.pdf)**
