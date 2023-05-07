import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
        },
    ],
    });