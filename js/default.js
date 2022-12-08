$(function() {
    var userName = $.cookie("userName");
    if(userName != undefined){
        $(".greet").text("欢迎你," + userName);
    }
});