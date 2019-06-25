var isTouch = Modernizr.touchevents,
	isMobile = false,
	win_width = 0,
	win_height = 0,
	atH=77,
	pageNavH=0;
var pageInit = {
		init: function () {
	        win_width = $(window).width();
			win_height = $(window).height();
			if (win_width <= 1024) {
		        isMobile = true;
		        atH=50;
		    } else if (win_width > 1024) {
		        isMobile = false;
		   		atH=77;
		    };
	   },
	   setImgMax: function(img, imgW, imgH, tW, tH) {
	   		var tWidth = tW || win_width;
		    var tHeight = tH || win_height;
		    var coe = imgH / imgW;
		    var coe2 = tHeight / tWidth;
		    if (coe < coe2) {
		        var imgWidth = tHeight / coe;
		        img.css({ height: tHeight, width: imgWidth, left: -(imgWidth - tWidth) / 2, top: 0 });
		    } else {
		        var imgHeight = tWidth * coe;
		        img.css({ height: imgHeight, width: tWidth, left: 0, top: -(imgHeight - tHeight) / 2 });
		    };
	   	}
	},
	menu = {
	    trigger: ".menu-handler",
	    init: function () {
	        menu.bind();
	    },
	    bind: function () {
	        $(document).on("click", menu.trigger, menu.open);
	        $(document).on("click", ".navMobile dd p a", function (e) {
	            var stcur = $(this);
	            var stDD = $(this).parents("p").parents("dd");
	            if (stDD.find(".msubnav").size() > 0) {
	                if (stcur.hasClass("cur")) {
	                    stDD.find(".msubnav").stop(false, false).slideUp();
	                    stcur.removeClass("cur");
	                } else {
	                    jQuery(".navMobile dd p a").removeClass("cur");
	                    jQuery(".msubnav").stop(false, false).slideUp();
	                    stDD.find(".msubnav").stop(false, false).slideDown();
	                    stcur.addClass("cur");
	                    e.preventDefault();
	                }
	            }
	        });
	        $(document).on("click", "#bg-santai", menu.open)
	    },
	    open: function () {
	        if ($("body").is(".open")) {
	            $("body").removeClass("open");
	            $(".menu-handler").removeClass("active");
	            $("#bg-santai").fadeTo("fast", 0, function () {
	                $("#bg-santai").hide();
	            });
	        } else {
	            $("#bg-santai").fadeTo("fast", 0.4);
	            $("body").addClass("open");
	            $(".menu-handler").addClass("active");
	        }
	    }
	},
	nav={
		init: function(){
			jQuery(".navlist li").mouseover(function(){
				if(jQuery(this).hasClass("hov")){
					return;
				};
				jQuery(".navlist li").removeClass("hov");
				jQuery(this).addClass("hov");
				//jQuery(".subbg").stop(false, false).animate({ top: 77, opacity: "show" }, 400);
				jQuery(".subbg").stop(false,false).fadeIn(400);
				jQuery(".subnav").removeClass("subnavAct");
				var subname=".subnav"+(jQuery(this).index());
				if(jQuery(subname).length>=1){
					jQuery(subname).stop(false,false).addClass("subnavAct");
				}
			});
			jQuery(".subnav").mouseover(function(){
				if(jQuery(this).hasClass("subnavAct")){
					return;
				};
				jQuery(".subnav").removeClass("subnavAct");
				jQuery(this).stop(false,false).addClass("subnavAct");
				var linname=".navlist .lin"+(jQuery(this).index());
				jQuery(".navlist li").removeClass("hov");
				if(jQuery(linname).length>=1){
					jQuery(linname).stop(false,false).addClass("hov");
				}
			});
			jQuery(".nav").bind("mouseleave", function () {
		        jQuery(".nav li").removeClass("hov");
		        jQuery(".subbg").stop(false,false).fadeOut(400);
		        //jQuery(".subbg").stop(false, false).animate({ top: 90, opacity: "hide" }, 400);
		        jQuery(".subnav").removeClass("subnavAct");
		    });
		}
	};
