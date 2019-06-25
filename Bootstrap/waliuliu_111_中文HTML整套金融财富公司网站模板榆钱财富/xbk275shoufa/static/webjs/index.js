$(function () {

    $(".ProductContents").eq(0).show();
    $(".Productclass a").hover(function () {
        var t = $(this).index()
        $(".Productclass a").removeClass("cur").eq(t).addClass("cur");
        $(".ProductContents").hide().eq(t).show();
    });
    var val = $(".jobstext").val();
    $(".jobstext").focus(function () {
        if ($(this).val() == val) {
            $(this).val('');
        }
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val(val);
        }
    }).keyup(function (e) {
        if (e.keyCode == 13)
            searchJobs();
    });

    $(".jobssubmit").click(function () {
        searchJobs();
    });
    function formatDate(dt) {
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        var date = dt.getDate();
        var hour = dt.getHours();
        var minute = dt.getMinutes();
        var second = dt.getSeconds();
        return year + "." + fd(month) + "." + fd(date);
    }

    function fd(v) {
        return v > 9 ? v : "0" + v;
    }

    function GetDateTime(Dtime) {
        var NewDtime = new Date(parseInt(Dtime.slice(6, 19)));
        return formatDate(NewDtime);
    }

    function searchJobs() {
        var keyword = $(".jobstext").val();

        if (keyword == val) {
            $(".jobstext").focus();
        } else {
            if (typeof Job == 'undefined') {
                $.getScript('/ajax/Job.ashx', function () {
                    Init(keyword);
                });
            } else {
                Init(keyword);
            }
        }
    }

    function Init(keyword) {
        Job.Search(keyword, function (res) {
            var html = '<dl class="jobslistHead clearfix">' + $(".jobslistHead").html() + '</dl>';
            if (res && res.value) {
                for (var i in res.value) {
                    html += '<dl class="clearfix"><dt><a href="' + res.value[i].Url + '">' + res.value[i].Title + '</a></dt><dd><span>' + res.value[i].Address + '</span></dd><dd><span>' + res.value[i].People + '</span></dd><dd class="jobslistTime">' + GetDateTime(res.value[i].AddTime) + '</dd></dl>';
                }
            }
            $(".jobslist").html(html);

        });
    }
});