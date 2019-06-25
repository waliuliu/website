var moving=0;
var pset0=0;
var pset1=0;
var pset2=0;
var pset3=0;
var pset4=0;
var pset5=0;
var pset6=0;
var onpage=1;
$(function() {
	var isChrome = navigator.userAgent.toLowerCase().match(/chrome/) != null;
	var issafari = navigator.userAgent.toLowerCase().match(/safari/) != null;
	if (isChrome||issafari) {
		$('#bg1-ren').css('top','300px');
	}
	else
	{
		$('#bg1-ren').css('top','320px');
	}

 $("html, body").animate({ scrollTop: 0 }, 1, function() {
			 $("html, body").animate({ scrollTop: 0 },500);
		});

	if(screen.height>1100){
	$("body").css("height","5300px"); 
	}
$(window).bind('scroll',function(e){

        var scrollTopNum = $(document).scrollTop(), // 获取网页文档对象滚动条的垂直偏移
            winHeight = $(window).height(), // 获取浏览器当前窗口的高度
            returnTop = $("div.returnTop");

        // 滚动条的垂直偏移大于 100 时显示，反之隐藏
        (scrollTopNum > 800) ? returnTop.fadeIn("fast") : returnTop.fadeOut("fast");

        // 给 IE6 定位
        if (!-[1,]&&!window.XMLHttpRequest) {
            returnTop.css("top", scrollTopNum + winHeight - 200);    
        } 


		$('#userAgent').html(navigator.userAgent);

var scrolled = $(window).scrollTop();

                $('#header')
                    .mousewheel(function(event, delta, deltaX, deltaY) {
					pset1=0;
					isu=0;
					if(pset0==0)
					{
						$('#bg1-ren').hide();
						$('#p1_ren2').show();
							if (delta < 0)
							{
								to1();
								$('#bg1-ren').animate({top:'170px'},1200);
								$('#page1_y1').animate({left:'50px'},1500);
								$('#page1_y2').animate({left:'60px'},1000);
								$('#page1_y3').animate({left:'400px'},2000);
								$('#page1_y4').animate({left:'800px',top:'10px'},3500);
								
							}
							else if (delta > 0)
							{
								isu=1;
							}

					}else
					{
						var $this = $(this),
							timeoutId = $this.data('timeoutId');
						if (timeoutId) {
							clearTimeout(timeoutId);
						}
						$this.data('timeoutId', setTimeout(function() {
							//dosomething
							pset0=0;
							$this.removeData('timeoutId');
							$this = null
						}, 300));
					    return false;
					  }
					  if(isu==0){
					  pset0++;}

					});//end $page1box
                $('#page1box')
                    .mousewheel(function(event, delta, deltaX, deltaY) {
					pset0=0;pset2=0;
					isu=0;
					if(pset1==0)
					{
							if (delta > 0)
							{
								isu=1;
								//to0();
							}
							else if (delta < 0)//down
							{
								$('#p1_ren2').hide();
								$('#bg1-ren').show();
								to2();
								onpage=2;
								$('#bg1-ren').animate({top:'175px'},1000);
								$('#p2_den1').animate({top:'40px'},2000);
								$('#p2_den2').animate({top:'40px'},2000);
								$('#p2_den3').animate({top:'40px'},2000);
								$('#p2_jyname').animate({top:'100px'},2000);
								$('#p2_book1').animate({top:'468px'},1500);
								$('#p2_book2').animate({top:'468px'},1500);
								$('#p2_star21').animate({top:'250px'},1500);
								$('#p2_star3').animate({top:'210px'},1500);
								$('#p2_mm').animate({top:'320px'},3000);

								$('#page1_y1').animate({left:'40px'},1000);
								$('#page1_y2').animate({left:'90px'},1000);
								$('#page1_y3').animate({left:'430px'},2000);
								$('#page1_y4').animate({left:'750px',top:'20px'},3500);
							}


					}else
					{
						var $this = $(this),
							timeoutId = $this.data('timeoutId');
						if (timeoutId) {
							clearTimeout(timeoutId);
						}
						$this.data('timeoutId', setTimeout(function() {
							//dosomething
							//alert('ddd');
							pset1=0;
							$this.removeData('timeoutId');
							$this = null
						}, 300));
					    return false;
					  }
					  if(isu==0)
					  {
						 pset1++;
					  }

					});//end $page1box
                 $('#page2box')
                    .mousewheel(function(event, delta, deltaX, deltaY) {
					 pset1=0;pset3=0;
					if(pset2==0)
					{
							if (delta > 0)
							{

								to1();
								onpage=1;
								$('#bg1-ren').animate({top:'175px'},500);
								$('#p2_den1').animate({top:'1px'},500);
								$('#p2_den2').animate({top:'1px'},500);
								$('#p2_den3').animate({top:'1px'},500);
								$('#p2_jyname').animate({top:'10px'},500);
								$('#p2_book1').animate({top:'400px'},500);
								$('#p2_book2').animate({top:'400px'},500);
								$('#p2_star21').animate({top:'150px'},500);
								$('#p2_star3').animate({top:'100px'},500);
								$('#p2_mm').animate({top:'160px'},300);

								$('#page1_y1').animate({left:'50px'},1500);
								$('#page1_y2').animate({left:'60px'},1000);
								$('#page1_y3').animate({left:'400px'},2000);
								$('#page1_y4').animate({left:'800px',top:'10px'},3500);
							}
							else if (delta < 0)//down
							{
								if(onpage==1)//
								{
									$('#bg1-ren').show();
									$('#p1_ren2').hide();
									to2();
									onpage=2;
									$('#bg1-ren').animate({top:'175px'},1100);
									$('#p3_z1').animate({top:'530px'},1500);
									$('#p3_z2').animate({top:'400px'},1500);
									$('#p3_z3').animate({top:'400px'},1500);
									$('#p3_z4').animate({top:'400px'},1500);

									//
									$('#p2_den1').animate({top:'40px'},2000);
									$('#p2_den2').animate({top:'40px'},2000);
									$('#p2_den3').animate({top:'40px'},2000);
									$('#p2_jyname').animate({top:'100px'},2000);
									$('#p2_book1').animate({top:'468px'},1500);
									$('#p2_book2').animate({top:'468px'},1500);
									$('#p2_star21').animate({top:'250px'},1500);
									$('#p2_star3').animate({top:'210px'},1500);
									$('#p2_mm').animate({top:'320px'},3000);
								}
								else
								{
									to3();
									onpage=3;
									$('#bg1-ren').animate({top:'170px'},1000);
									$('#p3_z1').animate({top:'500px'},1500);
									$('#p3_z2').animate({top:'500px'},1500);
									$('#p3_z3').animate({top:'500px'},1500);
									$('#p3_z4').animate({top:'500px'},1500);

									//
									$('#p2_den1').animate({top:'1px'},500);
									$('#p2_den2').animate({top:'1px'},500);
									$('#p2_den3').animate({top:'1px'},500);
									$('#p2_jyname').animate({top:'10px'},500);
									$('#p2_book1').animate({top:'400px'},500);
									$('#p2_book2').animate({top:'400px'},500);
									$('#p2_star21').animate({top:'150px'},500);
									$('#p2_star3').animate({top:'100px'},500);
									$('#p2_mm').animate({top:'160px'},300);
								}
							}
					}else
					{
						var $this = $(this),
							timeoutId = $this.data('timeoutId');
						if (timeoutId) {
							clearTimeout(timeoutId);
						}
						$this.data('timeoutId', setTimeout(function() {
							//dosomething
							pset2=0;
							$this.removeData('timeoutId');
							$this = null
						}, 300));
					    return false;
					  }
					  pset2++;
					});//end $pagebox
                $('#page3box')
                    .mousewheel(function(event, delta, deltaX, deltaY) {
					 pset2=0;pset4=0;
					if(pset3==0)
					{
							if (delta > 0)
							{
								if(onpage==2)
								{
									to1();
									onpage=1;
									$('#bg1-ren').animate({top:'175px'},500);
									$('#p2_den1').animate({top:'1px'},500);
									$('#p2_den2').animate({top:'1px'},500);
									$('#p2_den3').animate({top:'1px'},500);
									$('#p2_jyname').animate({top:'10px'},500);
									$('#p2_book1').animate({top:'400px'},500);
									$('#p2_book2').animate({top:'400px'},500);
									$('#p2_star21').animate({top:'150px'},500);
									$('#p2_star3').animate({top:'100px'},500);
									$('#p2_mm').animate({top:'160px'},300);

									$('#page1_y1').animate({left:'50px'},1500);
									$('#page1_y2').animate({left:'60px'},1000);
									$('#page1_y3').animate({left:'400px'},2000);
									$('#page1_y4').animate({left:'800px',top:'10px'},3500);
								}else
								{
									$('#p1_ren2').hide();
									$('#bg1-ren').show();
									to2();
									onpage=2;
									$('#bg1-ren').animate({top:'175px'},1100);
									$('#p3_z1').animate({top:'530px'},1500);
									$('#p3_z2').animate({top:'400px'},1500);
									$('#p3_z3').animate({top:'400px'},1500);
									$('#p3_z4').animate({top:'400px'},1500);

									//
									$('#p2_den1').animate({top:'40px'},2000);
									$('#p2_den2').animate({top:'40px'},2000);
									$('#p2_den3').animate({top:'40px'},2000);
									$('#p2_jyname').animate({top:'100px'},2000);
									$('#p2_book1').animate({top:'468px'},1500);
									$('#p2_book2').animate({top:'468px'},1500);
									$('#p2_star21').animate({top:'250px'},1500);
									$('#p2_star3').animate({top:'210px'},1500);
									$('#p2_mm').animate({top:'320px'},3000);
								}
							}
							else if (delta < 0)//down
							{
								if(onpage==2)//ren on page2 mouse wheel on page3 ,then move to page3
								{
									//$('#p1_ren2').hide();
									//$('#bg1-ren').show();
									to3();
									onpage=3;
									$('#bg1-ren').animate({top:'170px'},1000);
									$('#p3_z1').animate({top:'500px'},1500);
									$('#p3_z2').animate({top:'500px'},1500);
									$('#p3_z3').animate({top:'500px'},1500);
									$('#p3_z4').animate({top:'500px'},1500);

									//
									$('#p2_den1').animate({top:'1px'},500);
									$('#p2_den2').animate({top:'1px'},500);
									$('#p2_den3').animate({top:'1px'},500);
									$('#p2_jyname').animate({top:'10px'},500);
									$('#p2_book1').animate({top:'400px'},500);
									$('#p2_book2').animate({top:'400px'},500);
									$('#p2_star21').animate({top:'150px'},500);
									$('#p2_star3').animate({top:'100px'},500);
									$('#p2_mm').animate({top:'160px'},300);
								}else if(onpage==1)
								{
									$('#bg1-ren').show();
									$('#p1_ren2').hide();
									to2();
									onpage=2;
									$('#bg1-ren').animate({top:'175px'},1100);
									$('#p3_z1').animate({top:'530px'},1500);
									$('#p3_z2').animate({top:'400px'},1500);
									$('#p3_z3').animate({top:'400px'},1500);
									$('#p3_z4').animate({top:'400px'},1500);

									//
									$('#p2_den1').animate({top:'40px'},2000);
									$('#p2_den2').animate({top:'40px'},2000);
									$('#p2_den3').animate({top:'40px'},2000);
									$('#p2_jyname').animate({top:'100px'},2000);
									$('#p2_book1').animate({top:'468px'},1500);
									$('#p2_book2').animate({top:'468px'},1500);
									$('#p2_star21').animate({top:'250px'},1500);
									$('#p2_star3').animate({top:'210px'},1500);
									$('#p2_mm').animate({top:'320px'},3000);								
								}
								else
								{
									to4();
									onpage=4;
									$('#bg1-ren').animate({top:'170px'},1100);
									$('#p4_joinus').animate({top:'10px'},1500);
									$('#p4_plan1').animate({left:'60px',top:'100px'},4500);
									$('#p4_plan2').animate({left:'200px',top:'360px'},2500);
									$('#p4_plan3').animate({left:'250px',top:'250px'},4000);
									$('#p4_plan4').animate({left:'680px',top:'110px'},4500);
								}
							}
					}else
					{
						var $this = $(this),
							timeoutId = $this.data('timeoutId');
						if (timeoutId) {
							clearTimeout(timeoutId);
						}
						$this.data('timeoutId', setTimeout(function() {
							//dosomething
							pset3=0;
							$this.removeData('timeoutId');
							$this = null
						}, 300));
					    return false;
					  }
					  pset3++;
					});//end $page1box
                $('#page4box')
                    .mousewheel(function(event, delta, deltaX, deltaY) {
					 pset3=0;pset5=0;
					if(pset4==0)
					{
							if (delta > 0)
							{
								if(onpage==3)
								{
									to2();
									onpage=2;
									$('#bg1-ren').animate({top:'175px'},1100);
									$('#p3_z1').animate({top:'530px'},1500);
									$('#p3_z2').animate({top:'400px'},1500);
									$('#p3_z3').animate({top:'400px'},1500);
									$('#p3_z4').animate({top:'400px'},1500);

									//
									$('#p2_den1').animate({top:'40px'},2000);
									$('#p2_den2').animate({top:'40px'},2000);
									$('#p2_den3').animate({top:'40px'},2000);
									$('#p2_jyname').animate({top:'100px'},2000);
									$('#p2_book1').animate({top:'468px'},1500);
									$('#p2_book2').animate({top:'468px'},1500);
									$('#p2_star21').animate({top:'250px'},1500);
									$('#p2_star3').animate({top:'210px'},1500);
									$('#p2_mm').animate({top:'320px'},3000);
								}
								else if(onpage==5)
								{
									$('#bg1-ren').show();
									$('#p5_ren2').hide();
									to4();
									onpage=4;
									$('#bg1-ren').animate({top:'170px'},1100);
									$('#p5_x').animate({top:'400px'},300);
									//
									$('#p4_plan1').animate({left:'60px',top:'100px'},4500);
									$('#p4_plan2').animate({left:'200px',top:'360px'},2500);
									$('#p4_plan3').animate({left:'250px',top:'250px'},4000);
									$('#p4_plan4').animate({left:'680px',top:'110px'},4500);
								}
								else{
									to3();
									onpage=3;
									$('#bg1-ren').animate({top:'170px'},1100);
									$('#p4_joinus').animate({top:'110px'},1500);
									$('#p4_plan1').animate({left:'160px',top:'200px'},500);
									$('#p4_plan2').animate({left:'85px',top:'460px'},500);
									$('#p4_plan3').animate({left:'120px',top:'300px'},400);
									$('#p4_plan4').animate({left:'570px',top:'60px'},500);
								}
							}
							else if (delta < 0)
							{
								if(onpage==3)//ren on page3 mouse wheel on page4 ,then move to page4
								{
									to4();
									onpage=4;
									$('#bg1-ren').animate({top:'170px'},1100);
									$('#p4_joinus').animate({top:'10px'},1500);
									$('#p4_plan1').animate({left:'60px',top:'100px'},4500);
									$('#p4_plan2').animate({left:'200px',top:'360px'},2500);
									$('#p4_plan3').animate({left:'250px',top:'250px'},4000);
									$('#p4_plan4').animate({left:'680px',top:'110px'},4500);
								}else if(onpage==2)
								{
									to3();
									onpage=3;
									$('#bg1-ren').animate({top:'170px'},1000);
									$('#p3_z1').animate({top:'500px'},1500);
									$('#p3_z2').animate({top:'500px'},1500);
									$('#p3_z3').animate({top:'500px'},1500);
									$('#p3_z4').animate({top:'500px'},1500);

									//
									$('#p2_den1').animate({top:'1px'},500);
									$('#p2_den2').animate({top:'1px'},500);
									$('#p2_den3').animate({top:'1px'},500);
									$('#p2_jyname').animate({top:'10px'},500);
									$('#p2_book1').animate({top:'400px'},500);
									$('#p2_book2').animate({top:'400px'},500);
									$('#p2_star21').animate({top:'150px'},500);
									$('#p2_star3').animate({top:'100px'},500);
									$('#p2_mm').animate({top:'160px'},300);
								}
								else
								{
									to5();
									onpage=5;
									$('#bg1-ren').animate({top:'150'},1100);
									//$('#bg1-ren').animate({top:'150px'},1000);
									$('#p5_x').animate({top:'280px'},1500);
									//
									$('#p4_plan1').animate({left:'160px',top:'200px'},500);
									$('#p4_plan2').animate({left:'85px',top:'460px'},500);
									$('#p4_plan3').animate({left:'120px',top:'300px'},400);
									$('#p4_plan4').animate({left:'570px',top:'60px'},500);
								}
							}
					}else
					{
						var $this = $(this),
							timeoutId = $this.data('timeoutId');
						if (timeoutId) {
							clearTimeout(timeoutId);
						}
						$this.data('timeoutId', setTimeout(function() {
							//dosomething
							pset4=0;
							$this.removeData('timeoutId');
							$this = null
						}, 300));
					    return false;
					  }
					  pset4++;
					});//end $page1box
                $('#page5box')
                    .mousewheel(function(event, delta, deltaX, deltaY) {
					 pset4=0;pset6=0;
					 var isu=0;
					 //alert(pset5);
					if(pset5==0)
					{
							if (delta > 0)
							{
								if(onpage==4)
								{
									to3();
									onpage=3;
									$('#bg1-ren').animate({top:'170px'},1100);
									$('#p4_joinus').animate({top:'110px'},1500);
									$('#p4_plan1').animate({left:'160px',top:'200px'},500);
									$('#p4_plan2').animate({left:'85px',top:'460px'},500);
									$('#p4_plan3').animate({left:'120px',top:'300px'},400);
									$('#p4_plan4').animate({left:'570px',top:'60px'},500);
								}else
								{
									$('#bg1-ren').show();
									$('#p5_ren2').hide();
									to4();
									onpage=4;
									$('#bg1-ren').animate({top:'170px'},1100);
									$('#p5_x').animate({top:'400px'},300);
									//
									$('#p4_plan1').animate({left:'60px',top:'100px'},4500);
									$('#p4_plan2').animate({left:'200px',top:'360px'},2500);
									$('#p4_plan3').animate({left:'250px',top:'250px'},4000);
									$('#p4_plan4').animate({left:'680px',top:'110px'},4500);
								}
							}
							else if (delta < 0)
							{
								
								if(onpage==4)
								{
									to5();
									onpage=5;
									$('#bg1-ren').animate({top:'150'},1100);
									//$('#bg1-ren').animate({top:'150px'},1000);
									$('#p5_x').animate({top:'280px'},1500);
									//
									$('#p4_plan1').animate({left:'160px',top:'200px'},500);
									$('#p4_plan2').animate({left:'85px',top:'460px'},500);
									$('#p4_plan3').animate({left:'120px',top:'300px'},400);
									$('#p4_plan4').animate({left:'570px',top:'60px'},500);
								}else if(onpage==3)
								{
									to4();
									onpage=4;
									$('#bg1-ren').animate({top:'170px'},1100);
									$('#p4_joinus').animate({top:'10px'},1500);
									$('#p4_plan1').animate({left:'60px',top:'100px'},4500);
									$('#p4_plan2').animate({left:'200px',top:'360px'},2500);
									$('#p4_plan3').animate({left:'250px',top:'250px'},4000);
									$('#p4_plan4').animate({left:'680px',top:'110px'},4500);
								}
								else
								{
								//to6();
								isu=1;
								}
							}
					}else
					{
						var $this = $(this),
							timeoutId = $this.data('timeoutId');
						if (timeoutId) {
							clearTimeout(timeoutId);
						}
						$this.data('timeoutId', setTimeout(function() {
							//dosomething
							pset5=0;
							$this.removeData('timeoutId');
							$this = null
						}, 300));
					    return false;
					  }
					  if(isu==0){
					  pset5++;
					  }
					});//end $page1box


function to0()
{
	pset0=0;pset1=0;
	moving=1;
	    $('html, body').animate({
    		scrollTop:$('#header').offset().top
    	}, 1100, function() {
				//setTimeout(setmoving,1100);
				moving=0;
		});
		
}
function to1()
{
	moving=1;
	    $('html, body').animate({
    		scrollTop:$('#page1box').offset().top
    	}, 1100, function() {
				//setTimeout(setmoving,1100);
				moving=0;
				$('#bg1-ren').hide();
				$('#p1_ren2').show();
		});
}
function to2()
{
	    $('html, body').animate({
    		scrollTop:$('#page2box').offset().top
    	}, 1100, function() {
			//setTimeout(setmoving,1100);
				$('#bg1-ren').show();
				
		});
}
function to3()
{
moving=1;
	    $('html, body').animate({
    		scrollTop:$('#page3box').offset().top
    	}, 1100, function() {
			//setTimeout(setmoving,1100);
				moving=0;
				//alert('f3');
		});
}
function to4()
{
moving=1;
	    $('html, body').animate({
    		scrollTop:$('#page4box').offset().top
    	}, 1100, function() {
			$('#bg1-ren').show();
		});
}
function to5()
{
moving=1;
	    $('html, body').animate({
    		scrollTop:$('#page5box').offset().top
    	}, 1100, function() {
				$('#bg1-ren').hide();
				$('#p5_ren2').show();
		});
}


		// 点击按钮后，滚动条的垂直方向的值逐渐变为0，也就是滑动向上的效果
		$("div.returnTop").click(function() {
			window.scrollTo(0,0);
			$('#bg1-ren').hide();
			$('#p1_ren2').show();
			onpage=1;pset0=0;pset1=0;pset3=0;pset2=0;
			return false;
		});

});

});//end function