<template>
    <!-- 首頁 / echarts圖表 -->
    <div class="charts">
        <div ref="chart" id="main" class="charts_div"></div>
    </div>
</template>

<script>
export default {
    props:['type'], //傳入echarts類型
   data(){
       return{
    
       }
   },
    mounted(){
        this.init();
   },
   methods:{
     //引入echarts
     init(){
        // 基于准备好的dom，初始化echarts实例
        //this.$echarts - main.js全局引入
        // var myChart = this.$echarts.init(this.$refs.chart);

        //因為全局引入echarts dom無法獲取 - 改用require方式引入 echarts
        let echarts = require('echarts')
        let myChart = echarts.init(this.$refs.chart)

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts圖表'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: this.type, //接收父層傳入props的echarts類型
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
     }
   }
}
</script>

<style scoped>
/* ------------------------------
        echart 区块
------------------------------ */
.charts{
    overflow:hidden;
}
.charts_div{
    width:100%;
    height:200px;
}
</style>