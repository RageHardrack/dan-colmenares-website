<script setup lang="ts">
import SideNav from "./components/SideNav.vue";
import { provide, ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const sideNav = ref<boolean>(false);

const toggleSideNav = (): boolean => (sideNav.value = !sideNav.value);

provide("sideNav", sideNav);
provide("toggleSideNav", toggleSideNav);
</script>

<template>
  <section class="flex flex-col justify-between min-h-screen">
    <Navbar />

    <transition name="left">
      <SideNav v-if="sideNav" />
    </transition>

    <main class="container flex-1 py-8">
      <slot />
    </main>

    <Footer />
  </section>
</template>
