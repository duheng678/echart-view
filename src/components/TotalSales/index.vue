<template>
    <div>
        <common-card title="累计销售额" :value="'￥' + formatNumber(reportData.salesToday)">
            <template>
                <div class="compare-wrapper">
                    <div class="compare">
                        <span>日同比</span>
                        <span class="emphasis">{{ reportData.salesGrowthLastDay }}%</span>
                        <div class="increment"></div>
                    </div>
                    <div class="compare">
                        <span>月同比</span>
                        <span class="emphasis">{{ reportData.salesGrowthLastMonth }}%</span>
                        <div class="decrement"></div>
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <span>昨日销售额</span>
                <span class="money">￥{{ reportData.salesLastDay }}</span>
            </template>
        </common-card>
    </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin';
import commonDataMixin from '@/mixins/commonDataMixin';
export default {
    mixins: [commonCardMixin, commonDataMixin],

    mounted() {
        console.log(this.formatNumber(10000000));
    },
};
</script>

<style lang="less" scoped>
.compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare {
        // background: yellow;
        display: flex;
        align-items: center;
        height: 50%;
        font-size: 12px;
    }
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
