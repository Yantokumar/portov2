<script setup>
import { useAnimateOnScroll } from '../useAnimateOnScroll'
const { target, isVisible } = useAnimateOnScroll()

const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Lua', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg' }
]
</script>

<template>
  <section ref="target" id="skills" class="space-y-4 scroll-mt-24 transition-all duration-1000 transform" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
    <h2 class="text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2">Skills</h2>
    
    <!-- Wrapper dengan efek pudar (fade) di tepi kiri dan kanan -->
    <div class="overflow-hidden relative w-full fade-edges py-2">
      <!-- Container animasi bergulir ke kanan (hover untuk pause) -->
      <div class="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
        <div class="flex gap-3 px-1.5" v-for="i in 2" :key="i">
          <span 
            v-for="skill in skills" 
            :key="i + '-' + skill.name"
            class="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm font-semibold border border-slate-700 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-default"
          >
            <img :src="skill.icon" :alt="skill.name" class="w-5 h-5" />
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-scroll-right {
  animation: scroll-right 20s linear infinite;
}

@keyframes scroll-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Memberikan efek pudar transparan di ujung kiri dan kanan */
.fade-edges {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
</style>