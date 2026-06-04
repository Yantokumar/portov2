<script setup>
import { useAnimateOnScroll } from '../useAnimateOnScroll'
const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section ref="target" id="about" class="space-y-4 scroll-mt-24 transition-all duration-1000 transform" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
    <h2 class="text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2">About Me</h2>
    <div class="text-slate-400 leading-relaxed space-y-4">
      <p>
        Halo! Saya Bahrudin, seorang mahasiswa Sistem Informasi di <span class="text-emerald-400 font-medium">Universitas Pamulang</span> yang memiliki passion mendalam di dunia Full-Stack Web Development dan Linux System Administration. Saya suka membangun aplikasi web yang interaktif, mengoptimalkan infrastruktur sistem, dan mengeksplorasi teknologi open-source, khususnya pada lingkungan operasi Linux.
      </p>
      <p>
        Saat ini, saya fokus memperdalam keahlian dalam ekosistem modern web development dan pengelolaan server, sembari terus menantang diri untuk menyelesaikan masalah kompleks lewat baris kode.
      </p>
    </div>
  </section>
</template>