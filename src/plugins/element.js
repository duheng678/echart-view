import Vue from 'vue';
import { Card, Row, Col } from 'element-ui';

const ElComs = [Card, Row, Col];
// Vue.use(Card);
// ElComs.forEach(item => Vue.use(item));
for (let i of ElComs) {
    Vue.use(i);
}
