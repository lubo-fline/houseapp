$(function(){$(".title .prev").on("tap",function(){window.history.go(-1)}),$(".check_box").on("tap",function(){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active"),$(".check_box").eq(2).hasClass("active")?$("textarea").removeAttr("disabled"):$("textarea").attr("disabled","disabled")})});