/*made by chenrui*/

$(function () {
    // 退出登录
    $("#linkOutLogin").click(function () {
        if (confirm("确定要退出吗？")) {
            CommonTool.OutLogin(function (data) {
                if (data) {
                    location.href = "/";
                }
            });
        }
    });

    //input 绑定
    $("input[type=text]").each(function () {
        var _this = $(this);
        //var input_val = _this.val();
        $(_this).focus(function () {
            var fo_val = $(this).val();
            if (fo_val == "输入关键字") {
                $(this).val("");
            }
            $(this).css({ "color": "#4c4c4c" });
        });
        $(_this).blur(function () {
            var bl_val = $(this).val();
            if (bl_val == "") {
                $(this).val("输入关键字");
                $(this).css({ "color": "#ddd" });
            }
        });
    });

    //产品中心点击更多
    $(".crSortCate span").click(function () {

        if ($(this).hasClass("cur")) {
            $(this).removeClass("cur");
            $(this).text("更多");
            $(this).parent(".crSortCate").css({ "height": "40px" });
        } else {
            $(this).addClass("cur");
            $(this).text("收起");
            $(this).parent(".crSortCate").css({ "height": "auto" });
        }
    });
    //产品中心鼠标移上去
    $(".crProductsWrap").hover(function () {
        $(this).addClass("cur");
    }, function () {
        $(this).removeClass("cur");
    });
    $(".crProductsWrap:nth-child(4n)").css({ "margin-right": "0px" });
    $(".ui-zoom-large img:last").css({ "width": "396px", "height": "396px" });
    //运费地区选择
    $(".crDes").click(function () {
        $(".crArea").fadeIn();
    });
    $(".mui_addTwo li").click(function () {
        $(this).parents(".mui_addr_list").find(".mui_addTwo_sub").show();
    });
    $(".mui_addr_Close").click(function () {
        $(".crArea").fadeOut();
    });
    $(".mui_addTwo_sub li,.mui_addr_zxCity li").click(function () {
        var liObj = $(this).find("a").text();
        $(".crDes").text(liObj);
        $(".crArea").fadeOut();
    });
    $(".crShipSize span.pr24").css({ "height": $(".crShipSize").height() - 10 });
    /*2016/4/25*/
    $(".skuAttr a:not(.curr)").click(function () {
        $(this).addClass("cur").siblings().removeClass("cur");
    });
    $(".skuAttr a:not(.curr)").hover(function () {
        $(this).addClass("currr").siblings().removeClass("currr");
    }, function () {
        $(this).removeClass("currr")
    });
    /*2016/4/25*/
    $(".crShipColor a:not(.crNoDrop)").click(function () {
        $(this).addClass("cur").siblings().removeClass("cur");
    });
    //zml
    $(".crShipColor a").click(function () {
        if ($(this).children("i").css("display") == "none") {
            $(this).children("em").show().parent().siblings().children("em").hide();
        }
    });
    $(".crShipColor a").hover(function () {
        if ($(this).children("i").css("display") == "none") {
            $(this).addClass("cur").siblings().removeClass("cur");
        }
    }, function () {
        $(this).removeClass("cur")
    })
    //数量加减
    $(".crInStock a.crNumUp").click(function () {
        var inpObj = parseInt($(this).parent().find("input").val());
        if (inpObj == 1) {
            return false;
        } else {
            inpObj -= 1;
            $(this).parent().find("input").val(inpObj);
        }
    });
    $(".crInStock a.crNumDown").click(function () {
        var inpObj = parseInt($(this).parent().find("input").val());
        inpObj += 1;
        $(this).parent().find("input").val(inpObj);
    });
    //上下滚动
    var liHeight = $(".crProSCroll_d ul li").outerHeight(true);
    var fouHeight = $(".crProSCroll_d").outerHeight(true);
    var fliLength = $(".crProSCroll_d ul li").length;
    $(".crProSCrollRight").click(function () {
        $(".crProSCrollLeft img").show();
        if ($(".crProSCroll_d ul").is(":animated"))
            return false;
        if (Math.abs(parseInt($(".crProSCroll_d ul").css("margin-top"))) < Math.abs(parseInt(fliLength * liHeight - fouHeight))) {
            $(".crProSCroll_d ul").animate({ "margin-top": "-=440px" });
        }
        if (Math.abs(parseInt($(".crProSCroll_d ul").css("margin-top"))) >= Math.abs(parseInt(fliLength * liHeight - fouHeight - 60))) {
            $(this).find("img").hide();
        }
    });
    $(".crProSCrollLeft").click(function () {
        $(".crProSCrollRight img").show();
        if ($(".crProSCroll_d ul").is(":animated"))
            return false;
        if (Math.abs(parseInt($(".crProSCroll_d ul").css("margin-top"))) == 440) {
            $(this).find("img").hide();
        }
        if (Math.abs(parseInt($(".crProSCroll_d ul").css("margin-top"))) >= liHeight) {
            $(".crProSCroll_d ul").animate({ "margin-top": "+=440px" });
        }
    });
    $(".crNumberOfTable tr:nth-child(13n) td").css({ "border-bottom": "none" });
    $(".crProDetTabCon:eq(0)").show();
    $(".crProDetMenu a:not(.crpROCom)").click(function () {
        var aIndex = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".crProDetTab .crProDetTabCon").eq(aIndex).show().siblings().hide();
    });
    //产品秒杀倒计时
    var interval = 1000;
    function ShowCountDown(year, month, day, divname) {
        var now = new Date();
        var endDate = new Date(year, month - 1, day);
        var leftTime = endDate.getTime() - now.getTime();
        var leftsecond = parseInt(leftTime / 1000);
        var day1 = Math.floor(leftsecond / (60 * 60 * 24));
        var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
        var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
        var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
        var cc = document.getElementById(divname);
        //判断当天的情况  day1小于-1的话就设置为0
        if (day1 == -1) {
            day1 = 0;
        }
        //判断前天的话 就让倒计时不显示
        if (day1 < -1) {
            $(".Spike").text("活动已结束");
            $(".crMiao a").addClass("nobuy");
            $(".crMiao a").removeAttr("href");
            clearInterval(Intv);
        } else if (day1 == 0 && hour == 0 && minute == 0 && second == 0) {
            //时间到了活动结束 立即购买变色 并且禁用点击
            $(".Spike").text("活动已结束");
            $(".crBuyAdd a").addClass("nobuy");
            $(".crBuyAdd a").removeAttr("href");
            clearInterval(Intv);
        } else {
            $("#SpikeTime").html(day1 + "天" + hour + "小时" + minute + "分" + second + "秒");
        }
    }
    if (!$("body").find("#SpikeTime").html()) {
        Intv = window.setInterval(function () { ShowCountDown(2015, 5, 12, 'SpikeTime'); }, interval);
    }
    //评论点击图片放大
    $(".crReplyTable tr td p img").click(function () {
        var imgSrc = $(this).attr("src");
        if ($(this).parent().next().is(":visible")) {
            if (imgSrc == $(this).parent().next().find("img").attr("src")) {
                $(this).parent().next().slideUp();
            } else {
                $(this).parent().next().find("img").attr("src", imgSrc);
            }
        } else {
            $(this).parent().next().slideDown();
            $(this).parent().next().find("img").attr("src", imgSrc);
        }
    });

    /*-------meeting 专题 begin-------*/
    $(".crSpacePresub").hover(function () {
        var parHeight = $(this).parent().height();
        if (!$(this).hasClass("crbz")) {
            $(this).css({ "padding-top": "50px" });
            $(this).stop(true, true).animate({ "height": parHeight - 50 });
        } else {
            $(this).css({ "padding-top": "0px" });
            $(this).stop(true, true).animate({ "height": parHeight });
        }
    }, function () {
        $(this).css({ "padding-top": "0px" })
        $(this).stop(true, true).animate({ "height": "125px" });
    });
    $(".topMenu.crPersonal ul li:last a").css({ "padding": "0px 0px 0px 25px" });


    function leRi02(yright, yleft, xgBox, number) {
        //点击右边
        $(yright).click(function () {
            if ($(xgBox).find(".crPerFourScrollUl").is(":animated")) {
                return false;
            }
            $(xgBox).each(function () {
                if ($(this).is(":visible")) {
                    $(this).find(".crPerFourScrollUl").animate({ "marginLeft": -number }, 500, function () {
                        $(this).find("dl:first").appendTo($(this));
                        $(this).css("margin-left", "0");
                    });
                }
            });
        });

        //点击左边
        $(yleft).click(function () {
            if ($(xgBox).find(".crPerFourScrollUl").is(":animated")) {
                return false;
            }
            $(xgBox).each(function (index, element) {
                if ($(this).is(":visible")) {
                    $(this).find(".crPerFourScrollUl").css("margin-left", -number);
                    $(this).find(".crPerFourScrollUl").find("dl:last").prependTo($(this).find(".crPerFourScrollUl"));
                    $(this).find(".crPerFourScrollUl").animate({ "marginLeft": "0" }, 500);
                }
            });
        });
    };
    //调用
    leRi02(".crPerRight", ".crPerLeft", ".crPerFourScroll", "1025");

    $(window).scroll(function () {
        var thisTop = $(this).scrollTop();
        if (thisTop > 700) {
            $(".crReturnTop").fadeIn();
        } else {
            $(".crReturnTop").fadeOut();
        }
    });
    $(".crReturnTop").click(function () {
        $("body,html").animate({ "scrollTop": "0px" });
    });
    /*-------meeting 专题 end-------*/
});

