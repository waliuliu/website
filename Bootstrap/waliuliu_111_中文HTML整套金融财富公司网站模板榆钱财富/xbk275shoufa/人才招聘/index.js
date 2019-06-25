// JavaScript Document
var flag = false;
$(function()
{
	$('.Homebanner ul').cycle({fx:'scrollHorz',next:'.Homebannerleft',prev:'.Homebannerright',speed:600,pager:'.inddot'});
	
	$(".screen").css({'width':$(".screen").find('.document').length*$(".screen").find('.document').width()+'px'});
	$(".news").find(".content").mouseover(function(){flag = true;}).mouseout(function(){flag = false;});
	$(".news").find("a.prev").click(function()
	{
		if($(".screen").is(":animated"))return;
		$(".screen").stop(true,true).children(".document:last").insertBefore($(".screen")
			.children(".document:first")).parent().css({'left':-1*$(".screen")
			.find('.document').width()+'px'}).animate({'left':'0px'},600);
	});
	$(".news").find("a.next").click(function()
	{
		if($(".screen").is(":animated"))return;
		$(".screen").stop(true,true).animate({'left':-1*$(".screen")
			.find('.document').width()+'px'},600,function()
			{
				$(".screen").css({'left':'0px'}).children(".document:first").insertAfter($(".screen")
			.children(".document:last"));
			});
	});
	setInterval(function()
	{
		if(flag)return;
		$(".screen").stop(true,true).animate({'left':-1*$(".screen")
			.find('.document').width()+'px'},600,function()
			{
				$(".screen").css({'left':'0px'}).children(".document:first").insertAfter($(".screen")
			.children(".document:last"));
			});
	},5000);
});