import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element.js';
import './plugins/v-chart';
import * as Echarts from 'echarts';
import './assets/style/index.css';
import VueECharts from 'vue-echarts';
Vue.component('v-chart', VueECharts);

Vue.config.productionTip = false;
Vue.prototype.$echarts = Echarts;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
