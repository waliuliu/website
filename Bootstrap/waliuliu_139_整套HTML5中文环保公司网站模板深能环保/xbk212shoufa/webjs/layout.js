$(function () {
    // 头部
    $('.nav ul').find('li').last().hover(function () {
        $(".nav-drop").stop(true, false).fadeToggle(300);
    });

    $('.nav li').hover(function () {
        $(this).find('.nav-drop-about').stop(true, false).fadeIn(300);
    }, function () {
        $(this).find('.nav-drop-about').stop(true, false).hide(0);
    });

    //首页三模块

    //$('.index-module').eq(0).addClass('cur').css('width',518).find('.module-name dt img').fadeIn(300).css('display','block');
    //$('.index-module').mouseenter(function(){
    //    $(this).addClass('cur').stop(false,false).animate({'width': 518}).find('.module-name dt img').fadeIn(300).css('display','block');
    //    $(this).siblings().removeClass('cur').stop(false, false).animate({ 'width': 191 }).find('.module-name dt img').fadeOut(300);
    //});

    $('.index-module').eq(0).addClass('cur').css('width', 518);
    $('.index-module').mouseenter(function () {
        $(this).addClass('cur').stop(false, false).animate({ 'width': 518 });
        $(this).siblings().removeClass('cur').stop(false, false).animate({ 'width': 191 });
    });

    // $(".creativeB ul li").each(function (i, n) {
    //     var title = $(this).find("h2").find("a").html();
    //     var content = $(this).find("p").html();
    //     if (title.length > 15) {
    //         title = title.substring(0, 15) + "...";
    //     }
    //     $(this).find("h2").find("a").html(title);
    //     if (content.length > 100) {
    //         content = content.substring(0, 100) + "...";
    //     }
    //     $(this).find("p").html(content);
    // });

    // 改变字体大小
    $('.change-font').find('.fz16').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('body').addClass('fz16').removeClass('fz18');
    });
    $('.change-font').find('.fz18').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('body').addClass('fz18').removeClass('fz16');
    });

    // 建成项目
    $('.item-list').find('li:eq(0)').addClass('first');

    // 董事长致辞
    var mH = $('.min-detail').outerHeight(true);
    var rH = $('.detail-cont').outerHeight(true);

    if (mH > rH) {
        $('.lookmore').hide(0);
    } else {
        $('.lookmore').click(function () {
            $(this).fadeOut();
            $('.min-detail').removeClass('min-detail');
        });
    }

    //公司技术
    $('.skill-cont').eq('0').show();
    $('.skill-tab').find('a').click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.skill-cont').hide(0).eq($(this).index()).fadeIn();
    });

    //人才招聘
    $('.job-list').find('a').click(function () {
        $(this).toggleClass('cur').siblings().removeClass('cur');
        if ($(this).hasClass('cur')) {
            var jL = $(this).attr('rel');
        } else {
            var jL = 'javascript:;';
        }
        $('.job-text').find('a').attr('href', jL);
    });

    // 视频中心
    var aW = $('.video-column').find('a').outerWidth(true);
    var aL = $('.video-column').find('a').length;
    $('.video-column').css('width', aW * aL - 1);
    $('.video-column').find('a').eq('0').addClass('first-a');
    $('.video-column').find('a').last().addClass('last-a');

    $('.big-video').hover(function () {
        $(this).find('.title').stop(true, false).animate({ 'bottom': 0 }, 300);
    }, function () {
        $(this).find('.title').stop(true, false).animate({ 'bottom': -45 }, 300);
    });

    $('.video-list').find('li').hover(function () {
        $(this).find('a').toggleClass('on');
    });

    $('.recommend-video').find('li').hover(function () {
        $(this).toggleClass('on');
    });

    // 公司荣誉
    var hlI = $('.honor-tablist').find('.cur').index();
    var hlW = $('.honor-tablist').find('li').outerWidth(true);
    var hlL = $('.honor-tablist').find('li').length;
    var huW = hlW * hlL;
    var htlW = $('.honor-tablist').width();

    if (hlL < 6 || hlI * hlW < htlW) {
        htlL = 0;
    } else if (huW - hlI * hlW > htlW) {
        htlL = -hlI * hlW
    } else {
        htlL = htlW - huW;
    }

    $('.honor-tablist').find('ul').css({
        'width': huW,
        'left': htlL + 1
    });

    $('.honor-tab').find('.honortab-next').click(function () {
        if ($('.honor-tablist').find('ul').is(':animated')) return false;
        var huL = $('.honor-tablist').find('ul').position().left - 1;
        if (huW + huL <= htlW) return false;
        $('.honor-tablist').find('ul').animate({ 'left': huL - hlW });
    });

    $('.honor-tab').find('.honortab-prev').click(function () {
        if ($('.honor-tablist').find('ul').is(':animated')) return false;
        var huL = $('.honor-tablist').find('ul').position().left + 1;
        if (huL >= 0) return false;
        $('.honor-tablist').find('ul').animate({ 'left': huL + hlW });
    });

    $('.nav .last').find('dd').eq('0').addClass('border-bottom backgroung-ph-a');
    $('.nav .last').find('dd').eq('1').addClass('border-bottom backgroung-ph-b');
    $('.nav .last').find('dd').eq('2').addClass('border-bottom backgroung-ph-c');
    $('.nav .last').find('dd').eq('3').addClass('backgroung-ph-d');
});
// function over




function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        window.location.href = '/m/index.html';
    }
}
browserRedirect();
