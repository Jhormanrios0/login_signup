<script setup>
import { defineProps } from "vue";

import CalendarWidget from "./components/Widget/CalendarWidget.vue";

const props = defineProps(["isDarkMode"]);
</script>

<template>
  <main class="flex items-center justify-center h-[calc(100vh-10vh)] relative">
    <CalendarWidget  />
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
