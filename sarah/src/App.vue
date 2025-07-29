<script setup lang="ts">
import { onMounted } from "vue";

const bubbleStyle = (n: number) => {
  const size = Math.random() * 20 + 10;
  const delay = Math.random() * 5;
  const duration = Math.random() * 15 + 15;
  const left = Math.random() * 100;
  const opacity = Math.random() * 0.4 + 0.4;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity: opacity,
  };
};

onMounted(() => {
  const sparkles = document.querySelectorAll(".sparkle");
  sparkles.forEach((sparkle, index) => {
    const angle = (index / sparkles.length) * Math.PI * 2;
    const x = Math.cos(angle) * 0.5;
    const y = Math.sin(angle) * 0.5;
    const el = sparkle as HTMLElement;
    el.style.setProperty("--sparkle-x", `${x}`);
    el.style.setProperty("--sparkle-y", `${y}`);
    el.style.left = `${50 + x * 20}%`;
    el.style.top = `${50 + y * 20}%`;
    el.style.width = `${Math.random() * 6 + 4}px`;
    el.style.height = el.style.width;
  });
});
</script>

<template>
  <div class="fullscreen-container">
    <div class="wave-background"></div>

    <div class="particles">
      <div
        v-for="n in 200"
        :key="n"
        class="bubble"
        :style="bubbleStyle(n)"
      ></div>
    </div>

    <div class="main-content">
      <div class="title-wrapper">
        <h1 class="gradient-text">S.A.R.A.H.</h1>
        <div class="title-decoration"></div>
      </div>

      <div class="button-container">
        <button class="btn-accedi">
          <span class="btn-text">Accedi</span>
          <span class="btn-glow"></span>
          <span class="btn-sparkles">
            <span v-for="n in 6" :key="n" class="sparkle"></span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fullscreen-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #003f5c, #2f4b7c, #665191);
  animation: bg-change 30s infinite alternate;
}

.wave-background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="%23ffffff"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="%23ffffff"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%23ffffff"></path></svg>'),
    linear-gradient(transparent, rgba(255, 255, 255, 0.1));
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation: wave-animation 12s ease-in-out infinite alternate;
  z-index: 1;
  opacity: 0.3;
}

@keyframes wave-animation {
  0% {
    transform: translateY(0) scaleX(1);
  }
  50% {
    transform: translateY(-20px) scaleX(1.05);
  }
  100% {
    transform: translateY(0) scaleX(1);
  }
}

.main-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10vh 0;
  z-index: 3;
}

.title-wrapper {
  margin-top: 10vh;
}

.button-container {
  margin-bottom: 15vh;
  perspective: 1000px;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  animation: float-up linear infinite;
  bottom: -50px;
  filter: blur(1px);
  will-change: transform;
}

@keyframes float-up {
  0% {
    transform: translateY(0) scale(0.9);
    opacity: 0;
  }
  20% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-120vh) scale(1.1);
    opacity: 0;
  }
}

@keyframes bg-change {
  0% {
    background-color: #003f5c;
  }
  33% {
    background-color: #2f4b7c;
  }
  66% {
    background-color: #665191;
  }
  100% {
    background-color: #556270;
  }
}

.gradient-text {
  font-size: 8.5rem;
  font-weight: 800;
  font-family: "Arial", sans-serif;
  letter-spacing: 0.5rem;
  background: linear-gradient(90deg, #3199cd, #18787b, #8d35df);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: text-gradient 5s ease infinite;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  margin: 0;
  padding: 0 2rem;
  position: relative;
  z-index: 5;
}

.title-decoration {
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  height: calc(100% + 30px);
  border: 4px solid transparent;
  border-image: linear-gradient(45deg, #3199cd, #18787b, #8d35df);
  border-image-slice: 1;
  border-radius: 15px;
  animation: border-pulse 4s ease infinite;
  z-index: 4;
  filter: drop-shadow(0 0 15px rgba(49, 153, 205, 0.6));
  pointer-events: none;
}

.btn-accedi {
  position: relative;
  padding: 1.5rem 5rem;
  font-size: 1.8rem;
  font-weight: 700;
  border: none;
  border-radius: 3rem;
  background: linear-gradient(45deg, #00aaff, #00f7ff, #8400ff);
  background-size: 300% 300%;
  color: white;
  cursor: pointer;
  animation: btn-gradient 8s ease infinite;
  z-index: 4;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0 10px 30px rgba(0, 170, 255, 0.4);
  transform-style: preserve-3d;
}

.btn-text {
  position: relative;
  z-index: 3;
  letter-spacing: 1px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.btn-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.8) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
  border-radius: 3rem;
}

.btn-sparkles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  border-radius: 3rem;
}

.sparkle {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
}

.btn-accedi:hover {
  transform: translateY(-5px) scale(1.05) rotateX(5deg);
  box-shadow: 0 15px 40px rgba(0, 170, 255, 0.6);
}

.btn-accedi:hover .btn-glow {
  opacity: 0.6;
}

.btn-accedi:hover .sparkle {
  animation: sparkle-fly 1s ease-out forwards;
}

@keyframes sparkle-fly {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(
        calc(var(--sparkle-x) * 100px),
        calc(var(--sparkle-y) * -100px)
      )
      scale(1);
    opacity: 0;
  }
}

.btn-accedi::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  border-radius: 3rem;
  z-index: 1;
}

.btn-accedi:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 5px 20px rgba(0, 170, 255, 0.8);
}

@keyframes text-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes border-pulse {
  0% {
    opacity: 0.7;
    transform: scale(0.98);
  }
  50% {
    opacity: 1;
    transform: scale(1.02);
    filter: drop-shadow(0 0 20px rgba(49, 153, 205, 0.8));
  }
  100% {
    opacity: 0.7;
    transform: scale(0.98);
  }
}

@keyframes btn-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
