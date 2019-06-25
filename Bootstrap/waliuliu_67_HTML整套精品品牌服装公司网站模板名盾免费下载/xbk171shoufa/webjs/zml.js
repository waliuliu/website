// JavaScript Document
function indexCon(){
	 //首页产品切换
	//$(".proTitle a").hover(function(){
//		var img=$(this).find("img");
//		var rel=img.attr("rel");
//		var src=img.attr("src");
//		
//		img.attr("src",rel)
//		img.attr("rel",src)
//	},function(){
//		var img=$(this).find("img");
//		var rel=img.attr("rel");
//		var src=img.attr("src");
//	
//		img.attr("src",rel)
//		img.attr("rel",src)
//	})
	

   


	$(".proCon ul li").hover(function(){
		$(this).children("i").show();
		$(this).children(".proMore").show();
		$(this).children("dl").show();
	},function(){
		$(this).children("i").hide();
		$(this).children(".proMore").hide();
		$(this).children("dl").hide();
	})

	$(".proCon ul").eq(0).show();
	$(".proTitle a").eq(0).addClass("cur");
	$(".proTitle a").eq(0).find("img").attr("src", $(".proTitle a").eq(0).find("img").attr("rel"))
	$(".proTitle a").click(function () {
	    var img = $(this).find("img");
	    var rel = img.attr("rel");
	    var src = img.attr("src");
	    //var baserel = img.attr("baserel")

	    img.attr("src", rel)
	    //$(this).siblings().find('img').attr('src',baserel);
	    //img.attr("rel",src)
	    $(this).siblings().find('img').each(function () {
	        $(this).attr('src', $(this).attr('baserel'));
	    });
	    var index = $(this).index();
	    $(this).addClass("cur").siblings().removeClass("cur");
	    $(".proCon ul").hide().eq(index).show();
	})

	
	//首页三大品牌效果
	$(".indexBrand ul li").hover(function(){
		$(this).children(".brandDetail").stop(true).slideDown();
		$(this).children(".bracdCon").hide()
	},function(){
		$(this).children(".brandDetail").stop(true).slideUp();
		$(this).children(".bracdCon").slideDown()
	})
	
	//品牌畅销单品专场
	$(".showRight ul li").hover(function(){
		$(this).children("i").show().parent().siblings().children("i").hide();
		$(this).children(".showBuy").fadeIn();
	},function(){
		$(this).children("i").hide()
		$(this).children(".showBuy").hide();
	})
	
	//名叙鼠标放上效果
	$(".showingRight ul li").hover(function(){
		$(this).children("div").fadeIn();
	},function(){
		$(this).children("div").fadeOut();
	})
	$(".showingRight ul li").each(function(){
		var _this=$(this);
		var h=_this.height();
		var div_h=_this.children("div").find("h3").height();
		$("div h3",_this).css("padding-top",(h-div_h)/2)
	})
	
	//首页新闻
	$(".indexNewsCon ul li").hover(function(){
		$(this).addClass("cur")
	},function(){
		$(this).removeClass("cur")
	})



	
	//banner
	$('.bannerBox ul').slide({
		pager : '.indexBanbtn',
		showNumber: 0,
		speed : 1000,				//速度
		effects : 'left',			//动画效果  left,up,fade
		events : 'mouseenter',  // 触发列表按钮的事件  建议使用mouseenter 替代 mouseover 避免按钮复杂的情况下 事件冒泡
		animateType : 'swing'
	});
	
	//私人订制
	$('.selfScroll ul').slide({
		pager : '.selfBtn',
		showNumber: 0,
		speed : 1000,				//速度
		effects : 'left',			//动画效果  left,up,fade
		events : 'mouseenter',  // 触发列表按钮的事件  建议使用mouseenter 替代 mouseover 避免按钮复杂的情况下 事件冒泡
		animateType : 'swing'
	});

	
    //新品展示

	/*$(".newsproTitle span").eq(0).addClass("cur");
	$(".newsproScroll ul").eq(0).show();
	$(".newsproTitle span").click(function(){
		index2=$(".newsproTitle span").index(this);
		$(".newsproScroll ul").eq(index2).show().siblings().hide();
		$(this).addClass("cur").siblings().removeClass("cur")
	})*/
	$(".newsproTitle span").eq(0).addClass("cur");
	$(".newsproBox").eq(0).show();
	$('.newsproTitle span').click(function () {
	    var index = $(this).index()
	    $(".newsproBox").hide().eq(index).show();
	    $(this).addClass("cur").siblings().removeClass("cur")
	})


	$(".newsproScroll ul li").hover(function(){
		$(this).children("dl").fadeIn()
	},function(){
		$(this).children("dl").fadeOut()
	})



	

	//$(".newsproScroll ul").each(function(){
//		var _this=$(this);
//		_this.slide({
//			speed : 500,				//速度
//			effects : 'left',			//动画效果  left,up,fade
//			//animateType : 'swing',
//			prev:	'.newsproPrve',		// 左按钮
//			next:	'.newsproNext'
//				
//		});
//		
//	})
		
}
////首页banner
//;(function($){
//	$.fn.scrollBar=function(opt){
//		alert(123)
//		var init={
//			cur:"cur",//当前状态
//			anniuLi:"",//按钮，放a标
//			anniuBtn:"",//按钮名称签
//			containerUl:"ul",//滚动的ul
//			containerLi:"ul li",//滚动的ul
//			scrollNum:"" //滚动的个数
//		};
//	   var index=0;
//	   var zml=$.extend(init,opt);
//	   
//	   var _this=this;
//	   var ul=_this.find(zml.containerUl);
//	   var li=_this.find(zml.containerLi);
//	   var w=li.outerWidth(true);
//	   var len=li.length;
//	   
//	   li.first().clone().appendTo(ul);
//	   
//	   var s="";
//	   for(var i=0;i<len;i++){
//		    if(i==len){
//				 s+='<a href="javascript:;">' + '</a>'
//				//s+='<a href="javascript:;" class="'+zml.cur+'">' + '</a>'
//			}else{
//				s+='<a href="javascript:;">' + '</a>'
//			}
//	   }
//		
//		$(zml.anniuBtn).append(s);
//		$(zml.anniuLi).hover(function(){
//			var index=$(this).index();
//			$(this).addClass(zml.cur).siblings().removeClass(zml.cur);
//			ul.stop().animate({"margin-left":index*-w},500,function(){
//				ul.css("margin-left",0);
//				index=0;
//			});
//		})
//		
//   }
//});


