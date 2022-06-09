<template>
    <div class="bottom-view">
        <div class="view">
            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="title">关键词搜索</div>
                </template>
                <template>
                    <div class="chart-wrapper">
                        <div class="chart-inner">
                            <div class="chart">
                                <div class="chart-title">搜索用户数</div>
                                <div class="chart-data">66，666</div>
                                <v-chart :option="searchUserOption"></v-chart>
                            </div>

                            <div class="chart">
                                <div class="chart-title">搜索量</div>
                                <div class="chart-data">88，888</div>
                                <v-chart :option="searchNumberOption"></v-chart>
                            </div>
                        </div>
                        <div class="table-wrapper">
                            <el-table :data="tableData">
                                <el-table-column prop="rank" label="排名" />
                                <el-table-column prop="keyword" label="关键词" />
                                <el-table-column prop="count" label="总搜索量" />
                                <el-table-column prop="users" label="用户数" />
                                <el-table-column prop="range" label="" />
                            </el-table>
                            <el-pagination
                                layout="prev,pager,next"
                                :total="100"
                                :page-size="4"
                                background
                                @current-change="onPageChange"
                            ></el-pagination>
                        </div>
                    </div>
                </template>
            </el-card>
        </div>
        <div class="view">
            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="title-wrapper">
                        <div class="title">分类销售排行</div>
                        <div class="radio-wrapper">
                            <el-radio-group v-model="radioSelect">
                                <el-radio-button label="品类"></el-radio-button>
                                <el-radio-button label="商品"></el-radio-button>
                            </el-radio-group>
                        </div>
                    </div>
                </template>
                <template>
                    <v-chart :option="categoryOption"></v-chart>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchUserOption: {
                xAxis: { type: 'category', boundaryGap: false },
                yAxis: { show: false, min: 0, max: 310 },
                series: [
                    {
                        type: 'line',
                        areaStyle: {
                            color: 'rgba(95,187,255,.5)',
                        },
                        data: [100, 200, 140, 300, 280, 200, 50, 100, 160],
                        lineStyle: {
                            color: 'rgb(95,187,255)',
                        },
                        itemStyle: {
                            opacity: 0,
                        },
                        smooth: true,
                    },
                ],
                grid: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
            },
            searchNumberOption: {
                xAxis: { type: 'category', boundaryGap: false },
                yAxis: { show: false, min: 0, max: 310 },
                series: [
                    {
                        type: 'line',
                        areaStyle: {
                            color: 'rgba(95,187,255,.5)',
                        },
                        data: [100, 20, 140, 300, 280, 200, 50, 100, 160],
                        lineStyle: {
                            color: 'rgb(95,187,255)',
                        },
                        itemStyle: {
                            opacity: 0,
                        },
                        smooth: true,
                    },
                ],
                grid: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
            },
            tableData: [
                {
                    id: 1,
                    rank: 1,
                    keyword: '北京',
                    count: 100,
                    users: 90,
                    range: '90%',
                },
                {
                    id: 2,
                    rank: 2,
                    keyword: '北京',
                    count: 100,
                    users: 90,
                    range: '90%',
                },
                {
                    id: 3,
                    rank: 3,
                    keyword: '北京',
                    count: 100,
                    users: 90,
                    range: '90%',
                },
                {
                    id: 4,
                    rank: 4,
                    keyword: '北京',
                    count: 100,
                    users: 90,
                    range: '90%',
                },
            ],
            radioSelect: '品类',
            categoryOption: {},
        };
    },
};
</script>

<style lang="less" scoped>
.bottom-view {
    display: flex;
    margin-top: 20px;
    .view {
        flex: 1;
        // width: 50%;
        //     box-sizing: border-box;
        &:first-child {
            padding: 0 10px 0 0;
        }
        &:last-child {
            padding: 0 0px 0 10px;
        }
        .title-wrapper {
            display: flex;
            align-items: center;
            height: 60px;
            box-sizing: border-box;
            border-bottom: 1px solid #eee;
            font-size: 14px;
            font-weight: 500;
            padding: 0 0 0 20px;
            .radio-wrapper {
                flex: 1;
                display: flex;
                justify-content: flex-end;
                padding-right: 20px;
            }
        }
        .chart-wrapper {
            display: flex;
            flex-direction: column;
            height: 452px;
            .chart-inner {
                display: flex;
                padding: 0 10px;
                margin-top: 20px;
                .chart {
                    flex: 1;
                    padding: 0 10px;
                    .chart-title {
                        font-size: 14px;
                        color: #999;
                    }
                    .chart-data {
                        font-size: 22px;
                        color: #333;
                        font-weight: 500;
                        letter-spacing: 2px;
                    }
                    .echarts {
                        height: 50px;
                    }
                }
            }
            .table-wrapper {
                flex: 1;
                margin-top: 20px;
                padding: 0 20px 20px;

                .el-pagination {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 15px;
                }
            }
        }
    }
}
</style>
