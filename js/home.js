$(function () {
    $(".dropdown").click(function () {
        $(".dropdown-menu").css('display', 'block');
        $(".dropdown-menu li").mousedown(function () {
            $('#base_title').html(
                `<p style='color:#fff;float: left;margin-left: 4px'>${$(this).text()}</p>`);
            $(".dropdown-menu").css('display', 'none');
            $(document).mousedown(function () {
                $(".dropdown-menu").css('display', 'none');
            })
        });
    })
    $("#sensor").mousedown(function () {
        $("#myModal").css("display", "none");
        $(".Mb").css("display", "block");
        $(".sensor_list").css("display", "block");
        $(".close1").click(function () {
            $("#myModal").css("display", "block");
            $(".Mb").css("display", "none");
            $(".sensor_list").css("display", "none");
        });
    })
    $("#equipment").mousedown(function () {
        $("#myModal").css("display", "none");
        $(".Mb").css("display", "block");
        $(".history_equipment").css("display", "block");
        $(".close1").click(function () {
            $("#myModal").css("display", "block");
            $(".Mb").css("display", "none");
            $(".history_equipment").css("display", "none");
        });
    })
    $("#weather").mousedown(function () {
        $("#myModal").css("display", "none");
        $(".Mb").css("display", "block");
        $(".weather_list").css("display", "block");
        $(".close1").click(function () {
            $("#myModal").css("display", "block");
            $(".Mb").css("display", "none");
            $(".weather_list").css("display", "none");
        });
    })
    $("#police").mousedown(function () {
        $("#myModal").css("display", "none");
        $(".Mb").css("display", "block");
        $(".police_list").css("display", "block");
        $(".close1").click(function () {
            $("#myModal").css("display", "block");
            $(".Mb").css("display", "none");
            $(".police_list").css("display", "none");
        });
    })
})