import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        redirect: '/paineleditor'
    },
    {
        name: 'paineleditor',
        path: '/paineleditor',
        component: ()=> import('../pages/PainelEditor.vue')
    }
]

const route = createRouter({
    history: createWebHistory(),
    routes
})

export default route