$(function(){
	//底部下拉
	$(".footerLook dl dd").each(function(){
		var _this=$(this);
		_this.click(function(){
			if(_this.children("ol").css("display")=="none"){
				$(this).children("ol").slideDown();
			}else{
				$(this).children("ol").slideUp();
			}	
		});
		
		_this.children("ol").children("li").click(function(){
			_this.children("span").text($(this).text())
		})
	})
	
	//网页提示弹出
	var tc_h=$(window).height();
	var tcDiv_h=$(".shopTcon").height();
	$(".shopTanchu").css("height",tc_h);
	$(".shopTcon").css("margin-top",(tc_h-tcDiv_h)/2);
	$(".tconTitle em").click(function(){
		$(".shopTanchu").fadeOut();
	})
	$(".shopTcon").click(function(e){
		e.stopPropagation()
	})
	$(document).click(function(){
		$(".shopTanchu").fadeOut();
	})
	
	
	function Alert(){
		$("body").append("<div class='shopTanchu'><div class='shopTcon'><div class='tconTitle'><em></em>来自网站信息</div><div class='tConent'><p class='tcSorry'>对不起，请先登录再查看信息！</p><a href='#' class='cur'>确定</a> <a href'#'>取消</a></div></div>")
	}

	//购物车滚动
	var ul=$(".tjBox");
	var li=ul.children(".crProductsWrap");
	var win=li.outerWidth(true);
	var len=li.length;
	var index=0;
	
	var s="";
	for(var i=0;i<len/4;i++){
		if(i==index){
			s+='<a href="javascript:;" class="cur">' + '</a>'
		}else{
			s+='<a href="javascript:;">' + '</a>'
		}
	}
	$(".tjBtn").append(s);
	
	$(".tjBtn a").hover(function(){
		var index=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		ul.stop(true).animate({"margin-left":index*-win*4},500)
	})
	
	//会员主页滚动
	var s2="";
	for(var i=0;i<len/3;i++){
		if(i==index){
			s2+='<a href="javascript:;" class="cur">' + '</a>'
		}else{
			s2+='<a href="javascript:;">' + '</a>'
		}
	}
	$(".mainMemBtn").append(s2);
	$(".mainMemBtn a").hover(function(){
		var index=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		ul.stop(true).animate({"margin-left":index*-win*3},500)
	})
	
	//var R = null;
//	var ting = function(){
//		R = window.setInterval(function(){
//			index++;
//			li.first().clone().appendTo(ul);
//			//if(index<len)
//				ul.stop(true).animate({"margin-left":index*-win},500);
//				ul.css("margin-left",0)
//		},2000);
//	}
//	
//	ting();

  //我的积分
  $(".couponsCon ul li:nth-child(6n)").addClass("cur")
  var txt=$(".messJudge dl dd em").text();
  $(".messJudge dl dd span").css("width",txt);

  //退换货申请
  $(".tabApply tr td.tabTest").each(function(){
		 if($(this).text()=="已通过"){
			$(this).addClass("cur")	
		}
 });
 
  $(".tabApply tr td .tabLook").each(function(){
		 if($(this).children("a").find("em").text()=="操作中"){
			$(this).addClass("cur")	
		}
 });
 
 //退换货详情
 $(".tabMess tr:last").addClass("cur")
 $(".applyMess h3 span").click(function(){
	var m=$(this).parent().next(".messSlide");
	if(m.is(":visible")){
		m.slideUp();
		$(this).addClass("cur")
		$(this).text("展开")
	}else{
		m.slideDown();
		$(this).removeClass("cur")
		$(this).text("收起")
	}	
 })
 
 //我的收藏
 $(".collectWarp .crProductsWrap:nth-child(3n)").css("margin-right","0px")
 //$(".crProductsList .crProductsWrap:nth-child(4n)").css("margin-right","28px")

 
 //我的评价
 //$(".tabJudge tr td span.judgeOpen").click(function () {
 //    if ($(this).parents("tr").next("tr.judgeBox").css("display") == "none") {
 //        $(this).parents("tr").next("tr.judgeBox").show().siblings("tr.judgeBox").hide();
 //        $(this).addClass("cur").parents("tr").siblings().children("td").find("span").removeClass("cur")
 //    } else {
 //        $(this).parents("tr").next("tr.judgeBox").hide();
 //        $(this).removeClass("cur")
 //    }

 //})

 $('.judgeOpen').click(function () {
     if ($(this).parents('tr').next("tr.judgeBox").hasClass('Ywwtabelse')) {
         //alert(0)

         $(this).parents('tr').next("tr.judgeBox").removeClass('Ywwtabelse')
     } else {
         $(this).parents('tr').next("tr.judgeBox").addClass('Ywwtabelse').siblings().removeClass('Ywwtabelse')
     }

 })




})

