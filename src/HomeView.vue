<script setup>
import { ref } from "vue";
import LoginAuth from "./components/Auth/LoginAuth.vue";
import BackgroundUi from "./components/Ui/BackgroundUi.vue";
import ToggleButton from "./components/Ui/ToggleButton.vue";

const isDarkMode = ref(true);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>

<template>
  <BackgroundUi :isDarkMode="isDarkMode" />
  <ToggleButton :isDarkMode="isDarkMode" @toggle="toggleTheme" />
  <main class="flex items-center justify-center h-screen">
    <LoginAuth />
  </main>
</template>
