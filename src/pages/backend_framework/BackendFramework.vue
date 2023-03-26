<script setup lang="ts">
import axios from '@/utilities/axios'

axios.get('/').then(response => {
  const backgroundFrameworkData = response.data
    .replace('body {', '.backend-framework body .{')
    .replace('ul {', '.backend-framework ul .{')
  document.getElementsByClassName('backend-framework')[0].innerHTML = backgroundFrameworkData
})
</script>

<template>
  <div class="backend-framework"></div>
</template>
