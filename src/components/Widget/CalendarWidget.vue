<script setup>
import { ref, onMounted } from "vue";

// 📌 Estado de la fecha actual
const currentDate = ref(new Date());

// 📌 Función para actualizar la fecha
const updateDate = () => {
  currentDate.value = new Date();
};

// 📌 Función para obtener los 5 días (2 antes, actual, 2 después)
const getDays = () => {
  const days = [];
  for (let i = -2; i <= 2; i++) {
    const date = new Date();
    date.setDate(currentDate.value.getDate() + i);
    days.push({
      weekday: date.toLocaleString("es-ES", { weekday: "long" }).toUpperCase(),
      day: date.getDate(),
      month: date.toLocaleString("es-ES", { month: "long" }).toUpperCase(),
      year: date.getFullYear(),
      isToday: i === 0, // Resalta el día actual
    });
  }
  return days;
};

// 📌 Actualizar la fecha automáticamente a medianoche
onMounted(() => {
  const now = new Date();
  const timeToMidnight =
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;

  setTimeout(() => {
    updateDate();
    setInterval(updateDate, 86400000); // Se actualiza cada 24 horas
  }, timeToMidnight);
});
</script>

<template>
  <div class="calendar-container">
    <div
      v-for="(date, index) in getDays()"
      :key="index"
      class="calendar-item"
      :class="{ today: date.isToday, 'not-selected': !date.isToday }"
    >
      <span class="weekday">{{ date.weekday }}</span>
      <span class="day">{{ date.day }}</span>
      <span class="month">{{ date.month }}</span>
      <span class="year">{{ date.year }}</span>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor del calendario en línea */
.calendar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
}

/* Cada elemento del calendario */
.calendar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  border-width: 2px;
  border-color: var(--Primary-Component);
  color: var(--Primary-Component);
  transition: all 0.3s ease-in-out;
  width: 90px;
  text-align: center;
}

/* Día actual resaltado */
.today {
  background-color: var(--Tertiary-Component);
  color: var(--txt-Component);
  transform: scale(1.15);
  font-weight: bold;
  border-color: var(--Secondary-Component);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

/* Efecto hover en el día actual */
.today:hover {
  transform: scale(1.2);
}

/* Días no seleccionados */
.not-selected {
  cursor: not-allowed;
}

/* Estilos para el texto */
.weekday {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}
.day {
  font-size: 28px;
  font-weight: bold;
}
.month {
  font-size: 14px;
  text-transform: uppercase;
}
.year {
  font-size: 12px;
  opacity: 0.8;
}
</style>
