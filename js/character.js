$(function () {
    var value // 获取url 中传递的参数
    var url = location.href //取得整个地址栏
    var num = url.indexOf("?")
    arr = url.substr(num + 1) //取得所有参数
    num = arr.indexOf("=")
    if (num > 0) {
        value = arr.substr(num + 1)
    }
    var path = "json/" + value + ".json"
    $.get(path, function (res) {
        $(".name").html(res.name)
        $("#ac1").html(res.ac1)
        $("#ac2").html(res.ac2)
        $("#ac3").html(res.ac3)
        $("#n3").html(res.name3)
        $("#img1").attr("src",res.img1)
        $("#img2").attr("src",res.img2)
        $("#bieming").html(res.bieming)
        $("#touxian").html(res.touxian)
        $("#shili").html(res.shili)
        $("#wenhua").html(res.wenhua)
        $("#chusheng").html(res.chusheng)
        $("#peiou").html(res.peiou)
        $("#lianqing").html(res.lianqing)
    })
})