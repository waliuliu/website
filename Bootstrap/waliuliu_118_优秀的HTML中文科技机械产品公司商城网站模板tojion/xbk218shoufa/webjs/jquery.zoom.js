(function($){
	
	
	// 仿淘宝商品放大镜
	$.zoom = {
		currentClass : 'cur',
		events : 'click'
	}
	
	$.fn.zoom = function(options){
		// 
		if(this.length > 1){
			this.each(function(){
				$(this).zoom(options);	
			});
			return;	
		}
		
		var set = $.extend($.zoom,options);
		
		var lagerBox = this.children('.ui-zoom-large'),
				
			slide = lagerBox.children('.ui-zoom-slide'),
			
			mirror = lagerBox.children('.ui-zoom-mirror'),
			
			icon = lagerBox.children('.ui-zoom-icon'),
			
			smallBox = this.children('.ui-zoom-small'),
			
			list = smallBox.children('.ui-zoom-list'),
			
			prev = smallBox.children('.prev'),
			
			next = smallBox.children('.next'),
			
			lagerBoxWidth = lagerBox.width(),
			
			lagerBoxHeight = lagerBox.height(),
			
			slideWidth = slide.width(),
			
			slideHeight = slide.height(),
			
			mirrorWidth = mirror.width();
			
		
		var  largePic = null,
			 mirrorPic = null,
			 mirrorPicWidth = set.largePicWidth,
			 mirrorPicHeight = set.largePicHeight,
			 mirrorPicSrc = '';
		
		
		if(lagerBox.children('img').length < 1){
			largePic = $('<img src="" />').appendTo(lagerBox);	
		}else{
			largePic = lagerBox.children('img');
		} 
		
		if(mirror.children('img').length < 1){
			mirrorPic = $('<img src="" />').appendTo(mirror);	
		}else{
			mirrorPic = lagerBox.children('img');
		}
		
		var init = function(){
				//初始化默认图片
				initView();
				
				// 滑块显示隐藏
				slideMirrorShowHide();
				// 滑块移动
				slideMove();
				
				mirrorStop();
				// 缩略图滚动
				if(set.scroll){
					carousel();
				}
				// 列表图片切换
				listActive();
			},
			// 滑块移动
			slideMove = function(){
				lagerBox.mousemove(function(e){
					
					var l = e.pageX- lagerBox.offset().left - slideWidth/2;
					var t = e.pageY - lagerBox.offset().top - slideHeight/2;
					
					l = l<=0? l=0 : l>=lagerBoxWidth-slideWidth?lagerBoxWidth-slideWidth : l;
					t = t<=0? t=0 : t>=lagerBoxHeight-slideHeight?lagerBoxHeight-slideHeight : t;
					
					slide.css({
						left : l,
						top : t	
					});
					// 放大镜变化
					mirrorDisplay(l,t);
				});
			},
			// 滑块显示隐藏
			slideMirrorShowHide = function(){
				
				lagerBox.hover(function(){
					
					//从新获取大图
					mirrorPicSrc = largePic.attr('rel');
					mirrorPic.attr({src : mirrorPicSrc});
					// 判断大图的宽高
					
					if(!mirrorPicWidth || !mirrorPicHeight){
						imageLoad(mirrorPicSrc,function(w,h){
							mirrorPicWidth = w;
							mirrorPicHeight = h;
							
						});	
					}
					
					slide.show();
					mirror.show();
					if(icon) icon.hide();
				},
					
				function(){
					slide.hide();
					mirror.hide();
					if(icon) icon.show();
				})	
			},
			//放大镜部分阻止冒泡
			mirrorStop = function(){
				mirror.bind({
					mouseover : function(e){
						$(lagerBox).trigger('mouseleave');
						e.stopPropagation();
						
					},
					mouseout : function(e){
						e.stopPropagation();
					}	
				});
			},
			// 鼠标移动放大镜变化
			mirrorDisplay = function(left, top){
				
				var l = (left/lagerBoxWidth)*mirrorPicWidth;
				var t = (top/lagerBoxHeight)*mirrorPicHeight;
				
				mirrorPic.css({marginLeft : -l, marginTop : -t});
				
			},
			
			// 小图片滚动支持
			carousel = function(){
				
				if(!$.fn.xcarousel){
					alert('缩略图滚动需要插件 xcarousel 的支持');
					return;	
				}
				
				list.xcarousel({
					auto : 0,
					size : 5,
					scroll :1,
					cycle : false,
					speed : 150	,
					prev : prev,
					next : next
				});
			},
			
			initView = function(){
				var index = 0;
				// 初始化第一次加载显示图片
				list.find('li').each(function(i){
					if($(this).hasClass(set.currentClass)){
						index = i;
					}
				});
				
				var li = list.find('li').eq(index);
				li.addClass(set.currentClass).siblings().removeClass(set.currentClass);
				var small = li.children('img').attr('small');
				var large = li.children('img').attr('large');
				
				largePic.attr({src : small, rel : large});
			},
			
			listActive = function(){
				
				list.find('li').bind(set.events,function(){
					$(this).addClass(set.currentClass).siblings().removeClass(set.currentClass);
					var small = $(this).children('img').attr('small');
					var large = $(this).children('img').attr('large');
					
					largePic.attr({src : small, rel : large});
				});
				
			},
			
			// 图片加载控制 获取动态加载图片的宽度和高度
			// 如果没提供大图大小，通过该函数加载
			imageLoad = function (url,fn){
				
				var pic = new Image();
				
				if($.browser.msie && ($.browser.version == '6.0' || $.browser.version == '7.0')){
						pic.src = url+'?'+Math.random();
				}else{
					pic.src = url;
				}
				if($.browser.msie){ //IE
					 pic.onreadystatechange = function(){  
					   if (this.readyState=="loaded" || this.readyState=="complete"){
						  fn.call(this,this.width,this.height);  
					   }  
					};
				}else{
					pic.onload = function(){
						 fn.call(this,this.width,this.height);
					}
				}
			};
		
		init();
			
	}
	
	
})(jQuery);