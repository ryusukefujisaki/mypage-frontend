<script setup lang="ts">
import { ref } from 'vue'
import axios from '@/utilities/axios'
import { formatDate } from '@/utilities/displayHelper'

interface Article { title: string, created_at: string }
const articles = ref<Article[]>([])
  axios.get('/articles').then(response => {
  articles.value = response.data
})
</script>

<template>
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(article, index) in articles" :key="index">
        <th>{{ index + 1 }}</th>
        <td>{{ article.title }}</td>
        <td>{{ formatDate(article.created_at) }}</td>
      </tr>
    </tbody>
  </table>
</template>
