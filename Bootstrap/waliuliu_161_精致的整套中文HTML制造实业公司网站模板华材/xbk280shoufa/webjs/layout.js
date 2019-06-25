$(function(){
	$(".nav_cont ul li:last").css("background","none");
	$(".foot_cont .p01 a:last").css("background","none");
	
	
	//公司荣誉
	$(".hono_wrap .video_main:first").show();
	$(".honour_menu a:first").addClass("cur");
	$(".honour_menu a").click(function(){
		var i=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");	
		$(".hono_wrap").find(".video_main").eq(i).show().siblings().hide();
		
	});
	
	
	//应用案例详情
	
	$(".case_det_listbox ul li").click(function(){
		var img_src=$(this).find("img").attr("src");	
		$(".ry_shadow").fadeIn();	
		$(".ry_cont").find("img").attr("src",img_src);
	});
	
	
	
	
	//媒体报道
	$(".jingcai dl ").each(function() {
        var img_or=$(this).find("dt img").attr("src");
		if(img_or!=null)
		{
			$(this).addClass("img_dt");
		}
    });
	
	if($(".jingcai dl").not(".img_dt")){
		$(".jingcai dl").hover(function(){
			$(this).addClass("cur");
		},function(){
			$(this).removeClass("cur");
		});
	}
	
	
	
   //应用案例下拉
	//function dl_sel(dlbox){
	//	$(dlbox).find("dt").click(function(){
	//		$(this).siblings("dd").show();	
	//	});
	//	$(dlbox).find("dd p").click(function(){
	//		var s=$(this).text();	
	//		$(this).parent().siblings("dt").find("p").text(s);
	//		$(this).parent().hide();
	//		$(this).parent().siblings("dd").hide();
	//	});
	//	$(this).siblings("dd:last").css("border-bottom","1px solid #ddd");
	//	$(dlbox).mouseleave(function(){
	//		$(this).find("dd").hide();	
	//	});	
    //};

    //应用案例下拉
	function dl_sel(dlbox) {
	    $(dlbox).find("dt").live("click",function () {
	        $(this).siblings("dd").show();
	    });
	    $(dlbox).find("dd p").live("click", function () {
	        var s = $(this).text();
	        $(this).parent().siblings("dt").find("p").text(s);
	        $(this).parent().hide();
	        $(this).parent().siblings("dd").hide();
	    });
	    $(this).siblings("dd:last").css("border-bottom", "1px solid #ddd");
	    $(dlbox).mouseleave(function () {
	        $(this).find("dd").hide();
	    });
	};

	dl_sel("#casedl01");
	dl_sel("#casedl02");
	dl_sel("#casedl03");
	dl_sel(".recru_top dl");
	
	$(".case_top_dl").each(function() {
        $(this).find("dd:last").css("border-bottom","1px solid #ddd");
    });
	
	
	//合作伙伴
   // $(".com_list ul li").hover(function(){
//		$(this).find("p").stop(true).animate({"bottom":"0"},500);
//	},function(){
//		$(this).find("p").stop(true).animate({"bottom":"-129px"},500);
//	});
	
	  $(".hzlc_main ul li .p00").hover(function(){
		$(this).next().stop(true).slideDown();
	},function(){
		$(this).next().stop(true).slideUp();
	});
	
	$(".pro_js dl").hover(function(){
		$(this).addClass("cur");	
	},function(){
		$(this).removeClass("cur");	
	});
	
	//$(".pro_js dl").each(function() {
//        if($(this).find("dt img").attr("src").length==0){
//			$(this).find("dt").css("border","0");
//			$(this).find("dt").css("width","0");	
//			$(this).find("dt img").remove();	
//		}
//    });
	
	//人才招聘
	
	$(".recru_top dl").find("dd:last").css("border-bottom","0");
	
	$(".question1 dl,.Recruitment3 dl").eq(0).find("dd").show();
    $(".question1 dl dt,.Recruitment3 dl dt").click(function(){
		$(this).addClass("cur").parent().siblings().find("dt").removeClass("cur");
		$(this).next().slideDown().parent().siblings().find("dd").slideUp();	
		$(this).next().find("a").show().css({"z-index":"99999"});
		
	})	
	
	
	//公司荣誉
	$(".close_ry").click(function(){
		$(".ry_shadow").fadeOut();	
	});
	
	
	$(".video_main ul li").click(function(){
		var img_src=$(this).find("img").attr("src");	
		$(".ry_shadow").fadeIn();	
		$(".ry_cont").find("img").attr("src",img_src);
	});
	
	
	
	
	//侧边下拉
	
	
	$(".ny_main_left ul li.li01 .a01").click(function(){
		if($(this).next(".slid_second").is(":visible")){
			$(this).next(".slid_second").slideUp();	
			$(this).prev("i").hide();
			$(this).parent().removeClass("cur");	
		}
		else{
			$(this).next(".slid_second").slideDown();	
			$(this).prev("i").show();
			$(this).parent().addClass("cur");	
		}
		
	});
	
	
//2015-6-27
	var Time=0; 
	Time=setInterval(function(){	
		   $(".qhhc_link_fr_cont").find("ul").animate({"marginLeft":"-170"},500,function(){
				$(this).find("li:first").appendTo($(this));
				$(this).css("margin-left","0");	
			});	 
	  },3000);
	function leRi(yright,yleft,xgBox,number){
		//点击右边
		$(yright).click(function(){
			
			 if($(xgBox).find("ul").is(":animated"))
			 {
				return false;	 
			 }
			$(xgBox).find("ul").animate({"marginLeft":-number},500,function(){
				$(this).find("li:first").appendTo($(this));
				$(this).css("margin-left","0");	
			});	 
		 });
		
		//点击左边
		$(yleft).click(function(){
			
			 if($(xgBox).find("ul").is(":animated"))
			 {
				return false;	 
			 }
			$(xgBox).find("ul").css("margin-left",-number);
			$(xgBox).find("ul").find("li:last").prependTo($(xgBox).find("ul"));
			$(xgBox).find("ul").animate({"marginLeft":"0"},500);
		 });			 
	 };
	  //调用
	  leRi(".qhhc_link_fr_next",".qhhc_link_fr_prev",".qhhc_link_fr_cont","170");
	  $(".qhhc_link_fr_next,.qhhc_link_fr_prev").hover(function(){
		clearInterval(Time);  
	  },function(){
		 Time=setInterval(function(){	
		   $(".qhhc_link_fr_cont").find("ul").animate({"marginLeft":"-170"},500,function(){
				$(this).find("li:first").appendTo($(this));
				$(this).css("margin-left","0");	
			});	 
	    },3000); 
	  });

	
	
	//2015-7-10 首页重新排版效果
	$(".hzfs_list ul li").hover(function(){
		$(this).addClass("cur");	
	},function(){
		$(this).removeClass("cur");	
	});
	
	
		
	
});

	/*Yewenwen-----2015-7-17-----*/
	//内页回到顶部
	$(function(){
		$(".right_menu_a .a04").click(function(){
			$('html, body').animate({scrollTop: 0},200);
		});
	})

	  //右边箭头
	  $(function(){
	  	$(".qhhc_link_fr_next").hover(function(){
	  		$(this).addClass("cur");
	  	},function(){
	  		$(this).removeClass("cur");
	  	})	
	//左边箭头
	  	$(".qhhc_link_fr_prev").hover(function(){
	  		$(this).addClass("cur");
	  	},function(){
	  		$(this).removeClass("cur");
	  	})
	  });
	

	//首页表格序列
	$(function(){
		var lenLi=$(".nqhTablelist span").length;
		for(var i=0;i<lenLi;i++){
			$(".nqhTablelist span").eq(i).html("0"+(i+1));
		}
	})

	//公司视频添加播放按钮
	$(function(){
		$('.video_mainTwo ul li img').after('<div class="yww_qhhc_bo"></div>');
	})


/*----------Yewenwen2015-7-28end--------------*/







