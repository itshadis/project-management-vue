<script setup>
import { RouterView } from 'vue-router'
import SideBar from '../partials/SideBar.vue'
import Header from '../partials/Header.vue'
</script>

<template>
  <main class="flex transition-all duration-300">
    <SideBar />
    <div class="flex-1 p-2">
      <Header />
      <section>
        <RouterView />
      </section>
    </div>
  </main>
</template>
