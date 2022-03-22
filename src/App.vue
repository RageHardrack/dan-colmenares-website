<script setup lang="ts">
import Navbar from "./components/Layout/Navbar.vue";
import Footer from "./components/Layout/Footer.vue";
</script>

<template>
  <section class="flex flex-col h-screen justify-between">
    <Navbar />

    <main class="flex-1 py-8 container">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <Footer />
  </section>
</template>
