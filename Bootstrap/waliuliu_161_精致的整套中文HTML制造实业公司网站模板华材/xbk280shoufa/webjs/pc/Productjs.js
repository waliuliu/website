$(function () {
    //returbPageShowForOnclick("", 0)
    getDataByPage("", 0);
})

function getDataByPage(txtPara, pageNow) {
    $.ajax({
        type: "post",
        url: "/ashx/AllProduct.ashx",
        data: { pagenow: pageNow },
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