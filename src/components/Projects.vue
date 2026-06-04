<script setup>
const projects = [
  {
    id: 1,
    title: "AnimeLib",
    description: "Aplikasi pustaka anime personal terinspirasi dari MyAnimeList untuk melacak anime favorit, riwayat menonton, dan rekomendasi.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/username/animelib",
    demo: "#"
  },
  {
    id: 2,
    title: "Discord Bot (Economy & Mini-Games)",
    description: "Bot Discord interaktif yang dilengkapi dengan fitur virtual economy, sistem toko (shop), dan mini-game tebak-tebakan menggunakan Python.",
    tech: ["Python", "discord.py"],
    github: "https://github.com/username/discord-bot",
    demo: "#"
  },
  {
    id: 3,
    title: "Kisah Kita",
    description: "Website statis romantis dan interaktif yang didedikasikan khusus untuk mendokumentasikan momen kebersamaan dengan pasangan.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#"
  }
]
</script>

<template>
  <section id="projects" class="space-y-6 scroll-mt-20">
    <div class="border-b border-slate-800 pb-2">
      <h2 class="text-3xl font-bold text-emerald-400">My Projects</h2>
      <p class="text-sm text-slate-400 mt-1">Beberapa proyek yang telah dan sedang saya kembangkan selama belajar pemrograman.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="bg-slate-800/50 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition duration-300"
      >
        <div class="space-y-3">
          <h3 class="text-xl font-bold text-slate-100 group-hover:text-emerald-400">
            {{ project.title }}
          </h3>
          <p class="text-sm text-slate-400 leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <div class="mt-6 space-y-4">
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.tech" 
              :key="tech" 
              class="text-xs font-medium px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/10"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex items-center gap-4 text-sm pt-2 border-t border-slate-800/60">
            <a 
              :href="project.github" 
              target="_blank" 
              class="text-slate-300 hover:text-emerald-400 font-medium transition flex items-center gap-1"
            >
              Code ↗
            </a>
            <a 
              v-if="project.demo !== '#'" 
              :href="project.demo" 
              target="_blank" 
              class="text-slate-300 hover:text-emerald-400 font-medium transition flex items-center gap-1"
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>