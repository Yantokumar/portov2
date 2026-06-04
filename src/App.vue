<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue';
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Navbar from './components/Navbar.vue';

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
    
    <Navbar />
    <main class="max-w-5xl mx-auto px-4 space-y-24 py-12">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>

    <Contact />

    <!-- Scroll to Top Button -->
    <button 
      @click="scrollToTop"
      :class="showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'"
      class="fixed bottom-8 right-8 p-3 rounded-full bg-emerald-500 text-slate-900 shadow-lg hover:bg-emerald-400 hover:shadow-emerald-500/50 transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
