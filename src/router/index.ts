import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Index from '@/views/Index.vue'
import Recent from "@/views/Recent.vue";
import Profile from "@/views/Profile.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/recent',
        name: 'Recent',
        component: Recent
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
