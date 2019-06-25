$(function(){
	$(".news dl:last").addClass("rmClass");
	
	$(".commonproblem li h3").on("click",function(){
		if($(this).next().is(":hidden")){
			$(".problemcontents").slideUp(300);
			$(".commonproblem li").removeClass("cur");
			$(this).parents("li").addClass("cur");
			$(this).next().slideDown(300);
		}else{
			$(this).parents("li").removeClass("cur");
			$(this).next().slideUp(300);
		}
	})
	$(".Productclass ul li").eq(1).addClass("cur");
	$(".Productcontents").eq(1).show()
	$(".Productclass li h3").on("click",function(){
		if($(this).next().is(":hidden")){
			$(".Productcontents").slideUp(300);
			$(".Productclass li").removeClass("cur");
			$(this).parents("li").addClass("cur");
			$(this).next().slideDown(300);
		}else{
			$(this).parents("li").removeClass("cur");
			$(this).next().slideUp(300);
		}
	})
	
//	$("nav li span").on("click",function(){
//		if($(this).next().is(":hidden")){
//			$("nav li").slideUp(300);
//			$("nav li").removeClass("cur");
//			$(this).parents("li").addClass("cur");
//			$(this).next().slideDown(300);
//		}else{
//			$(this).parents("li").removeClass("cur");
//			$(this).next().slideUp(300);
//		}
//	});
//	
	
	$(".nav").on("click",function(){
		if($("nav").is(":hidden")){
			$("nav").show();
			$(".navbg").css("height",$("body").height()).show();
			$(this).addClass("cur");
			$(".ptsearch").hide()
		}else{
			$("nav").hide();
			$(".navbg").hide();
			$(this).removeClass("cur");
		}
	})
	
	$(".search").on("click",function(){
		if($(".ptsearch").is(":hidden")){
			$(".ptsearch").show();
			$(".navbg").css("height",$("body").height()).show();
			$("nav").hide();
			$(".nav").removeClass("cur");
		}else{
			$(".ptsearch").hide()
			$(".navbg").hide();
		}
	})
	
//	$(".ptsearch dl span").on("click",function(){
//		$(".ptsearch").hide()
//		$(".navbg").hide();
//	})
	
})


$(window).load(function(e) {
        var _height=$(window).height();
		if($('body').height()<_height){
			$('footer').css({'position':'fixed','left':'0','bottom':'0'});
		}
    });
	

//二级菜单

 $(".secMenu ul li:eq(0)").addClass("cur");
	 $(".secMenu ul li").click(function(){
		 $(this).addClass("cur").siblings().removeClass("cur");
	 })




$(".newsContents p img").removeAttr("style");