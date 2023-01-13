---
title: Invert and Factor
date: 2021-05-17
repo: konwook/Invert-and_factor
topics: ["Python", "Machine Learning", "Image Synthesis"]
lead: Unsupervised, interpretable image editing.
image: image_editing.png
---
Invert and Factor is an image editing web interface combining [GAN inversion](https://arxiv.org/pdf/2102.02766.pdf) with [semantic factorization](https://arxiv.org/pdf/2007.06600.pdf). Users can upload an image of a face to the interface and modify it by manipulating sliders which correspond to semantic attributes. 

Semantic factorization provides semantically meaningful directions in the latent space of a generative model in a fast and unsupervised manner. Combining this with a pretrained inversion model and [StyleGan2 generator](https://arxiv.org/pdf/1912.04958.pdf) allows for an uploaded image to be inverted, factorized, manipulated, and re-generated in real-time. 

**Links: [GitHub](https://github.com/konwook/Invert-and-Factor),
[Website](https://www.andrew.cmu.edu/course/16-726/projects/konwook/project/)**
