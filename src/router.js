import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'function',
            component: () => import('./views/Function.vue')
        },
        {
            path: '/funDetail',
            name: 'funDetail',
            component: () => import('./views/funDetail.vue')
        },
        {
            path: '/overAll',
            name: 'overAll',
            component: () => import('./views/overAll.vue')
        },
        {
            path: '/overDetail',
            name: 'overDetail',
            component: () => import('./views/overDetail.vue')
        },
        {
            path: '/policystatistics',
            name: 'policystatistics',
            component: () => import('./views/PolicyStatistics.vue')
        },
        {
            path: '/policyscreening',
            name: 'policyscreening',
            component: () => import('./views/PolicyScreening.vue')
        },
        {
            path: '/policysure',
            name: 'policysure',
            component: () => import('./views/PolicySure.vue')
        }
    ]
})
