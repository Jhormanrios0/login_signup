<template>
  <figure class="flex justify-center">
    <img
      class="w-[50%] opacity-70 rotate-animation"
      src="/src/assets/img/SunICON.svg"
      alt=""
    />
  </figure>
</template>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.rotate-animation {
  animation: rotate 2s infinite;
}
</style>
