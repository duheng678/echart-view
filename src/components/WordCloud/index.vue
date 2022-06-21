<template>
    <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
export default {
    inject: ['getWordCloudData'],

    data() {
        // console.log(this.getWordCloudData);
        return {
            chartData: {
                columns: ['name', 'value'],
                rows: null,
            },
            chartSettings: {
                color: ['rgba(97,216,0,0.7)', 'rgba(204,178,26,.7)'],
            },
        };
    },
};
</script>

<style lang="less" scoped></style>
