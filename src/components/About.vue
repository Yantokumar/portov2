<script setup>
import { useAnimateOnScroll } from '../useAnimateOnScroll'
const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section ref="target" id="about" class="space-y-4 scroll-mt-24 transition-all duration-1000 transform" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
    <h2 class="text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2">About Me</h2>
    <p class="text-slate-400 leading-relaxed">
      Saya adalah mahasiswa Sistem Informasi yang sedang antusias mempelajari dunia pemrograman. Saat ini fokus saya adalah menguasai pembuatan aplikasi web yang interaktif dan responsif, serta mengeksplorasi administrasi sistem berbasis Linux.
    </p>
  </section>
</template>