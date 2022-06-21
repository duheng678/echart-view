import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import BMap from '';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/bmap',
        name: 'BMap',
        component: () => import('../views/BMap.vue'),
    },
    {
        path: '/bmap2',
        name: 'BMap2',
        component: () => import('../views/BMap2.vue'),
    },
    {
        path: '/word',
        name: 'WordCloud',
        component: () => import('../views/WordCloud.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
