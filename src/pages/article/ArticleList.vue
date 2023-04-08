<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/utilities/axios'
import { formatDate } from '@/utilities/displayHelper'

interface Article { id: number, title: string, created_at: string }
const articles = ref<Article[]>([])
axios.get('/articles').then(response => {
  articles.value = response.data
})

const router = useRouter()
const toDetail = (id: number): void => {
  router.push({ name: 'article_detail', params: { id } })
}
const toRegistration = () => { router.push({ name: 'article_registration' }) }
</script>

<template>
  <div class="level">
    <div class="level-left">
      <p class="level-item is-size-4 has-text-weight-medium">Article List</p>
    </div>
    <div class="level-right">
      <button class="level-item button is-primary is-light" @click="toRegistration">Article Registration</button>
    </div>
  </div>
  <hr>
  <table class="table is-hoverable is-fullwidth">
    <thead class="has-background-success-light">
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(article, index) in articles" :key="index">
        <tr class="to-detail" @click="toDetail(article.id)">
          <th>{{ index + 1 }}</th>
          <td>{{ article.title }}</td>
          <td>{{ formatDate(article.created_at) }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style scoped>
.to-detail {
  cursor: pointer;
}
</style>
