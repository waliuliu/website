var General = {
		be : function($t){

			$('.xiala').css('width',$(window).width());
			$('.xiala4 ul li',$t).css('padding-left','0px');

			var ul = $('.xiala3 ul',$t);
			var w  = ul.children('li').outerWidth(true);
			var len = ul.children('li').length;

				$('.you',$t).click(function(){
					if(len <= 4){
				        return
				    }
			        ul.stop().animate({
			            left : -w
			        },600,function(){
			           ul.children().first().appendTo(ul);
			           ul.css('left',0);
			        });
			    });

			   

			    $('.zuo',$t).click(function(){
			    	if(len <= 4){
				        return
				    }
			        ul.children().last().prependTo(ul);
			        ul.css('left',-w);
			        ul.stop().animate({
			            left : 0
			        },600);
			    });

			    
			   
		}
}

var Honor ={			//荣耀公益
		commonweal : function(){
			$('.rongyu li:nth-child(3n)').css('margin-right','0');

			$('.zhez').css('height',$(document).height());
			$('.guanbi').click(function(){
			    $('.zhez,.dat').hide();
			});

			$('.rongyu li img').click(function(){
			    var i = $(this).attr('rel');
			    $('.dat,.zhez').show();
			    $('.dat img').attr('src',i);
			});

			$('.rongyu li img').click(function(){
			    var i = $(this).attr('rel');
			    $('.dat,.zhez').show();
			    $('.dat img').attr('src',i);
			});
			/*点击大图*/
		}
}


var Cultural ={			//文化活动-详细页
		Activities : function(){
			$('.thi4 li img').click(function(){
			    var r = $(this).attr('rel');
			    $('.thi2 img').attr('src',r);
			});
			$('.thi2 img').attr('src', $('.thi4 li img').eq(0).attr('rel'));

			var ul = $('.thi4 ul');
			var w  = ul.children('li').outerWidth(true);
			var len = $('.thi4 ul li').length;

			$('.zuo1').click(function(){
			    if(len <= 4){
			        return
			    }
			    ul.children().last().prependTo(ul);
			    ul.css('left',-w)
			    ul.animate({
			        left : 0
			    });
			});
			$('.you1').click(function(){
			    if(len <= 4){
			        return
			    }
			    ul.animate({
			        left : -w
			    },function(){
			        ul.children().first().appendTo(ul);
			        ul.css('left',0);
			    });
			});

		}
}



var Recruitment = {				//人力资源-晋工招聘
		ment : function(){
			$('.zhaop').click(function(){
			    $(this).siblings('.yaoqiu').slideToggle();
			    $(this).find('span').hide();
			    $(this).find('a').addClass('cur');
			    $(this).parent().siblings().find('a').removeClass('cur')
			    $(this).parent().siblings().find('span').show()
			    $(this).parent().siblings().find('.yaoqiu').slideUp();
			});
		}
}

var corporate = {
		governance : function(){
			$('.zhili a').click(function(){
			    var i = $(this).index();
			    $(this).addClass('cur').siblings().removeClass('cur');
			    $('.zhili1').hide().eq(i).show();
			}).eq(0).click();

			
			/*公司治理选项卡*/
		}
}

var Main = {		//主营业务左边侧栏
	 Business : function(){
	 	$('.column li').click(function(){
	        $(this).find('.yinc2').slideToggle();
	        $(this).children('a').addClass('cur');
	        $(this).siblings().children('a').removeClass('cur')
	        $(this).siblings().find('.yinc2').slideUp();
   		 });
    $('.yinc2 a:last').css('border-bottom','none')
	 }
}

$(document).ready(function () {

    $('.nav li').hover(function () {
        $(this).find('.xiala').show();
        $(".xiala").each(function () {
            /*下拉框里的滚动图*/
            General.be($(this));
        })
    }, function () {
        $(this).find('.xiala').hide();
    });

});

$(function(){
	$(".rongyu li:nth-child(3n)").css({"margin-right":"0px"});
});


