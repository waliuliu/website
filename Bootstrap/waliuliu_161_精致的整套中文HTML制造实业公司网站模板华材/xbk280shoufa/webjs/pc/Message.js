function send() {
    var txtNickname = $("#txtNickname").val();
    var txtContact = $("#txtContact").val();
    var txtContent = $("#txtContent").val();
    $.ajax({
        type: "post",
        url: "/ashx/AddMessage.ashx",
        data: { nickname: txtNickname, contact: txtContact, content: txtContent },
        success: function (data) {
            var dataJson = eval("(" + data + ")");
            if (dataJson.msg == "-1") {
                alert("留言失败，请稍后再试！");
            }
            if (dataJson.msg == "0") {
                alert("留言信息不完整！");
            }
            if (dataJson.msg == "1") {
                alert("留言成功！");
                var txtNickname = $("#txtNickname").val("");
                var txtContact = $("#txtContact").val("");
                var txtContent = $("#txtContent").val("");
            }
        },
        orrer: function () {
            alert("ERROR");
        }
    })
}

function reset() {
    var txtNickname = $("#txtNickname").val("");
    var txtContact = $("#txtContact").val("");
    var txtContent = $("#txtContent").val("");
}

$(".nav_cont ul li a").eq(5).addClass("cur");