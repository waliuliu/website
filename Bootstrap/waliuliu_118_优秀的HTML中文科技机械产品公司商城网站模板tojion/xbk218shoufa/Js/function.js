

//================上传文件JS函数开始，需和jquery.form.js一起使用===============
//单个文件上传
function SingleUpload(repath, uppath, iswater) {
    var submitUrl="/Tools/SingleUpload.ashx?ReFilePath="+repath+"&UpFilePath="+uppath;
    //判断是否打水印
    if(arguments.length == 3){
        submitUrl="/Tools/SingleUpload.ashx?ReFilePath="+repath+"&UpFilePath="+uppath + "&IsWater="+iswater;
    }
    //开始提交
    $("#userinfo_frm").ajaxSubmit({
        beforeSubmit: function (formData, jqForm, options) {
            
        },
        success: function (data, textStatus) {

            if (data.msg == 1) {
                $("#" + repath).val(data.msbox);
                
            } else {
                alert(data.msbox);
            }
           
        },
        error: function (data, status, e) {
            alert("上传失败，错误信息：" + e);
        },
        url: submitUrl,
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        secureuri: false,
        timeout: 600000
    });
};
//===========================上传文件JS函数结束================================
