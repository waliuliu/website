$(function(){ //发展历程

	var num = 0;
	var aLen = $(".cgrowth li").length;
	var oLi = $(".cgrowth li");
	var divWidth = $('.growth-list').width();
	var liWidth = $('.growth-list li').width();


	$('.growth-list ul').css('width',liWidth*aLen);
	$('.cgrowth').find('dl').hide();
	$('.cgrowth').find('dl:first').show(0,function(){ $(this).find('dd').scrollbar({speed: 800});});

    oLi.click(function(){
        if($(this).hasClass('cur')) return false;
        
        $(this).addClass("cur").siblings().removeClass("cur");
    });

    

    // 项目特有 另外还有个滚动条在show()的回调

    //$('.growth-con').find('.small-detail').click(function(){
    //    $(this).addClass('on').siblings().removeClass('on');
    //    $('.growth-con dt').find('img').attr('src',$(this).attr('rel'));
    //});
    
});
