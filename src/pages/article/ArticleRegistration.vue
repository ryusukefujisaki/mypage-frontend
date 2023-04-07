<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/utilities/axios'
import ErrorMessage from '@/components/ErrorMessage.vue'

interface Article { title: string, content: string }
const input = ref<Article>({ title: '', content: '' })

const router = useRouter()
const errorRef = ref()
const toList = () => { router.push({ name: 'article_list' }) }
const onSubmit = () => {
  axios.post('/articles', input.value).then(() => {
    toList() }
  ).catch(error => {
    errorRef.value = error
  })
}
const cleanError = () => {
  errorRef.value = null
}
</script>

<template>
  <p class="is-size-4 has-text-weight-medium">Article Registration</p>
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
      <button class="button is-primary" @click="onSubmit">Submit</button>
    </div>
    <div class="control">
      <button class="button is-light" @click="toList">Cancel</button>
    </div>
  </div>
</template>
