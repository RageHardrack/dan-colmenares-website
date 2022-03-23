<script setup lang="ts">
import Logo from "./Logo.vue";
import { ROUTES_LINKS } from "../../constantes";
</script>

<template>
  <header class="flex items-center h-24 bg-primary">
    <nav class="container flex items-center justify-between py-2">
      <router-link to="/">
        <Logo />
      </router-link>

      <ul
        class="flex items-center justify-center space-x-4 font-bold text-bone"
      >
        <li v-for="{ title, path } in ROUTES_LINKS" :key="title">
          <router-link :to="path">
            {{ title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
