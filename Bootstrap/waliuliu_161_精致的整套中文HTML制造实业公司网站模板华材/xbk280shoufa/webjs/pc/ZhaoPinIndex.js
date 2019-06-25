$(function () {
    $.ajax({
        type: "post",
        url: "/ashx/DataBindCompany.ashx",
        data: {},
        success: function (data) {
            var dataJson = eval("(" + data + ")");
            if (dataJson[0] == "1") {
                $("#dtJob").after(dataJson[1]);
                //dl_sel(".recru_top dl");//重新绑定没用
            }
        },
        orrer: function () {
            alert("ORRER");
        }
    });


    $(".nav_cont ul li a").eq(6).addClass("cur");
})


$("#btnSearch").click(function () {
    var dtJobVal = $("#dtJob p").html();
    if (dtJobVal == "-请选择分公司-") {
        alert("请选择分公司");
    }
    else {
        getDataByPage(dtJobVal, 0);
    }
});


function getDataByPage(data, pagenow) {
    $.ajax({
        type: "post",
        url: "/ashx/SearchJob.ashx",
        data: { data: data, pagenow: pagenow },
        success: function (data) {
            var dataJson = eval("(" + data + ")");

            if (dataJson[0] == "1") {
                $(".init_containter").html(dataJson[1]);
                $("#pageContent").html(dataJson[2]);


                $(".question1 dl,.Recruitment3 dl").eq(0).find("dd").show();
                $(".question1 dl dt,.Recruitment3 dl dt").click(function () {
                    $(this).addClass("cur").parent().siblings().find("dt").removeClass("cur");
                    $(this).next().slideDown().parent().siblings().find("dd").slideUp();
                    $(this).next().find("a").show().css({ "z-index": "99999" });

                })

            } else {
                $(".init_containter").html("没有相应的职位");
                $("#pageContent").html("");
            }
        },
        orrer: function () {
            alert("ORRER");
        }
    })
}