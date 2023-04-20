<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/utilities/axios'
import Header from '@/components/Header.vue'
import { formatDate } from '@/utilities/displayHelper'

interface Article { id: number, title: string, image_url: string | null, created_at: string }
const articles = ref<Article[]>([])
axios.get('/articles').then(response => {
  articles.value = response.data
})

const router = useRouter()
const toDetail = (id: number): void => {
  router.push({ name: 'article_detail', params: { id } })
}
const toRegister = () => { router.push({ name: 'article_register' }) }
</script>

<template>
  <Header>
    <div class="level-right">
      <button class="level-item button is-primary is-light" @click="toRegister">Register</button>
    </div>
  </Header>
  <table class="table is-hoverable is-fullwidth">
    <thead class="has-background-success-light">
      <tr>
        <th>#</th>
        <th></th>
        <th>Title</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(article, index) in articles" :key="index">
        <tr class="to-detail" @click="toDetail(article.id)">
          <th>{{ index + 1 }}</th>
          <td><img v-if="article.image_url" :src="article.image_url" /></td>
          <td>{{ article.title }}</td>
          <td>{{ formatDate(article.created_at) }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style scoped>
tbody tr {
  height: 58.5px;
}
img {
  width: 36px;
  height: 36px;
}
.to-detail {
  cursor: pointer;
}
</style>
