<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
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
</script>

<template>
  <p class="is-size-4 has-text-weight-medium">{{ articleDetail.title }}</p>
  <hr>
  <div>{{ articleDetail.content }}</div>
  <br>
  <p>Created At: {{ formatDate(articleDetail.created_at) }}</p>
  <p>Updated At: {{ formatDate(articleDetail.updated_at) }}</p>
</template>
