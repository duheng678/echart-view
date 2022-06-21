<template>
    <div class="home">
        <top-view />
        <sales-view />
        <bottom-view />
        <map-view />
    </div>
</template>

<script>
import TopView from '@/components/TopView';
import BottomView from '@/components/BottomView';
import SalesView from '@/components/SalesView';
import MapView from '@/components/MapView';
import { getWordCloud, getMapScatter, getData } from '@/api/main/home';

export default {
    name: 'home',
    components: {
        TopView,
        SalesView,
        BottomView,
        MapView,
    },
    data() {
        return {
            reportData: null,
            mapScatterData: null,
            wordCloudData: null,
        };
    },
    mounted() {
        getWordCloud().then(res => {
            this.wordCloudData = res;
        });
        getMapScatter().then(res => {
            this.mapScatterData = res;
        });
        getData().then(res => {
            this.reportData = res;
            console.log(res);
        });
    },
    methods: {
        getReportData() {
            return this.reportData;
        },
        getWordCloudData() {
            return this.wordCloudData;
        },
        getMapScatterData() {
            return this.mapScatterData;
        },
    },
    provide() {
        return {
            getReportData: this.getReportData,
            getWordCloudData: this.getWordCloudData,
            getMapScatterData: this.getMapScatterData,
        };
    },
};
</script>
<style scope lang="less">
.home {
    width: 100%;
    // height: 100%;
    background: #eee;
    padding: 20px;
    box-sizing: border-box;
}
</style>
