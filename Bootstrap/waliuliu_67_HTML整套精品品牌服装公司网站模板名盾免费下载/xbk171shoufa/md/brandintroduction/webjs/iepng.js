<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>404</title>
<script type="text/javascript" src="/404js/jquery-1.8.1.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
	   _win();	
		function _win(){
			var windowW = $(window).width();
			var windowH = $(document).height();
			//alert(windowH)
			 $(".wrap").css({"width":windowW,"height":windowH});	
			 $(".cont").css({"marginLeft":"-458px"})
			 $(".cont").css({"height":windowH})
			 $(".contText").css({"height":windowH})
		};
		$(window).resize(function(){
			_win();	
		});
	})
</script>
<style type="text/css">
body,html,div,a,span,ul,li,ol,h1,h2,h3,h4,h5,h6,em,i,code { margin:0; padding:0; font-family:"Microsoft YaHei"; font-size:14px;}
ul,li { list-style:none;}
a,a:hover { text-decoration:none;}

.bg { width:100%; height:100%; position:absolute; top:0; left:0; z-index:0;}
.cont { width:916px; margin:0 auto; position:absolute; top:0; left:50%; z-index:10;}
.boldtext { font-weight:bold; font-size:18px; color:#fff;}
.contImg { float:left; position:absolute; top:50%; left:0px; margin-top:-146px;}
.contText { float:right; color:#fff;}
.contText p { margin-top:26px;}
.wbtn { padding-top:50px;}
.wbtn a { width:114px; height:40px; text-align:center; line-height:40px; color:#fff; margin-right:25px; float:left; display:block; background:url(/404images/404btn.png) no-repeat;}
.colorF a { font-weight:bold; font-size:20px; color:#fff;}
.contText_m01 { position:absolute; top:50%; font-size:16px; line-height:35px; left:0px; margin-top:-120px;}
.contText { position:relative;}
.contText_m02 { position:absolute; bottom:50%; margin-bottom:-220px; left:0px;}
</style>

</head>

<body>
	<div class="bg"><img src="/404images/4040902.jpg" width="100%" height="100%" /></div>
    <div class="cont">
    	<div class="contImg"><img src="/404images/404img.png" width="228" height="293" alt="" /></div>
        <div class="contText">
         <br /><br />
        	<strong><img src="/404images/4040902_03.png" /></strong>
            <p class="colorF">这可能是因为：<br />
            	1、您已输入的网址不正确，或您要找的网页可能已被更新或删除<br />
                2、您访问的网站正在备案中，暂时禁止访问<br />
                3、静态模板应网站所有者要求，暂时禁止访问网站
            </p>
            <div class="contText_m01">
                <p class="colorF">
                    本网站由深圳高端网站建设服务商------<a href="http://www.smallseashell.com">静态模板</a> 提供服务<br />
                    <a href="http://www.smallseashell.com">静态模板</a> 为国内高端网站建设标杆供应商<br />
                    专注服务于网站建设、互联网品牌梳理、APP/Andrioid移动应用开发
                </p>
                <p class="boldtext">静态模板业务热线：0755-83719159<br />
                静态模板售后专线：0755-83975687
                </p>
            </div>
           <div class="contText_m02">
            <p class="boldtext"></p>
            <p class="wbtn">
            	<a href="javascript:history.go(-1);">返回上一页</a>
                <a href="/index.html">返回首页</a>
                <a href="http://www.smallseashell.com">联系服务商</a>
            </p>
            </div>
        </div>
    </div>
</body>
</html>
