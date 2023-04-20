<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utilities/axios'
import Header from '@/components/Header.vue';
import ConfirmationModal from '@/components/ConfirmationModal.vue'
import { formatDate } from '@/utilities/displayHelper'

const id = useRoute().params.id
interface Article { title: string, content: string, image_url: string | null, created_at: string, updated_at: string }
const articleDetail = ref<Article>({
  title: '',
  content: '',
  image_url: null,
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
  <div v-if="articleDetail.image_url">
    <a v-bind:href="`${articleDetail.image_url}`" target="_blank">
      <img :src="articleDetail.image_url" />
    </a>
  </div>
  <div class="content">
    <pre>{{ articleDetail.content }}</pre>
  </div>
  <table>
    <tr>
      <td>Created At</td>
      <td>&nbsp;:&nbsp;</td>
      <td>{{ formatDate(articleDetail.created_at) }}</td>
    </tr>
    <tr>
      <td>Updated At</td>
      <td>&nbsp;:&nbsp;</td>
      <td>{{ formatDate(articleDetail.updated_at) }}</td>
    </tr>
  </table>
  <ConfirmationModal :isActive="doesShowModal" @yes="onDelete" @no="hideModal" />
</template>

<style scoped>
img {
  max-height: 280px;
}
.content {
  margin-top: 16px;
}
td:first-child {
  text-align: left;
}
</style>
