<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "Position Based Fluids",
      href: "/projects#fluid_sim",
      desc: "parallel fluid simulation in CUDA",
    },
    {
      name: "How to Adapt CLIP",
      href: "/projects#clip",
      desc: "efficient fine-tuning of large-scale pretrained models",
    },
    {
      name: "Invert and Factor",
      href: "/projects#image_editing",
      desc: "unsupervised, interpretable image editing",
    },
  ];
</script>

<Seo
  title="Konwoo Kim"
  description="Software engineering and research experience. Interested in machine learning, computer graphics, and systems."
/>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I'm a computer science student at Carnegie Mellon University pursuing a
      senior thesis on multi-task constraint learning.
    </p>
    <p>
      My research interests lie at the intersection of imitation learning and
      game theory. I'm also broadly interested in topics adjacent to rendering,
      physical simulation, and designing and optimizing low-level systems.
    </p>
  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Notable projects:</p>

    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div>
          <p>{project.desc}</p>
        </div>
      </a>
    {/each}
  </div>

  <div class="space-y-5">
    <p>
      Previously, I've worked at <a class="link" href="https://jumptrading.com/"
        >Jump Trading</a
      >, <a class="link" href="https://ai.facebook.com/">Meta AI</a>, and
      <a class="link" href="https://www.meta.com/">Meta</a>. At Carnegie Mellon,
      I've been a teaching assistant for
      <a class="link" href="https://www.cs.cmu.edu/~15251/">15-251</a>, an
      introductory course on theoretical computer science.
    </p>

    <p>In my free time, I enjoy playing chess, poker, and going bouldering.</p>
  </div>
</div>

<style lang="postcss">
  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }
</style>
