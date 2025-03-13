<script setup>
import { useMotion } from "@vueuse/motion";
import { ref, onMounted } from "vue";

const container = ref(null);

onMounted(() => {
  useMotion(container, {
    initial: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  });
});
</script>

<template>
  <div
    ref="container"
    class="flex items-center justify-center h-[calc(100vh-10vh)] relative"
  >
    <h1 class="text-3xl font-bold text-red-500">Sign Up Page</h1>
  </div>
</template>
