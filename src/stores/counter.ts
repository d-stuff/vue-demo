import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounter = () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}

export const useCounterStore = defineStore('counter', useCounter)
