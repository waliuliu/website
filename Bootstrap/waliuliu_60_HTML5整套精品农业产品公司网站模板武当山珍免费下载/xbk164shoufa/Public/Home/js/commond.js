// JavaScript Document
//搜索切换效果
$(function(){
	$(".searchClass li").click(function(){
		$(".searchClass li").removeClass("searchBtn");
		$(this).addClass("searchBtn");
	})
	

	
})




//滑动门
function scrollDoor(){
}
scrollDoor.prototype = {
	sd : function(menus,divs,openClass,closeClass){
		var _this = this;
		if(menus.length != divs.length)
		{
			alert("菜单层数量和内容层数量不一样!");
			return false;
		}				
		for(var i = 0 ; i < menus.length ; i++)
		{	
			_this.$(menus[i]).value = i;				
			_this.$(menus[i]).onmouseover = function(){
					
				for(var j = 0 ; j < menus.length ; j++)
				{						
					_this.$(menus[j]).className = closeClass;
					_this.$(divs[j]).style.display = "none";
				}
				_this.$(menus[this.value]).className = openClass;	
				_this.$(divs[this.value]).style.display = "block";				
			}
		}
		},
	$ : function(oid){
		if(typeof(oid) == "string")
		return document.getElementById(oid);
		return oid;
	}
}

//翻页FOCUS
//<![CDATA[
$(function(){
	(function(){
		var curr = 0;
		$("#jsNav .trigger").each(function(i){
			$(this).click(function(){
				curr = i;
				$("#js img").eq(i).fadeIn("slow").siblings("img").hide();
				$(this).siblings(".trigger").removeClass("imgSelected").end().addClass("imgSelected");
				return false;
			});
		});
		
		var pg = function(flag){
			//flag:true表示前翻， false表示后翻
			if (flag) {
				if (curr == 0) {
					todo = 2;
				} else {
					todo = (curr - 1) % 3;
				}
			} else {
				todo = (curr + 1) % 3;
			}
			$("#jsNav .trigger").eq(todo).click();
		};
		
		//前翻
		$("#prev").click(function(){
			pg(true);
			return false;
		});
		
		//后翻
		$("#next").click(function(){
			pg(false);
			return false;
		});
		
		//自动翻
		var timer = setInterval(function(){
			todo = (curr + 1) % 3;
			$("#jsNav .trigger").eq(todo).click();
		},4000);
		
		//鼠标悬停在触发器上时停止自动翻
		$("#jsNav a").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
					todo = (curr + 1) % 3;
					$("#jsNav .trigger").eq(todo).click();
				},3000);			
			}
		);
	})();
});
//]]>

//分页样式
$(function(){
	$(".page a").click(function(){
		$(".page a").css("background","#fff");
		$(".page a").css("color","#333");
		$(this).css("background","#eee");
		$(this).css("color","#f30");
	});
})

<!--菜单样式-->
$(function(){
	$(".proBigClass").hover(function(){
		$(this).find(".smallClass").show();
		$(this).css("border","1px solid #ac000d");
		$(this).css("border-right","none");
		$(this).find(".btnStyle").show();
	},function(){
		$(".smallClass").hide();
		$(this).css("border","1px solid #fff");
		$(this).css("border-bottom","1px dotted #ccc");
		$(this).find(".btnStyle").hide();
	})
})