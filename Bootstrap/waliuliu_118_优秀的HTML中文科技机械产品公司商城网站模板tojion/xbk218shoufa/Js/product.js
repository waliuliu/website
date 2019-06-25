
$(function () {
    showhistory();
    setlookhistory();
    $(".viewJoinCart").click(function () {
        var Calculateheight = 0;
        if ($("#productViewType_Id").val() == "0") {
            Calculateheight = parseInt($("#Calculateheight").val());
            if (isNaN(Calculateheight)) {
                alert($("#Calculateheight").attr("title"));
                return false;
            }
            if (Calculateheight > $("#Calculateheight").attr("MaxLength") || Calculateheight < $("#Calculateheight").attr("MinLength")) {
                alert("很抱歉！我们暂时只接受的定制长度为" + $("#Calculateheight").attr("MinLength") + "--" + $("#Calculateheight").attr("MaxLength"));
                return false;
            }
        }
       
        var CartNum = parseInt($("#productCartNum").val());
        if (isNaN(CartNum)) {
            alert($("#productCartNum").attr("title"));
            return false;
        }
        var _type = 1;
        if ($(this).attr("rel") == "3") {
            _type = 3;
        }
        addcookieCart(_type, $("#productViewId").val(), $("#productViewType_Id").val(), $("#productCartNum").val(), $("#productViewimge").val(), Calculateheight, showminicart);
    });
    $(".viewzuheJoinCart").click(function () {
        addcookieCart(2, $("#productViewId").val(), $("#productViewType_Id").val(), 1, $("#productViewimge").val(), 0, showminicart);
    });
    $("#Calculate").click(function () {
        var Calculateheight = parseInt($("#Calculateheight").val());
        if (isNaN(Calculateheight)) {
            alert($("#Calculateheight").attr("title"));
            return false;
        } else {
            if (Calculateheight > $("#Calculateheight").attr("MaxLength") || Calculateheight < $("#Calculateheight").attr("MinLength")) {
                alert("很抱歉！我们暂时只接受的定制长度为" + $("#Calculateheight").attr("MinLength") + "--" + $("#Calculateheight").attr("MaxLength"));
                return false;
            }
            var loatdanwei = parseFloat($("#productViewfloatdanwei").val());//浮动单位
            var floatprice = parseFloat($("#productViewfloatprice").val());//浮动价格
            var Viewprice = parseFloat($("#productViewprice").val());//基本单价
            //计算定制的单价
            var floatNum = parseInt(Calculateheight / loatdanwei);
            if (floatNum > 0 && Calculateheight % loatdanwei > 0) {
                floatNum += 1;
            }
            if (floatNum == 0) {
                floatNum = 1;
            }
            if (Calculateheight == 0) {
                floatNum = 0;
            }
            var totalviewprice = (Viewprice + (floatprice * floatNum)).toFixed(2);//定制的单价
            $("#price").html(totalviewprice);
            //计算优惠列表显示
            $.each($("#priceRange tbody tr"), function (i, item) {
                $(item).find(".YouHuiPrice").html(($(item).find(".YouHuiZhekou").html() * totalviewprice).toFixed(2));
            });
        }
    });

    $(".zixun_frm_sub").click(function () {
        var obj = $("#zixun_frm");
        $.post("/ashx/ProFeedback.ashx", { username: obj.find("input[name='username']").val(), Title: obj.find("input[name='Title']").val(), tel: obj.find("input[name='tel']").val(), content: obj.find("textarea[name='content']").val(), classid: obj.find("input[name='classid']").val(), code: obj.find("input[name='code']").val() }, function (data) { alert(data.msbox); if (data.msg == 1) { window.location.reload(); } }, "json");
    });

});
function getzixun(_proid, _page) {
    $.post("/ashx/showProzixun.ashx", { proid: _proid, page: _page }, function (data) {
        if (data.msg == 0) {
            alert(data.msbox);
        } else {
            var pingjialis = "";
            $.each(data.DataLis, function (i, item) {
                pingjialis += "<dl><dt><h4>客户：</h4>";
                pingjialis += "<p>" + item.Content + "</p></dt><dd><h4>客服：</h4>";
                pingjialis += "<p>" + item.ReContent + "</p></dd></dl>";
            });
            $(".kehu .zixuncontent").html(pingjialis);
            $(".kehu .yema").html(data.pageLis);
        }
    }, "json");
}
function Getpinjia(_proid, _page) {
    $.post("/ashx/showPingjia.ashx", { proid: _proid, page: _page }, function (data) {
        if (data.msg == 0) {
            alert(data.msbox);
        } else {
            var pingjialis = "";
            $.each(data.DataLis, function (i, item) {
                pingjialis += "<dl><dt><img src=\"/webimages/cpxx_88.jpg\" width=\"64\" height=\"64\" /></dt><dd>";
                if (item.IsAnonymous.toString() == "1") {
                    pingjialis += "<h5>匿名</h5>";
                } else {
                    pingjialis += "<h5>" + item.userNo + "&nbsp;&nbsp;" + item.userAdress + "</h5>";
                }
                pingjialis += "<p class=\"p01\"><em class=\"em01\">用户评价：</em><span>" + item.content + "</span></p>";
                pingjialis += "<p><em>产品型号：</em><span>" + item.pattern + "</span></p>";
                pingjialis += "<p><em>购买日期：</em><span>" + item.strgoumaitime + "</span></p></dd>";
                pingjialis += "<div class=\"clear\"></div></dl>";
            });
            $(".shangpin_con02 .pingjiacontent").html(pingjialis);
            $(".shangpin_con02 .yema").html(data.pageLis);
        }
    }, "json");
}