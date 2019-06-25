


$(function () {

    //input 绑定
    $("input[type=text]").each(function () {
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

    $('.index_menu ul li').each(function (index, element) {
        var aH = $(this).find('a').width();
        $(this).width(aH);
    });
    //首页左右无限滚动
    function crScroll(left, right, div) {
        var ul = $(div).find("ul");
        var liWidth = $(ul).find("li").outerWidth(true);
        var len = ul.children().length;
        $(left).click(function () {
            $(right).show();
            if ($(div).is(":animated")) {
                return false;
            }
            $(ul).css({ "margin-left": -liWidth + "px" });
            $(ul).find("li").last().prependTo(ul);
            $(ul).animate({ "margin-left": 0 });
        });
        $(right).click(function () {
            $(left).show();
            if ($(div).is(":animated")) {
                return false;
            }
            $(ul).animate({ "margin-left": -liWidth }, 500, function () {
                $(ul).find("li").first().appendTo(ul);
                $(ul).css({ "margin-left": "0px" });
            });
        });
    };
    //调用
    crScroll(".relative_pro a.prev", ".relative_pro a.next", ".relative_list");


    //语言下拉
    $(".index_menu dl dt").hover(function () {
        $(this).children("ol").stop(true, true).slideDown();
    }, function () {
        $(this).children("ol").stop(true, true).slideUp();
    })

    $('.index_menu dl dt ol li').click(function () {
        var lantxt = $(this).text();
        $(this).parent().prev().text(lantxt);
        $(this).parent().slideUp();
    });

    //首页产品鼠标移上
    $(".index_proList dl").hover(function () {
        $(this).children("dt").find("div").fadeIn();
        $(this).children("dt").find("h3").hide();
    }, function () {
        $(this).children("dt").find("div").fadeOut();
        $(this).children("dt").find("h3").show();
    })

    //搜索
    $('.index_menu dl dd.dd01').hover(function () {
        $('.index_menu dd.dd02').show();
    });
    $('.index_menu dl').mouseleave(function () {
        $(this).find('dd.dd02').hide();
    })

    //产品页
    $('.product_list li').each(function (index, element) {
        $(this).hover(function () {
            $(this).find('.most').addClass('att');
        }, function () {
            $(this).find('.most').removeClass('att');
        });
    });

    

    //首页解决方案
    $(".index_soluList ul li").hover(function () {
        var img = $(this).find("img");
        var rel = img.attr("rel");
        var src = img.attr("src");

        $(this).addClass("curr").siblings().removeClass("curr")
        img.attr("src", rel)
        img.attr("rel", src)
    }, function () {
        var img = $(this).find("img");
        var rel = img.attr("rel");
        var src = img.attr("src");

        $(this).removeClass("curr")
        img.attr("src", rel)
        img.attr("rel", src)
    })

   
    //产品中心-详细选项卡
    $('.pro_introC_nav li').each(function (index, el) {
        $(this).click(function () {
            $(this).find('a').addClass('click');
            $(this).siblings().find('a').removeClass('click');
            $('.pro_data .pro_special').hide();
            $('.pro_data .pro_special').eq(index).show();
        })
    });

    $('.pro_close').click(function () {
        $(this).parent().hide();
    });

    $('#contact').click(function () {
        $(".pro_contact").show();
        $(".protc").show();
    });

    $('#email').click(function () {
        $(".pro_email").show();
        $(".protc").show();
    });

    $('#print').click(function () {
        $(".pro_print").show();
        $(".protc").show();
    });

    // $('.bd ul li').each(function (index, element) {
    //        $(this).click(function () {
    //            $(this).parents('.suolue').prev().prev().find("img").attr("src", $(this).find("img").attr("rel"));
    //        });
    //    });

    $(".img01").attr("src", $(".bd ul li:eq(0)").find("img").attr("src"));
    $(".bd ul li").click(function () {
        $(".img01").attr("src", $(this).find("img").attr("src"))
    });


    //企业风采
    var txt1 = $('.ui-carousel li:first').attr("txt");
    $('.ui-carousel li:first').parents('.demoalls').prev().find('em').text(txt1);
    $('.ui-carousel li').each(function (index, el) {
        $(this).click(function () {
            $(this).addClass('cur');
            $(this).siblings().removeClass('cur');
            var txt = $(this).attr("txt");
            $(this).parents('.demoalls').prev().find('em').text(txt);
            //alert(txt);
        });
    });

    //企业荣誉
    $('.companyhonor ul li').each(function (index, element) {
        $(this).hover(function () {
            $(this).find('span.fu').show();
        }, function () {
            $(this).find('span.fu').hide();
        });
    });

    $('.companyhonor ul li').each(function () {
        var _this = $(this);
        var divH = _this.find('div').height();
        var imgH = _this.find('img').height();
        var mt = (divH - imgH) / 2;
        _this.find('img').css('margin-top', mt);
    });

    $('.companyhonor ul li').each(function (index, element) {
        $(this).click(function () {
            $('.mask,.honorbig').show();
            var ind;
            $('.honorbig').find("img").attr("src", $(this).find("img").attr("src"));
        });
    });

    $('.close').click(function () {
        $('.mask,.honorbig').hide();
    });

    //人文关怀
    $('.humansmallimg ul li').each(function (index, element) {
        $(this).click(function () {
            var spantxt = $(this).find('span').text();
            $(this).parent().parent().parent().prev().prev('h2').text(spantxt);
        });
    });

    //常见问题
    $('.question li').each(function (index, element) {
        $(this).hover(function () {
            $(this).css('border-left', '4px solid #f64500');
            $(this).find('a.quesdetail').css('color', '#f64500');
        }, function () {
            $(this).css('border-left', '4px solid #fff');
            $(this).find('a.quesdetail').css('color', '#999');
        });
    });

    /*$('.quesdetail').click(function () {
        var pH = $(this).prev().height()
        if (pH == 48) {
            $(this).prev().css('overflow', 'inherit');
            var spanH = $(this).prev().find('span').height();
            $(this).prev().height(spanH);
        } else {
            $(this).prev().css({ 'height': '48px', 'overflow': 'hidden' });
        }
        $(this).parent().siblings().find('p').css({ 'overflow': 'hidden', 'height': '48px' });

    });*/

    $('.quesdetail').click(function () {
        var divh = $(this).prev().height();
        if (divh == 48) {
            $(this).prev().css('height', 'auto');
        } else {
            $(this).prev().css('height', '48px');
        }
        $(this).parent().siblings().find('.hsh_div').css({ 'overflow': 'hidden', 'height': '48px' });
    });

    //下载中心
    $('.searchbox').click(function () {
        $('.searchp').slideToggle();
    });
    $('.searchp span').each(function (index, element) {
        $(this).hover(function () {
            $(this).addClass('action');
        }, function () {
            $(this).removeClass('action');
        });
        $(this).click(function () {
            var thistxt = $(this).text();
            $(this).parent().prev().find('span').text(thistxt);
            $(this).parent().slideUp();
        });
    });

    //意见反馈
    $('.reset').click(function () {
        $(".formtxt,.formarea").val("");
    })

    //在线演示
    $('.video ul li').each(function () {
        $(this).hover(function () {
            $(this).find('em').css('display', 'block');
        }, function () {
            $(this).find('em').css('display', 'none');
        })
    });
    var maskdiv = $('.maskvideo');
    var wcbdFrVideobox = $("#wc_bd_fr_videobox");
    $('.videoss span').click(function () {
        $('.maskvideo').hide();
        wcbdFrVideobox.html(" ");
    });
    var VideoStr = function (datesrc, number, VideoObject) {
        //var rel = datesrc.replace("flv", "FLV");
        var VideoStr_ = '<embed src=' + datesrc + ' quality="high" width="100%" height="100%" align="middle" allowScriptAccess="always" allowFullScreen="true" mode="transparent" type="application/x-shockwave-flash"></embed>'//支持swf播放器

        /*如果用其他播放器，请用此var VideoStr_ = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="100%" height="100%">' +
            '<param name="movie" value="/webimages/flv_player.swf?flv_url=' + datesrc + '&autoplay=' + number + '&btn_color=0xceac70"> ' +
            '<param name="BarColor" value="0xffffff" />' +
            '<param name="BarTransparent" value="20" />' +
            '<param name="quality" value="high"/> ' +
            '<param name="allowFullScreen" value="true" /> ' +
            '<embed src="/webimages/flv_player.swf?flv_url=' + datesrc + '&autoplay=' + number + '&btn_color=0xceac70" allowFullScreen="true" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%"> ' +
            '</embed> ' +
            '</object>';*/


        $(VideoStr_).appendTo(VideoObject);

    }

    $('.video ul li').on("click", function () {
        maskdiv.show();
        VideoStr($(this).attr("data-flash"), 0, wcbdFrVideobox);
    });




    //新闻
    $('.news_list li').each(function () {
        $(this).hover(function () {
            $(this).find('a').find('span').css('color', '#f65400');
            $(this).find('a').find('i').css('color', '#f65400');
            $(this).find(".newstime").addClass("cur");
        }, function () {
            $(this).find('a').find('span').css('color', '#333');
            $(this).find('a').find('i').css('color', '#999');
            $(this).find(".newstime").removeClass("cur");
        });
    });

    /*联系迪威泰*/
    $('.area01').hover(function () {
        if ($(this).find('div:first').find("h4").length > 0) {
            $(this).find('div:first').show();
        } else {
            $(this).find('div:first').hide();
        }
        // $(this).find('div:first').show();
        // $(this).siblings().find('div:first').hide();
    }, function () {
        $(this).find('div:first').hide();
    });

    $('.worldarea01').hover(function () {
        if ($(this).find('div:first').find("h4").length > 0) {
            $(this).find('div:first').show();
        } else {
            $(this).find('div:first').hide();
        }

    }, function () {
        $(this).find('div:first').hide();
    });

    //solution
    $('.solution ul li').each(function (index, element) {
        $(this).hover(function () {
            $(this).find('h2').find('a').css('color', '#f65400');
        }, function () {
            $(this).find('h2').find('a').css('color', '#333');
        });
    });

    //返回头部
    $(".index_footerCopy p span").click(function () {
        $("html,body").animate({ "scrollTop": $("body").offset().top }, 1000)
    })

    $(".searchbox").change(function () {
        search_down(0);
    })

    $("#search_downloads").click(function () {
        search_down(0);
    });

    $(".hshadd select").change(function () {
        search_down(0);
    });

})


//20150522
function search_pro(p) {
    $(".Jump").hide();
    $("input[name=page]").val(p);
    $.getJSON("/ajax/searchpro.ashx?ver=cn", $("#form_search").serialize(), function (data) {
        if (data != "" && data != null) {
            var json = data;
            var date = json.data;
            var html = "", html1 = "";//
            var pagesize = data.pagesize;
            var style = data.currlpage;
            $.each(date, function (i) {
                var title = date[i].title;
                var img = date[i].img;
                var url = date[i].url;
                var content = date[i].content;
                html += "<li><a href='" + url + "'><img src='" + img + "' height='221' width='298'></a><div class='proinfro'><h3><a href='" + url + "'>" + title + "</a></h3>" + content + "</div><a href='" + url + "' class='most'><span></span><i>查看详细</i></a><div class='clear'></div></li>";
            });
            $(".product_list").html(html);
            if (pagesize > 1) {
                html1 += "<span class=\"marright\"><a href=\"javascript:void\" class=\"change\"onclick=\"search_pro(0)\"></a></span>";
                for (i = 1; i < pagesize; i++) {
                    if (i == style)
                        stylename = "cura";
                    else
                        stylename = "";
                    html1 += "<span class=\"marright\"><a href=\"javascript:void\" class=\"num " + stylename + "\" onclick=\"search_pro(" + i + ")\">" + i + "</a></span>";
                }
                html1 += "<span class=\"marright\"><a href=\"javascript:void\" class=\"changel\"onclick=\"search_pro(" + Number(Number(pagesize) - 1) + ")\"></a></span>";
            }
            $(".page").html(html1);
        }
        else {
            $(".product_list").html("");
            $(".page").html("");
        }
    })
}


function search_down(p) {
    $(".Jump").hide();
    $("input[name=page]").val(p);
    if ($(".download_txt ul li").length>0)
        $(".download_txt ul li:eq(0)").before("<li>正在加载...</li>");
    else
        $(".download_txt ul").html("<li>正在加载...</li>");
    $.getJSON("/ajax/searchdownload.ashx?ver=cn", $("#form_search").serialize(), function (data) {
        if (data != "" && data != null) {
            var json = data;
            var date = json.data;
            var html = "", html1 = "";//
            var pagesize = data.pagesize;
            var style = data.currlpage;
            $.each(date, function (i) {
                var title = date[i].title;
                var addtime = date[i].addtime;
                var down = date[i].down;

                html += "<li><a onclick='contact(" + down + ")'><em>下载</em><i>" + addtime + "</i><span>· " + title + "</span></a></li>";
            });
            $(".download_txt ul").html(html);
            if (pagesize > 1) {
                html1 += "<span class=\"marright\"><a href=\"javascript:void\" class=\"change\"onclick=\"search_down(0)\"></a></span>";
                for (i = 0; i < pagesize; i++) {
                    if (i == style)
                        stylename = "cura";
                    else
                        stylename = "";
                    html1 += "<span class=\"marright\"><a href=\"javascript:void\" class=\"num " + stylename + "\" onclick=\"search_down(" + i + ")\">" + i + "</a></span>";
                }
                html1 += "<span class=\"marright\"><a href=\"javascript:void\" class=\"changel\"onclick=\"search_down(" + Number(Number(pagesize) - 1) + ")\"></a></span>";
            }
            $(".page").html(html1);
        }
        else {
            $(".download_txt ul").html("");
            $(".page").html("");
        }
    })
}

//20150528
window.onscroll = function () {
    var idbox = document.getElementById("nav");
    var isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest;
    var oscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (oscrollTop <= 200) {
        idbox.style.display = "none";
    }
    else {
        idbox.style.display = "block";
    }
}
/*20150529*/
$(function () {

    $('.product_sort ul li').each(function (index, el) {
        $(this).hover(function () {
            $(this).find('a.a1').addClass('select1');
            $(this).find('p').show();
        }, function () {
            $(this).find('a.a1').removeClass('select1');
            $(this).find('p').hide();
        });
    });

    $('.index_menu ul li').each(function (index, el) {
        var pnum = $(this).find('.hsh_addsecond p').length;
        var pwidth = $(this).find('.hsh_addsecond p').width();
        $(this).find('.hsh_addsecond').css({ 'width': pnum * pwidth, 'margin-left': -pnum * pwidth / 2 });
        $(this).hover(function () {
            $(this).find('.hsh_addsecond').show();
        }, function () {
            $(this).find('.hsh_addsecond').hide();
        });
    });

    $('.hsh_addsecond012').css('margin-left', '-500px');
    $('.hsh_addsecond011').css('margin-left', '-700px');

    $('.download_txt ul li').click(function () {
        //$('.pro_print').show();
    });

    var html = typeof $(".changepage3").val() != "undefined" ? $(".changepage3").html().trim() : "";
    if (html == "")
        $(".Jump").hide();

})

var indexScroll = function () {
    //6-1首页滚屏效果
    var resizeBox = function () {
        //$(window).load(function(){
        var h = $(window).height();
        $(".index_div").css("height", h);
        var title_h = $(".index_title").outerHeight(true);
        var pro_h = $(".index_proList").outerHeight(true) + title_h;
        var sol_h = $(".index_soluList").outerHeight(true) + title_h;
        var new_h = $(".index_newsCon").outerHeight(true) + title_h;
        //alert(pro_h)
        var c_pro = (h - pro_h) / 2;
        var c_sol = (h - sol_h) / 2;

        var c_new = (h - new_h) / 2;


        $(".index_banenr").css("height", h - 114);
        $(".index_pro .index_title").css({ "margin-top": c_pro });
        $(".index_solution .index_title").css({ "margin-top": c_sol });
        $(".index_news .index_title").css({ "margin-top": c_new });

        //图片满屏截取封装方法
        var w2 = $(window).width();
        var h2 = $(window).height() - 114;
        var autoResizeImage = function (mix, width, height, callback) {
            var iw, ih, w, h,
                skew, url, prop, x = 0, y = 0,
                obj = {}, image = new Image,
                callback = callback || function () { };

            if (typeof mix == 'string') {
                url = mix
            }
            else if (mix && mix.src) {
                url = mix.src;
                obj = mix;
            }
            else {
                return {};
            }
            image.onload = function () {
                iw = this.width, ih = this.height;
                if (iw / ih < width / height) {
                    w = width;
                    h = w * ih / iw;
                    y = (height - h) / 2;
                } else {
                    h = height;
                    w = h * iw / ih;
                    x = (width - w) / 2;
                }
                prop = { width: w, height: h, x: x, y: y };
                callback.call(obj, prop);
            }
            image.src = url;
        };
        var setProp = function (prop) {
            this.style.width = prop.width + 'px';
            this.style.height = prop.height + 'px';
            this.style.marginLeft = prop.x + 'px';
            this.style.marginTop = prop.y + 'px';
        };

        $('.index_bannerBox ul li img').each(function () {
            autoResizeImage(this, w2, h2, setProp);
            //	});	
        });
    }
    resizeBox();
    $(window).resize(function () {
        resizeBox()
    });

    var ul = $(".indexCon");
    var li = ul.children(".index_div");
    var len = li.length;
    var index = 0;

    $(".scroll_btn a").click(function () {
        index = $(this).index();
        ul.stop(true, true).animate({ "margin-top": -($(window).height()) * index }, 600);
        $(".scroll_btn a").eq(index).children("span").fadeIn().parent().siblings().children().fadeOut();
    })

    //返回头部
    $(".index_footerCopy p span").click(function () {
        ul.stop(true, true).animate({ "margin-top": ul.scrollTop() }, 1000, function () {
            $(".scroll_btn a").eq(0).children("span").fadeIn().parent().siblings().children().fadeOut();
        });

    })


    $(document).mousewheel(function (e, d) { // 接收两个参数 第一个是事件对象,第二个是滚轮滚动的方向 
        // console.log(d)		// 向下滚 d = -1 , 向上滚 d = 1;
        if (ul.is(':animated')) {
            return false;
        }
        if (d < 0) {
            // 向下	
            // 用trigger触发向下的按钮的点击事件
            if (index < len - 1) {
                index++;
                ul.stop(true, true).animate({ "margin-top": -($(window).height()) * index }, 600);
                $(".scroll_btn a").eq(index).children("span").fadeIn().parent().siblings().children().fadeOut();
                //console.log(ul.css("margin-top"))
            } else if (index == len - 1) {
                index++;
                ul.stop(true, true).animate({ "margin-top": -($(window).height()) * (index - 1) - $(".index_footer").height() }, 600);
                //alert($(window).height()*c_index);
            } else {
                return false;
            }
        } else {//向上
            if (index <= len - 1 && 0 < index) {
                index--;
                ul.stop(true, true).animate({ "margin-top": -($(window).height()) * index }, 600);
                $(".scroll_btn a").eq(index).children("span").fadeIn().parent().siblings().children().fadeOut();
            }
            else if (index > len - 1) {//如果当前大于滚屏的话
                ul.stop(true, true).animate({ "margin-top": -($(window).height()) * (index - 1) }, 600);
                // $(".scroll_btn a").eq(index-1).addClass("cur").siblings().removeClass("cur");
                index--;
            }
            else {
                return false;
            }
        }
    });
}


//20150601
/*
name:cookie 名
value:cookie 值
*/
//写入cookie
function SetCookie(name, value) {
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
///删除cookie
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}
//读取cookie
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}
function contact(id) {
    $("#xiazaiid").val(id);
    if (getCookie("phone_down") != null && getCookie("username_down") != null && getCookie("email_down") != null && getCookie("company_down") != null) {
        $("input[name=username]").val(getCookie("phone_down"));
        $("input[name=phone]").val(getCookie("username_down"));
        $("input[name=email]").val(getCookie("email_down"));
        $("input[name=company]").val(getCookie("company_down"));
        $(".hsh_down").click();;
    }
    else {
        $(".pro_print").show();
    }
}
function check_download() {
    if ($("input[name=username]").val().trim() == "") {
        alert("请填写你的姓名");
        $("input[name=username]").focus();
        return false;
    }
    else
        SetCookie("username_down", $("input[name=username]").val().trim());

    if ($("input[name=phone]").val().trim() == "") {
        alert("请填写你的联系方式");
        $("input[name=phone]").focus();
        return false;
    }
    else
        SetCookie("phone_down", $("input[name=phone]").val().trim());

    if ($("input[name=email]").val().trim() == "") {
        alert("请填写你的邮箱");
        $("input[name=email]").focus();
        return false;
    }
    else
        SetCookie("email_down", $("input[name=email]").val().trim());

    if ($("input[name=company]").val().trim() == "") {
        alert("请填写你的公司");
        $("input[name=company]").focus();
        return false;
    }
    else
        SetCookie("company_down", $("input[name=company]").val().trim());
    if ($("#xiazaiid").val().trim() == "") {
        alert("请选择下载文件");
        return false;
    }
    $(".pro_print").hide();
    alert("提交成功");
    return true;
}

function download_() {
    if (check_download()) {
        $.post("/ajax/downloads.ashx", $("#down_login_form").serialize());
    }
}


/*左侧客服 20150603 16:40*/
$(function () {
    $('.kefu_dl dd').hover(function () {
        $(this).addClass('huan');
        $(this).find('a').css('border', 'none');
        $(this).prev().find('a').css('border-bottom', 'none');
    }, function () {
        $(this).removeClass('huan');
        $(this).find('a').css('border', '');
        $(this).prev().find('a').css('border-bottom', '');
    });

    //$('.hsh_kefu span').click(function(){
    //      //var _has=$('.hsh_kefu dl').css('display');
    //      //if(_has=="none"){
    //      //  $('.hsh_kefu dl').show();
    //      //  $(this).text("点击收起");
    //      //}else{
    //      //  $('.hsh_kefu dl').hide();
    //      //  $(this).text("点击展开");
    //    //}
    //    $('.hsh_kefu dl').toggle();
    //    })


    //图片集锦

    var imgIndex = 0;

    $(".imgRightBtn").click(function () {
        $(".imgLeftBtn").show();
        imgIndex++;
        var liWidth = $(".crimgul ul li").outerWidth(true);
        var liLenghth = $(".crimgul ul li").length;
        var imgTxt = $(".crimgul ul li").eq(imgIndex).attr("title");
        var imgSrc = $(".crimgul ul li").eq(imgIndex).find("img").attr("alt");
        $(this).parents(".imgLagre").find(".imgLagreOne img").attr("src", imgSrc);
        $(".imgLagreOne p").text(imgTxt);
        $(".crimgul ul li").eq(imgIndex).addClass("cur").siblings().removeClass("cur");
        if (imgIndex > 4) {
            $(".crimgul ul").animate({ "margin-left": "-=" + liWidth + "px" })
        }
        if (imgIndex == liLenghth - 1) {
            $(this).hide();
            return false;
        }
    });
    $(".imgLeftBtn").click(function () {
        $(".imgRightBtn").show();
        imgIndex--;
        var liWidth = $(".crimgul ul li").outerWidth(true);
        var liLenghth = $(".crimgul ul li").length;
        var imgTxt = $(".crimgul ul li").eq(imgIndex).attr("title");
        //var imgSrc = $(".crimgul ul li").eq(imgIndex).find("img").attr("src");
        var imgSrc = $(".crimgul ul li").eq(imgIndex).find("img").attr("alt");
        $(this).parents(".imgLagre").find(".imgLagreOne img").attr("src", imgSrc);
        $(".imgLagreOne p").text(imgTxt);
        $(".crimgul ul li").eq(imgIndex).addClass("cur").siblings().removeClass("cur");
        if (imgIndex > 3) {
            $(".crimgul ul").animate({ "margin-left": "+=" + liWidth + "px" })
        }
        if (imgIndex == 0) {
            $(this).hide();
            return false;
        }
    });
    $(".crimgul").each(function () {
        $(this).children("li").eq(0).addClass("cur")
    })
    $('.crimgul ul li').each(function (index, element) {
        $(this).click(function () {
            imgIndex = $(this).index();
            if (imgIndex > 0) {
                $(".imgLeftBtn").show();
            }
            if (imgIndex <= $('.crimgul ul li').length - 2) {
                $(".imgRightBtn").show();
            }
            if (imgIndex == $('.crimgul ul li').length - 1) {
                $(".imgRightBtn").hide();
            }
            var txt = $(this).attr('title')

            $(this).addClass('cur').siblings().removeClass('cur')
            $('.imgLagreOne').find("img").attr("src", $(this).find('img').attr('alt'));
            $('.imgLagreOne').find('p').text(txt);
        });

    });

})


$(function () {//邹文涛
    function hsh() {//QQ客服
        var hsh_h = $(".hsh_kefu").outerHeight();
        //$(".hsh_kefu").css({ "top": -($(window).height() - hsh_h) / 2 });
    };

    //if($(".index_bannerBox").length>0){
    //	$(".hsh_kefuDiv").css("display","block");
    //	$(".hsh_kefuOpen").css("display","none");
    //}

    hsh();

    $(".hsh_kefuOpen").click(function () {

        if ($(".hsh_kefuDiv").is(":hidden")) {
            $(".hsh_kefuDiv").show();
            $(".hsh_kefu").animate({ "left": 0 }, 500);
            $(".hsh_kefuOpen p").text("点击收起");
        }
        else {

            $(".hsh_kefu").animate({ "left": -130 }, 500, function () {
                $(".hsh_kefuDiv").hide();
            });
            $(".hsh_kefuOpen p").text("点击展开");
        }


        //hsh();
        //event.stopPropagation()
    });

    //$(".hsh_kefu").mouseleave(function () {
    //    $(".hsh_kefu").animate({ "left": -130 }, 500, function () {
    //        $(".hsh_kefudiv").hide();
    //    });
    //    $(".hsh_kefuopen p").text("点击展开");
    //});


    $(".hsh_kefuTitle").click(function () {
        //$(".hsh_kefuTitle").text($(".kefu_dl").is(":hidden") ? "点击展开" : "点击收起");
        $(".hsh_kefuDiv").hide();
        $(".hsh_kefu").css({ "width": "40px" });
        $(".hsh_kefuOpen").show();
        hsh();
    })


})


//-------- 0808 --------

function screen() {

    var resizeBox = function () {
        //$(window).load(function(){
        var h = $(window).height();
        $(".index_div").css("height", h);
        var title_h = $(".index_title").outerHeight(true);
        var pro_h = $(".index_proList").outerHeight(true) + title_h;
        var sol_h = $(".index_soluList").outerHeight(true) + title_h;
        var new_h = $(".index_newsCon").outerHeight(true) + title_h;
        //alert(pro_h)
        var c_pro = (h - pro_h) / 2;
        var c_sol = (h - sol_h) / 2;

        var c_new = (h - new_h) / 2;


        $(".index_banenr").css("height", h - 114);
        $(".index_pro .index_title").css({ "margin-top": c_pro });
        $(".index_solution .index_title").css({ "margin-top": c_sol });
        $(".index_news .index_title").css({ "margin-top": c_new });

        //图片满屏截取封装方法
        var w2 = $(window).width();
        var h2 = $(window).height() - 114;
        var autoResizeImage = function (mix, width, height, callback) {
            var iw, ih, w, h,
                skew, url, prop, x = 0, y = 0,
                obj = {}, image = new Image,
                callback = callback || function () { };

            if (typeof mix == 'string') {
                url = mix
            }
            else if (mix && mix.src) {
                url = mix.src;
                obj = mix;
            }
            else {
                return {};
            }
            image.onload = function () {
                iw = this.width, ih = this.height;
                if (iw / ih < width / height) {
                    w = width;
                    h = w * ih / iw;
                    y = (height - h) / 2;
                } else {
                    h = height;
                    w = h * iw / ih;
                    x = (width - w) / 2;
                }
                prop = { width: w, height: h, x: x, y: y };
                callback.call(obj, prop);
            }
            image.src = url;
        };
        var setProp = function (prop) {
            this.style.width = prop.width + 'px';
            this.style.height = prop.height + 'px';
            this.style.marginLeft = prop.x + 'px';
            this.style.marginTop = prop.y + 'px';
        };

        $('.index_bannerBox ul li img').each(function () {
            autoResizeImage(this, w2, h2, setProp);
            //	});	
        });
    }
    resizeBox();
    $(window).resize(function () {
        resizeBox()
    });

    var ul = $(".indexCon");
    var li = ul.children(".index_div");
    var len = li.length;
    var index = 0;

    $(".scroll_btn a").click(function () {
        index = $(this).index();
        $("body,html").stop(true, true).animate({ "scrollTop": li.eq(index).offset().top }, 600);
        $(".scroll_btn a").eq(index).children("span").fadeIn().parent().siblings().children().fadeOut();
    })
   
    //返回头部
    $(".index_footerCopy p span").click(function () {
        ul.stop(true, true).animate({ "margin-top": ul.scrollTop() }, 1000, function () {
            $(".scroll_btn a").eq(0).children("span").fadeIn().parent().siblings().children().fadeOut();
        });

    })



}



