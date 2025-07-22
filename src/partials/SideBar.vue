<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import OverviewIcon from '@/assets/icons/dynamic-icons/d-overview-icon.vue'
import CalendarIcon from '@/assets/icons/dynamic-icons/d-calendar-icon.vue'
import MessageIcon from '@/assets/icons/dynamic-icons/d-message-icon.vue'
import SettingIcon from '@/assets/icons/dynamic-icons/d-setting-icon.vue'
import doubleArrow from '@/assets/icons/double-arrow-icon.svg'
import CameraIcon from '@/assets/icons/dynamic-icons/d-camera-icon.vue'
import LogOutIcon from '@/assets/icons/dynamic-icons/d-logout-icon.vue'
import BagIcon from '@/assets/icons/dynamic-icons/d-bag-icon.vue'
import logo from '@/assets/main-logo.svg'

const isOpenSideBar = ref(true)

function toogleSidebar() {
  isOpenSideBar.value = !isOpenSideBar.value
}

const LIST_MAIN_MENUS = [
  {
    label: 'Overview',
    icon: OverviewIcon,
    link: '/',
  },
  {
    label: 'Projects',
    icon: BagIcon,
    link: '/projects',
  },
  {
    label: 'Schedule',
    icon: CalendarIcon,
    link: '/scheduled',
  },
  {
    label: 'Messages',
    icon: MessageIcon,
    link: '/messages',
  },
  {
    label: 'Online Meeting',
    icon: CameraIcon,
    link: '/online-meeting',
  },
]

const LIST_OTHER_MENUS = [
  {
    label: 'Settings',
    icon: SettingIcon,
    link: '/settings',
  },
]
</script>

<template>
  <aside
    class="relative min-h-screen overflow-y-scroll transform transition-all duration-300 bg-[#FAFAFA]"
    :class="isOpenSideBar ? 'w-[260px]' : 'w-[90px]'"
  >
    <div class="relative p-6 text-lg font-medium flex items-center justify-between text-nowrap">
      <div class="flex items-center gap-2">
        <img :src="logo" alt="Logo" class="w-[40px] shrink-0" />
        <h2 :class="isOpenSideBar ? 'block' : 'hidden'">DesignHub</h2>
      </div>
      <button
        @click="toogleSidebar"
        class="cursor-pointer absolute transition-all duration-300 ease-in"
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
          class="py-2 transition-all duration-300 ease-in text-nowrap"
          :class="isOpenSideBar ? 'block' : 'hidden'"
        >
          MAIN MENUS
        </p>
        <li v-for="menu in LIST_MAIN_MENUS" :key="menu">
          <RouterLink :to="menu.link" v-slot="{ isActive }">
            <div
              class="flex py-3 px-3 rounded-lg hover:bg-blue-100"
              :class="[
                isOpenSideBar ? 'justify-between' : 'justify-center',
                isActive ? 'text-blue-600 bg-blue-100' : '',
              ]"
            >
              <div class="flex gap-4">
                <component :is="menu.icon" />
                <p
                  class="transition-all duration-75 text-nowrap"
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
          class="mt-2 py-4 border-t-2 border-[#ececec] transition-all duration-300 ease-in text-nowrap"
          :class="isOpenSideBar ? 'block' : 'hidden'"
        >
          OTHER MENUS
        </p>
        <li v-for="menu in LIST_OTHER_MENUS" :key="menu">
          <RouterLink :to="menu.link" v-slot="{ isActive }">
            <div
              class="flex py-3 px-3 rounded-lg hover:bg-blue-100"
              :class="[
                isOpenSideBar ? 'justify-between' : 'justify-center',
                isActive ? 'text-blue-600 bg-blue-100' : '',
              ]"
            >
              <div class="flex gap-4">
                <component :is="menu.icon" class="text-primary transition-colors duration-300" />
                <p
                  class="transition-all duration-75 text-nowrap"
                  :class="isOpenSideBar ? 'block' : 'hidden'"
                >
                  {{ menu.label }}
                </p>
              </div>
              <span></span>
            </div>
          </RouterLink>

          <div
            class="flex py-3 px-3 rounded-lg hover:bg-blue-100 cursor-pointer mt-1"
            :class="isOpenSideBar ? 'justify-between' : 'justify-center'"
          >
            <div class="flex gap-4">
              <LogOutIcon class="text-primary transition-colors duration-300" />
              <p
                class="transition-all duration-75 text-nowrap"
                :class="isOpenSideBar ? 'block' : 'hidden'"
              >
                LogOut
              </p>
            </div>
            <span></span>
          </div>
        </li>
      </ul>
    </nav>
  </aside>
</template>
