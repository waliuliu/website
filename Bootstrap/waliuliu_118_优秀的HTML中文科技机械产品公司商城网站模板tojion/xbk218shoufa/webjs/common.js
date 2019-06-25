/// <reference path="~/webjs/jquery-1.8.3.min.js" />
//jQuery.cookie
jQuery.cookie = function (a, b, c) { var d, e, f, g, h, i, j, k, l; if ("undefined" == typeof b) { if (i = null, document.cookie && "" != document.cookie) for (j = document.cookie.split(";"), k = 0; k < j.length; k++) if (l = jQuery.trim(j[k]), l.substring(0, a.length + 1) == a + "=") { i = decodeURIComponent(l.substring(a.length + 1)); break } return i } c = c || {}, null === b && (b = "", c.expires = -1), d = "", c.expires && ("number" == typeof c.expires || c.expires.toUTCString) && ("number" == typeof c.expires ? (e = new Date, e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c.expires)) : e = c.expires, d = "; expires=" + e.toUTCString()), f = c.path ? "; path=" + c.path : "", g = c.domain ? "; domain=" + c.domain : "", h = c.secure ? "; secure" : "", document.cookie = [a, "=", encodeURIComponent(b), d, f, g, h].join("") };
//Json 
var JSON; if (!JSON) { JSON = {} } (function () { function f(n) { return n < 10 ? "0" + n : n } if (typeof Date.prototype.toJSON !== "function") { Date.prototype.toJSON = function (key) { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }; String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) { return this.valueOf() } } var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, rep; function quote(string) { escapable.lastIndex = 0; return escapable.test(string) ? '"' + string.replace(escapable, function (a) { var c = meta[a]; return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + string + '"' } function str(key, holder) { var i, k, v, length, mind = gap, partial, value = holder[key]; if (value && typeof value === "object" && typeof value.toJSON === "function") { value = value.toJSON(key) } if (typeof rep === "function") { value = rep.call(holder, key, value) } switch (typeof value) { case "string": return quote(value); case "number": return isFinite(value) ? String(value) : "null"; case "boolean": case "null": return String(value); case "object": if (!value) { return "null" } gap += indent; partial = []; if (Object.prototype.toString.apply(value) === "[object Array]") { length = value.length; for (i = 0; i < length; i += 1) { partial[i] = str(i, value) || "null" } v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]"; gap = mind; return v } if (rep && typeof rep === "object") { length = rep.length; for (i = 0; i < length; i += 1) { k = rep[i]; if (typeof k === "string") { v = str(k, value); if (v) { partial.push(quote(k) + (gap ? ": " : ":") + v) } } } } else { for (k in value) { if (Object.prototype.hasOwnProperty.call(value, k)) { v = str(k, value); if (v) { partial.push(quote(k) + (gap ? ": " : ":") + v) } } } } v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}"; gap = mind; return v } } if (typeof JSON.stringify !== "function") { JSON.stringify = function (value, replacer, space) { var i; gap = ""; indent = ""; if (typeof space === "number") { for (i = 0; i < space; i += 1) { indent += " " } } else { if (typeof space === "string") { indent = space } } rep = replacer; if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) { throw new Error("JSON.stringify") } return str("", { "": value }) } } if (typeof JSON.parse !== "function") { JSON.parse = function (text, reviver) { var j; function walk(holder, key) { var k, v, value = holder[key]; if (value && typeof value === "object") { for (k in value) { if (Object.prototype.hasOwnProperty.call(value, k)) { v = walk(value, k); if (v !== undefined) { value[k] = v } else { delete value[k] } } } } return reviver.call(holder, key, value) } text = String(text); cx.lastIndex = 0; if (cx.test(text)) { text = text.replace(cx, function (a) { return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) } if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) { j = eval("(" + text + ")"); return typeof reviver === "function" ? walk({ "": j }, "") : j } throw new SyntaxError("JSON.parse") } } }());
$(function () {
    $("form .huan").click(function () {
        $(this).closest("form").find(".huan_img").attr("src", "/Tools/VerifyCodeImage.ashx?t=" + new Date());
    });
    $("form .huan").click();
    $(".addcollect_u").click(function () {
        var objs = $(this);
        $.post("/ashx/AddCollect.ashx", { id: objs.attr("rel") }, function (data) { alert(data.msbox); if (data.msg == 1) { objs.addClass("cur"); } }, "json")
    });
    $(".members_shouhuo .delete,.wss_consignee ul li .dalete").click(function () {
        if (confirm('确认删除吗？')) {
            $.post("/ashx/DelMyadress.ashx", { id: $(this).attr("rel") }, function (data) { alert(data.msbox); if (data.msg == 1) { window.location.reload(); } }, "json");
        }
    });
    $(".shop_div ul li i").live("click", function () {
        if (confirm("确认删除吗？")) {
            var obj = $(this);
            delcookieCart(obj.attr("_type"), obj.attr("proid"), obj.attr("type_id"), obj.attr("norms"));
            obj.parent("li").remove();
            window.location.reload();
        }
    });
    $(".shuidansave").click(function () {
        $.post("/ashx/EditOrder.ashx", { state: 100, orderid: $("#orderid").val(), filepath: $("#txtBigImgurl").val() }, function (data) { alert(data.msbox); if (data.msg == 1) { window.location.reload(); } }, "json");
    });
    $("#message_frm").submit(function () {
        if ($(this).find("input[name='username']").val() == "" || $(this).find("input[name='username']").val() == $(this).find("input[name='username']").attr("title")) {
            alert("请输入" + $(this).find("input[name='username']").attr("title"));
            return false;
        }
        if ($(this).find("input[name='tel']").val() == "" || $(this).find("input[name='tel']").val() == $(this).find("input[name='tel']").attr("title")) {
            alert("请输入" + $(this).find("input[name='tel']").attr("title"));
            return false;
        }
        if ($(this).find("input[name='userEmail']").val() == "" || $(this).find("input[name='userEmail']").val() == $(this).find("input[name='userEmail']").attr("title")) {
            alert("请输入" + $(this).find("input[name='userEmail']").attr("title"));
            return false;
        }
        if ($(this).find("textarea[name='content']").val() == "" || $(this).find("textarea[name='content']").val() == $(this).find("textarea[name='content']").attr("title")) {
            alert("请输入" + $(this).find("textarea[name='content']").attr("title"));
            return false;
        }
        if ($(this).find("input[name='code']").val() == "" || $(this).find("input[name='code']").val() == $(this).find("input[name='code']").attr("title")) {
            alert("请输入" + $(this).find("input[name='code']").attr("title"));
            return false;
        }
        $.post("/ashx/Feedback.ashx?action=zixun", $(this).serialize(), function (data) { if (data.msg == 1) { alert(data.msbox); $("#message_frm")[0].reset() } else { alert(data.msbox); } }, "json");

        return false;
    });
    $(".miniJoinCart").click(function () {
        var objvo = $(this);
        var P_id = objvo.attr("_P_id");
        var _Type = 1;
        var _Type_Id = objvo.attr("_Type_Id");
        if (_Type_Id == "0") {
            window.location.href = "/productView"+P_id+".html";
        } else {
            var Num = 1
            var src = objvo.attr("_src");
            var norms = 0;
            addcookieCart(_Type, P_id, _Type_Id, Num, src, norms, showminicart);
        }
    });
    showminicart();
});

