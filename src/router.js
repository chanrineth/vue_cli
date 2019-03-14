import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact'
import User from './views/User'
import Show_user from './views/Show_user'
import error404 from './views/errors/error404'
import Primary from './layouts/Primary'


import Index from './views/post/Index'
import Show from './views/post/Show'



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            name: 'primary',
            component: Primary,
            redirect:'/',
            children: [

                {
                    path: '/',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/about',
                    name: 'about',
                    component: About
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: Contact
                },
                {
                    path: '/user',
                    name: 'user',
                    component: User
                },
                {
                    path: '/user/show/:id',
                    name: 'showuser',
                    component: Show_user
                },
                {
                    path: '/post/list',
                    name: 'listPost',
                    component: Index
                },
                {
                    path: '/post/show/:id',
                    name: 'show-post',
                    component: Show
                },


            ]
        },

        {
            path: '*',
            name: 'error404',
            component: error404
        }

    ]
})
