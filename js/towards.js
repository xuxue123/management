$(function () {
    setOption("line", {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [{
                name: '空气温度[℃]',
                textStyle:{color:'#fff'}
            },
            {
                name:'空气湿度[%]',
                textStyle:{color:'#fff'}
            }
        ]
        },
        grid: {
            bottom:'30%',
            left: '3%',
            right: '4%',
            containLabel: true
        },
        color:['#C1232B','#B5C334'],
        toolbox: {
            show: true,
            feature: {
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {},
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['11月26日', '11月27日', '11月28日', '11月29日', '11月30日', '12月1日', '12月2日', '12月3日'],
            // 控制网格线是否显示
            splitLine: {
                show: false,
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['white']
                }
            },
            //  改变x轴颜色
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            //  改变x轴字体颜色和大小
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: '12'
                },
            },
        },
        yAxis: {
            type: 'value',
            //  改变y轴颜色
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            //  改变y轴字体颜色和大小
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: '12'
                },
            },
        },
        series: [{
                name: '空气温度[℃]',
                type: 'line',
                stack: '摄氏度',
                areaStyle: {},
                itemStyle : {
                    normal : {
                      lineStyle:{
                        color:'#C1232B'
                      }
                    }
                    },
                data: [10.87, 11.37, 11.28, 12.08, 12, 12.42, 12.48, 12.37]
            },
            {
                name: '空气湿度[%]',
                type: 'line',
                stack: '百分比',
                areaStyle: {},
                itemStyle : {
                    normal : {
                      lineStyle:{
                        color:'#B5C334'
                      }
                    }
                    },
                data: [84.27, 84.13, 83.33, 85.91, 86.24, 87.88, 87.3, 82.63]
            },
        ]
    });
});

function setOption(ident, opt) {
    //基于准备好的dom,初始化echarts实例
    let myChart = echarts.init($('#' + ident)[0]);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(opt);
}
/*
 **功能:南丁格尔图
 **参数1：元素ID
 **参数2：配置项设置
 */
function setOption(ident, opt) {
    //基于准备好的dom,初始化echarts实例
    let myChart = echarts.init($('#' + ident)[0]);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(opt);
}