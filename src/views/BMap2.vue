<template>
    <ve-bmap :settings="chartSettings" :title="title" :series="series" height="100%"></ve-bmap>
</template>

<script>
const testPoint = [
    {
        name: '海门',
        value: [121.15, 31.89, 80],
    },
    {
        name: '南京',
        value: [118.78, 32.04, 100],
    },
];
const testPoint2 = [
    {
        name: '北京',
        value: [116.402751, 39.915351, 88],
    },
    {
        name: '驻马店',
        value: [114.038528, 33.012514, 66],
    },
];
export default {
    data() {
        return {
            title: {
                text: '慕课外卖销售数据大盘',
                subtext: '销售趋势统计',
                sublink: 'https://www.imooc.com',
                left: 'center',
            },
            chartSettings: {
                key: 'G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb',
                bmap: {
                    center: [104.114129, 37.550339],
                    zoom: 5,
                    roam: false,
                    // mapStyle: {
                    //     styleJson: [
                    //         {
                    //             featureType: 'water',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 color: '#d1d1d1',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'land',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 color: '#f3f3f3',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'railway',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 visibility: 'off',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'highway',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 color: '#fdfdfd',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'highway',
                    //             elementType: 'labels',
                    //             stylers: {
                    //                 visibility: 'off',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'arterial',
                    //             elementType: 'geometry',
                    //             stylers: {
                    //                 color: '#fefefe',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'arterial',
                    //             elementType: 'geometry.fill',
                    //             stylers: {
                    //                 color: '#fefefe',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'poi',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 visibility: 'off',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'green',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 visibility: 'off',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'subway',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 visibility: 'off',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'manmade',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 color: '#d1d1d1',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'local',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 color: '#d1d1d1',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'arterial',
                    //             elementType: 'labels',
                    //             stylers: {
                    //                 visibility: 'off',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'boundary',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 color: '#fefefe',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'building',
                    //             elementType: 'all',
                    //             stylers: {
                    //                 color: '#d1d1d1',
                    //             },
                    //         },
                    //         {
                    //             featureType: 'label',
                    //             elementType: 'labels.text.fill',
                    //             stylers: {
                    //                 color: '#999999',
                    //             },
                    //         },
                    //     ],
                    // },
                },
            },
            series: [
                {
                    name: '销售额',
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: testPoint,
                    encode: {
                        value: 2,
                    },
                    itemStyle: {
                        color: 'purple',
                    },
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    label: {
                        show: false,
                        position: 'right',
                        formatter: v => {
                            return `${v.data.name}-${v.data.value[2]}`;
                        },
                    },
                    emphasis: {
                        label: { show: true },
                    },
                },
                {
                    name: 'top 2',
                    type: 'effectScatter',
                    coordinateSystem: 'bmap',
                    data: testPoint2,
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    encode: {
                        value: 2,
                    },
                    label: {
                        formatter: v => {
                            return `${v.data.name}-${v.data.value[2]}`;
                        },
                        position: 'right',
                        show: false,
                    },
                    emphasis: {
                        label: {
                            show: true,
                        },
                    },
                },
            ],
        };
    },
};
</script>

<style lang="scss"></style>
