<template>
    <div>
        <common-card title="累计销售额" value="￥ 154，15">
            <template>
                <div class="compare-wrapper">
                    <div class="compare">
                        <span>日同比</span>
                        <span class="emphasis">7.33%</span>
                        <div class="increment"></div>
                    </div>
                    <div class="compare">
                        <span>月同比</span>
                        <span class="emphasis">88.66%</span>
                        <div class="decrement"></div>
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <span>昨日销售额</span>
                <span class="money">￥ 345，345</span>
            </template>
        </common-card>
    </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin';

export default {
    mixins: [commonCardMixin],
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
