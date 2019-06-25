$(function () {
    $("#reg_geren_frm .get_userCode").send_timer({  //发送短信验证
        strat: function () {
            if ($("#reg_geren_frm input[name='classid']:checked").val() == "9") {
                if (!CheckMail($("#reg_geren_frm input[name='title']").val())) {
                    alert("请输入正确的邮箱地址");
                    return false;
                } else {
                    return true;
                }
            } else {
                if (!CheckPhone($("#reg_geren_frm input[name='title']").val())) {
                    alert("请输入正确的手机号");
                    return false;
                } else {
                    if ($("#userMcode").val() == "") {
                        alert($("#userMcode").attr("title"));
                        return false;
                    } 
                    return true;
                }
            }

        },
        click_f: function () {
            var thisobj = this;
            reUrl = "/ashx/SendEmail.ashx?";
            if ($("#reg_geren_frm input[name='classid']:checked").val() == "8") {
                reUrl = "/ashx/send.ashx?code=" + $("#userMcode").val()+"&";
            }
            $.ajax({
                url: reUrl + "title=" + $("#reg_geren_frm input[name='title']").val(),
                type: "post",
                dataType: "json", //返回json格式的数据
                success: function (d) {
                    alert(d.msbox);
                    $("#reg_geren_frm .huan").click();
                },
                error: function () {
                    alert("发送失败,请稍等重试");
                }
            });

        },
        time_f: function (time) {
            $("#reg_geren_frm .get_userCode").html("还剩" + time + "秒,可重新发送!");
        },
        end: function () {
            $("#reg_geren_frm .get_userCode").html("重新发送");
        }
    });

    $("#qiye_reg_frm .get_userCode").send_timer({  //发送验证码
        strat: function () {
            if (!CheckMail($("#qiye_reg_frm input[name='UserEmail']").val())) {
                alert($("#qiye_reg_frm input[name='UserEmail']").attr("eormsg"));
                return false;
            } else {
                return true;
            }
        },
        click_f: function () {
            reUrl = "/ashx/SendEmail.ashx";
            
            $.ajax({
                url: reUrl + "?title=" + $("#qiye_reg_frm input[name='UserEmail']").val(),
                type: "post",
                dataType: "json", //返回json格式的数据
                success: function (d) {
                    $.alert(d.msbox);
                },
                error: function () {
                    $.alert("发送失败,请稍等重试");
                }
            });

        },
        time_f: function (time) {
            $("#qiye_reg_frm .get_userCode").html("还剩" + time + "秒,可重新发送!");
        },
        end: function () {
            $("#qiye_reg_frm .get_userCode").html("重新发送");
        }
    });

    $("#reg_geren_frm,#qiye_reg_frm").submit(function () {
        var obj = $(this);
        if (!checkUserInfo(obj)) {
            return false;
        }
        if (obj.attr("id") == "qiye_reg_frm") {

        }
        if (!($("#" + obj.attr("id") + " .yiyuedu").attr("checked") == "checked")) {
            alert(obj.find(".yiyuedu").attr("title"));
            return false;
        }
        $.post("/ashx/Adduser.ashx", obj.serialize(), function (data) { alert(data.msbox); if (data.msg == 1) { window.location.href = "/login.html"; }}, "json");
        return false;
    });
});

function checkQiyeInfo(obj) {
    if (obj.find("input[name='UserCompanyName']").val() == "") {
        alert(obj.find("input[name='UserCompanyName']").attr("title"));
        return false;
    }

    if (obj.find("input[name='UserName']").val() == "") {
        alert(obj.find("input[name='UserName']").attr("title"));
        return false;
    }

    if (obj.find("input[name='UserEmail']").val() == "") {
        alert(obj.find("input[name='UserEmail']").attr("title"));
        return false;
    }
    if (!CheckMail(obj.find("input[name='UserEmail']").val())) {
        alert(obj.find("input[name='UserEmail']").attr("eormsg"));
        return false;
    }
}

function checkUserInfo(obj) {
    if (obj.find("input[name='title']").val() == "" || obj.find("input[name='title']").val() == obj.find("input[name='title']").attr("title")) {
        alert(obj.find("input[name='title']").attr("title"));
        return false;
    }
    if (obj.find("input[name='password']").val() == "") {
        alert(obj.find("input[name='password']").attr("title"));
        return false;
    }

    if (obj.find("input[name='password1']").val() == "") {
        alert(obj.find("input[name='password1']").attr("title"));
        return false;
    }

    if (obj.find("input[name='password']").val() != obj.find("input[name='password1']").val()) {
        alert(obj.find("input[name='password']").attr("eormsg"));
        return false;
    }

    if (obj.find("input[name='usercode']").val() == "") {
        alert(obj.find("input[name='usercode']").attr("title"));
        return false;
    }
    return true;
}