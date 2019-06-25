
$(function () {
    var pagesize = 8;
    var pageindex = 1;
    var htmlstr = "";
    Getlist(pagesize, pageindex);
    
    
    $(".honorpage-prev").click(function () {
        var fenye = $("#page").text();
        var zongyeshu = fenye.substring(fenye.lastIndexOf('/') + 1, fenye.length)
        htmlstr = "";
        //alert(pageindex)
        if ( pageindex>1) {
            pageindex -= 1;
            Getlist(pagesize, pageindex);

        }
    })
    $(".honorpage-next").click(function () {
        var fenye = $("#page").text();
        var zongyeshu = fenye.substring(fenye.lastIndexOf('/') + 1, fenye.length)
        htmlstr = "";
        //alert(1);
        if (pageindex < zongyeshu) {
            pageindex += 1;
            Getlist(pagesize, pageindex);
        }
    })
    function Getlist(PageSize, PageIndex) {
        Article.Gethonor(PageSize, PageIndex, function (data) {
            //console.log(data);
            $("#page").html(data.value.CurrentPage + " / " + data.value.TotalPages);
            for (var i = 0; i < data.value.Items.length; i++) {
                htmlstr += "<li><a href=\"javascript:;\">" + data.value.Items[i].Title + "</a></li>";
            }
            $(".honor-list ul").html(htmlstr);
        })
    }
});
        
