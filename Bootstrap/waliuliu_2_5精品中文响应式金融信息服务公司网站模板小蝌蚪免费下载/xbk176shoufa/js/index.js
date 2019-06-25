
jQuery(function(){
	jQuery(".iboxNew").stop(false, false).delay(300).animate({ "bottom": 0 }, 500);
	jQuery(window).scroll(function () {
		var windowTop=jQuery(window).scrollTop();
		if(windowTop>0){
			jQuery(".top").addClass("topFix");
		}else if(windowTop<=0 ){
			jQuery(".top").removeClass("topFix");
		};
	});
	var bHeight=0,
	$bannerBox=jQuery(".bannerPanel"),
	$banner = jQuery('.banner'),
	$bannerPic = $banner.find(".pic"),
	$bannerImg = $banner.find(".pimg");
	function initBox() {
	    pageInit.setImgMax($bannerImg, 1900,915, win_width, win_height);
		if(win_width>=1025){
			$bannerBox.css({ height:win_height });
	        $banner.css({ height:win_height });
	        $bannerPic.css({ height: win_height });
		}else{
			$bannerBox.css({ height:"auto" });
	        $banner.css({ height:win_height-atH });
			$bannerPic.css({ height: win_height-atH});
		}
		if(win_width>=861){
	    	$(".ibox").css({height:Math.round(win_width*936/1900)});
	    	$(".ibox .item1").css({height:"100%"});
	    	$(".ibox .item2").css({height:"100%"});
  		}else{
	    	$(".ibox").css({height:"auto"});
	    	$(".ibox .item1").css({height:Math.round(win_width*936/1900)});
	    	$(".ibox .item2").css({height:Math.round(win_width*936/1900)});
  		};
        
    };
    initBox();
    if(!isMobile){
		$banner.flexslider({
			animation: 'slide',
			slideshowSpeed: 5000,
			animationSpeed: 1000,
			controlNav:false,
			directionNav:true,
			prevText: "", 
	    	nextText: "",  
			start:function(){
	  	   		jQuery(".banner .binbox p").hide().css({opacity:"hide",top:"50px"});
	  	   		jQuery(".banner .flex-active-slide .binbox .en").stop(false,false).delay(50).animate({top:0,opacity:"show"},400);
	  	   		jQuery(".banner .flex-active-slide .binbox .zh").stop(false,false).delay(100).animate({top:0,opacity:"show"},400);
	  	   		jQuery(".banner .flex-active-slide .binbox .c").stop(false,false).delay(200).animate({top:0,opacity:"show"},500);
	  	   	},
	  	   	before: function() {
	  	   		jQuery(".banner .binbox p").hide().css({opacity:"hide",top:"50px"});
	  		},
	  		after: function() {
	  	   		jQuery(".banner .flex-active-slide .binbox .en").stop(false,false).delay(50).animate({top:0,opacity:"show"},400);
	  	   		jQuery(".banner .flex-active-slide .binbox .zh").stop(false,false).delay(100).animate({top:0,opacity:"show"},400);
	  	   		jQuery(".banner .flex-active-slide .binbox .c").stop(false,false).delay(200).animate({top:0,opacity:"show"},500);
	  		}
		});
	}else{
		jQuery(".banner .slides").owlCarousel({
		    items: 1,
		    autoPlay:true,
		    slideSpeed : 500,
			singleItem: true,
			navigation: false,
			pagination:false,
			transitionStyle:"fade",
			beforeInit: function() {
	  	   		jQuery(".banner .binbox p").hide().css({opacity:"hide",top:"50px"});
	  	   		jQuery(".banner .binbox .en").stop(false,false).delay(50).animate({top:0,opacity:"show"},400);
	  	   		jQuery(".banner .binbox .zh").stop(false,false).delay(100).animate({top:0,opacity:"show"},400);
	  	   		jQuery(".banner .binbox .c").stop(false,false).delay(200).animate({top:0,opacity:"show"},500);
			},
			afterMove:function() {
	  	   		jQuery(".banner .binbox p").hide().css({opacity:"hide",top:"50px"});
	  	   		jQuery(".banner .binbox .en").stop(false,false).delay(50).animate({top:0,opacity:"show"},400);
	  	   		jQuery(".banner .binbox .zh").stop(false,false).delay(100).animate({top:0,opacity:"show"},400);
	  	   		jQuery(".banner .binbox .c").stop(false,false).delay(200).animate({top:0,opacity:"show"},500);
			}
	    });
	}
    jQuery(window).resize(function () {
        initBox();
    });
    var owl=jQuery(".newImgDemo");
	owl.owlCarousel({
	    items: 1,
	    slideSpeed : 600,
	    autoPlay:false,
		singleItem: true,
		navigation: false,
		pagination:false,
		autoHeight : true,
		afterMove: function(){
			$(".ovnum").html(this.owl.currentItem+1);
		},
		afterAction: function(){
			$(".ovnum").html(1);
			$(".maxNum").html(this.owl.owlItems.length);
		}
    });
    jQuery('.onumBox .pleft').click(function () {
        owl.trigger('owl.prev');
    });
    jQuery('.onumBox .pright').click(function () {
        owl.trigger('owl.next');
    });

    jQuery(".newCDemo").slick({
      autoplay:true,
	  dots: true,
  	  arrows:false,
  	  customPaging: function(slider, i) {
        return '<a  data-role="none" role="button" aria-required="false" tabindex="0"></a>';
     }
	});
});