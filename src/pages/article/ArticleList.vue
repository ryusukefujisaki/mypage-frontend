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
    <p class="is-size-4 has-text-weight-medium">Article List</p>
    <button class="button is-primary level-left" @click="toRegistration">Article Registration</button>
  </div>
  <hr>
  <table class="table is-striped is-hoverable is-fullwidth">
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
