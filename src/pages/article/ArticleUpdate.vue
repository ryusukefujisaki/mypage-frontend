<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utilities/axios'
import ConfirmationModal from '@/components/ConfirmationModal.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const id = useRoute().params.id
interface Article { title: string, content: string }
const input = ref<Article>({ title: '', content: '' })
axios.get(`/articles/${id}`).then(response => {
  input.value = response.data
})

const router = useRouter()
const errorRef = ref()
const toDetail = () => { router.push({ name: 'article_detail', params: { id } }) }
const onUpdate = () => {
  hideModal()
  axios.patch(`/articles/${id}`, input.value).then(() => {
    toDetail()
  }).catch(error => {
    errorRef.value = error
  })
}
const cleanError = () => {
  errorRef.value = null
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
  <p class="is-size-4 has-text-weight-medium">Article Update</p>
  <hr>
  <ErrorMessage :error="errorRef" @delete="cleanError" />
  <div class="field">
    <label class="label">Title</label>
    <div class="control">
      <input class="input" type="text" v-model="input.title">
    </div>
  </div>
  <div class="field">
    <label class="label">Content</label>
    <div class="control">
      <textarea class="textarea" v-model="input.content" />
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-primary" @click="showModal">Update</button>
    </div>
    <div class="control">
      <button class="button is-light" @click="toDetail">Cancel</button>
    </div>
  </div>
  <ConfirmationModal :isActive="doesShowModal" @yes="onUpdate" @no="hideModal" />
</template>
