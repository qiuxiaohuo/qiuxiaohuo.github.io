<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '╭(°A°`)╮ 页面无了 ~';
         clearTimeout(titleTime);
     }
     else {
         document.title = '(ฅ>ω<*ฅ) 噫我又好了~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });