$(function () {

    // 加入收藏
    $(".classCollection").click(function () {
        var productId = $(this).attr("rel");
        var cId = 0;
        PreProduct.AddCollection(productId, cId, function (data) {
            alert(data.value.msg);
            location.reload();
        });
    });
    $(".QuickAddCart").click(function () {
        var productId = $(this).attr("rel");
        var showShopping = {};
        CommonTool.AddShoppingCat(productId, showShopping, function (data) {
            if (data.value.res) {
                alert("加入购物车成功！");
            } else {
                alert(data.value.msg);
            }
        });
    })
    //

    // 加入购物车
    $(".classShoppingCat").click(function () {
        // 判断是否已经选中了一条【SKU】
        var skuId = $("#skuId").val();
        if (!skuId) {
            alert("请选择商品!");
            return false;
        }
        var stock = $(".InStockNum i").attr("stock") - 0;
        var total = $('#txtTotal').val();
        if (stock < total) {
            alert("库存不足");
            return false;
        }
        // 如果已经选中，正常添加到购物车中
        var productId = $(this).attr("rel");
        var showShopping = {};
        showShopping.SkuId = $("#skuId").val();
        showShopping.ProductName = $("#productName").html();
        showShopping.Link = location.href.replace(/(http|https):[/][/]([\w\W]+?)([/][\w\W]+)/i, "$3");
        showShopping.Img = $("#productImgUrl").attr("src");
        showShopping.SKUInfo = getSKUInfo();
        showShopping.Price = $('#strongPrice1').html();
        showShopping.Total = $('#txtTotal').val();
        showShopping.ProductId = productId;
        showShopping.IsSelect = 1;
        CommonTool.AddShoppingCat(productId, showShopping, function (data) {
            if (data.value.res) {
                alert("加入购物车成功！")
                location.reload();
            } else {
                alert(data.value.msg);
            }
        });
    });

    // 立即购买
    $(".classBuyNow").click(function () {
        var productId = 0;
        productId = $(this).attr("rel");
        // 判断是否已经选中了一条【SKU】
        var skuId = $("#skuId").val();
        if (!skuId) {
            alert("请选择商品!");
            return false;
        }

        var stock = $(".InStockNum i").attr("stock") - 0;
        var total = $('#txtTotal').val();
        if (stock < total) {
            alert("库存不足");
            return false;
        }

        // 如果已经选中，正常添加到购物车中
        var productId = $(this).attr("rel");
        var showShopping = {};
        showShopping.SkuId = $("#skuId").val();
        showShopping.ProductName = $("#productName").html();
        showShopping.Link = location.href.replace(/(http|https):[/][/]([\w\W]+?)([/][\w\W]+)/i, "$3");
        showShopping.Img = $("#productImgUrl").attr("src");
        showShopping.SKUInfo = getSKUInfo();
        //2016/4/25
        showShopping.Price = $('#strongPrice1').html();
        showShopping.Total = $('#txtTotal').val();
        showShopping.ProductId = productId;
        showShopping.IsSelect = 1;
        CommonTool.AddShoppingCat(productId, showShopping, function (data) {
            if (data.value.res) {
                window.location.href = "/shoppingcat";
                GetMiniCart();
            } else {
                alert(data.value.msg);
            }
        });

    });

    // 获取订单成交记录
    getCompleteOrder(id, 1);

    //2016/4/25  运费
    $(".mui_addr_list li a").click(function () {
        PreProduct.CalculateFreight(fId, "广东省", "深圳市", $("#txtTotal").val(), function (data) {
            if (data.value.res) {
                $(".crShipment em").text(data.value.money);
                return false;
            }
        });
    });
    //获取城市
    //
});

// 注册【立即购买】单击事件
function registerBuyNowClick() {
    var msgIntervalId;

    // 立即购买
    $("#linkBuyNow").click(function () {
        // 判断是否已经选中了一条【SKU】
        var skuId = $("#skuId").val();
        if (!skuId) {
            alert("请选择商品!");
            return false;
        }

        //alert("开始秒杀");
        //return false;

        var productId = $(this).attr("rel")
        var showOrder = {};
        showOrder.ProductId = productId;
        showOrder.SpecificationsId = $("#skuId").val();
        showOrder.P_Specifications = JSON.stringify(getSKUInfo());  // 将 Json 对象转换成字符串
        showOrder.P_Link = location.href.replace(/(http|https):[/][/]([\w\W]+?)([/][\w\W]+)/i, "$3");

        PreProduct.SnapUpOrder(showOrder, function (data) {
            if (data.value.res) {
                alert(data.value.msg);
                var uId = data.value.uId;
                if (!msgIntervalId) {
                    msgIntervalId = setInterval(function () {
                        PreProduct.ReturnOrderMessage(uId, function (data) {
                            if (data.value.res) {
                                alert(data.value.msg);
                                clearInterval(msgIntervalId);
                                msgIntervalId = null;
                            } else {
                                $("#returnMessage").html("请等待结果...");
                            }
                        });
                    }, 1000);
                }
            } else {
                alert(data.value.msg);
            }
        });
    });
}

// 获取 sku 值
function getSKUInfo() {
    var skus = $(".crProPriceThree div.skuAttr");
    var skuArray = new Array(skus.length);
    for (var i = 0; i < skus.length; i++) {
        var skuItem = {};
        var that = $(skus[i]);
        var name = that.find("span").html();
        skuItem.name = name.substring(0, name.length - 1);  // 截取掉一个字符
        skuItem.value = that.find("a.cur").attr("rel");
        skuArray[i] = skuItem;
    }
    return skuArray;
}

// 获取成交记录
function getCompleteOrder(id, page) {
    PreProduct.GetCompleteOrder(id, page, function (data) {
        // var value = JSON.parse(data.value);
        var value = JSON.parse(data.value.result);
        if (value) {
            $("#tBody").html("");
            var item;
            for (var i = 0; i < value.length; i++) {
                item = value[i];
                var specifications = "";
                for (var k in item.specifications) {
                    var itemValue = item.specifications[k];
                    specifications += itemValue.name + "：" + itemValue.value + "<br />";
                }
                $("#tBody").append('<tr><td>' + item.name + '</td><td><p class="cor999">' + specifications + '</p></td><td>' + item.num + '</td><td><p class="date">' + item.date + '</p><p class="time">' + item.time + '</p></td></tr>');
            }
        }
        $(".crPageDown").html(data.value.nav);
        // 注册事件
        $(".crPageDown a").click(function () {
            var page = $(this).attr("href");
            getCompleteOrder(id, page);
            return false;
        });
    });
}