<script setup lang="ts">
const bubbleStyle = (n: number) => {
  const size = Math.random() * 20 + 10; // Dimensioni tra 10px e 30px
  const delay = Math.random() * 5; // Ritardo tra 0 e 5 secondi
  const duration = Math.random() * 15 + 10; // Durata tra 10 e 25 secondi
  const left = Math.random() * 100; // Posizione orizzontale casuale

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity: Math.random() * 0.5 + 0.3,
  };
};
</script>

<template>
  <div class="container">
    <div class="particles">
      <div
        v-for="n in 150"
        :key="n"
        class="bubble"
        :style="bubbleStyle(n)"
      ></div>
    </div>
    <h1 class="gradient-text">S.A.R.A.H.</h1>
    <button class="btn-accedi">Accedi</button>
  </div>
</template>

<style scoped>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #003f5c, #2f4b7c, #665191);
  animation: bg-change 30s infinite alternate;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  animation: float-up linear infinite;
  bottom: -50px;
}

@keyframes float-up {
  0% {
    transform: translateY(0) scale(0.8);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-120vh) scale(1.2);
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
  position: relative;
  font-size: 6rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ff0000, #ffff00, #ff0000);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: text-gradient 5s ease infinite;
  z-index: 2;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
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

.btn-accedi {
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  background: linear-gradient(45deg, #ff0000, #ffff00, #00ff00);
  background-size: 300% 300%;
  color: white;
  cursor: pointer;
  animation: btn-gradient 8s ease infinite;
  z-index: 2;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-accedi:hover {
  transform: translateY(-3px);
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
