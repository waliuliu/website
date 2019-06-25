
//function QhhcIndexRgiht() {
//    var QhhcRightMenuA = $("#qhhc_right_menu_a a");
//    var cssname = "qhhc_right_menuabox_cur qhhc_right_menu_cur1 qhhc_right_menu_cur2 qhhc_right_menu_cur3 ";
//    QhhcRightMenuA.click(function () {
//        var Ind=parseInt($(this).index()+1);
//        QhhcRightMenuA.removeClass(cssname);
//        $(this).addClass("qhhc_right_menuabox_cur qhhc_right_menu_cur" + Ind + "");
//    });
//}
function GYScroll_Test() {
    $.fn.extend({
        "GyScroll": function (op) {
           var defaulte = {
                boxid: "#null",
                btntab: "#null a",
                next: null,
                prev: null,
                time: 4000,
               number:1,
               easing:null

            }
           op = $.extend(defaulte, op);
           var tis = $(this);
           var boxul = tis.find("ul");
           var boxli = boxul.find("li");
           var boxwidth = tis.width();
           var boxlilng = boxli.length;
           var boxlinum = 100 / 3;
           var style = "<style type=\"text/css\">.boxliwidth{width:" + boxlinum + "px;}</style>";
           $(style).appendTo("head");
          boxlilng = Math.ceil(UlWidth / liwidth);
            return this.each(function () {
               //boxli.addClass("boxliwidth");
            });
        }
    });


    $("#qhhc_bannerbox").GyScroll({
        boxid: "#qhhc_bannerbox li",
        btntab:"",
        next: "#next",
        prev: "#prev",
        time: 3000,
        number:1
    });
    var WinW, startPageX, MovePageX, EndPageX, timeevent, left = true, right = true;
    var EventBanner = $("#box");
    var BannerUL = EventBanner.find("ul");
    var EventBannerLi = EventBanner.find("li");
    var BannerLiLen = EventBannerLi.length;
    var BannerTab = EventBanner.find(".banner_tab");
    var Tabclass = "curs";
    var curtime = 3000;
    var ScrollBtnPrev = $("#prev");
    var ScrollBtnNext = $("#next");
    EventBannerLi.each(function (i) {
        $("<a href=\"javascript:;\"></a>").appendTo(BannerTab);
    });
    var BannerTabA = BannerTab.find("a");
    var InitBanner = function () {
        WinW = $(window).width();
        EventBannerLi.css({ "width": WinW });
        var CurIndex = 1;
        var cloneliFirst = BannerUL.find("li:first").clone();
        var cloneliLast = BannerUL.find("li:last").clone();
        $(cloneliFirst).appendTo(BannerUL);
        $(cloneliLast).prependTo(BannerUL);
        BannerUL.eq(0).css({ "left": -WinW });
    }
    $(window).resize(function () {
        InitBanner();
    });
    InitBanner();

    var leftScollImg = function () {

        CurIndex++;
        if (CurIndex > BannerLiLen) {
            var NowLeft = -WinW * CurIndex;
            BannerUL.stop(true, false).animate({ "left": NowLeft }, 500, function () {
                BannerUL.css("left", -WinW);
            });
            CurIndex = 1;
            BannerTabA.removeClass(Tabclass).eq(0).addClass(Tabclass);
        } else {
            var NowLeft = -WinW * CurIndex;
            BannerUL.stop(true).animate({ "left": NowLeft }, 500);
            BannerTabA.removeClass(Tabclass).eq(CurIndex - 1).addClass(Tabclass);
        }
    }
    var rightScollImg = function (index) {
        if (CurIndex == 1) {
            var NowLeft = WinW * BannerLiLen;
            BannerUL.stop(true, false).animate({ "left": "0" }, 500, function () {
                BannerUL.css("left", -NowLeft);
            });
            CurIndex = BannerLiLen;
            BannerTabA.removeClass(Tabclass).eq(BannerLiLen - 1).addClass(Tabclass); //console.log(2);
        } else {
            CurIndex--;
            var NowLeft = WinW * CurIndex;
            BannerUL.stop(true).animate({ "left": -NowLeft }, 500);
            BannerTabA.removeClass(Tabclass).eq(CurIndex - 1).addClass(Tabclass);
        }
    }
    BannerTabA.hover(function (e) {
        var aindex = $(this).index();
        CurIndex = aindex;
        leftScollImg();
    }).eq(0).trigger("mouseenter");
    var pirtime;
    EventBanner.hover(function () {
        clearInterval(pirtime);
    }, function () {
        pirtime = setInterval(function () {
            leftScollImg();
        }, curtime);
    }).trigger("mouseleave");
    $("#prev,#next").hover(function () {
        clearInterval(pirtime);
    }, function () {
        pirtime = setInterval(function () {
            leftScollImg();
        }, curtime);
    });
    ScrollBtnPrev.click(function () {
        rightScollImg();
    });
    ScrollBtnNext.click(function () {
        leftScollImg();
    });
}
function qhhc_index_banner() {
   // GYScroll_Test();
    var sWidth, IndexBanner, Bannerbtnbg, index, ulbox, curlen = 0, len, libox;
    var bannerheight;
    var cssname = "curs";
    
    IndexBanner = $("#qhhc_bannerbox");
    var IndexBannerLi=IndexBanner.find("ul li");
    var bannerTab = IndexBanner.find("#qhhc_banner_tabbtn");
    var bannertTabfilter = IndexBanner.find("#qhhc_banner_tabbox_filter");
    var bannertTabText = IndexBanner.find("#qhhc_banner_tab_text")
    bannertTabfilter.css({"opacity":0.5});
   
        
        IndexBanner.find("ul li").each(function (i) {
            $("<span></span>").appendTo(bannerTab);
        });

        
    var bannerTabSpan = bannerTab.find("span");
        sWidth = IndexBanner.width(); //获取焦点图的宽度（显示面积）

        index = 0;
        var picTimer;
    bannerTabSpan.mouseover(function () {
            index = $(this).index();
            showPics(index);
    }).eq(0).trigger("mouseover");
        //Bannerbtnbg.eq(0).addClass(cssname);
        len = IndexBanner.find("ul li").length; //获取焦点图个数
        //IndexBanner.find("ul").css("width", sWidth * (len + 1));
        //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
        IndexBanner.hover(function () {
            clearInterval(picTimer);
        }, function () {
            picTimer = setInterval(function () {
                if (index == len) { //如果索引值等于li元素个数，说明最后一张图播放完毕，接下来要显示第一张图，即调用showFirPic()，然后将索引值清零
                    showFirPic();
                    index = 0;
                } else { //如果索引值不等于li元素个数，按普通状态切换，调用showPics()
                    showPics(index);
                }
                index++;

            }, 4000); //此4000代表自动播放的间隔，单位：毫秒
        }).trigger("mouseleave");
    //}
    function showPics(index) { //普通切换
        var nowLeft = -index * sWidth; //根据index值计算ul元素的left值
        IndexBanner.find("ul").stop(true).animate({ "left": nowLeft }, 900, "easeOutExpo"); //通过animate()调整ul元素滚动到计算出的position
        bannerTabSpan.removeClass(cssname).eq(index).addClass(cssname); //为当前的按钮切换到选中的效果
        var ImgAlt = IndexBannerLi.eq(index).find("img").attr("alt");
        bannertTabText.html(ImgAlt);
    }
    function showFirPic() {
        var nowLeft = -len * sWidth;
        IndexBanner.find("ul").append(IndexBanner.find("ul li:first").clone());
            var ImgAlt = IndexBanner.find("ul li:last img").attr("alt");
            bannertTabText.html(ImgAlt);
        IndexBanner.find("ul").animate({ "left": nowLeft }, 1000, "easeOutExpo", function () {
            IndexBanner.find("ul").hide().css("left", "0").show();
            IndexBanner.find("ul li:last").remove();
        });
        bannerTabSpan.removeClass(cssname).eq(0).addClass(cssname); //为当前的按钮切换到选中的效果
    }
}
function qhhc_index_srcoll() {
    var sWidth, IndexBanner, Bannerbtnbg, index, ulbox, curlen = 0, len, libox;
    var bannerheight;
    var cssname = "curs";

    IndexBanner = $("#qhhc_cont_fr_textscroll_box");
    var IndexBannerLi = IndexBanner.find("ul li");
    var bannerTab = $("#qhhc_cont_fr_textscroll_tab");


    IndexBannerLi.each(function (i) {
        $("<span></span>").appendTo(bannerTab);
    });


    var bannerTabSpan = bannerTab.find("span");
    sWidth = IndexBanner.width(); //获取焦点图的宽度（显示面积）

    index = 0;
    var picTimer;
    bannerTabSpan.mouseover(function () {
        index = $(this).index();
        showPics(index);
    }).eq(0).trigger("mouseover");
    //Bannerbtnbg.eq(0).addClass(cssname);
    len = IndexBanner.find("ul li").length; //获取焦点图个数
    //IndexBanner.find("ul").css("width", sWidth * (len + 1));
    //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
    IndexBanner.hover(function () {
        clearInterval(picTimer);
    }, function () {
        if(($("#qhhc_cont_fr_textscroll_box ul").width())>($("#qhhc_cont_fr_textscroll_box").width())){
            picTimer = setInterval(function () {
                if (index == len) { //如果索引值等于li元素个数，说明最后一张图播放完毕，接下来要显示第一张图，即调用showFirPic()，然后将索引值清零
                    showFirPic();
                    index = 0;
                } else { //如果索引值不等于li元素个数，按普通状态切换，调用showPics()
                    showPics(index);
                }
                index++;

            }, 2000); //此4000代表自动播放的间隔，单位：毫秒
        }
    }).trigger("mouseleave");
    //}
    function showPics(index) { //普通切换
        var nowLeft = -index * sWidth; //根据index值计算ul元素的left值
        IndexBanner.find("ul").stop(true).animate({ "left": nowLeft }, 1000, "easeOutExpo"); //通过animate()调整ul元素滚动到计算出的position
        bannerTabSpan.removeClass(cssname).eq(index).addClass(cssname); //为当前的按钮切换到选中的效果
    }
    function showFirPic() {
        var nowLeft = -len * sWidth;
        IndexBanner.find("ul").append(IndexBanner.find("ul li:first").clone());
        IndexBanner.find("ul").animate({ "left": nowLeft }, 1000, "easeOutExpo", function () {
            IndexBanner.find("ul").hide().css("left", "0").show();
            IndexBanner.find("ul li:last").remove();
        });
        bannerTabSpan.removeClass(cssname).eq(0).addClass(cssname); //为当前的按钮切换到选中的效果
    }
}
//function HoverAddClass(options, parentstag, classname) {
 //  $(options).hover(function (e) {
   //  //   $(this).parents(parentstag).find(options).removeClass(classname);
     //   $(this).addClass(classname);
    //},function(){
	//	 $(this).removeClass(classname);	
	//});
