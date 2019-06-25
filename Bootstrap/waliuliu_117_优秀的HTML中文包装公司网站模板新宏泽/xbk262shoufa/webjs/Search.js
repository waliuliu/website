function ValidEnter(evt) {

        evt = (evt) ? evt : ((window.event) ? window.event : "")
        keyCode = evt.keyCode ? evt.keyCode : (evt.which ? evt.which : evt.charCode);

        if (keyCode != 13) //13=enter  
        {
            return;
        }
        else {

            location.href = "/Search.html?keyword=" + escape($("#keyword").val());

        }
    }
    $(document).ready(function () {


        $("#button").click(function () {

            location.href = "/Search.html?keyword=" + escape($("#keyword").val());

        });

    });

    var timer = null;
    $('.contactus').hover(function () {
        $(this).children('.contayc').slideDown()
        clearInterval(timer);
    }, function () {
        timer = window.setInterval(function () {
            $('.contactus').children('.contayc').hide();
        }, 200);

    });
     