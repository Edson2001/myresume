import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        redirect: '/editor'
    },
    {
        name: 'editor',
        path: '/editor',
        component: ()=> import('../pages/Editor.vue')
    }
]

const route = createRouter({
    history: createWebHistory(),
    routes
})

export default route