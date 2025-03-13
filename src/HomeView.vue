<script setup>
import { ref, onMounted, watchEffect } from "vue";
import Planet_dark from "./components/Planets/DarkPlanet.vue";
import Planet_light from "./components/Planets/LightPlanet.vue";
import BackgroundUi from "./components/Ui/BackgroundUi.vue";
import Navbar from "./components/Ui/Navbar.vue";

// 📌 Detectar el tema del sistema y guardarlo en localStorage
const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// 📌 Verificar localStorage o usar el tema del sistema
const isDarkMode = ref(
  localStorage.getItem("darkMode") !== null
    ? JSON.parse(localStorage.getItem("darkMode"))
    : getSystemTheme()
);

// 📌 Función para alternar el modo oscuro
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  updateTheme();
};

// 📌 Función que aplica el modo oscuro o claro
const updateTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode.value));
};

// 📌 Escuchar cambios en el sistema
onMounted(() => {
  updateTheme();
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      isDarkMode.value = e.matches;
      updateTheme();
    });
});
</script>

<template>
  <BackgroundUi :isDarkMode="isDarkMode" />
  <Navbar :isDarkMode="isDarkMode" @toggle="toggleTheme" />
  <main class="flex items-center justify-center h-[calc(100vh-10vh)] relative">
    <Transition name="fade" mode="out-in">
      <Planet_dark v-if="isDarkMode" key="dark" />
      <Planet_light v-else key="light" />
    </Transition>
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
