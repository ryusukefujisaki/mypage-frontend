<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({ title: null })
const titleFromRouteName = (routeName: any) => {
  const parts = routeName.split('_')
  return parts.reduce((carry: string, part: string, index: number) => {
    if (index > 0) {
      carry += ' '
    }
    return carry + part[0].toUpperCase() + part.slice(1);
  }, '');
}
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
