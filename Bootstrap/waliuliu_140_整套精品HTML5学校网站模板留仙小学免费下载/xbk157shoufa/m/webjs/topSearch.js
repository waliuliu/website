$(function () {
    // 头部搜索
    $(".topFormSearch").submit(function () {
        var val = $(".topTxtSearch").val();
        if (!val) {
            alert("请输入搜索关键字");
            return false;
        }
        $(".topTxtSearch").val(encodeURI(val));
    });
});