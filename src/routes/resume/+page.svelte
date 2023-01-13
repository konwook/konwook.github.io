<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Konwoo Kim – Resume"
  description="Software engineering and research experience. Interested in machine learning, computer graphics, and systems."
/>

<section class="layout-md py-8">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Carnegie Mellon University</h3>
      <div class="text-neutral-500 mb-0.5">2019 — Current</div>
    </div>
    <p class="byline">B.S. in Computer Science | 4.0 GPA</p>
    <p class="byline">Concentration in Machine Learning</p>
    <p class="byline">Concentration in Computer Graphics</p>
  </div>

  <h4 class="font-medium mt-4 mb-1">Teaching:</h4>
  <ul>
    <li>
      TA for 15-251 (Great Ideas in Theoretical Computer Science), Fall 2020
    </li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Graduate-level technical coursework:</h4>
  <ul>
    <li>Convex Optimization (10-725)</li>
    <li>Deep Learning for Robotics (16-884)</li>
    <li>Learning-Based Image Synthesis (16-726)</li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Undergraduate technical coursework:</h4>
  <ul>
    <li>Compiler Design (15-411)</li>
    <li>Parallel Computer Architecture and Programming (15-418)</li>
    <li>Physics-Based Rendering (15-468)</li>
    <li>Computer Graphics (15-462)</li>
    <li>Deep Learning (11-485)</li>
    <li>Deep Reinforcement Learning and Control (10-403)</li>
    <li>Machine Learning with Large Datasets (10-405)</li>
    <li>Real Analysis (21-355)</li>
  </ul>
</section>

<section class="layout-md py-8">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Quantitative Research Intern"
    company="Jump Trading"
    url="https://jumptrading.com/"
    dates="June 2022 – August 2022"
    location="Chicago, IL"
  >
    <li>
      Conducted alpha research for cryptocurrency pairs and crude oil futures.
      Developed and optimized modeling pipeline for US equities.
    </li>
  </Workplace>

  <Workplace
    title="Software Engineering Intern"
    company="Meta AI"
    url="https://ai.facebook.com/"
    dates="May 2021 – August 2021"
    location="Remote"
  >
    <li>
      Added internal support for video instance segmentation within <a
        class="link"
        href="https://github.com/facebookresearch/detectron2">Detectron2</a
      >.
    </li>

    <li>
      Integrated <a class="link" href="https://arxiv.org/pdf/1905.04804v4.pdf"
        >YTVIS</a
      >
      dataset, PyTorch implementations of top-down and bottom-up approaches, and
      clustering-based
      <a class="link" href="https://arxiv.org/pdf/2003.08429.pdf"
        >inference pipeline</a
      >. Reproduced papers' results and performed additional analysis on
      optimizing training.
    </li>
  </Workplace>

  <Workplace
    title="Software Engineering Intern"
    company="Meta"
    url="https://www.meta.com/"
    dates="May 2020 – August 2020"
    location="Remote"
  >
    <li>
      Developed debugging tool to visualize candidates and scores across
      Messenger ranking architectures using Hack and SQL.
    </li>
    <li>
      Added logging for ranking information, implemented pipeline for novel
      ranking features, and designed debugging tool UI.
    </li>
  </Workplace>
</section>

<section class="layout-md py-8">
  <h2 class="heading2">Awards and Honors</h2>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Computer Science:</h3>
    <ul>
      <li>
        <b>ICPC East Central North America Contest:</b> 11th (2019)
      </li>
      <li>
        <b>USA Computing Olympiad:</b> Platinum Division (2019)
      </li>
      <li>
        <b>Google Code Jam:</b> Round 2 (2018)
      </li>
      <li><b>Facebook Hacker Cup:</b> Round 2 (2019)</li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Mathematics:</h3>
    <ul>
      <li>
        <b>William Lowell Putnam Competition:</b> Top 200 (2019)
      </li>
      <li>
        <b>USA Math Olympiad:</b> Top 200 (2018)
      </li>
      <li>
        <b>USA Junior Math Olympiad:</b> Top 200 (2016)
      </li>
    </ul>
  </div>
</section>

<style lang="postcss">
  b {
    @apply font-medium;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>
