function autoSwipe(){slideTime=setTimeout(function(){if(swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}},2e3)}var $slider=$(".slider_block"),$sliderCon=$(".slider_container"),$point=$(".point_block"),wd=$(window).width(),lg=$slider.length,allWd=wd*lg,hg=.85*wd;$sliderCon.width(allWd),$slider.width(wd).height(hg);var swipeNow=0,slideTime;$sliderCon.on("swipeLeft",function(){if(console.log("touch left"),clearTimeout(slideTime),swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),$sliderCon.on("swipeRight",function(){if(console.log("touch right"),clearTimeout(slideTime),swipeNow>0){var e=--swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),autoSwipe();var $radioList=$(".radio_box .radio_block");$radioList.on("tap",function(){var e=$(this);e.hasClass("selected")||($radioList.removeClass("selected"),e.addClass("selected"))});var $selectTitle=$(".select-title"),$selectList=$(".select-list");$selectTitle.on("tap",function(){$(this).siblings(".select-list").toggle()}),$selectList.find(".select-li").on("tap",function(){var e=$(this),i=e.parent(".select-list"),s=e.text(),t=e.data("val");console.log(s,t),i.siblings(".select-title").text(s).data("val",t),i.hide()});