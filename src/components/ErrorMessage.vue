<script setup lang="ts">
const props = defineProps({ error: Object })
const emits = defineEmits(['delete'])
const onDelete = () => {
  emits('delete')
}
</script>

<template>
  <article v-if="error" class="message is-warning">
    <div class="message-header">
      <p>{{ error!.code }}</p>
      <button class="delete" aria-label="delete" @click="onDelete" />
    </div>
    <div class="message-body">
      {{ error!.message }}
    </div>
  </article>
</template>
