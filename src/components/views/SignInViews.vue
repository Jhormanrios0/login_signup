<script setup>
import { useMotion } from "@vueuse/motion";
import { ref, onMounted } from "vue";

defineProps(["isDarkMode"]);

const container = ref(null);

onMounted(() => {
  useMotion(container, {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    leave: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  });
});
</script>

<template>
  <main
    ref="container"
    class="flex items-center justify-center h-[calc(100vh-10vh)] relative"
  >
    <h1
      class="text-3xl font-bold"
      :class="isDarkMode ? 'text-white' : 'text-black'"
    >
      Sign In Page
    </h1>
  </main>
</template>
