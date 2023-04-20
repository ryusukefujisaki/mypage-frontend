<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/utilities/axios'
import Header from '@/components/Header.vue'
import ConfirmationModal from '@/components/ConfirmationModal.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

interface Article { title: string, content: string, image: File | null }
const input = ref<Article>({ title: '', content: '', image: null })
let img: any = null
let blobURL = ''
const setImage = (event: any) => {
  event.preventDefault()
  input.value.image = event.target.files[0]
  if (input.value.image !== null) {
    blobURL = URL.createObjectURL(input.value.image)
  }
  img = document.getElementById('image')
  img.src = blobURL
}
const deleteImage = () => {
  input.value.image = null
  blobURL = ''
  img.src = ''
}

const router = useRouter()
const errorRef = ref()
const toList = () => { router.push({ name: 'article_list' }) }
const onSubmit = () => {
  hideModal()
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  axios.post('/articles', input.value, config).then(() => {
    toList() }
  ).catch(error => {
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
  <Header></Header>
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
  <div class="field">
    <label class="label">Image</label>
    <div v-show="input.image">
      <a v-bind:href="`${blobURL}`" target="_blank">
        <img id="image" />
      </a>
    </div>
    <div class="file">
      <label class="file-label">
        <input class="file-input" type="file" @change="setImage" />
        <span class="file-cta">
          <span class="file-icon">
            <font-awesome-icon icon="fas fa-upload" />
          </span>
          <span class="file-label">
            Choose an image file...
          </span>
        </span>
        <span v-if="input.image" class="file-name">{{ input.image.name }}</span>
        <button v-if="input.image" class="button is-danger is-light" @click="deleteImage">Delete</button>
      </label>
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-primary" @click="showModal">Submit</button>
    </div>
    <div class="control">
      <button class="button is-light" @click="toList">Cancel</button>
    </div>
  </div>
  <ConfirmationModal :isActive="doesShowModal" @yes="onSubmit" @no="hideModal" />
</template>

<style scoped>
#image {
  max-height: 180px;
}
.file button {
  margin-left: 0.75em
}
</style>