function showminicart() {
    $.post("/ashx/showCookieCart.ashx", {}, function (data) {
        $(".shop .n").html(data.Num);
        if ($(".shop_div").length < 1) {
            $(".shop").append("<div class='shop_div'></div>");
        }
        $(".shop_div").html(data.cartHtml);
        if (parseInt(data.Num) == 0) {
            $(".shop_div").remove();
        }
    }, "json");
}

//获取表单的文本框填写进度
function Getjindu(frm_obj) {
    var zong = frm_obj.find("input[type='text']").length;
    var kzong = 0;
    $.each(frm_obj.find("input[type='text']"), function (i, item) {
        if ($(item).val() != "") {
            kzong++;
        }
    });
    return (kzong / zong * 100).toFixed(0) + "%";
}

//设置history记录
function setlookhistory() {
    var lookhistory_arr = new Array();
    if ($.cookie("zhongji_lookhistory") != null) {
        lookhistory_arr = JSON.parse($.cookie("zhongji_lookhistory"));
    }
    var lookhistory_obj = new Object();
    lookhistory_obj.id = $("#productViewId").val();
    lookhistory_obj.src = $("#productViewimge").val();
    lookhistory_obj.price = $("#productViewprice").val();
    lookhistory_obj.title = $("#productViewtitle").val();
    var isReplace = false;
    for (var i = 0; i < lookhistory_arr.length; i++) {
        if (lookhistory_arr[i].id == lookhistory_obj.id) {
            lookhistory_arr.splice(i, 1);
            lookhistory_arr.push(lookhistory_obj);
            isReplace = true;
        }
    }
    if (!isReplace) {
        lookhistory_arr.push(lookhistory_obj);
    }
    if (lookhistory_arr.length > 10) {
        lookhistory_arr.splice(0, 1);
    }
    $.cookie("zhongji_lookhistory", null);
    $.cookie("zhongji_lookhistory", JSON.stringify(lookhistory_arr), { expires: 7, path: '/' });
}
//读取history记录
function showhistory() {
    var lookhistory_arr = new Array();
    if ($.cookie("zhongji_lookhistory") != null) {
        lookhistory_arr = JSON.parse($.cookie("zhongji_lookhistory"));
        lookhistory_arr.reverse();
    }

    var sb = ""
    for (var i = 0; i < lookhistory_arr.length; i++) {
        if (i == 7) { break; }
        sb += " <dl><dt><a href=\"/productView" + lookhistory_arr[i].id + ".html\">";
        sb += " <img src=\"" + lookhistory_arr[i].src + "\" width=\"50\" height=\"48\" /></a></dt>";
        sb += " <dd><a href=\"/productView" + lookhistory_arr[i].id + ".html\">" + lookhistory_arr[i].title + "</a>";
        sb += "  <em>¥" + lookhistory_arr[i].price + "</em></dd><div class=\"clear\"></div></dl>";

    }
    $("#look_history_content").html(sb);
}

