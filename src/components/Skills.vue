<script setup>
import { useAnimateOnScroll } from '../useAnimateOnScroll'
const { target, isVisible } = useAnimateOnScroll()
</script>

<template>
  <section ref="target" id="skills" class="space-y-4 scroll-mt-24 transition-all duration-1000 transform" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
    <h2 class="text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2">Skills</h2>
    <div class="flex flex-wrap gap-3">
      <span class="px-4 py-2 bg-slate-800 rounded-lg text-sm font-semibold border border-slate-700 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-default">HTML & CSS</span>
      <span class="px-4 py-2 bg-slate-800 rounded-lg text-sm font-semibold border border-slate-700 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-default">JavaScript</span>
      <span class="px-4 py-2 bg-slate-800 rounded-lg text-sm font-semibold border border-slate-700 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-default">Vue.js</span>
      <span class="px-4 py-2 bg-slate-800 rounded-lg text-sm font-semibold border border-slate-700 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-default">Tailwind CSS</span>
      <span class="px-4 py-2 bg-slate-800 rounded-lg text-sm font-semibold border border-slate-700 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-default">Git & GitHub</span>
    </div>
  </section>
</template>