/* made by nqh begin*/
$(function () {
    //首页旗下品牌效果
    $(".nqhindexBrand ul li").hover(function () {
        $(this).children(".nqhbrandDetail").stop(true).slideDown();
        $(this).children(".bracdCon").hide()
    }, function () {
        $(this).children(".nqhbrandDetail").stop(true).slideUp();
        $(this).children(".bracdCon").slideDown()
    });
    /*视频弹窗*/
    //$(".banner-bottom-box span").click(function () {
    //	var scrolltop=$(window).scrollTop();
    //	$(".videoTc").show();
    //	$(".videoTc").css({"height":$("body").height()});
    //    var filepath = $(this).parents("li").attr("_video");
    //	$(".videoTcWeb").css("top",($(window).height()-$(".videoTcWeb").height())/2);


    //	var _videotext=$(this).parents("li").attr('_videotext');
    //    $(".videoTc_close").click(function(){
    //        $(".videoTc").hide();
    //        $("#_video_wd").remove();
    //    });
    //});

    //--2016-5-25--Yewenwen
    $('.crLike').click(function () {
        if ($(this).hasClass('cur')) {
            $(this).removeClass('cur')
        } else {
            $(this).addClass('cur')
        }
    })


    //$('.yww_Shopdown dd span').click(function () {
    //    if ($(this).siblings('ul').is(':visible')) {
    //        $(this).siblings().slideUp();
    //    } else {
    //        $(this).siblings().slideDown();
    //    }
    //})

    //$('.yww_Shopdown dd li').click(function () {
    //    $(this).parents('ul').siblings('span').text($(this).text());
    //    $(this).parents('ul').slideUp();
    //})

    //2016-7-26--Yewenwen
    $('.yww_MDCourse ul:odd').addClass('wwuleven');

    //右侧二维码
    $('.zwt-fx ul li').hover(function () {
        $(this).find('.wwcodeshow').show();
    }, function () {
        $(this).find('.wwcodeshow').hide();
    })

    //返回顶部
    $('.zwt-fx ul li.zwt-fxTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 400);
    })



});
//返回顶部
$.fn.returnTop = $.fn.returntop = function (options) {
    var _this = this;
    var setting = {
        hide: true, // 当srollTop为0,页面处于最顶端的时候，隐藏返回顶部按钮
        speed: 200,	 //	返回顶部滚动所需要的时间
        callback: $.noop	//到达顶部后的回调函数
    };
    if (options) {
        $.extend(setting, options);
    }
    this.click(function () {
        $('html, body').animate({ scrollTop: 0 }, setting.speed, function () {
            setting.callback.call(this);
        });
    });
    if (setting.hide) {
        $(document).scrollTop() > 0 ? _this.show() : _this.hide();
        $(window).bind("scroll", function () {
            $(document).scrollTop() > 0 ? _this.fadeIn() : _this.fadeOut();
        });
    }
};

/* made by nqh end*/

//收藏当前页面
function show_Favorite() {
    var sURL = window.location.href;
    var sTitle = document.title;
    sURL = encodeURI(sURL);
    try {
        window.external.addFavorite(sURL,
        sTitle);
    } catch (e) {
        try { window.sidebar.addPanel(sTitle, sURL, ""); } catch 
    (e)
        { alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置."); }
    }

}