//删除history记录
function deletehistory(_id) {
    if (_id == "-1") {
        $.cookie("zhongji_lookhistory", null);
        return false;
    }
    var lookhistory_arr = new Array();
    if ($.cookie("zhongji_lookhistory") != null) {
        lookhistory_arr = JSON.parse($.cookie("zhongji_lookhistory"));
    }

    for (var i = 0; i < lookhistory_arr.length; i++) {
        if (lookhistory_arr[i].id == _id) {
            lookhistory_arr.splice(i, 1);
        }
    }

    $.cookie("zhongji_lookhistory", null);
    $.cookie("zhongji_lookhistory", JSON.stringify(lookhistory_arr), { expires: 7, path: '/' });
}

//设置cookieCart记录
function addcookieCart(_Type, _P_id, _Type_Id, _Num, _src, _norms) {
    addcookieCart(_Type, _P_id, _Type_Id, _Num, _src, _norms, null);
}

function addcookieCart(_Type, _P_id, _Type_Id, _Num, _src, _norms, retFun) {

    $.post("/ashx/AddCookieCart.ashx", { _Type: _Type, P_id: _P_id, _Type_Id: _Type_Id, Num: _Num, src: _src, norms: _norms }, function (data) {
        alert(data.msbox); if (data.msg == 1) {
            if (retFun != null) {
                retFun();
            }
        }
    }, "json");
}

//更新购物车
function updatecookieCart(_Type, _P_id, _Type_Id, _Num, norms) {
    var cookieCart_arr = new Array();
    if ($.cookie("zhongji_cookieCart") != null) {
        cookieCart_arr = JSON.parse($.cookie("zhongji_cookieCart"));
    }

    var isReplace = false;
    for (var i = 0; i < cookieCart_arr.length; i++) {
        if (cookieCart_arr[i].P_id == _P_id && cookieCart_arr[i].Type == _Type && cookieCart_arr[i].Type_Id == _Type_Id && cookieCart_arr[i].norms == parseInt(norms)) {
            cookieCart_arr[i].Num = parseInt(_Num);
            isReplace = true;
        }
    }
    if (!isReplace) {
        cookieCart_arr.push(cookieCart_obj);
    }
    //alert(JSON.stringify(cookieCart_arr));

    $.cookie("zhongji_cookieCart", null);
    $.cookie("zhongji_cookieCart", JSON.stringify(cookieCart_arr), { expires: 7, path: '/' });
}

//删除购物车
function delcookieCart(_Type, _P_id, _Type_Id, norms) {
    var cookieCart_arr = new Array();
    if ($.cookie("zhongji_cookieCart") != null) {
        cookieCart_arr = JSON.parse($.cookie("zhongji_cookieCart"));
    }

    var isReplace = false;
    for (var i = 0; i < cookieCart_arr.length; i++) {
        if (cookieCart_arr[i].P_id == _P_id && cookieCart_arr[i].Type == _Type && cookieCart_arr[i].Type_Id == _Type_Id) {
            cookieCart_arr.splice(i, 1);
            isReplace = true;
        }
    }
    if (!isReplace) {
        cookieCart_arr.push(cookieCart_obj);
    }
    //alert(JSON.stringify(cookieCart_arr));

    $.cookie("zhongji_cookieCart", null);
    $.cookie("zhongji_cookieCart", JSON.stringify(cookieCart_arr), { expires: 7, path: '/' });
}
//更新购物车
function updatecookieCart_cs(_Type, _P_id, _Type_Id, obj,norms, objfun) {
    if (_Type == 1) {
        $.post("/ashx/CalculatePrice.ashx", { _type: _Type, proId: _P_id, type_id: _Type_Id, norms: norms }, function (data) { if (data.msg == 0) { alert(data.msbox) } else { obj.html(data.msbox); objfun(); } }, "json")
    }
}


