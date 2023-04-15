<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utilities/axios'
import Header from '@/components/Header.vue';
import ConfirmationModal from '@/components/ConfirmationModal.vue'
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
  hideModal()
  axios.delete(`/articles/${id}`).then(() => {
    router.push({ name: 'article_list' })
  })
}

const doesShowModal = ref<boolean>(false)
const showModal = () => {
  doesShowModal.value = true
}
const hideModal = () => {
  doesShowModal.value = false
}
</script>

<template>
  <Header :title="articleDetail.title">
    <div class="level-right">
      <button class="level-item button is-primary is-light" @click="toUpdate">Update</button>
      <button class="level-item button is-danger is-light" @click="showModal">Delete</button>
    </div>
  </Header>
  <div>{{ articleDetail.content }}</div>
  <br>
  <p>Created At: {{ formatDate(articleDetail.created_at) }}</p>
  <p>Updated At: {{ formatDate(articleDetail.updated_at) }}</p>
  <ConfirmationModal :isActive="doesShowModal" @yes="onDelete" @no="hideModal" />
</template>
