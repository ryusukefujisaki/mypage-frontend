<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { titleFromRouteName } from '@/utilities/displayHelper'

const props = defineProps({ title: null })
const title = computed(() => {
  return props.title || titleFromRouteName(useRoute().name)
})
</script>

<template>
  <div class="level">
    <div class="level-left">
      <p class="level-item is-size-4 has-text-weight-medium">{{ title }}</p>
    </div>
    <slot />
  </div>
  <hr>
</template>
