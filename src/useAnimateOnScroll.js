import { ref, onMounted, onUnmounted } from 'vue'

export function useAnimateOnScroll() {
  const target = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (target.value) observer.unobserve(target.value)
      }
    })

    if (target.value) {
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { target, isVisible }
}