<template>
  <div class="fullscreen-container">
    <div class="wave-background"></div>

    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="logo">S.A.R.A.H.</div>
      <div class="nav-links">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/playground">Playground</RouterLink>
        <RouterLink to="/about">About me</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="main-content">
      <div class="hero-section">
        <h1 class="gradient-text">S.A.R.A.H.</h1>
        <p class="subtitle">Smart AI Resource Assistant Hub</p>
        <div class="title-decoration"></div>

        <div class="cta-buttons">
          <RouterLink to="/home" class="btn-accedi">
            <span class="btn-text">Get Started</span>
            <span class="btn-glow"></span>
            <span class="btn-sparkles">
              <span v-for="n in 6" :key="n" class="sparkle"></span>
            </span>
          </RouterLink>

          <RouterLink to="/playground" class="btn-secondary">
            <span>Try Playground</span>
          </RouterLink>
        </div>
      </div>

      <!-- Features Section -->
      <div class="features-section">
        <h2>Features / Use cases</h2>
        <div class="features-grid">
          <div
            class="feature-card"
            v-for="(feature, index) in features"
            :key="index"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-section">
        <h3>Explore</h3>
        <ul>
          <li><RouterLink to="/research">Research page</RouterLink></li>
          <li><RouterLink to="/playground">Playground</RouterLink></li>
          <li><RouterLink to="/docs">Docs</RouterLink></li>
          <li><RouterLink to="/changelog">Changelog</RouterLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Resources</h3>
        <ul>
          <li><RouterLink to="/blog">Blog</RouterLink></li>
          <li><RouterLink to="/faq">FAQ</RouterLink></li>
          <li><RouterLink to="/tutorials">Tutorials</RouterLink></li>
          <li><RouterLink to="/github">GitHub Repo</RouterLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Legal</h3>
        <ul>
          <li><RouterLink to="/privacy">Privacy</RouterLink></li>
          <li><RouterLink to="/terms">Terms</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";

const features = ref([
  {
    icon: "🖥️",
    title: "Portfolio Generator",
    description: "Create stunning portfolios automatically",
  },
  {
    icon: "👀",
    title: "Live Preview Pages",
    description: "See changes in real-time",
  },
  {
    icon: "🔄",
    title: "Auto Sync from GitHub",
    description: "Keep everything up-to-date automatically",
  },
  {
    icon: "🤖",
    title: "AI Bio Builder",
    description: "Craft perfect bios with AI assistance",
  },
  {
    icon: "🔌",
    title: "API to Page",
    description: "Transform APIs into beautiful pages",
  },
  {
    icon: "⚡",
    title: "Auto-Deploy",
    description: "Instant deployment with zero configuration",
  },
]);
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #3199cd, #18787b, #8d35df);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3199cd, #8d35df);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.hero-section {
  text-align: center;
  padding-top: 15vh;
  margin-bottom: 10rem;
}

.subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: -1.5rem;
  margin-bottom: 3rem;
}

.cta-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 3rem;
}

.btn-secondary {
  position: relative;
  padding: 1.5rem 3rem;
  font-size: 1.4rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 3rem;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.features-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  position: relative;
  z-index: 4;
}

.features-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: white;
  position: relative;
}

.features-section h2::after {
  content: "";
  display: block;
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #3199cd, #8d35df);
  margin: 1rem auto 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.footer {
  background: rgba(0, 0, 0, 0.3);
  padding: 4rem 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  position: relative;
  z-index: 4;
}

.footer-section h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-section h3::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #3199cd, #8d35df);
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 0.8rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: white;
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 4.5rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .nav-links {
    display: none;
  }
}
</style>
