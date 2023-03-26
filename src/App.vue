<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
</script>

<template>
  <section class="main-content columns">
    <SideMenu></SideMenu>
    <div class="column section">
      <router-view></router-view>
    </div>
  </section>
</template>

<style>
@import '../node_modules/bulma/css/bulma.css';

#app {
  height: 100vh;
}

.main-content {
  height: 100%;
}
</style>
