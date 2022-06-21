<template>
    <div>
        <common-card title="今日交易用户数" value="66,666">
            <template>
                <!-- <div id="today-users-chart" :style="{ width: '100%', height: '100%' }"></div> -->
                <v-chart :options="getOptions()"></v-chart>
            </template>
            <template v-slot:footer>
                <span>退货率</span>
                <span class="money">5.14%</span>
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
                color: ['#3398DB'],
                grid: { top: 0, bottom: 0, left: 0, right: 0 },
                xAxis: {
                    type: 'category',
                    data: [
                        '00:00',
                        '01:00',
                        '02:00',
                        '03:00',
                        '04:00',
                        '05:00',
                        '06:00',
                        '07:00',
                        '08:00',
                        '09:00',
                        '10:00',
                        '11:00',
                        '12:00',
                        '13:00',
                        '14:00',
                        '15:00',
                    ],
                    show: false,
                },
                yAxis: { show: false },
                series: [
                    {
                        type: 'bar',
                        data: [
                            324, 456, 784, 123, 456, 124, 456, 784, 123, 456, 124, 456, 784, 123,
                            456,
                        ],
                        barWidth: '60%',
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
span {
    font-size: 12px;
}
.money {
    color: #000;
    margin-left: 5px;
    font-weight: 700;
}
</style>