jQuery(window).resize(function () {
    pageInit.init();
    pageBanner();
});
function pageBanner() {
	if(!isMobile){
    	jQuery('.pbanner').css("height",jQuery(".pbanner img").height());
    }else{
    	jQuery('.pbanner').css("height","auto");
    }
};
load();
function load() {
    var maxNum = $(".pbanner img").size();
    var curNum = 0;
    jQuery(".pbanner img").each(function () {
        $(this).attr("src", $(this).attr("_src"));
        jQuery(this).load(function () {
            curNum++;
            if (curNum == maxNum) {
                pageBanner();
            }
        });
    });
};
function getHash(){
	var hash = location.href.split("#")[1];
	if(hash){
		setScroll("#"+hash);
	}
};
var scnum=113;
function setScroll(anchorCur){
	if(isMobile){
		scnum=84;
	}else{
		scnum=113;
	}
	jQuery("html,body").delay(300).animate({ scrollTop: jQuery(anchorCur).offset().top-scnum},800,'easeInOutExpo');
};
jQuery(function(){
	pageInit.init();
	menu.init();
    nav.init();
	if(jQuery(".pageNav").length>=1){
		pageNavH=jQuery(".pageNav").offset().top-atH;
	}
    jQuery(window).scroll(function () {
        var windowTop = jQuery(window).scrollTop();
        if (windowTop < win_height  && !isMobile) {
            jQuery('.pbanner img').css('transform',"translate(0px,"+(windowTop) / 1.5+"px)");
        };
        if(windowTop>pageNavH){
			jQuery(".pageNavBox").addClass("fixed");
		}else{
			jQuery(".pageNavBox").removeClass("fixed");
		};
    });
    var $pbanner=jQuery(".pbanner");
    if($pbanner.length>=1){
	    setTimeout(function() {
	      $pbanner.addClass('trans-1');
	      $pbanner.removeClass('picw');
	    }, 100);
	    setTimeout(function() {
	      $pbanner.removeClass('trans-1');
	    }, 600);
    };
    window.onload = function () {
		getHash();
	}
    jQuery(".pageNav a").click(function(e){
		var $this=jQuery(this);
		var hash = $this.attr("href").split("#")[1];
		if(hash && jQuery("#"+hash).length>=1){
			e.preventDefault();
			setScroll("#"+hash);
		}
	});
});
//weixin
setPopUp($('.sharpBox .a2'), "官网微信");
function setPopUp(obj, title) {
    obj.click(function () {
        var str = '<div class="popUpblack"><div class="popUp"><div class="t">' + title + '<span class="close">关闭</span></div><div class="img"><img src="' + obj.attr("href") + '"/></div></div></div>';
        $("body").append(str);
        jQuery(".popUpblack").fadeIn();
        jQuery(".popUp").animate({ marginTop: "-127" }, 400);
        $(".popUp .close").click(function () {
            $(".popUpblack").remove();
        });
        jQuery(".popUpblack").click(function () { $(".popUpblack").remove(); });
        return false;
    });
};
$(document).on('click','.overlayClose',function(){
 	$('.imgShowBox').removeClass('img-show');
    jQuery('html').removeClass('openImg');
    setTimeout(function () { jQuery('.imgShowBox').remove(); }, 800);
});
function openshowImg(num,imgList) {
    $('html').addClass('openImg');
    jQuery("body").append('<div class="imgShowBox"><div class="imgShowDemo"></div><a class="overlayClose"><i></i></a></div>');
    for(var i = 0 ; i < imgList.length ; i++){
		$('.imgShowDemo').append('<div class="item"><img src="" class="img"/><div class="txt"><div class="i"></div></div></div>')
		var imgurl = imgList.eq(i).attr('data-img');
		var imgtitle = imgList.eq(i).attr('data-title');
		$('.imgShowDemo .item').eq(i).find(".img").attr("src",imgurl);
		$('.imgShowDemo .item').eq(i).find('.i').html(imgtitle);	
	}
    $(".imgShowBox").css({ height: win_height });
    $('.imgShowDemo').css({ height: win_height });
    $('.imgShowDemo .item').css({ height: win_height });
    
    jQuery(window).resize(function(){
		$(".imgShowBox").css({ height: win_height });
        $('.imgShowDemo').css({ height: win_height });
        $('.imgShowDemo .item').css({ height: win_height });
    });
    
    var imgowl=jQuery(".imgShowDemo").owlCarousel({
        items: 1,
        slideSpeed : 600,
        autoPlay: false,
        navigation: true,
        pagination: false,
        singleItem: true,
        rewindNav: false
    });
    imgowl.data('owlCarousel').jumpTo(num);
    $('.imgShowBox').addClass('img-show');
}

function tabs(outname, outconname, focusclass, displaymethod, speed, sefs, sibling) {
    if (speed == null) speed = "slow";
    if (focusclass == null) focusclass = "tbfocus";
    if (displaymethod == null) displaymethod = 0;
    if (sefs == "") sefs = "click";
    if (sibling == "") sibling = "li";
    var sw = displaymethod;
    function myShow(i) {
        jQuery(outname).eq(i).addClass(focusclass).siblings(sibling).removeClass(focusclass);
        jQuery(outconname).fadeOut(speed);
        jQuery(outconname).eq(i).stop(true, true).slideDown(600);
    }
    myShow(sw);
    if (sefs == "click") {
        jQuery(outname).click(function () {
            sw = jQuery(outname).index(this);
            myShow(sw);
        });
    } else if (sefs == "mouseover") {
        jQuery(outname).mouseover(function () {
            sw = jQuery(outname).index(this);
            myShow(sw);
        });
    }

};