---
title: C0 Compiler
date: 2021-12-14
repo: 15-411-f21/Spider-Man
topics: ["Rust", "Systems"]
lead: C0 to x86 compiler.
image: compiler.png
---
This is a compiler implemented in Rust for [C0](https://bitbucket.org/c0-lang/docs/wiki/Home), a safe subset of C, to x86 assembly. It features 
lexing and parsing, type-checking, code generation and emission, register allocation and coalescing, and several peephole optimizations.  

Additionally, it supports a threading runtime system inspired by [Cilk](https://www.opencilk.org/) and general task parallelism with spawn/sync calls
and automated work stealing.

**Links: [Writeup](assets/pdf/compiler.pdf)**
