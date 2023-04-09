<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utilities/axios'
import { formatDate } from '@/utilities/displayHelper'

const id = useRoute().params.id
interface Article { title: string, content: string, created_at: string, updated_at: string }
const articleDetail = ref<Article>({
  title: '',
  content: '',
  created_at: '',
  updated_at: ''
})
axios.get(`/articles/${id}`).then(response => {
  articleDetail.value = response.data
})

const router = useRouter()
const toUpdate = () => { router.push({ name: 'article_update', params: { id } }) }
const onDelete = () => {
  axios.delete(`/articles/${id}`).then(() => {
    router.push({ name: 'article_list' })
  })
}
</script>

<template>
  <div class="level">
    <div class="level-left">
      <p class="level-item is-size-4 has-text-weight-medium">{{ articleDetail.title }}</p>
    </div>
    <div class="level-right">
      <button class="level-item button is-primary is-light" @click="toUpdate">Update</button>
      <button class="level-item button is-danger is-light" @click="onDelete">Delete</button>
    </div>
  </div>
  <hr>
  <div>{{ articleDetail.content }}</div>
  <br>
  <p>Created At: {{ formatDate(articleDetail.created_at) }}</p>
  <p>Updated At: {{ formatDate(articleDetail.updated_at) }}</p>
</template>
