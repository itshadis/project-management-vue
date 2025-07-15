<script setup>
import { RouterView } from 'vue-router'
import SideBar from '../partials/SideBar.vue'
import Header from '../partials/Header.vue'
import { ref } from 'vue'

const isOpenSideBar = ref(true)

function toogleSidebar() {
  isOpenSideBar.value = !isOpenSideBar.value
}
</script>

<template>
  <main class="flex transition-all duration-300">
    <SideBar v-model:isOpen="isOpenSideBar" />
    <div class="flex-1 p-2">
      <Header @toogle-sidebar="toogleSidebar" v-model:isOpen="isOpenSideBar" />
      <section>
        <RouterView />
      </section>
    </div>
  </main>
</template>
