/// <reference path="jquery-1.3.2.min.js" />

//#region  选中状态
//name 带有 a 标签 的属性,  onClass 表示选中的  onTag 被选中的 标签 
function GetCur(name, onClass, onTag) {
    var v = window.location.pathname;

    $(name).each(function (i) {
        var vherf = $(this).attr("href");
        if (v == vherf) {
            $(onTag).eq(i).toggleClass(onClass)
        }
    })
}
//#endregion