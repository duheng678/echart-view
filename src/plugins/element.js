import Vue from 'vue';
import {
    Card,
    Row,
    Col,
    Menu,
    MenuItem,
    RadioGroup,
    RadioButton,
    DatePicker,
    Table,
    TableColumn,
    Pagination,
} from 'element-ui';

const ElComs = [
    Card,
    Row,
    Col,
    Menu,
    MenuItem,
    RadioGroup,
    RadioButton,
    DatePicker,
    Table,
    TableColumn,
    Pagination,
];
// Vue.use(Card);
// ElComs.forEach(item => Vue.use(item));
for (let i of ElComs) {
    Vue.use(i);
}
