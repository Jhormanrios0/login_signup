<template>
  <div :class="['bg_container', isDarkMode ? 'dark-mode' : 'light-mode']">
    <canvas ref="particlesCanvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "BackgroundUi",
  props: {
    isDarkMode: Boolean,
  },
  data() {
    return {
      particlesArray: [],
      numberOfParticles: 100,
      ctx: null,
      canvas: null,
      animationFrameId: null,
    };
  },
  watch: {
    isDarkMode() {
      this.initParticles();
    },
  },
  mounted() {
    this.canvas = this.$refs.particlesCanvas;
    this.ctx = this.canvas.getContext("2d");
    this.resizeCanvas();
    this.initParticles();
    window.addEventListener("resize", this.resizeCanvas);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeCanvas);
    cancelAnimationFrame(this.animationFrameId);
  },
  methods: {
    resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.initParticles(); //* Reiniciar partículas al redimensionar
    },
    initParticles() {
      if (!this.ctx) return;

      this.particlesArray = [];
      for (let i = 0; i < this.numberOfParticles; i++) {
        const size = Math.random() * 8 + 2; // Increased size
        const x = Math.random() * this.canvas.width;
        const y = Math.random() * this.canvas.height;
        const directionX = (Math.random() * 0.5 - 0.25) * 0.3; // Reduced speed
        const directionY = (Math.random() * 0.5 - 0.25) * 0.2; // Reduced speed
        const color = this.isDarkMode ? "#8376ff" : "#725bf9";

        this.particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
      this.animate();
    },
    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = 0; i < this.particlesArray.length; i++) {
        this.particlesArray[i].update(this.canvas, this.ctx);
      }

      this.animationFrameId = requestAnimationFrame(this.animate);
    },
  },
};

//* Definición de la clase Partícula
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = 0.4;
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  update(canvas, ctx) {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw(ctx);
  }
}
</script>

<style scoped>
.bg_container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transition: background 0.8s ease-in-out;
}

/*Dark Mode */
.dark-mode {
  background: linear-gradient(
    104.1deg,
    #392055 13.6%,
    #110025 49.4%,
    #110025 93.3%
  );
  animation: fadeInDark 1s ease-in-out;
}

/* ligthMode */
.light-mode {
  background: linear-gradient(
    104.1deg,
    #f0f4f8 13.6%,
    #9d9dff 49.4%,
    #8376ff 93.3%
  );
  animation: fadeInLight 1s ease-in-out;
}

/*  Animaciones */
@keyframes fadeInDark {
  0% {
    opacity: 0;
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInLight {
  0% {
    opacity: 0;
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

canvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
