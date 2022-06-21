<template>
    <div>
        <common-card title="累计订单量" value="2,157,420">
            <template>
                <v-chart :options="getOptions()" />
                <!-- <div id="total-orders-chart"></div> -->
            </template>
            <template v-slot:footer>
                <span>昨日订单量</span>
                <span class="money">800，000</span>
            </template>
        </common-card>
    </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin';

export default {
    mixins: [commonCardMixin],
    methods: {
        getOptions() {
            return {
                grid: { top: 0, bottom: 0, left: 0, right: 0 },
                xAxis: {
                    type: 'category',
                    show: false,
                    boundaryGap: false,
                },
                yAxis: { show: false },
                series: [
                    {
                        type: 'line',
                        data: [
                            324, 456, 784, 123, 456, 124, 456, 784, 123, 456, 124, 456, 784, 123,
                            456,
                        ],
                        areaStyle: {
                            color: 'purple',
                        },
                        lineStyle: { width: 0 },
                        itemStyle: {
                            opacity: 0,
                        },
                        smooth: true,
                    },
                ],
            };
        },
    },
};
</script>

<style lang="less" scoped>
.echarts {
    width: 100%;
    height: 100%;
}
#total-orders-chart {
    height: 100%;
    width: 100%;
}
span {
    font-size: 12px;
}
.money {
    color: #000;
    margin-left: 5px;
    font-weight: 700;
}
</style>
