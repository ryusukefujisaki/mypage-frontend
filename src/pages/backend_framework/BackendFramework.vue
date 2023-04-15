<script setup lang="ts">
import Header from '@/components/Header.vue'
import axios from '@/utilities/axios'

axios.get('/').then(response => {
  const backgroundFrameworkData = response.data
    .replace(/<link rel="icon" href=.+>/, '')
    .replace('body {', '.backend-framework body .{')
    .replace('ul {', '.backend-framework ul .{')
  document.getElementsByClassName('backend-framework')[0].innerHTML = backgroundFrameworkData
})
</script>

<template>
  <Header></Header>
  <div class="backend-framework"></div>
</template>
