$.parallax = {

	instance : [] ,

	id : 0

}

$.fn.parallax = function(options){

	if(this.length > 1){
		this.each(function(){
			$(this).parallax();
		});
		return;
	}

	var left = parseInt(this.css('left')) || 0;
	var top =  parseInt(this.css('top')) || 0;
	var right = parseInt(this.css('right')) || 0;
	var bottom = parseInt(this.css('bottom')) || 0;

	var def = {

		start : {
			left : left,
			top : top,
			opacity : 1,
			right : 0,
			bottom : 0
		},

		end : {
			left : left,
			top : top,
			opacity : 1,
			right : right,
			bottom : bottom
		},

		speed : 400,

		easing : 'easeOutExpo'
	}

	var opt = $.extend(true,def,options);

	if(opt.start.right){
		opt.start.left = "auto";
		opt.end.left = "auto";
	} else{
		opt.start.right = "auto";
		opt.end.right = "auto";
	}
	if(opt.start.bottom){
		 opt.start.top = "auto";
		}else{
			opt.start.bottom = "auto";
		}
	var status = 0;

	var self = this;

	$.parallax.instance.push({
		id : $.parallax.id++,
		dom : self,
		start : opt.start,
		end : opt.end,
		speed : opt.speed,
		easing : opt.easing,
		status : status
	})

}





$(function(){
	
	$('.index_proList dl').eq(0).parallax({start : {left :-1500,opacity : 0},speed : 2500});
	$('.index_proList dl').eq(1).parallax({start : {right :-1500,opacity : 0},speed : 2500});
	$('.index_proList dl').eq(2).parallax({start : {left :-1500,opacity : 0},speed : 3500});
	$('.index_proList dl').eq(3).parallax({start : {right :-1500,opacity : 0},speed : 3500});
	
	$('.index_soluList ul li').eq(0).parallax({start : {top :600,opacity : 0},speed : 1000});
	$('.index_soluList ul li').eq(1).parallax({start : {top :600,opacity : 0},speed : 1500});
	$('.index_soluList ul li').eq(2).parallax({start : {top :600,opacity : 0},speed : 2000});
	$('.index_soluList ul li').eq(3).parallax({start : {top :600,opacity : 0},speed : 2500});
	$('.index_soluList ul li').eq(4).parallax({start : {top :600,opacity : 0},speed : 3000});
	
	$('.index_newsBox ul li').eq(0).parallax({start : {left :-1500,opacity : 0},speed : 2000});
	$('.index_newsBox ul li').eq(1).parallax({start : {left :-1500,opacity : 0},speed : 2000});
	$('.index_newsBox ul li').eq(2).parallax({start : {right :-1500,opacity : 0},speed : 2000});
	$('.index_newsBox ul li').eq(3).parallax({start : {right :-1500,opacity : 0},speed : 2000});
	
	
	$('.index_newsCon a.prev').parallax({start : {left :-1500,opacity : 0},speed : 2500});
	$('.index_newsCon a.next').parallax({start : {right :-1500,opacity : 0},speed : 2500});
	$('.index_nMore').parallax({start : {top :500,opacity : 0},speed : 3000});
    
	

	var winHeight = $(window).height();

	var inWindow = function(dom){
		var d = dom.get(0);
		var p = d.getBoundingClientRect();
		return p.top < winHeight*2.4;
	}


	var init = function(){
		for(var i = 0 ; i < $.parallax.instance.length; i++){
			var d =  $.parallax.instance[i];
			if( d.status < 1){
				d.dom.css(d.start);
				d.status = 1;
			}
		}
	}

	

	var move = function(){
		for(var i = 0 ; i < $.parallax.instance.length; i++){
			var d =  $.parallax.instance[i];
			//if(d.dom.length < 1) return;
			if( d.status > 0 && inWindow(d.dom)){
				
				d.dom.animate(d.end,d.speed,d.easing);
				//d.status = 0;
			}
		}
	}

	//init();
	//move();

	$(document).mousewheel(function() {
		init();
		move();
	});
	$(".scroll_btn a").click(function(){
		init();
		move();
	});
});

