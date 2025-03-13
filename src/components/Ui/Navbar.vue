<template>
  <nav class="navbar">
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <ToggleButton :isDarkMode="isDarkMode" @toggle="$emit('toggle')" />
  </nav>
</template>

<script setup>
import ToggleButton from "./ToggleButton.vue";

defineProps({
  isDarkMode: Boolean,
});
defineEmits(["toggle"]);
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom: 0.1px solid var(--border-color-nav);
  background-color: var(--bg-color-nav);
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}

.spinner {
  width: 30px;
  height: 30px;
  animation: spinner 1.6s infinite ease;
  transform-style: preserve-3d;
}

.spinner > div {
  background-color: oklch(95.61% 0.0214 283.13 / 10%);
  height: 100%;
  position: absolute;
  width: 100%;
  border: 1.5px solid var(--border-color-nav); /* Adjusted border size */
}

.spinner div:nth-of-type(1) {
  transform: translateZ(-15px) rotateY(180deg); /* Adjusted transform */
}

.spinner div:nth-of-type(2) {
  transform: rotateY(-270deg) translateX(50%);
  transform-origin: top right;
}

.spinner div:nth-of-type(3) {
  transform: rotateY(270deg) translateX(-50%);
  transform-origin: center left;
}

.spinner div:nth-of-type(4) {
  transform: rotateX(90deg) translateY(-50%);
  transform-origin: top center;
}

.spinner div:nth-of-type(5) {
  transform: rotateX(-90deg) translateY(50%);
  transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
  transform: translateZ(15px); /* Adjusted transform */
}

@keyframes spinner {
  0% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }

  100% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
  }
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color-nav);
}
</style>
