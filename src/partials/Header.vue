<script setup>
import searchIcon from '@/assets/icons/search-icon.svg'
import notificationIcon from '@/assets/icons/notification-icon.svg'
import imgIcon from '@/assets/icons/img-icon.svg'
import singleArrowIcon from '@/assets/icons/single-arrow-icon.svg'
</script>

<template>
  <header class="flex justify-between items-center h-20 px-6 border-b border-primary">
    <div>
      <h1 class="text-xl font-medium">Projects</h1>
      <p class="text-sm text-primary">UI Design / Projects</p>
    </div>

    <div class="flex gap-4">
      <div class="flex items-center">
        <button class="border border-primary rounded-full p-2 cursor-pointer">
          <img :src="searchIcon" alt="" class="w-5" />
        </button>
      </div>
      <div class="flex items-center">
        <button class="border border-primary rounded-full p-2 cursor-pointer">
          <img :src="notificationIcon" alt="" class="w-5" />
        </button>
      </div>
      <div class="flex items-center gap-4">
        <div>
          <p>James Philips</p>
          <p class="text-sm text-primary text-end">UI Designer</p>
        </div>
        <div class="rounded-full bg-primary p-4 cursor-pointer">
          <img :src="imgIcon" alt="" class="w-[18px]" />
        </div>
      </div>
      <button class="cursor-pointer">
        <img :src="singleArrowIcon" alt="" />
      </button>
    </div>
  </header>
</template>
