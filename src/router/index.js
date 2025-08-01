import { createRouter, createWebHistory } from 'vue-router'
import FormBuilderPage from '../views/FormBuilderPage.vue'
import EmbedPage from '../embed/EmbedPage.vue'
import TestEmbedPage from '../views/TestEmbedPage.vue'

const routes = [
    {
        path: '/',
        name: 'FormBuilder',
        component: FormBuilderPage
    },
    {
        path: '/embed/:id',
        name: 'EmbedForm',
        component: EmbedPage,
        props: true
    },
    {
        path: '/test-embed-page',
        name: 'TestEmbedPage',
        component: TestEmbedPage,
    },
    {
        path: '/submit',
        name: 'Submit',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
