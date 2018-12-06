 
$(function () {
    setOption("ring", {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['报警比例','正常'],
            textStyle:{color:'#fff'}
        },
        color:['#C1232B','#00ff00'],
        series: [
            {
                name:'报警记录',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:10, name:'报警比例'},
                    {value:610, name:'正常'},
                ]
            }
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