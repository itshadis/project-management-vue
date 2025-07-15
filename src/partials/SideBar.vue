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

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const LISTMENUS = [
  {
    label: 'MAIN MENUS',
    icon: null,
    link: null,
  },
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
  {
    label: 'OTHER MENUS',
    icon: null,
    link: null,
  },
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
    class="relative min-h-screen overflow-y-scroll transform transition-all duration-300 bg-[#FAFAFA]"
    :class="props.isOpen ? 'w-[260px]' : 'w-0'"
  >
    <div class="p-6 text-lg font-medium flex items-center justify-between text-nowrap">
      <div class="flex items-center gap-2">
        <img :src="logo" alt="Logo" />
        <h2>DesignHub</h2>
      </div>
      <img :src="doubleArrow" alt="Logo" />
    </div>

    <nav class="px-5 text-primary">
      <ul class="flex flex-col gap-1">
        <li v-for="LISTMENU in LISTMENUS" :key="LISTMENU" class="py-3">
          <template v-if="LISTMENU.label">
            <RouterLink :to="LISTMENU.link">
              <div class="flex justify-between">
                <div class="flex gap-4">
                  <img :src="LISTMENU.icon" />
                  {{ LISTMENU.label }}
                </div>
                <span></span>
              </div>
            </RouterLink>
          </template>
          <template v-else>
            <p class="flex gap-4 font-medium">
              {{ LISTMENU.label }}
            </p>
          </template>
        </li>
      </ul>
    </nav>
  </aside>
</template>
