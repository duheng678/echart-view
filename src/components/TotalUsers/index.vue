<template>
    <div>
        <common-card title="累计用户数" value="88，888，888">
            <template>
                <div id="total-users-chart" :style="{ width: '100%', height: '100%' }"></div>
            </template>
            <template v-slot:footer>
                <div class="total-users-footer">
                    <span>日同比</span>
                    <span class="emphasis">8.73%</span>
                    <div class="increment"></div>
                    <span class="gutter">月同比</span>
                    <span class="emphasis">35.8%</span>

                    <div class="decrement"></div>
                </div>
            </template>
        </common-card>
    </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin';

export default {
    mixins: [commonCardMixin],
    mounted() {
        const chartDom = document.getElementById('total-users-chart');
        const chart = this.$echarts.init(chartDom);
        chart.setOption({
            grid: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            xAxis: {
                type: 'value',
                show: false,
            },
            yAxis: {
                type: 'category',
                show: false,
            },
            series: [
                {
                    type: 'bar',
                    stack: '总量',
                    data: [200],
                    barWidth: 10,
                    itemStyle: {
                        color: '#45c946',
                    },
                },
                {
                    type: 'bar',
                    stack: '总量',

                    data: [150],

                    itemStyle: {
                        color: '#eee',
                    },
                },
                {
                    type: 'custom',
                    // stack: '总量',
                    data: [200],
                    renderItem: (params, api) => {
                        console.log(params, api);
                        const value = api.value(0);
                        const endPoint = api.coord([value, 0]);
                        console.log(endPoint);
                        return {
                            type: 'group',
                            position: endPoint,
                            children: [
                                {
                                    type: 'path',
                                    shape: {
                                        d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                                        x: 0,
                                        y: 5,
                                        width: 10,
                                        height: 10,
                                    },
                                    style: {
                                        fill: '#45c946',
                                    },
                                    layout: 'cover',
                                },
                                {
                                    type: 'path',
                                    shape: {
                                        d: 'M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z',
                                        x: 0,
                                        y: -15,
                                        width: 10,
                                        height: 10,
                                    },
                                    style: {
                                        fill: '#45c946',
                                    },
                                    layout: 'cover',
                                },
                            ],
                        };
                    },
                },
            ],
        });
    },
};
</script>

<style lang="less" scoped>
.total-users-footer {
    display: flex;
    align-items: center;
}
.gutter {
    margin-left: 20px;
}
</style>
