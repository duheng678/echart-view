export default {
    methods: {
        formatNumber(v) {
            const reg = /\d{1,3}(?=(\d{3})+$)/g;
            return `${v}`.replace(reg, '$&,');
        },
    },
    computed: {
        reportData() {
            return this.getReportData();
        },
    },
    inject: ['getReportData', 'getWordCloudData', 'getMapScatterData'],
};
