<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utilities/axios'
import Header from '@/components/Header.vue'
import ConfirmationModal from '@/components/ConfirmationModal.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const id = useRoute().params.id;
interface Article {
  title: string,
  content: string,
  image: File | null,
  image_url?: string | null
  image_delete_flg?: boolean
};
const input = ref<Article>({ title: '', content: '', image: null });
let img: any = null;
let blobURL: string | null | undefined = '';
(async () => {
  await axios.get(`/articles/${id}`).then(response => {
    input.value = response.data
    img = document.getElementById('image')
    img.src = blobURL = input.value.image_url
  })
})();

const setImage = (event: any) => {
  input.value.image = event.target.files[0]
  if (input.value.image !== null) {
    blobURL = URL.createObjectURL(input.value.image)
  }
  img.src = blobURL
  input.value.image_delete_flg = false
}
const deleteImage = () => {
  input.value.image = null
  img.src = blobURL = ''
  input.value.image_delete_flg = true
}

const router = useRouter()
const errorRef = ref()
const toDetail = () => { router.push({ name: 'article_detail', params: { id } }) }
const onUpdate = () => {
  hideModal()
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  axios.patch(`/articles/${id}`, input.value, config).then(() => {
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
    <div v-show="blobURL">
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
        <button v-if="blobURL" class="button is-danger is-light" @click="deleteImage">Delete</button>
      </label>
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

<style scoped>
#image {
  max-height: 180px;
}
.file button {
  margin-left: 0.75em
}
</style>
