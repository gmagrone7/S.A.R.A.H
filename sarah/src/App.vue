<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";

// Stato per la posizione dell'avatar
const avatarX = ref(90); // Posizione iniziale a destra
const avatarY = ref(80); // Posizione iniziale in alto
const mouseX = ref(0);
const mouseY = ref(0);
const isFollowing = ref(false);

// Stile dinamico per l'avatar
const avatarStyle = ref<{
  left: string;
  top: string;
  opacity: number;
  filter: string;
  transform?: string;
}>({
  left: `${avatarX.value}vw`,
  top: `${avatarY.value}vh`,
  opacity: 0.9,
  filter: "drop-shadow(0 0 10px rgba(49, 153, 205, 0.6))",
});

// Animazione dell'avatar
let animationFrame: number;

const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

const updateAvatarPosition = () => {
  const targetX = isFollowing.value
    ? (mouseX.value / window.innerWidth) * 100
    : avatarX.value;
  const targetY = isFollowing.value
    ? (mouseY.value / window.innerHeight) * 100
    : avatarY.value;

  avatarX.value = lerp(avatarX.value, targetX, 0.05);
  avatarY.value = lerp(avatarY.value, targetY, 0.05);

  const breathEffect = Math.sin(Date.now() / 1000) * 0.5 + 1;

  avatarStyle.value = {
    left: `${avatarX.value}vw`,
    top: `${avatarY.value}vh`,
    opacity: 0.8 - Math.abs(Math.sin(Date.now() / 1500)) * 0.1,
    transform: `translate(-50%, -50%) scale(${breathEffect})`,
    filter: `drop-shadow(0 0 ${10 * breathEffect}px rgba(49, 153, 205, ${
      0.3 * breathEffect
    }))`,
  };

  animationFrame = requestAnimationFrame(updateAvatarPosition);
};

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

const handleMouseEnter = () => {
  isFollowing.value = true;
};

const handleMouseLeave = () => {
  isFollowing.value = false;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  updateAvatarPosition();
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <div class="app-container">
    <div
      class="floating-avatar"
      :style="avatarStyle"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- Testa -->
      <div class="avatar-head"></div>

      <!-- Corpo -->
      <div class="avatar-body"></div>

      <!-- Effetti -->
      <div class="avatar-glow"></div>
      <div class="avatar-particles">
        <div v-for="n in 8" :key="n" class="avatar-particle"></div>
      </div>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-avatar {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  transition: opacity 0.3s ease;
  transform-origin: center;
  will-change: transform, opacity;
}

.avatar-head {
  width: 60px;
  height: 80px;
  border-radius: 50% 50% 45% 45%;
  background: linear-gradient(135deg, #3199cd, #8d35df);
  position: relative;
  z-index: 2;
  animation: head-tilt 8s infinite alternate ease-in-out;
}

.avatar-body {
  width: 50px;
  height: 60px;
  background: linear-gradient(135deg, #2f4b7c, #665191);
  border-radius: 20% 20% 30% 30%;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  animation: body-breathe 4s infinite alternate ease-in-out;
}

.avatar-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(
    circle,
    rgba(49, 153, 205, 0.3) 0%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.floating-avatar:hover .avatar-glow {
  opacity: 0.6;
}

.avatar-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: visible;
  z-index: 3;
}

.avatar-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
  opacity: 0;
}

.floating-avatar:hover .avatar-particle {
  animation: particle-float 2s ease-out infinite;
}

@keyframes particle-float {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(
      calc(var(--particle-x) * 30px),
      calc(var(--particle-y) * -50px)
    );
    opacity: 0;
  }
}

@keyframes head-tilt {
  0% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg);
  }
}

@keyframes body-breathe {
  0% {
    transform: translateX(-50%) scaleY(0.95);
  }
  100% {
    transform: translateX(-50%) scaleY(1.05);
  }
}
</style>
