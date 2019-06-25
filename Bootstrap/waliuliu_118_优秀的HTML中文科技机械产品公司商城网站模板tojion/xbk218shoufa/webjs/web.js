
// JavaScript Document

$(function(){
	$("#priceRange tr:odd").addClass("dan");
	
	 //会员中心-商品评价
    $(".sppj_conttab").find(".pj_box").eq(0).show();
	$(".sppj_conttab tr td em").eq(0).addClass("cur");
    $(".sppj_conttab tr td em").click(function () {
		$(".sppj_conttab tr td").find("em").removeClass("cur");
        $(this).parents(".sppj_tab").next().slideDown().siblings(".pj_box").slideUp();
		$(this).addClass("cur");
    });	
	//产品展示鼠标移上去效果
	$(".indexshaixuan_xxR_div ul li").hover(function(){
		$(this).addClass("cur");
	},function(){
		$(this).removeClass("cur");
	});
	//$(".indexshaixuan_xxR_div ul li:nth-child(5n)").css({"width":"209px"});
})

$(function() {
	
	//20150411修改
	//常见问题
	$(".y_helpwrap dl dt").live("click",(function(){
		if($(this).next().is(":visible")){
			$(this).addClass("cur").parent().siblings("dl").find("dt").removeClass("cur");
        	$(this).siblings("dd").slideUp(500);	
		}else{
			$(this).siblings("dd").slideDown(500);
			$(this).parent().siblings().find("dd").slideUp(500);		
		}
		}));
		
    //框架
    $(".header_bottomL .search span").click(function () {
        $(this).siblings("div").slideToggle();
    })
    $(".header_bottomL .search div p").click(function () {
        $(this).parent().siblings("span").attr("rel", $(this).attr("rel"));
        $(this).parent().siblings("span").text($(this).text()).siblings("div").hide();
    });
	
	$(".header_bottomL .search").mouseleave(function(){
		$(this).find("div").hide();	
	});

    //回到顶部
    $(".footerM_div ul li.weixin span").click(function () {
        $("html,body").animate({ scrollTop: "0px" }, 500)
    })

    //首页登陆鼠标移上效果
    $(".header_top dl dd .login").hover(function () {
        $(".login_div").show();
    }, function () {
        $(".login_div").hide();
    })

    //首页购物车鼠标移上效果
    $(".header_bottomR .shop").hover(function () {
        $(this).find(".shop_div").show();
    }, function () {
        $(".shop_div").hide();
    })


    //会员登陆
    $(".wss_login_div").find("ul").eq(0).show();
    $(".wss_login .menu02 span").click(function () {
        var i = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents(".wss_login_div").find("ul").eq(i).show().siblings("ul").hide();
    });

    //会员注册
    $(".wss_new_zc_left").find("ul").eq(0).show();
    $(".wss_new_zc_left .menu02 span").click(function () {
        var i = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents(".wss_new_zc_left").find("ul").eq(i).show().siblings("ul").hide();
    });
    $(".wss_reg_success ul p a.xiugai").click(function () {
        $(".p02.update_ni").show();
    });

    

    //购物车数量加减
    $(".wss_shoppinglist ul li.number02 span.span02").click(function () {
        var inputobj = $(this).closest(".number02").find("input");
        var inputValue = parseInt(inputobj.val());
        if (isNaN(inputValue)) {
            alert("不能对非整数进行加减");
            return false;
        }
        inputobj.val(inputValue + 1);
        updatecookieCart(parseInt(inputobj.attr("_type")), parseInt(inputobj.attr("proId")), inputobj.attr("type_id"), inputobj.val(), inputobj.attr("norms"));
        if (parseInt(inputobj.attr("_type")) == 1) {
            updatecookieCart_cs(parseInt(inputobj.attr("_type")), parseInt(inputobj.attr("proId")), inputobj.attr("type_id"), $(this).closest("ul").find(".price span"), inputobj.attr("norms"), cart_Calculatefun)
        }
        else { cart_Calculatefun(); }
    });
    $(".wss_shoppinglist ul li.number02 span.span01").click(function () {
        var inputobj = $(this).closest(".number02").find("input");
        var inputValue = parseInt(inputobj.val());
        if (isNaN(inputValue)) {
            alert("不能对非整数进行加减");
            return false;
        }
        if (inputValue <= 1) {
            return false;
        }
        else {
            inputobj.val(inputValue - 1);
        }
        updatecookieCart(parseInt(inputobj.attr("_type")), parseInt(inputobj.attr("proId")), inputobj.attr("type_id"), inputobj.val(), inputobj.attr("norms"));
        if (parseInt(inputobj.attr("_type")) == 1) {
            updatecookieCart_cs(parseInt(inputobj.attr("_type")), parseInt(inputobj.attr("proId")), inputobj.attr("type_id"), $(this).closest("ul").find(".price span"), inputobj.attr("norms"), cart_Calculatefun)
        }
        else { cart_Calculatefun(); }
    });

    //产品中心-详情-购物车底部
    $(".wss_moredivxx").eq(0).show();
    $(".wss_productxx_more h3 span").eq(0).addClass("cur");
    $(".wss_productxx_more h3 span").click(function () {
        var index = $(".wss_productxx_more span").index($(this));
        $(".wss_moredivxx").hide().eq(index).show();
        $(this).addClass("cur").siblings().removeClass("cur")
    });


    //产品中心2015-3-30  
    //自动添加个数
    $(".wss_moredivxx ul li").each(function () {
        $(".wss_productxx_more h3 p").append("<a href='javascript:;'></a>");
    });
    $(".wss_productxx_more h3 p").find("a:first").addClass("cur");

    var timer02 = null;
    var j = 0;
    var y_wqjdLen02 = $(".wss_moredivxx ul li").length;
    timer02 = setInterval(function () {
        j++;
        if (j > y_wqjdLen02 - 1) {
            j = 0;
            focus_ul02();
        }
        else {
            focus_ul02();
        }
    }, 4000);
    $(".wss_productxx_more h3 p a").mouseenter(function () {
        j = $(this).index();
        focus_ul02();
    });
    $(".wss_moredivxx").mouseover(function () {
        clearInterval(timer02);
    });
    $(".wss_moredivxx").mouseleave(function () {
        timer02 = setInterval(function () {
            j++;
            if (j > y_wqjdLen02 - 1) {
                j = 0;
                focus_ul02();
            }
            else {
                focus_ul02();
            }

        }, 4000);
    });
    function focus_ul02() {
        $(".wss_moredivxx ul").stop(true).animate({ "marginLeft": -(1145 * j) }, 800);
        $(".wss_productxx_more h3 p a").eq(j).addClass("cur").siblings().removeClass("cur");
    };





    $(".wss_moredivxx ul li img").each(function () {
        var image = new Image();
        var _this = $(this);
        var h = _this.parents("li").height();

        image.onload = function () {
            var top = (h - this.height) / 2 - 10;
            if (top < 0) top = 0;
            $(_this).css('marginTop', top);
        }
        image.src = this.src;
    });


    //
    //$(".wss_shoppinglist ul li.shoucang").click(function () {
    //    $(this).addClass("cur");
    //})

    $(".wss_consignee li").find(".bianji").hide();
    $(".wss_consignee li .ed").click(function () {
        $(".wss_consignee li").find(".bianji").hide();
        $(this).closest("li").find(".bianji").show()
    });
    //$(".wss_consignee ul li .dalete").click(function () {
    //    $(this).parents("li").remove();
    //});
	
	$(".wss_consignee ul li p").find("input").eq(0).attr("checked", true);


    //提交订单-发票信息
    $(".danwei").click(function () {
        $(".wss_invoice label").css("display", "inline-block");
        $(".wss_invoice label").find("input").attr("value", "请填入单位名称");
    });


    $(".geren").click(function () {
        $(".wss_invoice label").css("display", "none");
    });
    $(".newadd").click(function () {
        if ($(this).parents(".wss_address").hasClass("wss_addressbor")) {
            $(this).parents(".wss_address").removeClass("wss_addressbor");
            $(this).attr("checked", false);
        }
        else {
            $(this).parents(".wss_address").addClass("wss_addressbor");
            $(this).attr("checked", true);
        }
    });


    //
    $(".about_zyleft a em").eq(0).show();
    $(".about_zyleft a").hover(function () {
        $(this).find("em").show().parent("a").siblings("a").find("em").hide();
    })


    //荣誉证书弹出框
    $(".zhengshu_div").hide();
    $(".zhengshu_tanchu img").attr("src", $(".zhengshu ul li img").attr("src"))
    var w_hei = $(window).height()
    var w_win = $(window).width()
    var win_img = $(".zhengshu_tanchu").height();
    $(".zhengshu_div").css("height", w_hei)
    $(".zhengshu_div").css({ "width": w_win, "text-align": "center" })
    $(".zhengshu_tanchu").css("margin-top", (w_hei - win_img) / 2-250)
    $(".zhengshu ul li").click(function () {
        $(".zhengshu_div").fadeIn();
        $(".zhengshu_tanchu img").attr("src", $(this).find("img").attr("src"))
    })
    $(".zhengshu_tanchu span").click(function () {
        $(".zhengshu_div").fadeOut();
    })

    //投资问答
    $(".problem li.clearfix").click(function () {
        $(this).children(".huida").slideToggle();
    })

    //团队风采
    $(".fengcai ul li").hover(function () {
        $(this).children("div").show().parent().siblings().children("div").hide();
        $(this).children("p").addClass("cur").parent().siblings().children("p").removeClass();
    })


    //打印界面
    //9-18
    var font = ["font18", "font16", "font14", "font12"];
    $(".dayin_top span em").click(function () {
        var aa = $(this).index();
        $(".dayinWarp").attr("class", "dayinWarp");
        $(".dayinWarp").addClass(font[aa]);
        $(this).addClass("cur").siblings().removeClass("cur");
    });
    //end 9-18

    //产品中心-详情多图切换
    var li_wid = $(".productxxTop_smallpic ul li").outerHeight(true);
    var scroll_width = $(".productxxTop_smallpic ul li").length * li_wid - $(".productxxTop_smallpic").outerHeight(true);
    $(".top").click(function () {
        if (Math.abs(parseInt($(".productxxTop_smallpic ul").css("margin-top"))) <= Math.abs(0)) {
            return false;
        }
        if ($(".productxxTop_smallpic ul").is(":animated")) { return false; }
        $(".productxxTop_smallpic ul").animate({ "margin-top": "+=68px" }, 500);
        if (Math.abs(parseInt($(".productxxTop_smallpic ul").css("margin-top"))) <= Math.abs(350)) {
        }
    });
    $(".bottom").click(function () {
        if (Math.abs(parseInt($(".productxxTop_smallpic ul").css("margin-top"))) >= Math.abs(scroll_width)) {
            return false;
        }
        if ($(".productxxTop_smallpic ul").is(":animated")) { return false; }
        $(".productxxTop_smallpic ul").animate({ "margin-top": "-=68px" }, 500);
        if (Math.abs(parseInt($(".productxxTop_smallpic ul ").css("margin-top"))) >= Math.abs(scroll_width - li_wid)) {
        }
    });

    //
    $(".chanpinxx_middle dl.dl02 dd label input").focus(function () {
        var inputObj = $(this).val();
        if (inputObj == "输入长度...") {
            $(this).val("");
        }

    })
    $(".chanpinxx_middle dl.dl02 dd label input").blur(function () {
        var inputObj = $(this).val();
        if (inputObj == "") {
            $(this).val("输入长度...");
        }

    })

    //产品列表数量加减
    $(".chanpinxx_middle ul li span.span01").click(function () {
        var inputValue = parseInt($(this).parent(".chanpinxx_middle ul li.li01").find("input").val());
        $(this).parent(".chanpinxx_middle ul li.li01").find("input").val(inputValue + 1);
    });
    $(".chanpinxx_middle ul li span.span02").click(function () {
        var inputValue = parseInt($(this).parent(".chanpinxx_middle ul li.li01").find("input").val());
        if (inputValue <= 1) {
            return false;
        }
        else {
            $(this).parent(".chanpinxx_middle ul li.li01").find("input").val(inputValue - 1);
        }
    });


    //优惠组合
    $(".zhuhe_con").eq(0).show();
    $(".zhuhe_qh span").eq(0).addClass("cur");
    $(".zhuhe_qh span").hover(function () {
        var index = $(this).index();
        $(".zhuhe_con").hide().eq(index).show();
        $(this).addClass("cur").siblings().removeClass("cur")
    });

    //商品介绍
    $(".shangpin_con").eq(0).show();
    $(".shangpin_qh span").eq(0).addClass("cur");
    $(".shangpin_qh span").hover(function () {
        var index = $(this).index();
        $(".shangpin_con").hide().eq(index).show();
        $(this).addClass("cur").siblings().removeClass("cur")
    });

    //产品中心-1大图  移动通信
    //$(".shaixuanR_con").eq(0).show();
    //		$(".shaixuanL span").eq(0).addClass("cur");
    //		$(".shaixuanL span").click(function(){
    //			var index=$(this).index();
    //			$(".shaixuanR_con").hide().eq(index).show();
    //			$(this).addClass("cur").siblings().removeClass("cur")
    //		});

    $(".shaixuanR_con ul li em").click(function () {
        if ($(this).parent("li").hasClass("cur")) {
            $(this).parent("li").removeClass("cur");
        }
        else {
            $(this).parent("li").addClass("cur");
            var liHeight = $(this).parent("li").outerHeight(true) - 10;
            $(this).parent("li").find("span").css({ "height": liHeight });
        }
    })

    //会员注册弹出框
    $(".tanchu_div").hide();
    var w_hei = $(window).height()
    var w_win = $(window).width()
    var win_img = $(".tanchu").height();
    $(".tanchu_div").css("height", w_hei)
    $(".tanchu_div").css({ "width": w_win })
    $(".tanchu").css("margin-top", (w_hei - win_img) / 2)

    $(".wss_reg ul li.yuedu em").click(function () {
        $(".tanchu_div").fadeIn();
    })
    $(".tanchu em span").click(function () {
        $(".tanchu_div").fadeOut();
    })

    $(".tanchu .bottom input").click(function () {
        $(".tanchu_div").fadeOut();
        $(".yuedu input").attr("checked", "true");
    })

    //我的地址

    $(".members_shouhuo li").find(".bianji").hide();
    $(".members_shouhuo li .ed").click(function () {
        $(".members_shouhuo li").find(".bianji").hide();
        $(this).closest("li").find(".bianji").show();
		
    })
    //$(".members_shouhuo ul li .delete").click(function () {
    //    $(this).parents("li").remove();
    //})
	
	$(".members_shouhuo ul li p").hover(function(){
			$(this).addClass("cur");
	},function(){
		if(!$("iframe").is(":visible")){
			$(this).removeClass("cur");
		}else{
			$(this).addClass("cur");
		}
	})

    $(".members_addshouhuo dl").hide();
    $(".members_addshouhuo h4").click(function () {
        $(this).siblings("dl").show();
    })

    //菜单全部产品分类
    $(".menu_leftcon_nr ul li").hover(function () {
        $(this).find(".leftcon_nrcon").show().parent().siblings().find(".leftcon_nrcon").hide();
        $(".nrcon_gd").show();
    },function () {
        $(".leftcon_nrcon").hide();
        //$(".nrcon_gd").hide();
    })


    $(".menu_left").hover(function () {
        $(".menu_leftcon").slideDown();
    }, function () {
		if($(this).find("#indexSub").html()){
			 $(".menu_leftcon").show();
		}else{
			 $(".menu_leftcon").hide();
		}
    })


    //菜单全部产品分类（按**分类）
    $(".menu_change").eq(0).show();
    $(".menu_leftcon_qh span").eq(0).addClass("cur");
    $(".menu_leftcon_qh span").live("click",function(){
		 var Lindex = $(this).index();
		 console.log(Lindex);
		 $(".menu_change").hide();
        $(".menu_change").eq(Lindex).show();
        $(this).addClass("cur").siblings().removeClass("cur")
	}) 
       

    //首页1层热销品牌
    $(".floor_01con").eq(0).show();
    $(".floor_01qh p span").eq(0).addClass("cur");
    $(".floor_01qh p span").hover(function () {
        var index = $(this).index();
        $(".floor_01con").hide().eq(index).show();
        $(this).addClass("cur").siblings().removeClass("cur")
    });

    //首页2层产品展示
    $(".indexshaixuan_xxR_div ul li").hover(function () {
        $(this).find("p.p01").addClass("cur").parent().siblings().find("p.p01").removeClass("cur");
        $(this).find("p.p02 a").addClass("cur").parents().siblings("li").find("p.p02 a").removeClass("cur");
    })

    $(".floor_02_con").eq(0).show();
    $(".floor_02qh p span").eq(0).addClass("cur");
    $(".floor_02qh p span").hover(function () {
        var index = $(".floor_02qh p span").index(this);
        $(".floor_02_con").hide().eq(index).show();
        $(this).addClass("cur").siblings().removeClass("cur")
    });

    //首页3层热销产品
    $(".floor_03_rightcon").each(function (index, element) {
        $(".floor_03qh p").append("<span></span>")
    });
    $(".floor_03_rightcon").eq(0).show();
    $(".floor_03qh p span").eq(0).addClass("cur");
    $(".floor_03qh p span").live("mouseleave", function () {
        var index = $(".floor_03qh p span").index(this);
        $(".floor_03_rightcon").hide().eq(index).show();
        $(this).addClass("cur").siblings().removeClass("cur")
    });
    

    //首页4层品热销产品
    $(".floor_04_rightcon").each(function (index, element) {
        $(".floor_04qh p").append("<span></span>")
    });
    $(".floor_04_rightcon").eq(0).show();
    $(".floor_04qh p span").eq(0).addClass("cur");
    $(".floor_04qh p span").hover(function () {
        var index = $(".floor_04qh p span").index(this);
        $(".floor_04_rightcon").hide().eq(index).show();
        $(this).addClass("cur").siblings().removeClass("cur")
    });


    $(".menu_leftcon_nr ul li").hover(function () {
        $(this).find(".leftcon_nrcon").show();
        $(".nrcon_gd").show();
    }, function () {
        $(this).find(".leftcon_nrcon").hide();
        $(".nrcon_gd").hide();
    });

    //首页底部问与答
    $(".floor_botrightB_div ul li p").hover(function () {
        $(this).find("em").addClass("cur").parent().siblings().find("a").removeClass("cur");
    }, function () {
        $(this).find("em").removeClass("cur")
    })

    var li_wid = $(".floor_botrightB_div ul li").outerWidth(true);
    var scroll_width = $(".floor_botrightB_div ul li").length * li_wid - $(".floor_botrightB_div").outerWidth(true);
    $(".left").click(function () {
        if (Math.abs(parseInt($(".floor_botrightB_div ul").css("margin-left"))) <= Math.abs(0)) {
            return false;
        }

        if ($(".floor_botrightB_div ul").is(":animated")) { return false; }
        $(".floor_botrightB_div ul").animate({ "margin-left": "+=535px" }, 500);
        if (Math.abs(parseInt($(".floor_botrightB_div ul").css("margin-left"))) <= Math.abs(350)) {

        }
    });
    $(".right").click(function () {
        if (Math.abs(parseInt($(".floor_botrightB_div ul ").css("margin-left"))) >= Math.abs(scroll_width)) {
            return false;
        }

        if ($(".floor_botrightB_div ul").is(":animated")) { return false; }

        $(".floor_botrightB_div ul").animate({ "margin-left": "-=535px" }, 500);
        //  alert($(".paid_div ul ").css("margin-left"));
        if (Math.abs(parseInt($(".floor_botrightB_div ul ").css("margin-left"))) >= Math.abs(scroll_width - li_wid)) {

        }
    });


    //滚动的购物车展开
    $(".index_scroll .gwc").hover(function () {
        $(this).find(".shop_div").show();
    }, function () {
        $(".shop_div").hide();
    })//
//    $(".shop_div ul li i").click(function () {
//        $(this).parent("li").remove();
//    })

    //回到顶部
    $(".index_scroll span.top").click(function () {
        $("html,body").animate({ scrollTop: "0px" }, 1000)
    })


    //首页新闻滚动
    var Time = null;
    Time = setInterval(function () {
        $(".index_newsdiv ul").animate({ "margin-top": -40 + "px" }, function () {
            $(".index_newsdiv ul li:first").appendTo($(this));
            $(".index_newsdiv ul").css("margin-top", "0px");
        });
    }, 2500);

    $(".index_newsdiv").mouseenter(function () {
        clearInterval(Time);
    });
    $(".index_newsdiv").mouseleave(function () {
        Time = setInterval(function () {
            $(".index_newsdiv ul").animate({ "margin-top": -40 + "px" }, function () {
                $(".index_newsdiv ul li:first").appendTo($(this));
                $(".index_newsdiv ul").css("margin-top", "0px");
            });
        }, 2500);

    });
	
	//2015-6-6
	$(".wss_invoice ul li span:eq(1)").css({"color":"#0068b7","font-size":"13px"});












    ///////////////////////章begin
    $(".y_gqwrap").hover(function () {
        $(this).children("dd").show();
    },function(){
		$(this).children("dd").hide();	
	});
    $(".y_gqwrap dd p").click(function () {
        var s = $(this).text();
        $(this).parent().siblings("dt").find("input").val(s);
        $(this).parent().hide();
        $(this).parent().siblings("dd").hide();
    });
    $(".y_gqwrap dd:last").css("border-bottom", "1px solid #ddd");
    $(".y_gqwrap dl").mouseleave(function () {
        $(this).find("dd").hide();
    });
    //会员中心-资料
    $(".y_ahwrap em").toggle(function () {
        $(this).addClass("cur");
    }, function () {
        $(this).removeClass("cur");
    });

    //input 绑定
    $("#keyword,.mes_yzm,.header_bottomL label input.int,.wss_Retrieve-password dl dt input,.tuihuan label.thdescribe textarea,.wss_reg ul li label input,.wuliuxx input,.pj_box ul li input:not(.pjsub_btn),.pj_box ul li .pj_area,.wss_login ul li label input,.inov_left textarea,.tuihuan label.thtext input,.zml_contact dl dt ul li .online_txt3").each(function () {
        var _this = $(this);
        var input_val = _this.val();
        $(_this).focus(function () {
            var fo_val = $(this).val();
            if (fo_val == input_val) {
                $(this).val("");
            }
        });
        $(_this).blur(function () {
            var bl_val = $(this).val();
            if (bl_val == "") {
                $(this).val(input_val);
            }
        });
    });

    $(".yfp_wrap").click(function () {
        $(this).find(".yfp_ra").attr("checked", true);
    });

    //会员中心-会员级别
    $(".yhyjb_wrap .tit a").click(function () {
        $("body,html").animate({ scrollTop: 600 }, 500);
    });

    //////////会员中心-退换货申请
    //$(".menu").find("span").eq(0).css("border-left","1px solid #e6e6e6");
    $(".wddd").find(".tabinfo").eq(0).show();
    $(".menu span").click(function () {
        var i = $(this).index();
        $(this).addClass("cur03").siblings("span").removeClass("cur03");
        $(".y_thhtab").find(".tabinfo").eq(i).show().siblings(".tabinfo").hide();
    });
    //会员中心-我的订单-详情下拉
    $(".y_find dt").click(function () {
        $(this).siblings("dd").show();
    });
    $(".y_find dd p").click(function () {
        var s = $(this).text();
        $(this).parent().siblings("dt").find("p").text(s);
        $(this).parent().hide();
        $(this).parent().siblings("dd").hide();

    });
    $(".y_find dl").mouseleave(function () {
        $(this).find("dd").hide();
    });
    //////////会员中心-退换货申end	  
    //会员中心-退换货申请-申请表
    $(".return-way li").click(function () {
        $(this).find("input").attr("checked", "checked");
    });
    $(".tuihuan dl dd em").click(function () {
        $(this).prev("input").attr("checked", "checked");
    });

    $("img.up").click(function () {
        var inputValue = parseInt($(this).siblings(".thnumber").find("input").val());
        $(this).siblings(".thnumber").find("input").val(inputValue + 1);
    });
    $("img.down").click(function () {
        var inputValue = parseInt($(this).siblings(".thnumber").find("input").val());
        if (inputValue <= 1) {
            return false;
        }
        else {
            $(this).siblings(".thnumber").find("input").val(inputValue - 1);
        }
    });

    //添加退款弹窗
    $(".thhsq dl dd a").click(function () {
        $(".thh_shadow").show();
    });
    $(".quedign a").click(function () {
        $(".thh_shadow").fadeOut();
    });
    $(".thh_pupbox ul li:first").addClass("cur");
    $(".thh_pupbox ul li").click(function () {
        $(this).find("input").attr("checked", true);
        $(this).addClass("cur").siblings().removeClass("cur");
    });

    //会员中心-我的订单-详情
    $(".tracking span").toggle(function () {
        $(this).addClass("cur");
        $(".y_hide01").hide();
    }, function () {
        $(".y_hide01").slideDown();
        $(this).removeClass("cur");
    });

    $(".order-information span").toggle(function () {
        $(this).addClass("cur");
        $(".y_hide02").hide();

    }, function () {
        $(this).removeClass("cur");
        $(".y_hide02").slideDown();

    });
    //会员中心-5我的会员推广链接
    $(".yq_lj").click(function () {
        $("body,html").animate({ scrollTop: 625 }, 500);
    });


    $(".xs_box02 ul li i").toggle(function () {
        $(this).parent().find("p").css({ "height": "auto" });
        $(this).parent().addClass("cur");
    }, function () {
        $(this).parent().find("p").css({ "height": "37px" });
        $(this).parent().removeClass("cur");
    });

    $(".xs_box02 ul li:last").css("border-bottom", "none");

    //会员中心-我的收藏

    //自动添加个数
    $(".maybe_focuswrap ul li").each(function () {
        $(".maybe_like dd").append("<a href='javascript:;'></a>");
    });
    $(".maybe_like dd").find("a:first").addClass("cur");

    var timer = null;
    var i = 0;
    var y_wqjdLen = $(".maybe_focuswrap ul li").length;
    timer = setInterval(function () {
        i++;
        if (i > y_wqjdLen - 1) {
            i = 0;
            focus_ul();
        }
        else {
            focus_ul();
        }
    }, 4000);
    $(".maybe_like dd a").mouseenter(function () {
        i = $(this).index();
        focus_ul();
    });
    $(".maybe_focuswrap").mouseover(function () {
        clearInterval(timer);
    });
    $(".maybe_focuswrap").mouseleave(function () {
        timer = setInterval(function () {
            i++;
            if (i > y_wqjdLen - 1) {
                i = 0;
                focus_ul();
            }
            else {
                focus_ul();
            }

        }, 4000);
    });
    function focus_ul() {
        $(".maybe_focuswrap ul").stop(true).animate({ "marginLeft": -(920 * i) }, 500);
        $(".maybe_like dd a").eq(i).addClass("cur").siblings().removeClass("cur");
    };
    //会员中心-8我的收藏
    //$(".cangz_tabbtn").click(function () {
    //    if ($(this).parents("tr").find(".td01 input").is(":checked")) {
    //        $(this).parents("tr").remove();
    //    }
    //    else {
    //        return false;

    //    }
    //});

    $(".cancel_cont_top em input").click(function () {
        if ($(".cancel_cont_top em input").is(":checked")) {
            $(".cancel_cont table tr td input").attr("checked", true);
        }
        else {
            $(".cancel_cont table tr td input").removeAttr("checked", false);
        }

    });


    //$(".can_btn").click(function () {
    //    if ($(".cancel_cont_top em input").is(":checked")) {
    //        $(".cancel_cont").find("table tr").remove();
    //        $(".cancel_cont_top em input").removeAttr("checked");
    //    }
    //    else {
    //        return false;
    //    }
    //});

    //会员中心-站内信息
    $("#all").click(function () {
        if ($("#all").is(":checked")) {
            $(".messagelist dd span input").attr("checked", true);
        }
        else {
            $(".messagelist dd span input").removeAttr("checked", false);
        }
    });
    $(".messagelist dl").each(function () {
        var _this = $(this);
        $(".zn_del").click(function () {
            if (_this.find("dd span input").is(":checked")) {

                _this.remove();
                $("#all").removeAttr("checked");
            }
            else {
                return false;
            }
        });
    });




    //品牌资讯
    $(".y_detxgwrap ul li").hover(function () {
        $(this).addClass("cur");
    }, function () {
        $(this).removeClass("cur");
    });

    $(".y_detxgwrap ul li:nth-child(2n)").css("margin-right", "0");
    //2015-3-20
    $(".yppzx_ul li:nth-child(2n)").css("margin-right", "0");
    ///////////////////////章end

    //发票
    //$(".fapiao2").hide();
    $(".y_fome li.fapiao p input").eq(0).click(function () {
        $(".fapiao2").show();
    })
    $(".y_fome li.fapiao p input").eq(1).click(function () {
        $(".fapiao2").hide();
    })
	
	

	//20150411修改
	//校园风采
	$(".zhengshu_div2").hide();
	$(".zhengshu_tanchu2 img").attr("src", $(".fengcai ul li img").attr("src"))
	var w_hei = $(window).height()
	var w_win = $(window).width()
	var win_img = $(".zhengshu_tanchu2").height();
	$(".zhengshu_div2").css("height", w_hei)
	$(".zhengshu_div2").css({ "width": w_win, "text-align": "center" })
	$(".zhengshu_tanchu2").css("margin-top", (w_hei - win_img) / 2)
	$(".fengcai ul li").click(function () {
		$(".zhengshu_div2").fadeIn();
		$(".zhengshu_tanchu2 img").attr("src", $(this).find("img").attr("src"))
	})
	$(".zhengshu_tanchu2 span").click(function () {
		$(".zhengshu_div2").fadeOut();
	})
	//20150411修改
	
	$("#ScroRight").css("display","block");
	
	
	//2015-5-23修改
	//收藏鼠标经过效果
	$(".addcollect_u:not(.chanpinxx_middle ul li a.addcollect_u,.shaixuan_xxR_div02 .addcollect_u)").find("img").remove();
	$(".addcollect_u").hover(function(){
		$(this).addClass("cur");
	},function(){
		$(this).removeClass("cur");	
	})
	
	//购物车鼠标经过效果
	$(".miniJoinCart:not(.shaixuan_xxR_div02 .miniJoinCart)").find("img").remove();
	$(".miniJoinCart").hover(function(){
		$(this).addClass("cur");	
	},function(){
		$(this).removeClass("cur");	
	})
  
	//2015-6-11修改
	$(".index_scroll").hover(function(){
		$(this).stop(true).animate({"right":"0px"});
	},function(){
		$(this).stop(true).animate({"right":"-57px"});	
	});
	
	//------------7-9-------------
	$(".indexshaixuan_xxR_div02 ul li:eq(4)").css("width","205px");
	$(".indexshaixuan_xxR_div03 ul li:eq(4)").css("width", "205px");


	var cont = $(".menu_leftcon").height();
	$(".leftcon_nrcon").css("height", cont - 60);
	$(".nrcon_gd").css("height", cont - 40);

	
})

