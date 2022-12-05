window.onload = function () {
    var username = $.cookie("userName");
    if (username != undefined) {// 登录
        $(".panel-lite").css("display", "none");
        $(".container").css("display", "block");
        $("#logout").css("display", "none");
    }
    else {// 登出
        $(".panel-lite").css("display", "block");
        $(".container").css("display", "none");
        $("#logout").css("display", "block");
    }
}
$(function () {
    $(".al-button").click(function () {
        var al_name = $(".al-search").val();
        if (al_name == "tiliang" || al_name == "提利昂-兰尼斯特") {
            var al1 = $.cookie("tla1");
            var al2 = $.cookie("tla2");
            var al3 = $.cookie("tla3");
        }
        var al_1 = $("#al-1");
        var al_2 = $("#al-2");
        var al_3 = $("#al-3");
        al_1.text(al1);
        al_2.text(al2);
        al_3.text(al3);
        al_1.click(function () {
            al_1.css("display", "none");
            $(".character").append('<textarea style="width: 100%;height: 130px;">' + al1 + '</textarea>');
        });
        al_2.click(function () {
            al_2.css("display", "none");
            $(".history").append('<textarea style="width: 100%;height: 130px;">' + al2 + '</textarea>');
        });
        al_3.click(function () {
            al_3.css("display", "none");
            $(".qutoe").append('<textarea style="width: 100%;height: 130px;">' + al3 + '</textarea>');
        });
    })
    $(".add-btn").click(function () {
        var addName = $(".add_name").val()
        if (addName.length >= 0 && addName.length <= 7) {
            k = k + 1
            str = '<li class="item">' + addName + `<button class="del-button" index="${k}">删除</button></li>`
            localStorage.setItem(k, str)
            showList()
        }
    })
    $("#name-list").click(function (e) {
        if($(e.target).is($(".del-button"))){
            let key = $(e.target).attr("index")
            localStorage.removeItem(key)
            showList()
        }
    })
    if(userName == undefined){
        let str1 = '<li class="item">'
        localStorage.setItem(1, str1 + "艾德·史塔克" + '<button class="del-button" index="1">删除</button></li>')
        localStorage.setItem(2, str1 + "艾莉亚·史塔克" + '<button class="del-button" index="2">删除</button></li>')
        localStorage.setItem(3, str1 + "阿利欧·何塔" + '<button class="del-button" index="3">删除</button></li>')
        localStorage.setItem(4, str1 + "阿莎·葛雷乔伊" + '<button class="del-button" index="4">删除</button></li>')
        localStorage.setItem(5, str1 + "巴利斯坦·赛尔弥" + '<button class="del-button" index="5">删除</button></li>')
    }
    var k = localStorage.length;// 本地存储人物的数量
    showList()
    function showList() {
        $("#name-list").html("")
        for(let i = 0; i < localStorage.length; ++i){
            let key = localStorage.key(i)
            let value = localStorage.getItem(key)
            $("#name-list").append(value)
        }
    }

    // 登录界面
    //设置cookie
    function setCookies(obj, limitTime) {
        let data = new Date(new Date().getTime() + limitTime * 24 * 60 * 60 * 1000).toUTCString()
        for (let i in obj) {
            document.cookie = i + '=' + obj[i] + ';expires=' + data
        }

    }
    $("#login").click(function () {
        var userName = "root";
        var passWd = "333";
        var inputName = $("#userName").val();
        var inputWd = $("#passWd").val();

        if (inputName == userName && inputWd == passWd) {

            setCookies({
                userName: inputName
            }, 7);
            location.reload();
        }
        else {
            $(".error").text("密码错误");
        }
    });
    $("#logout").click(function () {
        $.cookie("userName", "", { expires: -1 });
        location.reload();
    });
    // 登录界面
})



