// JavaScript Document
$(function () {
    $(".newslist01 dl").hover(function () {
        $(this).addClass("cur");
    }, function () {
        $(this).removeClass("cur");
    });


})

//屏幕宽度限制
$(function () {

    var removeCssAttr = function (elem, attr) {
        var s = elem.style;
        if (s.removeProperty) {
            s.removeProperty(attr);
        } else {
            s.removeAttribute(attr);//兼容低版本ie
        }
    };
    minwidth();
    $(window).resize(function () {
        minwidth();
    })



    function minwidth() {
        if ($(window).width() < 1260) {
            $("body").css({ "width": "1280px" });
        } else {
            removeCssAttr(document.body, 'width');
        }
    }
})

$(function () {
    //nqh made
    $(".header-nav ul li .right-SSmain .button").bind("click", function () {
        $(this).parents(".right-SSmain").css({ "border": "1px solid #c7c7c7" });
        $(this).parents(".right-SSmain").find(".text").animate({ "width": "70px", "padding": "0 10px", "margin-left": "10px" }, 600, function () {
            $(this).parents(".right-SSmain").find(".text").focus();
        });
        $(this).parents(".right-SSmain").animate({ "width": "118px", "padding-left": "10px" }, 600);
    });
    $(".header-nav ul li .right-SSmain .text").blur(function () {
        $(".header-nav ul li .right-SSmain .text").blur(function () {
            $(this).parents(".right-SSmain").css({ "border": "none" });
            $(this).parents(".right-SSmain").find(".text").animate({ "width": "0", "padding": "0", "margin-left": "0" }, 400);
            $(this).parents(".right-SSmain").animate({ "width": "16px", "padding-left": "0" }, 400);
        })
    })

    //文字滚动
    function textroll() {
        $(".header-notice ul").animate({ "top": "-16px" }, 500, function () {
            $(".header-notice ul li:first").appendTo($(".header-notice ul"));
            $(".header-notice ul").css({ "top": 0 });
        })
    }
    if ($(".header-notice ul li").length > 1) {
        var indexT = setInterval(function () {
            textroll()
        }, 2000);

        $(".header-notice ul").hover(function () {
            clearInterval(indexT)
        }, function () {
            indexT = setInterval(function () {
                textroll()
            }, 2000);
        })
    }

    $(".indexonelink p a:last").css({ "border": "none" });

    $(".header-login dl dd .button").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    })

    $(".retutntopbtn").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    })

    //20151121 nqh
    $(window).scroll(function () {
        if ($(document).scrollTop() > $(window).height()) {
            $(".retutntopbtn").show();
        } else {
            $(".retutntopbtn").hide();
        };
    });


    //20151126 nqh
    $(".header-nav ul").find(".indexnav").bind({
        click: function () {
            var nownum = $(this).index();

        }
    })

    for (var i = 0; i < $(".header-nav ul .indexnav").length; i++) {
        indexnavclick(i);
    }
    function indexnavclick(e) {
        $(".header-nav ul").find(".indexnav").eq(e).click(function () {
            console.log($(".indexpiece").eq(e).offset().top);
            if (e == 0) {
                $('html, body').animate({ scrollTop: 0 }, 600);
            } else {
                $('html, body').animate({ scrollTop: (($(".indexpiece").eq(e).offset().top - 134)) }, 600);
            }
        })
    }


    //20151127 nqh 首页交互效果
    //$(".indextwo-center li").eq(0).css({ "left": -200 });
    //$(".indextwo-center li").eq(1).css({ "left": 200 });
    //$(".indextwo-center li").eq(2).css({ "left": 400 });
    //$(".index-threeM .indexM-nav a").eq(0).css({ "left": 840 });
    //$(".index-threeM .indexM-nav a").eq(1).css({ "left": 840 });
    //$(".index-threeM .indexM-nav a").eq(2).css({ "left": 840 });
    //$(".index-threeM .indexM-nav a").eq(3).css({ "left": 840 });
    //$(".indexfour-center li").eq(0).css({ "left": -200 });
    //$(".indexfour-center li").eq(1).css({ "left": 200 });
    //$(".indexfour-center li").eq(2).css({ "top": 400 });
    //$(".indexfour-center li").eq(3).css({ "top": 400 });
    //$(".indexfour-center li").eq(4).css({ "top": 400 });
    function indexcentermove() {
        if ($(document).scrollTop() > ($(".index-two").offset().top - ($(window).height() / 2))) {
            $(".indextwo-center li").parallax({start : {left :0},speed : 2500});
        }
        if ($(document).scrollTop() > ($(".index-three").offset().top - ($(window).height() / 1.5))) {
            $(".index-threeM .indexM-nav a:eq(0)").animate({ "left": 0 }, 400, function () {
                $(".index-threeM .indexM-nav a:eq(1)").animate({ "left": 0 }, 300, function () {
                    $(".index-threeM .indexM-nav a:eq(2)").animate({ "left": 0 }, 200, function () {
                        $(".index-threeM .indexM-nav a:eq(3)").animate({ "left": 0 }, 100);
                    })
                })
            });
        }
        if ($(document).scrollTop() > ($(".index-four").offset().top - ($(window).height() / 1.5))) {
            $(".indexfour-center li:eq(0)").animate({ "left": 0 }, 600);
            $(".indexfour-center li:eq(1)").animate({ "left": 0 }, 600);
        }
        if ($(document).scrollTop() > ($(".index-four").offset().top - ($(window).height() / 5))) {
            $(".indexfour-center li:eq(2)").animate({ "top": 0 }, 200, function () {
                $(".indexfour-center li:eq(3)").animate({ "top": 0 }, 200, function () {
                    $(".indexfour-center li:eq(4)").animate({ "top": 0 }, 200)
                })
            });
        }

    }
    //indexcentermove();
    //$(window).scroll(function () { indexcentermove(); })
})
$(function () { 
    $.parallax = {

        instance: [],

        id: 0

    }

    $.fn.parallax = function (options) {

        if (this.length > 1) {
            this.each(function () {
                $(this).parallax();
            });
            return;
        }

        var left = parseInt(this.css('left')) || 0;
        var top = parseInt(this.css('top')) || 0;
        var right = parseInt(this.css('right')) || 0;
        var bottom = parseInt(this.css('bottom')) || 0;

        var def = {

            start: {
                left: left,
                top: top,
                opacity: 1,
                right: 0,
                bottom: 0
            },

            end: {
                left: left,
                top: top,
                opacity: 1,
                right: right,
                bottom: bottom
            },

            speed: 400,

            easing: 'easeOutExpo'
        }

        var opt = $.extend(true, def, options);

        if (opt.start.right) {
            opt.start.left = "auto";
            opt.end.left = "auto";
        } else {
            opt.start.right = "auto";
            opt.end.right = "auto";
        }
        if (opt.start.bottom) {
            opt.start.top = "auto";
        } else {
            opt.start.bottom = "auto";
        }
        var status = 0;

        var self = this;

        $.parallax.instance.push({
            id: $.parallax.id++,
            dom: self,
            start: opt.start,
            end: opt.end,
            speed: opt.speed,
            easing: opt.easing,
            status: status
        })

    }

    $(function () {

        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        win_width = $(window).width();
        win_height = $(window).height();
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            $("body").css({ "width": "1920px" });
        } else {

            $('.indexfour-center li.li1').eq(0).parallax({ start: { left: -500, opacity: 0 }, speed: 2500 });
            $('.indexfour-center li.li1').eq(1).parallax({ start: { right: -500, opacity: 0 }, speed: 2500 });
            $('.indexfour-center li').eq(2).parallax({ start: { top: 100, opacity: 0 }, speed: 2000 });
            $('.indexfour-center li').eq(3).parallax({ start: { top: 200, opacity: 0 }, speed: 2000 });
            $('.indexfour-center li').eq(4).parallax({ start: { top: 300, opacity: 0 }, speed: 2000 });


            $('.indexthree-center').find('dd').eq(0).parallax({ start: { left: -300, opacity: 0 }, speed: 2500 });
            $('.indexthree-center').find('dd').eq(1).parallax({ start: { left: -600, opacity: 0 }, speed: 2500 });
            $('.indexthree-center').find('dd').eq(2).parallax({ start: { right: -300, opacity: 0 }, speed: 2500 });
            $('.indexthree-center').find('dd').eq(3).parallax({ start: { right: -600, opacity: 0 }, speed: 2500 });

            

            $('.indextwo-center li').eq(0).parallax({ start: { left: -300, opacity: 0 }, speed: 2500 });
            $('.indextwo-center li').eq(1).parallax({ start: { right: -300, opacity: 0 }, speed: 2500 });
            $('.indextwo-center li').eq(2).parallax({ start: { right: -600, opacity: 0 }, speed: 2500 });

            
            $('.index-threeM .indexM-nav').find('a').eq(0).parallax({ start: { left: 0, opacity: 0 }, speed: 2000 });
            $('.index-threeM .indexM-nav').find('a').eq(1).parallax({ start: { left: -116, opacity: 0 }, speed: 2000 });
            $('.index-threeM .indexM-nav').find('a').eq(2).parallax({ start: { left: -116 * 2, opacity: 0 }, speed: 2000 });
            $('.index-threeM .indexM-nav').find('a').eq(3).parallax({ start: { left: -116 * 3, opacity: 0 }, speed: 2000 });
            $('.index-threeM .indexM-nav').find('a').eq(4).parallax({ start: { left: -116 * 4, opacity: 0 }, speed: 2000 });
            $('.index-threeM .indexM-nav').find('a').eq(5).parallax({ start: { left: -116 * 5, opacity: 0 }, speed: 2000 });
            $('.index-threeM .indexM-nav').find('a').eq(6).parallax({ start: { left: -116 * 6, opacity: 0 }, speed: 2000 });

            //$('.index-twoM .indexM-nav').find('a').eq(0).parallax({ start: { left: 0, opacity: 0 }, speed: 1000 });
            //$('.index-twoM .indexM-nav').find('a').eq(1).parallax({ start: { left: -116, opacity: 0 }, speed: 1000 });
            //$('.index-twoM .indexM-nav').find('a').eq(2).parallax({ start: { left: -116 * 2, opacity: 0 }, speed: 1000 });
            //$('.index-twoM .indexM-nav').find('a').eq(3).parallax({ start: { left: -116 * 3, opacity: 0 }, speed: 1000 });
            //$('.index-twoM .indexM-nav').find('a').eq(4).parallax({ start: { left: -116 * 4, opacity: 0 }, speed: 1000 });
            //$('.index-twoM .indexM-nav').find('a').eq(5).parallax({ start: { left: -116 * 5, opacity: 0 }, speed: 1000 });
            //$('.index-twoM .indexM-nav').find('a').eq(6).parallax({ start: { left: -116 * 6, opacity: 0 }, speed: 1000 });


            var winHeight = $(window).height();
            var inWindow = function (dom) {
                var d = dom.get(0);
                var p = d.getBoundingClientRect();
                return p.top < winHeight / 1.1;
            }
            var init = function () {
                for (var i = 0 ; i < $.parallax.instance.length; i++) {
                    var d = $.parallax.instance[i];
                    if (d.status < 1) {
                        d.dom.css(d.start);
                        d.status = 1;
                    }
                }
            }
            var move = function () {
                for (var i = 0 ; i < $.parallax.instance.length; i++) {
                    var d = $.parallax.instance[i];
                    if (d.dom.length < 1) return;
                    if (d.status > 0 && inWindow(d.dom)) {

                        d.dom.animate(d.end, d.speed, d.easing);
                        d.status = 0;
                    }
                }
            }
            init();
            move();

            $(window).scroll(function (event) {
                move();
            });
        }

    });
})

//20151202 nqh
$(function () {
    if ($(".indexflow").length > 0) {
        $(window).scroll(function () {
            $(".indexflow").stop();
            var st = $(this).scrollTop();
            //console.log(st);
            $('.indexflow').animate({ "top": st + 200 }, 600);
        })
    }
})