$.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}
//收藏当前页面
function show_Favorite() {
    var sURL = window.location.href;
    var sTitle = document.title;
    sURL = encodeURI(sURL);
    try {
        window.external.addFavorite(sURL,
        sTitle);
    } catch (e) {
        try { window.sidebar.addPanel(sTitle, sURL, ""); } catch
    (e)
        { alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置."); }
    }

}
//验证邮箱
function CheckMail(mail) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(mail)) return true;
    else return false;
}
//验证手机
function CheckPhone(phone) {

    var filter = /^1[3,5,7,8]\d{9}$/;
    if (filter.test(phone)) return true;
    else return false;
}

//验证电话
function CheckTel(tel) {
    var filter = /^((0?1[358]\d{9})|((0(10|2[1-3]|[3-9]\d{2}))[-]?[1-9]\d{6,7}))$/;
    if (filter.test(tel)) return true;
    else return false;
}

//验证邮政编码
function CheckZipCode(tel) {
    var filter = /^[0-9][0-9]{5}$/;
    if (filter.test(tel)) return true;
    else return false;
}


; (function ($) {
    $.fn.send_timer = function (options) {  //发送验证码定时器
        $t = this;
        var opts = {
            strat: function () { return true; },  //开始调用
            end: $.noop,    //调用结束  重新发送
            click_f: $.noop, //点击发送
            time_f: $.noop,  //还剩多少
            time: 60         //间隔多少秒
        }
        var opts = $.extend(opts, options);
        var Enabled = 1;
        var timer = null;
        var cur_time = 0;

        $t.click(function (e) {  //点击发送
            if (Enabled && opts.strat()) {  //判断是否可重新发送
                opts.strat(e);
                cur_time = 0;
                opts.click_f(e);
                clearInterval(timer);

                timer = setInterval(function () {
                    opts.time_f(opts.time - (++cur_time));
                    if (cur_time >= opts.time) {  //时间到 可重新发送
                        Enabled = 1;
                        opts.end(e);

                        clearInterval(timer);
                    }

                }, 1000);

                Enabled = 0;
            }
        });

        return $t;
    }

    // 防止重复点击
    $.fn.fclick = function (f, t) {
        var $t = this;

        $t.each(function (index, e) {
            var $t2 = $(e);
            var time = 1000 * 60 * 60 * 12  //默认12小时
            f && ($t2.cc = f);
            t && (time = t);

            var Enabled = 1;

            $t2.click(function (e) {  //点击事件
                if (Enabled) {
                    $t2.cc();
                    setTimeout(function () {
                        Enabled = 1;
                    }, time);

                    Enabled = 0;
                }
            });
        });
        return $t;
    }
})($);

$(function () {
    $(".double").change(function () {
        clearNoNum($(this)[0]);
    });
});
function clearNoNum(obj) {
    obj.value = obj.value.replace(/[^\d.]/g, "");
    obj.value = obj.value.replace(/^\./g, "");
    obj.value = obj.value.replace(/\.{2,}/g, ".");
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
}

$.fn.limit = function () {
    var self = $("[limit]");
    self.each(function () {
        var len = $(this).attr("limit");
        var str = $(this).text();

        var char_length = 0;
        for (var i = 0; i < str.length; i++) {
            var son_str = str.charAt(i);
            encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
            if (char_length >= len) {
                var sub_len = char_length == len ? i + 1 : i;
                $(this).attr("title", str);
                $(this).text(str.substr(0, sub_len) + "...");
                break;
            }
        }
    })
}
$(function () {
    $("[limit]").limit();
})
//任20150402
function ValidEnter(evt) {

    evt = (evt) ? evt : ((window.event) ? window.event : "")
    keyCode = evt.keyCode ? evt.keyCode : (evt.which ? evt.which : evt.charCode);

    if (keyCode != 13) //13=enter  
    {
        return;
    }
    else {
        if ($("#keyword").val() == "输入关键词") {

            $("#keyword").val("");

        }

        if ($("#keyword").val() == "") {

            alert("请不起，搜索的信息不能为空!");

            return;
        }

        location.href = "/Search" + $("#keyword").val() + "-" + $(".search span:eq(0)").attr("rel") + ".html";

    }
}

$(document).ready(function () {

    $("#button").click(function () {

        if ($("#keyword").val() == "输入关键词") {

            $("#keyword").val("");

        }
        if ($("#keyword").val() == "") {

            alert("请不起，搜索的信息不能为空!");
            return;

        }
        location.href = "/Search" + $("#keyword").val() + "-" + $(".search span:eq(0)").attr("rel") + ".html";

    });
});