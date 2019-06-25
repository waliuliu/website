$(function(){
        var nav_height=$('.head-nav').height() ;
        var foot_height=($('.foot').offset().top)/2;
        var fix_div=$("<div></div>").css('height','110px');
        $('.head-nav').after(fix_div);
     $(document).on('scroll',function(){
         var win=$(document).scrollTop();
         if(win>=nav_height){
             $('.head-nav').addClass('nav_fixed');
        
              $('.totop').fadeIn();
         }else{
            $('.totop').fadeOut();
            $('.head-nav').removeClass('nav_fixed');
            
         } 
     });
    $('.totop').click(function(){
        $('body,html').animate({scrollTop:0},500);
    })
//网站追踪

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?36cae4242993a989542bfb4043fd4041";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();



})