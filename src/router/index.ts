import Vue from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import ArticleList from '@/pages/article/ArticleList.vue'
import ArticleDetail from '@/pages/article/ArticleDetail.vue'
import ArticleRegister from '@/pages/article/ArticleRegister.vue'
import ArticleUpdate from '@/pages/article/ArticleUpdate.vue'
import FrontendFramework from '@/pages/frontend_framework/FrontendFramework.vue'
import BackendFramework from '@/pages/backend_framework/BackendFramework.vue'
import CokieTheClown from '@/pages/cokie_the_clown/CokieTheClown.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'article_list' }
  },
  {
    path: '/articles',
    name: 'article_list',
    component: ArticleList
  },
  {
    path: '/articles/:id',
    name: 'article_detail',
    component: ArticleDetail
  },
  {
    path: '/articles/register',
    name: 'article_register',
    component: ArticleRegister
  },
  {
    path: '/articles/:id/update',
    name: 'article_update',
    component: ArticleUpdate
  },
  {
    path: '/cokie_the_clown',
    name: 'cokie_the_clown',
    component: CokieTheClown
  },
  {
    path: '/frontend_framework',
    name: 'frontend_framework',
    component: FrontendFramework
  },
  {
    path: '/backend_framework',
    name: 'backend_framework',
    component: BackendFramework
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes // = routes: routes
})

export default router
