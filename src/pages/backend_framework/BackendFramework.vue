<script setup lang="ts">
import axios from '@/utilities/axios'

axios.get('/').then(response => {
  document.getElementsByClassName('backend-framework')[0].innerHTML = response.data
})
</script>

<template>
  <div class="backend-framework"></div>
</template>
