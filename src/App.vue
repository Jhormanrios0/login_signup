<script setup>
import { ref, onMounted } from "vue";
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
    document.documentElement.classList.toggle("dark-mode", isDarkMode.value);
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

  <!-- 📌 Agregamos la transición global -->
  <Transition name="page-blur" mode="out-in">
    <RouterView :isDarkMode="isDarkMode" :toggleTheme="toggleTheme" />
  </Transition>
</template>

<style>
.page-blur-enter-active,
.page-blur-leave-active {
  transition: opacity 1s ease, filter 1s ease;
}

.page-blur-enter-from {
  opacity: 0;
  filter: blur(10px);
}

.page-blur-leave-to {
  opacity: 0;
  filter: blur(10px);
}
</style>
