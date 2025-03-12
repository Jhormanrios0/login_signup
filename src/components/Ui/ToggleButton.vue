<template>
  <button class="toggle-btn" @click="toggleTheme">
    <div :class="{ 'switch-active': isDarkMode }" class="switch">
      <span class="icon">🌙</span>
      <span class="icon">☀️</span>
    </div>
  </button>
</template>

<script>
export default {
  name: "ToggleButton",
  props: {
    isDarkMode: Boolean,
  },
  emits: ["toggle"],
  methods: {
    toggleTheme() {
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>
/* 🔹 Botón */
.toggle-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
}

/* 🔹 Switch */
.switch {
  width: 50px;
  height: 25px;
  background: #ddd;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transition: background 0.4s ease;
}

/* 🌙 Estado Activo */
.switch-active {
  background: #333;
}

/* 🔹 Iconos */
.icon {
  font-size: 16px;
  transition: transform 0.4s ease;
}

/* 🌙 Modo Oscuro */
.switch-active .icon:first-child {
  transform: translateX(25px);
}

.switch-active .icon:last-child {
  transform: translateX(-25px);
}
</style>
