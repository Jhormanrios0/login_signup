<template>
  <nav class="navbar">
    <RouterLink to="/" class="spinner cursor-pointer">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </RouterLink>
    <section class="ElementsBar">
      <article class="flex gap-[2rem]">
        <RouterLink to="/signin" class="EfectBtnNav uppercase cursor-pointer"
          >Sign in</RouterLink
        >
        <RouterLink to="/signup" class="EfectBtnNav uppercase cursor-pointer"
          >Sign up</RouterLink
        >
      </article>
    </section>
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

.ElementsBar {
  display: flex;
  gap: 10px;
}
.EfectBtnNav {
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--border-color-nav);
  background: linear-gradient(
    to right,
    var(--Bg-boton) 1%,
    transparent 40%,
    transparent 60%,
    var(--Bg-boton-2) 100%
  );
  color: var(--border-color-nav);
  font-weight: bold;
  box-shadow: inset 0 0 10px var(--Bg-boton), 0 0 9px 3px var(--Bg-boton-2);
}

.EfectBtnNav:hover {
  color: var(--border-color-nav-hover);
  box-shadow: inset 0 0 1px var(--Bg-boton-hover),
    0 0 9px 1px var(--Bg-boton-2-hover);
}

.EfectBtnNav:before {
  content: "";
  position: absolute;
  left: -4em;
  width: 4em;
  height: 100%;
  top: 0;
  transition: transform 0.4s ease-in-out;
  background: linear-gradient(
    to right,
    transparent 1%,
    var(--Bg-boton-hover) 40%,
    var(--Bg-boton-2-hover) 60%,
    transparent 100%
  );
}

.EfectBtnNav:hover:before {
  transform: translateX(15em);
}
</style>
