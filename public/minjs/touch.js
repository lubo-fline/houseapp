!function(e){function t(e,t,n,o){return Math.abs(e-t)>=Math.abs(n-o)?e-t>0?"Left":"Right":n-o>0?"Up":"Down"}function n(){s=null,g.last&&(g.el.trigger("longTap"),g={})}function o(){s&&clearTimeout(s),s=null}function i(e){"touchcancel"!=e&&(r&&clearTimeout(r),c&&clearTimeout(c),l&&clearTimeout(l),s&&clearTimeout(s),r=c=l=s=null,g={})}function a(e){return("touch"==e.pointerType||e.pointerType==e.MSPOINTER_TYPE_TOUCH)&&e.isPrimary}function u(e,t){return e.type=="pointer"+t||e.type.toLowerCase()=="mspointer"+t}var r,c,l,s,p,g={},h=750;e(document).ready(function(){var T,f,y,w,d=0,m=0;"MSGesture"in window&&(p=new MSGesture,p.target=document.body),e(document).bind("MSGestureEnd",function(e){var t=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;t&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t))}).on("touchstart",function(t){(w=u(t,"down"))&&!a(t)||(y=w?t:t.touches[0],t.touches&&1===t.touches.length&&g.x2&&(g.x2=void 0,g.y2=void 0),T=Date.now(),f=T-(g.last||T),g.el=e("tagName"in y.target?y.target:y.target.parentNode),r&&clearTimeout(r),g.x1=y.pageX,g.y1=y.pageY,f>0&&f<=250&&(g.isDoubleTap=!0),g.last=T,s=setTimeout(n,h),p&&w&&p.addPointer(t.pointerId))}).on("touchmove",function(e){(w=u(e,"move"))&&!a(e)||(y=w?e:e.touches[0],o(),g.x2=y.pageX,g.y2=y.pageY,d+=Math.abs(g.x1-g.x2),m+=Math.abs(g.y1-g.y2))}).on("touchend",function(n){(w=u(n,"up"))&&!a(n)||(o(),g.x2&&Math.abs(g.x1-g.x2)>30||g.y2&&Math.abs(g.y1-g.y2)>30?l=setTimeout(function(){g.el&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t(g.x1,g.x2,g.y1,g.y2))),g={}},0):"last"in g&&(d<30&&m<30?c=setTimeout(function(){var t=e.Event("tap");t.cancelTouch=i,g.el&&g.el.trigger(t),g.isDoubleTap?(g.el&&g.el.trigger("doubleTap"),g={}):r=setTimeout(function(){r=null,g.el&&g.el.trigger("singleTap"),g={}},250)},0):g={}),d=m=0)}).on("touchcancel MSPointerCancel pointercancel",function(){i("touchcancel")}),e(window).on("scroll",i)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.on(t,e)}})}(Zepto);