<script lang="ts" setup>
import {useCounterStore} from '@/stores/counter';

const store = useCounterStore()
</script>

<template>
  <button @click="store.increment">+</button>
  <button @click="store.count--">-</button>
  <label>value: {{store.count}}</label>
</template>

<style scoped>
button {
  font-size: 60px;
  color: #fff;
  background: #020202;
  margin: 10px;
  width: 80px;
  height: 80px;
}

label {
  font-size: 60px;
}
</style>