<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue'
import axios from 'axios'

const githubRequest = axios.create({
  baseURL: 'https://api.github.com/users/ryusukefujisaki'
})

const own = ref<{ url: string }>({ url: '' });
githubRequest.get('').then((response) => {
  own.value.url = response.data.html_url
});
const followings = ref<Array<{ login: string, avatar_url: string, html_url: string }>>([]);
githubRequest.get('/following').then((response) => {
  followings.value = response.data
})
</script>

<template>
  <Header title="It's Me"></Header>
  <table class="its-me-table">
    <tr>
      <td>
        <img class="its-me" src="/its_me.jpg" />
      </td>
      <td>
        <div class="is-size-5">
          <p>Ryusuke Fujisaki</p>
          <a v-bind:href="`${own.url}`" target="_blank">{{ own.url }}</a>
        </div>
      </td>
    </tr>
  </table>
  <hr>
  <p class="subtitle is-size-5">Engineers I'm following</p>
  <table class="following-table">
    <tr v-for="(following, index) in followings" :key="index">
      <td>
        <img class="following" v-bind:src="`${following.avatar_url}`" />
      </td>
      <td>
        <p>{{ following.login }}</p>
        <a v-bind:href="`${following.html_url}`" target="_blank">{{ following.html_url }}</a>
      </td>
    </tr>
  </table>
</template>

<style scoped>
table {
  width: 100%;
}
.its-me {
  width: 180px;
  height: 180px;
}
.its-me-table > tr > td:first-child {
  width: 200px;
}
.its-me-table > tr > td:last-child {
  text-align: center;
  vertical-align: middle;
}
.following {
  width: 50px;
  height: 50px;
}
.following-table tr {
  border-bottom: solid 2px whitesmoke;
}
.following-table td {
  padding: 6px 0;
}
</style>
