$(function() {
    var userName = $.cookie("userName");
    if(userName != undefined){
        $("header span").text("欢迎你," + userName);
    }
});