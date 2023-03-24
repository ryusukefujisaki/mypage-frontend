import Vue from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import ArticleList from '@/pages/article/ArticleList.vue'
import FrontendFramework from '@/pages/frontend_framework/FrontendFramework.vue'
import BackendFramework from '@/pages/backend_framework/BackendFramework.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'article_list',
    component: ArticleList
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