//}

function HoverAddClass(options, parentstag, classname) {
    $(options).hover(function (e) {
        $(this).parents(parentstag).find(options).removeClass(classname);
        $(this).addClass(classname);
    }).eq(0).trigger("mouseenter");
}

//function businessUl() {
//    var BoxLi = $("#business_list li");
//    var BoxLiWidth = BoxLi.width();
//    var UlWidth = BoxLiWidth * BoxLi.length;
//    var liwidth = BoxLi.parent().parent().outerWidth();
//    var BoxLiLen = Math.ceil(UlWidth / liwidth);
//    var Liwidth = 0, ind = 0,cur=0;
//
//    var Nextbox = $(".qhhc_link_fr_next");
//    var Prevbox = $(".qhhc_link_fr_prev");
//
//    var NextCur = "qhhc_link_fr_next_cur";
//    var PrevCur = "qhhc_link_fr_prev_cur";
//    if (BoxLiLen > 1) {
//        Nextbox.addClass(NextCur);
//    }
//    Nextbox.click(function () {
//        ind++;
//        if (ind >= BoxLiLen) {
//            ind = BoxLiLen - 1;
//        } else {
//            var UlLeft = liwidth * ind;
//            BoxLi.parent().stop(true, true).animate({ "left": "-" + UlLeft });
//            cur = ind;
//            if ((cur + 1) >= BoxLiLen) {
//                Nextbox.removeClass(NextCur);
//                Prevbox.addClass(PrevCur);
//            } else {
//                Nextbox.addClass(NextCur);
//                Prevbox.addClass(PrevCur);
//            }
//        }
//    });
//    Prevbox.click(function () {
//        ind--;
//        if (ind < 0) {
//            ind = 0;
//        } else {
//            var UlLeft = -liwidth * ind;
//            BoxLi.parent().stop(true, true).animate({ "left": UlLeft });
//            cur = ind;
//            if ((cur) <= 0) {
//                Prevbox.removeClass(PrevCur);
//                Nextbox.addClass(NextCur);
//            } else {
//                Prevbox.addClass(PrevCur);
//                Nextbox.addClass(NextCur);
//            }
//        }
//
//    });
//}





