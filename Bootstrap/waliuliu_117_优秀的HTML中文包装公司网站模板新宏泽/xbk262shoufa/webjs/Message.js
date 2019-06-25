(function ($) {
    $.getUrlParam = function (name) {

        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);

        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

$(document).ready(function () {

    if ($.getUrlParam('keyword') != "") {

        $("#show_username").val($.getUrlParam('keyword'));
    }

    $(".checktd span a").click(function () {
        $("#showimg").attr("src", "/checkCode.aspx?" + Math.random());
    });



    $("#showmessage").submit(function () {

        if ($("#show_username").val() == "") {

            alert('对不起，您的称呼不能为空');

            return false;

        }

        if ($("#show_company").val() == "") {

            alert('对不起，公司名称不能为空');

            return false;

        }


        if ($("#show_tel").val() == "") {

            alert('对不起，联系电话不能为空');

            return false;

        }


        if ($("#show_content").val() == "") {

            alert('对不起，留言内容不能为空');

            return false;

        }


         

        if ($("#code").val() == "") {

            alert('对不起，你的验证码不能为空');

            return false;

        }

    });

});