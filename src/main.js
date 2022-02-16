import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'



const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    }
]

const router = createRouter({
    routes,
    history: createWebHistory("http://localhost:8080")
})
createApp(App).use(router).mount('#app')