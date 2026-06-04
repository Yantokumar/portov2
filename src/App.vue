<script setup>
import About from './components/About.vue'
import Contact from './components/Contact.vue';
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Navbar from './components/Navbar.vue';
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
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
