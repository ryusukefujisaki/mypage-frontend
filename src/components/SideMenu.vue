<script setup lang="ts">
import { ref } from 'vue';

const activeMenuNumber = ref<number>(0)
const setActiveMenuNumber = (menuNumber: number): void => {
  activeMenuNumber.value = menuNumber
}
</script>

<template>
  <aside class="column section menu has-background-dark is-one-fifth">
    <p class="menu-label has-text-white">Menu</p>
    <ul class="menu-list">
      <li>
        <router-link
            :to="{ name: 'my_page' }"
            :class="{ 'is-active': activeMenuNumber == 0 }" @click="setActiveMenuNumber(0)"
        >
          My Page
        </router-link>
      </li>
      <li>
        <router-link
            :to="{ name: 'article_list' }"
            :class="{ 'is-active': activeMenuNumber == 1 }" @click="setActiveMenuNumber(1)"
        >
          Articles
        </router-link>
      </li>
      <li>
        <router-link
            :to="{ name: 'cokie_the_clown' }"
            :class="{ 'is-active': activeMenuNumber == 2 }" @click="setActiveMenuNumber(2)"
        >
          Cokie the Clown
        </router-link>
      </li>
      <li>
        <router-link
            :to="{ name: 'frontend_framework' }"
            :class="{ 'is-active': activeMenuNumber == 3 }" @click="setActiveMenuNumber(3)"
        >
          Frontend Framework
        </router-link>
      </li>
      <li>
        <router-link
            :to="{ name: 'backend_framework' }"
            :class="{ 'is-active': activeMenuNumber == 4 }" @click="setActiveMenuNumber(4)"
        >
          Backend Framework
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.menu .menu-list a {
  color: gray;
}

.menu .menu-list a.is-active {
  color: white;
  background-color: mediumseagreen;
}
</style>
