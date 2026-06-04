<script setup>
const contacts = [
  {
    name: "GitHub",
    icon: "💻",
    url: "https://github.com/username-kamu",
    color: "hover:bg-slate-800 hover:text-white hover:border-slate-700"
  },
  {
    name: "Email",
    icon: "✉️",
    url: "mailto:email-kamu@gmail.com",
    color: "hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30"
  },
  {
    name: "LinkedIn",
    icon: "👔",
    url: "https://linkedin.com/in/username-kamu",
    color: "hover:bg-blue-600/10 hover:text-blue-400 hover:border-blue-500/30"
  }
]
</script>

<template>
  <section id="contact" class="py-16 border-t border-slate-800/60 mt-20 text-center space-y-8">
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