//zhy  2015-6-8

$(function(){
	
	var pp_top=$("#pinpai").offset().top;
	var pp_top02=$("#yewu02").offset().top;
	var pp_top03=$("#yewu04").offset().top;
	$(".right_menu a.a01").click(function(){
		$(".right_menu_a").find("a").removeClass("cur");
		$(this).addClass("cur");
		$("body,html").animate({scrollTop:pp_top},500);	
	});
	
	
	$(".right_menu a.a02").click(function(){
		$(".right_menu_a").find("a").removeClass("cur");
		$(this).addClass("cur");
		$("body,html").animate({scrollTop:pp_top02},500);	
	});
	
	$(".right_menu a.a03").click(function(){
		$(".right_menu_a").find("a").removeClass("cur");
		$(this).addClass("cur");
		$("body,html").animate({scrollTop:pp_top03},500);	
	});
	
	//至顶部
	$(".right_menu a.a04").click(function(){
		$(".right_menu_a").find("a").removeClass("cur");
		$("body,html").animate({scrollTop:0},500);	
	});	
	
	
	$(window).scroll(function(){
		var scrTop=$(document).scrollTop();
		//alert(scrTop)
		if(500<scrTop &&  scrTop<=1000){
			//alert(1)
			$(".right_menu_a").find("a").removeClass("cur");
			$(".right_menu a.a01").addClass("cur");		
		}else if(1000<scrTop &&  scrTop<=1500){
			//alert(2)
			$(".right_menu_a").find("a").removeClass("cur");
			$(".right_menu a.a02").addClass("cur");	
		}else if(1500<scrTop &&  scrTop<=2700){
			$(".right_menu_a").find("a").removeClass("cur");
			$(".right_menu a.a03").addClass("cur");
		}
		else{
			$(".right_menu_a").find("a").removeClass("cur");	
		}
		
	});
	
	
});


/*20150717*/
$(function(){
	$(".right_menu_a .a04").click(function(){alert(ok);
        $('html, body').animate({scrollTop: 0},200);
    });
})