//zwt
$(function(){
	//悬浮层
	function bb(){
		scrTop=$(document).scrollTop();
		//console.log(scrTop);
	}
	$(".zwt-fx .zwt-fxTop").click(function(){
		$(document).scrollTop(0);
	});
	$(window).scroll(function(){
		bb();
	});
	//帮助中心-常见问题
	var pbDt=$("#zwt-prob dl dt");
	var pbDd=$("#zwt-prob dl dd");
	$("#zwt-prob dl dt").toggle(function(){
		$(this).addClass("zwt-prlbOpen").siblings().show();
	},function(){
		$(this).removeClass("zwt-prlbOpen").siblings().hide();
	});
	$(".zwt-fxTop").click(function(){
		$("body,html").animate({"scrollTop":"0px"},1000);
	});
	
	
	
	
	//-------------------珊begin---------------
	//我的积分
	var li_wid=$(".SS_InDiv4 ul li").outerWidth(true);
	var scroll_width=$(".SS_InDiv4 ul li").length*li_wid-$(".SS_InDiv4").outerWidth(true);
	$(".SS_InDiv4 a.Left").click(function(){
		if(Math.abs(parseInt($(".SS_InDiv4 ul").css("margin-left")))<=Math.abs(0))
		{
			$(".SS_InDiv4 a.Left img").attr("src","webimages/wss_jf_10.jpg");
			return false;
		}
		if($(".SS_InDiv4 ul").is(":animated")){return false;}
		$(".SS_InDiv4 ul").animate({"margin-left":"+=824px"},500);
		$(".SS_InDiv4 a.Right img").attr("src","webimages/wss_jf_06.jpg");
		if(Math.abs(parseInt($(".SS_InDiv4 ul").css("margin-left")))<=Math.abs(350))
		{
			 $(".SS_InDiv4 a.Left img").attr("src","webimages/wss_jf_10.jpg");
		}
	}); 
	$(".SS_InDiv4 a.Right").click(function () {
		if(Math.abs(parseInt($(".SS_InDiv4 ul ").css("margin-left")))>=Math.abs(scroll_width))
		  {
			  return false;
		  }
		  if($(".SS_InDiv4 ul").is(":animated")){return false;}
		  $(".SS_InDiv4 ul").animate({"margin-left":"-=824px"},500);
		  if(Math.abs(parseInt($(".SS_InDiv4 ul ").css("margin-left")))>=Math.abs(scroll_width-li_wid))
		  {
			$(".SS_InDiv4 a.Right img").attr("src","webimages/wss_jf_08.jpg");
		  }
		  $(".SS_InDiv4 a.Left img").attr("src","webimages/wss_jf_05.jpg");
	}) ;
		
		
	
	
	//-------------------珊end---------------
	
	
})



	//---------------Yewenwen2015-7-10开始---
	
	//底部二维码
		$(function () {
			$(".footerList ul li").hover(function () {
				$(this).find(".yww_footewm").show();
			}, function () {
				$(this).find(".yww_footewm").hide();
			});
		});
	
		$(function () {
		   //隐私协议弹窗
			$(".zwt-regBd em").click(function () {
				$(".tktanchu_div").show();
				new Slider(getS('Scroll'), getS('ScroLine'), getS('ScroRight'), { topvalue: 500, bottomvalue: -500 });
				$(".tktanchu").css({ "margin-top": ($(window).height() - 670) / 2 + $(window).scrollTop() })
			});
		
			$(".tktanchu .bottom input").click(function () {
				$(".crtiaokuan").find("input").attr("checked", "true");
				$(".tktanchu_div").hide();
			});
			$(".tktanchu em span").click(function () {
				$(".tktanchu_div").hide();
			});
			$(".crIndexClose").click(function () {
				$(".crPiao").fadeOut();
			});
		});
	

 		//限时秒杀
		$(function(){
			$(".yww_SecIn li").hover(function(){
				$(this).addClass("cur").siblings().removeClass("cur");
			},function(){
				$(this).removeClass("cur");
			})

		})
		
		////LOYOU-店铺形象图片切换
		//$(".yww_Lyimage").eq(0).show();
  		//$(".yww_Lytab ul li").eq(0).addClass("cur")
  		//$(".yww_Lytab ul li").click(function () {
    	//	var index = $(this).index();
    	//	$(".yww_Lyimage").hide().eq(index).show();
    	//	$(this).addClass("cur").siblings().removeClass("cur")
		//});

	
		//名盾寻找店铺下拉
		
		$(function(){
			$(".yww_Shopdown dd").each(function(){
				var _this=$(this);
				_this.click(function(){
					if(_this.children("ul").css("display")=="none"){
						$(this).children("ul").slideDown();
					}else{
						$(this).children("ul").slideUp();
					}	
				});
				
				_this.children("ul").children("li").click(function(){
					_this.children("span").text($(this).text()).attr("data-id", $(this).attr("data-id"));
				})
		})
		})
		
		
		//LOYOU品牌历程
		$(function(){
			$(".yww_LyLcIN").find("ul:even").addClass("yww_LyLcINright");
			//$('.yww_LyLcmain').find("dl:eq(0)").addClass("yww_Lycltop");
			//$(".yww_LyLcmain").find("em:even").addClass("yww_Lyem");
		});
		
		
		//名盾品牌历程
		$(function(){
			//$('.yww_MDCourse').find("ul:eq(0)").addClass("yww_MDCourtop");
			$(".yww_MDCourse").find("ul:even").addClass("yww_MDCourright");
		});
		
		
		//LOYOU 店铺地址下拉选项
		
		$(function(){
			$(".yww_Lydown dd").each(function(){
				var _this=$(this);
				_this.click(function(){
					if(_this.children("ul").css("display")=="none"){
						$(this).children("ul").slideDown();
					}else{
						$(this).children("ul").slideUp();
					}	
				});
				
				_this.children("ul").children("li").click(function(){
					_this.children("span").text($(this).text()).attr("data-id", $(this).attr("data-id"));
				})
		})
		})
		
		//首页搜索下拉框
		$(function () {
		$(".topNav dl dd").hover(function () {
			$(this).find(".yww_indexUP").show();
		}, function () {
			$(this).find(".yww_indexUP").hide();
		});
	});
	
		
	$(function(){
		
		$(".newsproTitle div").hover(function(){
			//$(this).addClass("cur");
			var img = $(this).find("img");
			img.attr("src",img.attr("src").replace("h","")); 
				
		},function(){
			//$(this).removeClass("cur");
			var img = $(this).find("img");
			var src = img.attr("src").split(".")[0];
			img.attr("src",src+"h"+".png");  
		})
		})
		
	//人才招聘
	
	$(function(){
	$(".yww_zhiwei .yww_Hrintr").hide();
		$(".yww_zhiwei ul li span").toggle(function(){
			if($(this).hasClass("cur")){
				$(this).parent().children(".yww_Hrintr").slideUp("slow");
				$(this).removeClass("cur");
			}else{
				$(".yww_zhiwei .yww_Hrintr").slideUp("slow");
				$(".yww_zhiwei ul li span").removeClass("cur");
				$(this).parent().children(".yww_Hrintr").slideDown("slow"); 
				$(this).addClass("cur");
			}
		},function(){
			if($(this).hasClass("cur")){
				$(this).parent().children(".yww_Hrintr").slideUp("slow");
				$(this).removeClass("cur");
			}else{
				$(".yww_zhiwei .yww_Hrintr").slideUp("slow");
				$(".yww_zhiwei ul li span").removeClass("cur");
				$(this).parent().children(".yww_Hrintr").slideDown("slow"); 
				$(this).addClass("cur");
			}
		})
	})
	
	/*LOYOU首页视频弹窗*/	
	//$(function(){		
	//	$(".yww_moveBOT span").click(function () {
	//		var scrolltop=$(window).scrollTop();
	//		$(".videoTc").show();
	//		$(".videoTc").css({"height":$("body").height()});
	//		var filepath = $(this).parents("li").attr("_video");
	//		$(".videoTcWeb").css("margin-top",(($(window).height()-$(".videoTcWeb").height())/2)+scrolltop);
			
	
	//		var _videotext=$(this).parents("li").attr('_videotext');
	//		$(".videoTc_close").click(function(){
	//			$(".videoTc").hide();
	//			$("#_video_wd").remove();
	//		});
	//	});
	//});
		
	//品牌活动--活动新闻
	$(function(){
		$(".yww_NewMDin").hover(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
		},function(){
			$(this).removeClass("cur");
		})

	})
		
	//新闻变换图片
	$(function(){
		$(".yww_Newwdes").eq(0).show();
			$(".yww_NewMDin").hover(function () {
				var index = $(this).index();
				$(".yww_Newwdes").hide().eq(index).show();
		});
	})
	
	//头部input失去焦点
	this_input();
	function this_input(){
		$("[_placeholder]").each(function(){
		var t_input=$(this);
		var val_input=t_input.val();
			t_input.bind({
				focus: function(){
					var _this=$(this);
					if(_this.val()==val_input){
						_this.val("");
					}
				},
				blur:function(){
					var _this=$(this);
					if(_this.val()==""){
						_this.val(val_input);
					}
				}
			});
	
		})
		
	}
		
	//定指表单页导航
	$(".topMenu.crPersonal .menuCon ul").find("a:last").css("padding-right",0);
	
	//预约第二个dl没有margin值
	$(".yww_yuyuemain").find("dl:odd").css("margin-right",0);
	
	//私人定制-产品中心鼠标经过
	$(function(){
			$(".yww_sirenpic ul li").hover(function(){
				$(this).children(".yww_sirenpic ul li img.yww_sirenMag").hide();
				$(this).children(".yww_sirenMask").stop(true).fadeIn().show();
				},function(){
					$(this).children(".yww_sirenpic ul li img.yww_sirenMag").show();
					$(this).children(".yww_sirenMask").stop(true).fadeOut().hide();	
				});
	});
	

	//精选面料鼠标经过
	$(function(){
			$(".yww_Fabpic ul li").hover(function(){
				$(this).children(".yww_Fabpic ul li img.yww_mianliaobigTwo").hide();
				$(this).children(".yww_FabpicaMaks").stop(true).fadeIn().show();
				},function(){
					$(this).children(".yww_Fabpic ul li img.yww_mianliaobigTwo").show();
					$(this).children(".yww_FabpicaMaks").stop(true).fadeOut().hide();	
				});
	});
	
	//定制表单提交---数量加减
	$(".yww_later_mun a.yww_StockLeft").click(function(){
		var inpObj=parseInt($(this).parent().find("input").val());
		if(inpObj==1){
			return false;
		}else{
			inpObj-=1;
			$(this).parent().find("input").val(inpObj);
		}
	});
	$(".yww_later_mun a.yww_StockRight").click(function(){
		var inpObj=parseInt($(this).parent().find("input").val());
		inpObj+=1;
		$(this).parent().find("input").val(inpObj);
	});
	
	
	//客服弹出
	$(function(){
	//$(".zml_float").css("right","-79px")
	//$(".zml_float ul").hide()
		
		var f=true
		$(".zwt-fx h3").click(function(){
			if(f){
				$(".zwt-fx").show();
				$(this).siblings().show();
				$(".zwt-fx").css("width","108px")
				//$(this).parent().css("right","0px")
				}else{
				//$(this).parent().css("right","-79px")
				$(this).siblings().hide();
				$(".zwt-fx").css("width","auto")
					}
			f=!f
			})
		
		
	})
	
	
	//
	$(function(){
			$(".yww_tjzj h3").toggle(function(){
				$(this).siblings("ul").slideDown();
				//$(this).children("span").addClass("cur");
				},function(){
					$(this).siblings("ul").slideUp();
					//$(this).children("span").removeClass("cur");
				});
						
		});
		
	$(function(){
		$("#mapCard_container").css("width","100%");
		})
		
	//退货说明表格序列	
	$(function(){
		var lenLi=$(".yww_Reture dl dt span").length;
		for(var i=0;i<lenLi;i++){
			$(".yww_Reture dl dt span").eq(i).html("0"+(i+1));
		}
	})
	
	//视频中心添加播放按钮
	$(function(){
		$('.yww_NewactTwo ul li img').after('<div class="yww_video"></div>');
	})
	
	
	//视频中心 视频弹窗
	$(function(){		
		$(".yww_video").click(function () {
			var scrolltop=$(window).scrollTop();
			$(".videoTc").show();
			$(".videoTc").css({"height":$("body").height()});
			var filepath = $(this).parents("li").attr("_video");
			$(".videoTcWeb").css("top",($(window).height()-519)/2);
	
			var _videotext=$(this).parents("li").attr('_videotext');
			$(".videoTc_close").click(function(){
				$(".videoTc").hide();
				$("#_video_wd").remove();
			});

		    // 2015-08-04 李升杰加
			$(".videoTitle").html($(this).parents("li").attr("title"));
			$(".videoText").html(_videotext);
			var objContent = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="flower.flv" width="100%" height="100%"><param name="movie" value="/flv_player.swf?flv_url=' + filepath + '&amp; autoplay=0&amp;btn_color=0xceac70"> <param name="BarColor" value="0xffffff"><param name="BarTransparent" value="20"><param name="quality" value="high"> <param name="allowFullScreen" value="true"> <embed src="/flv_player.swf?flv_url=' + filepath + '&amp;autoplay=0 &amp;btn_color=0xceac70" allowfullscreen="true" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="360px"></object>';
			$(".videoCon").html(objContent);
		});
	});
	//---------------Yewenwen2015-7-22end---
	

	////--2016-4-20---Yewenwen
	$(function () {

	    $(".topMesscon dl dd a.wx").click(function () {
	        $(".Ywwpopewm").show();
	        popupPosition(".Ywwpopewm");
	    })
	    $('.removepop').click(function () {
	        $(".Ywwpopewm").hide();
	    })

	    clickHonce(".Ywwanniuleft", ".Ywwanniuright", ".yww_LOYOUlipic01", 5);
	    clickHonce(".Ywwanniuleft", ".Ywwanniuright", ".yww_LOYOUlipic02", 5);
	    clickHonce(".Ywwanniuleft", ".Ywwanniuright", ".yww_LOYOUlipic03", 5);
	    clickHonce(".yww_Shopleft", ".yww_Shopright", ".yww_ShopTab", 1);
	    clickHonce(".yww_LyswiLeft", ".yww_LyswiRight", ".yww_LyimageIn", 1);


	    $('.banner-bottom-box .btn span').click(function () {
	        $('.videoTc').show();
	        popupPosition(".videoTc");

	    })
	    $('.videoTc_close').click(function () {
	        $(".videoTc").hide();
	    })


	})

	function popupPosition(bodyone) {
	    var PBheight = $(bodyone).children(".Ywwpopewmdiv").height();
	    // var PBwidth = $(bodyone).children(".Ywwpopewmdiv").width();
	    // $(bodyone).children(".Ywwpopewmdiv").css("margin-left", -(PBwidth / 2));
	    $(bodyone).children(".Ywwpopewmdiv").css("margin-top", -(PBheight / 2));
	}


	function clickHonce(leftBtn, rightBtn, btnsPrent, num) {
	    var lenLi = $(btnsPrent).find("ul li").length;
	    var distance = $(btnsPrent).find("ul li").innerWidth()
            + parseFloat($(btnsPrent).find("ul li").css("margin-right"))
            + parseFloat($(btnsPrent).find("ul li").css("border-left-width"))
            + parseFloat($(btnsPrent).find("ul li").css("border-right-width"));

	    $(btnsPrent).find("ul").css("width", distance * lenLi);
	    var i = 0;
	    $(leftBtn).click(function () {
	        if (lenLi > num) {
	            if (!$(this).parents(btnsPrent).find("ul").is(":animated")) {
	                if (i > 0) { i--; } else { i = 0; }
	                $(this).parents(btnsPrent).find("ul").animate({ "margin-left": -distance * i }, 500);
	            }
	        }
	    })
	    $(rightBtn).click(function () {
	        if (lenLi > num) {
	            if (!$(this).parents(btnsPrent).find("ul").is(":animated")) {
	                if (i < lenLi - num) { i++; } else { i = lenLi - num; }
	                $(this).parents(btnsPrent).find("ul").animate({ "margin-left": -distance * i }, 500);
	            }
	        }
	    })
	}



	//首页合作伙伴调用
	$(function () {
	    clickHonce(".newsproPrve01", ".newsproNext01", ".newsproBox01", 3);
	    clickHonce(".newsproPrve02", ".newsproNext02", ".newsproBox02", 3);
	    clickHonce(".newsproPrve03", ".newsproNext03", ".newsproBox03", 3);
	    clickHonce(".memberScrollbox a.memPrve", ".memberScrollbox a.memNext", ".memberScrollbox", 1);
	})

