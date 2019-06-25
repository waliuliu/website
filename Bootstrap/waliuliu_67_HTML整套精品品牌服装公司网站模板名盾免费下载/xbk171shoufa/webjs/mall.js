
// JavaScript Document

//使用新地址
$(function () {
    var t = true;
    $(".newadd,.address>h3>span").click(function () {
        if (t) {
            $(".address").addClass("addressbor");
            $(".addresshidden").show();
            $('.newadd').attr('checked', true);
            t = false;
        }
        else {
            $(this).attr("checked", false)
            $(".address").removeClass("addressbor")
            $(".addresshidden").hide();
            $('.newadd').attr('checked', false);
            t = true;

        }
    })


    $(".consignee li .ed").click(function () {
        $(".consignee li").find(".bianji").hide();
        $(this).closest("li").find(".bianji").show();
        $(this).parents("li").find("p").addClass("cur").parent().siblings().children().removeClass("cur")
    })

    $(".danwei").click(function () {
        $(".invoice label").css("display", "inline-block");
    })

    $(".geren").click(function () {
        $(".invoice label").css("display", "none");
    })

})

//LOYOU专题首页鼠标滑上出现文字
$(function () {
    $(".yww_LOYOUlipic ul li").hover(function () {
        //$(this).children("i").show().parent().siblings().children("i").hide();
        $(this).children(".yww_LOYOUmask").fadeIn();
        $(this).children(".yww_LOYOUliP").addClass("cur");
    }, function () {
        //$(this).children("i").hide()
        $(this).children(".yww_LOYOUmask").hide();
        $(this).children(".yww_LOYOUliP").removeClass("cur");
    })



    $(".yww_LOYOUTbabig").eq(0).show();
    $(".yww_LOYOUtabul ul li").eq(0).addClass("cur")
    $(".yww_LOYOUtabul ul li").click(function () {
        var index = $(this).index();
        $(".yww_LOYOUTbabig").hide().eq(index).show();
        $(this).addClass("cur").siblings().removeClass("cur")
    });


    //LOYOU首页TAB切换
    $(".yww_LOYOUlipic").eq(0).show();
    $(".yww_LOYOUul ul li").eq(0).addClass("cur")
    $(".yww_LOYOUul ul li").click(function () {
        var index = $(this).index();
        $(".yww_LOYOUlipic").hide().eq(index).show();
        $(this).addClass("cur").siblings().removeClass("cur")
    });


    $(".yww_moveBOT span").click(function () {
        var scrolltop = $(window).scrollTop();
        $(".videoTc").show();
        $(".videoTc").css({ "height": $("body").height() });
        var filepath = $(this).parents("li").attr("_video");
        $(".videoTcWeb").css("margin-top", (($(window).height() - $(".videoTcWeb").height()) / 2) + scrolltop);


        var _videotext = $(this).parents("li").attr('_videotext');
        $(".videoTc_close").click(function () {
            $(".videoTc").hide();
            $("#_video_wd").remove();
        });
    });


});



$(function () {
    //左右滚动轮播图
    function leRi(yright, yleft, xgBox) {
        //点击右边
        $(yright).click(function () {
            if ($(xgBox).find("ul").is(":animated")) {
                return false;
            }
            $(xgBox).find("ul").animate({ "marginLeft": "-614px" }, 1000, function () {
                $(this).find("li:first").appendTo($(this));
                $(this).css("margin-left", "-914px");
            });
        });

        //点击左边
        $(yleft).click(function () {
            if ($(xgBox).find("ul").is(":animated")) {
                return false;
            }
            $(xgBox).find("ul").animate({ "marginLeft": "-1214px" }, 1000, function () {
                $(this).find("li:last").prependTo($(xgBox).find("ul"));
                $(this).css("margin-left", "-914px");
            });
        });
    };
    //调用

    leRi(".y_ryxg span.ry_right", ".y_ryxg span.ry_left", ".y_ryxg_cont");
    leRi(".yhczl_contwrap .yhcz_right", ".yhczl_contwrap .yhcz_left", ".yhczl_contwrap");
    leRi(".index_fLHot a.next", ".index_fLHot a.prve", ".index_fLHotjs");

});
