$(function(){
   table()

})
 //表格部分
function table(){
    $('#table').bootstrapTable({
        method: "get",
        url: "data",
        striped: true,
        singleSelect: false,
        dataType: "json",
        pagination: true, //分页
        pageSize: 10,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams: null,
        sidePagination: "server", //服务端请求
        columns: [
            {
                title: "",
                field: 'ch',
                align: 'center',
                width:'30px',
                valign: 'middle',
                formatter:function(val,row){

                    return '<div class="cliclRed"></div>';
                }

            },
            {
                title: "设备编号",
                field: 'ID',
                align: 'center',
                width:'50px',
                valign: 'middle'
            },
            {
                title: 'MAC地址',
                field: 'MAC',
                align: 'center',
                width:'150px',
                valign: 'middle'
            },
            {
                title: '设备名称',
                field: 'name',
                align: 'center',
                width:'150px',
                valign: 'middle'
            },
            {
                title: '传感器类型',
                field: 'type',
                align: 'center',
                width:'150px',
                valign: 'middle'
            },
            {
                title: '数据状态',
                field: 'state',
                align: 'center',
                width:'80px',
                valign: 'middle'
            },
            {
                title: '历史数据',
                field: 'data',
                align: 'center',
                width:'270px',
                valign: 'middle'
            },
            {
                title: '数据时间',
                field: 'time',
                align: 'center',
                width:'150px',
                valign: 'middle'
            },
            {
                title: '所在区域',
                field: 'area',
                align: 'center',
                width:'260px',
                valign: 'middle'
            },
        ],
        data:[
            {
                ID:1,
                type:5552,
                state:4444,
            },
            {
               ID:1,
               type:5552,
               state:4444,
           },
           {
               ID:1,
               type:5552,
               state:4444,
           },
           {
               ID:1,
               type:5552,
               state:4444,
           },
           {
               ID:1,
               type:5552,
               state:4444,
           },
           {
               ID:1,
               type:5552,
               state:4444,
           },
           {
               ID:1,
               type:5552,
               state:4444,
           },
           {
               ID:1,
               type:5552,
               state:4444,
           },
           {
               ID:1,
               type:5552,
               state:4444,
           },
           {
               ID:1,
               type:5552,
               state:4444,
           },
           {
               ID:1,
               type:5552,
               state:4444,
           },
           {
               ID:1,
               type:5552,
               state:4444,
           }
        ]
    });
}
