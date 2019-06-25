function Search(con,list) {
    var keyword = getUrlParam("keyword");
    //$("#res_keyword").text(keyword);
    var page = getUrlParam("page");
    if (page == null)
        page = 1;
    else
        page = page - 0;
    if (page < 1) page = 1;
    var pagesize = 10;
    Article.Query(pagesize, page,unescape(keyword), function (res) {
        if (res && res.value) {
            if (page > res.value.TotalPages && res.value.TotalPages > 0) {
                location.href = '?keyword=' + keyword + (res.value.TotalPages == 1 ? '' : '&page=' + res.value.TotalPages)
            } else {
                var html = '';
                for (var i in res.value.Items) {
                    html += list(res.value.Items[i]);
                }
                console.log(html);
                con.html(html);
                if (res.value.TotalPages > 1) {
                    laypage({
                        cont: $('#page'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: res.value.TotalPages, //总页数
                        skip: false, //是否开启跳页
                        skin: 'now',
                        curr: res.value.CurrentPage,
                        formatUrl: "?keyword=" + escape(keyword == null ? '' : keyword) + "{page}",
                        pagenum: "&page=",
                        groups: 10 //连续显示分页数
                    });
                }
            }
        }
    });
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function GetDateTime(Dtime) {
    var NewDtime = new Date(parseInt(Dtime.slice(6, 19)));    NewDtime.setHours(NewDtime.getHours() - 8);//    return formatDate(NewDtime);
}function formatDate(dt) {
    var year = dt.getFullYear();    var month = dt.getMonth() + 1;    var date = dt.getDate();    var hour = dt.getHours();    var minute = dt.getMinutes();    var second = dt.getSeconds();    var arr = [];    arr[arr.length] = year;    arr[arr.length] = fd(month);    arr[arr.length] = fd(date);    arr[arr.length] = fd(hour);    arr[arr.length] = fd(minute);    arr[arr.length] = fd(second);    return arr;    // return year + "-" + fd(month) + "-" + fd(date);}function fd(v) {
    return v > 9 ? v : "0" + v;
}





$(".submit").click(function () {
    chaxun();
})
$("#key").keydown(function (e) {
    if (e.keyCode == 13) {
        chaxun();
    }
})
function chaxun() {
    var keyword = $("#key").val();
    if (keyword != null || keyword != "" || keyword != undefined) {
        location.href = "/search.html?keyword=" + escape(keyword);
    }
    else {
        alert("请输入关键字！");
    }
}