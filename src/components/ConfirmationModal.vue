<script setup lang="ts">
const props = defineProps({ isActive: Boolean })
const emits = defineEmits(['yes', 'no'])

const onYes = () => {
  emits('yes')
}
const onNo = () => {
  emits('no')
}
</script>

<template>
  <div class="modal" v-bind:class="{'is-active':isActive}">
    <div class="modal-background" @click="onNo"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Confirmation</p>
        <button class="delete" aria-label="close" @click="onNo" />
      </header>
      <section class="modal-card-body">
        <div class="level">
          <div class="level-item">
            <button class="button is-primary" @click="onYes">Yes</button>
          </div>
          <div class="level-item">
            <button class="button is-light" @click="onNo">No</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.modal-card {
  width: 480px;
}
.modal-card-body {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.modal-card-body button {
  width: 50%;
}
</style>
