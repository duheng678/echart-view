<template>
    <div id="container"></div>
</template>

<script>
import 'echarts-wordcloud';
export default {
    mounted() {
        const data = [
            {
                name: 'moon',
                value: 30,
            },
            {
                name: 'sky',
                value: 90,
            },
            {
                name: 'sister',
                value: 100,
            },
            {
                name: 'simple',
                value: 80,
            },
            {
                name: 'complex',
                value: 60,
            },
        ];
        const chart = this.$echarts.init(document.getElementById('container'));
        console.log(chart);
        chart.setOption({
            grid: { top: 0, right: 0, bottom: 0, left: 0 },
            series: [
                {
                    type: 'wordCloud',
                    shape: 'circle',
                    left: 'center',
                    top: 'center',
                    width: '70%',
                    height: '80%',
                    data: data,
                    textStyle: {
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        // Color can be a callback function or a color string
                        color: function () {
                            // Random color
                            return (
                                'rgb(' +
                                [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                ].join(',') +
                                ')'
                            );
                        },
                    },
                    emphasis: {
                        focus: 'self',

                        textStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333',
                        },
                    },
                },
            ],
        });
    },
};
</script>

<style lang="less" scoped>
#container {
    width: 100%;
    height: 100%;
    border: 1px solid red;
}
</style>
