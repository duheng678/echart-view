<template>
    <div id="container"></div>
</template>

<script>
// import 'echarts-liquidfill';
export default {
    mounted() {
        const data = [0.68, 0.7, 0.2];
        const chart = this.$echarts.init(document.getElementById('container'));
        chart.setOption({
            grid: { top: 0, bottom: 0, right: 0, left: 0 },
            series: [
                {
                    type: 'liquidFill',
                    data,
                    color: ['red', 'blue', 'purple'],
                    radius: '80%',
                    itemStyle: {
                        opacity: 0.6,
                    },
                    amplitude: 10,
                    backgroundStyle: {
                        color: 'yellow',
                        borderWidth: 5,
                        borderColor: 'black',
                    },
                    outline: {
                        show: true,
                        borderDistance: 2,
                    },
                },
            ],
            emphasis: {
                itemStyle: {
                    opacity: 0.9,
                },
            },
            label: {
                normal: {
                    formatter: v => {
                        console.log(v);
                        return v.data.value * 100;
                    },
                },
            },
        });
    },
};
</script>

<style lang="less" scoped>
#container {
    width: 100%;
    height: 100%;
}
</style>
