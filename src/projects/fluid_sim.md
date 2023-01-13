---
title: Position Based Fluids
date: 2022-12-07
repo: ldcWV/FluidSimulation
topics: ["C++", "CUDA", "Rendering", "OpenGL"]
lead: Parallel fluid simulation in CUDA.
image: fluid_sim.png
---

This is a sequential and parallel [position-based fluid simulator](https://dl.acm.org/doi/10.1145/2461912.2461984)
implemented in C++ and CUDA with a custom renderer in OpenGL. The parallel simulator supports data parallelism,
efficient neighbor computation using parallel counting sort, and multi-threaded rendering. It achieves
speedups of up to 30x over the sequential simulator and supports real-time simulation and rendering up to 100,000 particles.

**Links: [GitHub](https://github.com/ldcWV/FluidSimulation),
[Writeup](assets/pdf/fluid_sim.pdf)**
