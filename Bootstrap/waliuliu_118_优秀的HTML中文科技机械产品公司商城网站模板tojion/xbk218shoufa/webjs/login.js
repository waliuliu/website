/// <reference path="~/webjs/jquery-1.8.3.min.js" />
var succ = function () {
    
    if ($.getUrlParam("url")) {  //返回登录前的页面
        window.location.href = $.getUrlParam("url");
    } else {
        window.location.href = "/login.html";
    }
}

var fromurl = "";
var mystr = window.location.href;

if (mystr.indexOf("fromurl") != -1) {
    fromurl = mystr.substr(mystr.indexOf("fromurl") + 8);

}


var IsClickBln_L = 0;
$(function () {
    $("form .huan").click();
    $("#wss_login_frm,#top_Login_frm").submit(function () {
        if ($(this).find("input[name='title']").val() == "" || $(this).find("input[name='title']").val() == $(this).find("input[name='title']").attr("title")) {
            alert($(this).find("input[name='title']").attr("title"));
            return false;
        }
        if ($(this).find("input[name='password']").val() == "") {
            alert($(this).find("input[name='password']").attr("title"));
            return false;
        }

        if ($(this).find("input[name='usercode']").val() == "") {
            alert($(this).find("input[name='usercode']").attr("title"));
            return false;
        }
        if (IsClickBln_L == 0) {
            IsClickBln_L ++;
            $.post("/ashx/userlogin.ashx", $(this).serialize(), function (data) { IsClickBln_L = 0; if (data.msg == 1) { alert(data.msbox); window.location.href = $.getUrlParam("fromurl") == "" || $.getUrlParam("fromurl") == null ? "/login.html" : $.getUrlParam("fromurl"); } else { alert(data.msbox); } }, "json");
        }
        return false;
    });
    $("[tp]").click(function () {

        var obj = new Object();

        window.open('/oauth/index.aspx?tp=' + $(this).attr("tp") + "&fromurl="+window.location.href);
    });
});

