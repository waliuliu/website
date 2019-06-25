$(function () {
    $("#btnSeach").click(function () {
        var pType = $("#pType").text();
        var pVocation = $("#pVocation").text();
        var pFuel = $("#pFuel").text();
        getDataByPage(pType, pVocation, pFuel, 0);
    });

    $(".nav_cont ul li a").eq(3).addClass("cur");
})

function getDataByPage(pType, pVocation, pFuel, pageNow) {
    $.ajax({
        type: "post",
        url: "/ashx/SearchGongYeAnli.ashx",
        data: { Type: pType, Vocation: pVocation, Fuel: pFuel, pagenow: pageNow },
        success: function (data) {
            var dataJson = eval("(" + data + ")");

            if (dataJson[0] == "1") {
                $("#dl_contentBox").html(dataJson[1]);
                $("#pageContent").html(dataJson[2]);
            }
            if (dataJson[0] == "0") {
                $("#dl_contentBox").html("无数据");
                $("#pageContent").html("");
            }
        },
        orrer: function () {
            alert("ORRER");
        }
    })
}