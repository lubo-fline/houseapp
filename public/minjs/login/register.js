$(function(){var t=!1;$(".prev").on("tap",function(){window.history.go(-1)}),$("input").on("blur",function(){var n=$("#ipt1").val(),o=$("#ipt2").val(),a=$("#ipt3").val(),e=$("#ipt4").val(),i=$("#ipt5").val();""!=n&&""!=o&&""!=a&&""!=e&&""!=i&&($(".button").css("background-color","#EA5404"),t=!0)});var n;$(".get").on("tap",function(){$(this).css("background-color","#B2B2B2").css("transition","0.5s"),$(this).text(30);var t=this;n=setInterval(function(){$(t).text(parseInt($(t).text())-1),$(t).text()<0&&(clearInterval(n),$(t).css("background-color","#EA5404"),$(t).text(5))},1e3),$(this).off("tap"),setTimeout(function(){$(t).on("tap",function(){$(this).css("background-color","#B2B2B2").css("transition","0.5s"),$(this).text(30);var t=this;n=setInterval(function(){$(t).text(parseInt($(t).text())-1),$(t).text()<0&&(clearInterval(n),$(t).css("background-color","#EA5404"),$(t).text(5))},1e3),$(this).off("tap")})},5e3)}),$(".button").on("tap",function(){t&&"经纪人"==$("#ipt5").val()&&(location.href="./jjr.html")}),$("#human").on("tap",function(){$(".select_human").show()});for(var o=$(".select_human li").length,a=0;a<o;a++)$(".select_human li").eq(a).on("tap",function(){$("#ipt5").val($(this).text()),$(this).parent().hide(),$(".select img").addClass("arrow_rotate")});$(".registerDone .ok").on("tap",function(){location.href="./login_01.html"})});