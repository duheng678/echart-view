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
export default {
    name: 'HomeView',
    components: {
        TopView,
        SalesView,
        BottomView,
        MapView,
    },
};
</script>
<style scope lang="less">
.home {
    width: 100%;
    height: 100%;
    background: #eee;
    padding: 20px;
    box-sizing: border-box;
}
</style>
