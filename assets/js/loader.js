// 显示加载动画
$("#loader").css("display","block");
// 页面加载完毕后隐藏加载动画
$(window).on('load',function(){
    $("#loader").fadeOut(500);
});