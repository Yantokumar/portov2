<script setup>
import { useAnimateOnScroll } from '../useAnimateOnScroll'
const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section ref="target" class="py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-1000 transform" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
    <div class="space-y-4 max-w-2xl">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
        Halo, Saya <span class="text-emerald-400">Bahrudin Yusup Caruban</span>
      </h1>
      <p class="text-xl text-slate-400">
        Mahasiswa Sistem Informasi & Pembelajar Full-Stack Web Development.
      </p>
    </div>
    
    <div class="w-48 h-48 rounded-full bg-slate-800 border-2 border-emerald-500 overflow-hidden flex items-center justify-center shadow-xl shadow-emerald-500/20">
      <img 
        src="../assets/hero.png" 
        loading="lazy"
        alt="Foto Profil Bahrudin" 
        class="w-full h-full object-cover"
      />
    </div>
  </section>
</template>