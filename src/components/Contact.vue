<script setup>
import { contacts } from '../index.js'
import { useAnimateOnScroll } from '../useAnimateOnScroll'

const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section ref="target" id="contact" class="py-16 border-t border-slate-800/60 mt-20 text-center space-y-8 scroll-mt-24 transition-all duration-1000 transform" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
    <div class="max-w-xl mx-auto space-y-3">
      <h2 class="text-3xl font-bold text-emerald-400">Mari Terkoneksi!</h2>
      <p class="text-slate-400 leading-relaxed">
        Saya selalu terbuka untuk berdiskusi tentang pengembangan web, proyek *open-source*, atau peluang kolaborasi lainnya. Jangan ragu untuk menyapa!
      </p>
    </div>

    <!-- Tombol-tombol Kontak Sosial Media -->
    <div class="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
      <a 
        v-for="item in contacts" 
        :key="item.name"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          'flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 font-medium transition duration-300 transform hover:-translate-y-1',
          item.color
        ]"
      >
        <span>{{ item.icon }}</span>
        <span>{{ item.name }}</span>
      </a>
    </div>

    <!-- Footer Hak Cipta -->
    <div class="pt-12 text-xs text-slate-600">
      <p>© 2026 Bahrudin Yusup Caruban. Created with Vue.js & Tailwind CSS v4.</p>
    </div>
  </section>
</template>