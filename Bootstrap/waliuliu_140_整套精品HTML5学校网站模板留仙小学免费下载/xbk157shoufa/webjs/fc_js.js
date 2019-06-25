var tip = null;

//显示提示文本，text为要显示的文本，second表示自动消失的秒数  
function showTip(text, second) {

    if (!tip) {
        tip = document.createElement('div');
        tip.style.backgroundColor = '#000';
        tip.style.color = '#fff';
        tip.style.fontSize = '18px';
        tip.style.fontWeight = 'bold';
        tip.style.fontFamily = '微软雅黑';
        tip.style.width = 'auto';
        tip.style.height = 'auto';
        tip.style.padding = '10px 30px 10px 30px';
        tip.style.borderRadius = '6px';
        tip.style.opacity = '0.7';
        tip.style.position = 'fixed';
        tip.style.zIndex = '99999';
        document.body.appendChild(tip);
    }
    tip.innerHTML = text;
    tip.style.display = 'inline-block';

    tip.style.top = (document.documentElement.clientHeight / 2 - tip.offsetHeight / 2) + 'px';
    tip.style.left = (document.documentElement.clientWidth / 2 - tip.offsetWidth / 2) + 'px';

    setTimeout(function disappear() {
        tip.style.display = 'none';
    }, second * 1000);

}
$(function () {
    $("#search_").submit(function () {
        var key_ = $("input[name='key_']").val();
        if (key_ == "") { showTip("搜索内容不能为空", 3); return false; }
        else { location.href = '/search_' + key_ + '/.html'; return false;}
    });
})