<script setup>
import { RouterLink } from 'vue-router'
import overviewIcon from '@/assets/icons/overview-icon.svg'
import calendarIcon from '@/assets/icons/calendar-icon.svg'
import doubleArrow from '@/assets/icons/double-arrow-icon.svg'
import messageIcon from '@/assets/icons/message-icon.svg'
import settingIcon from '@/assets/icons/setting-icon.svg'
import cameraIcon from '@/assets/icons/camera-icon.svg'
import logOutIcon from '@/assets/icons/logout-icon.svg'
import bagIcon from '@/assets/icons/bag-icon.svg'
import logo from '@/assets/main-logo.svg'
import { ref } from 'vue'

const isOpenSideBar = ref(true)

function toogleSidebar() {
  isOpenSideBar.value = !isOpenSideBar.value
}

const LIST_MAIN_MENUS = [
  {
    label: 'Overview',
    icon: overviewIcon,
    link: '/',
  },
  {
    label: 'Projects',
    icon: bagIcon,
    link: '/projects',
  },
  {
    label: 'Schedule',
    icon: calendarIcon,
    link: '/scheduled',
  },
  {
    label: 'Messages',
    icon: messageIcon,
    link: '/messages',
  },
  {
    label: 'Online Meeting',
    icon: cameraIcon,
    link: '/online-meeting',
  },
]

const LIST_OTHER_MENUS = [
  {
    label: 'Settings',
    icon: settingIcon,
    link: '/settings',
  },
  {
    label: 'Log Out',
    icon: logOutIcon,
    link: null,
  },
]
</script>

<template>
  <aside
    class="relative min-h-screen overflow-y-scroll transform transition-all duration-500 bg-[#FAFAFA]"
    :class="isOpenSideBar ? 'w-[260px]' : 'w-[90px]'"
  >
    <div class="relative p-6 text-lg font-medium flex items-center justify-between text-nowrap">
      <div class="flex items-center gap-2">
        <img :src="logo" alt="Logo" class="w-[40px] shrink-0" />
        <h2 :class="isOpenSideBar ? 'block' : 'hidden'">DesignHub</h2>
      </div>
      <button
        @click="toogleSidebar"
        class="cursor-pointer absolute transition-all duration-500 ease-in"
        :class="isOpenSideBar ? 'right-4' : 'rotate-180 right-0'"
      >
        <img
          alt="Logo"
          class="transition-all duration-300 ease-in"
          :src="doubleArrow"
          :class="isOpenSideBar ? 'w-6' : 'w-5'"
        />
      </button>
    </div>

    <nav class="px-5 text-primary">
      <ul class="flex flex-col gap-1">
        <p
          class="py-2 transition-all duration-500 ease-in text-nowrap"
          :class="isOpenSideBar ? 'block' : 'hidden'"
        >
          MAIN MENUS
        </p>
        <li v-for="menu in LIST_MAIN_MENUS" :key="menu" class="py-3">
          <RouterLink :to="menu.link">
            <div class="flex" :class="isOpenSideBar ? 'justify-between' : 'justify-center'">
              <div class="flex gap-4">
                <img :src="menu.icon" />
                <p
                  class="transition-all duration-500 ease-in text-nowrap"
                  :class="isOpenSideBar ? 'block' : 'hidden'"
                >
                  {{ menu.label }}
                </p>
              </div>
              <span></span>
            </div>
          </RouterLink>
        </li>

        <p
          class="mt-2 py-4 border-t-2 border-[#ececec] transition-all duration-500 ease-in text-nowrap"
          :class="isOpenSideBar ? 'block' : 'hidden'"
        >
          OTHER MENUS
        </p>
        <li v-for="menu in LIST_OTHER_MENUS" :key="menu" class="py-3">
          <RouterLink :to="menu.link">
            <div class="flex" :class="isOpenSideBar ? 'justify-between' : 'justify-center'">
              <div class="flex gap-4">
                <img :src="menu.icon" />
                <p
                  class="transition-all duration-500 ease-in text-nowrap"
                  :class="isOpenSideBar ? 'block' : 'hidden'"
                >
                  {{ menu.label }}
                </p>
              </div>
              <span></span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
