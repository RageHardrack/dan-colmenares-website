<template>
  <article
    class="flex flex-col justify-between p-4 space-y-4 duration-300 transform rounded-lg shadow-lg bg-primary hover:scale-105"
  >
    <header>
      <slot name="header" />
    </header>

    <section>
      <slot name="content" />
    </section>

    <footer class="flex flex-wrap items-center justify-start">
      <slot name="footer" />
    </footer>
  </article>
</template>
