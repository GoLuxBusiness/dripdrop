!function(a){var b={total:10,ofTop:0,ofLeft:0,on:"document.body",twinkle:.2,minPixel:1,maxPixel:2,color:"#B0B0B0",namespace:"jqueryFireFly",zIndex:Math.ceil(20*Math.random())-1,borderRadius:"50%",_paused:!1};a.firefly=function(c){if(a.firefly.settings=a.extend({},b,c),a.firefly.eleHeight=a(a.firefly.settings.on).height(),a.firefly.eleWidth=a(a.firefly.settings.on).width(),a(window).resize(function(){if("document.body"!==a.firefly.settings.on){var b=a(a.firefly.settings.on).offset();a.firefly.offsetTop=b.top,a.firefly.offsetLeft=b.left,a.firefly.eleHeight=a(a.firefly.settings.on).height(),a.firefly.eleWidth=a(a.firefly.settings.on).width()}else a.firefly.offsetTop=0,a.firefly.offsetLeft=0,a.firefly.eleHeight=a(document.body).height(),a.firefly.eleWidth=a(document.body).width()}),"document.body"!==a.firefly.settings.on){var d=a(a.firefly.settings.on).offset();a.firefly.offsetTop=d.top,a.firefly.offsetLeft=d.left,a.firefly.eleHeight=a(a.firefly.settings.on).height(),a.firefly.eleWidth=a(a.firefly.settings.on).width()}else a.firefly.offsetTop=0,a.firefly.offsetLeft=0,a.firefly.eleHeight=a(document.body).height(),a.firefly.eleWidth=a(document.body).width();for(i=0;i<a.firefly.settings.total;i++){var e=a.firefly.randomPixel(a.firefly.settings.minPixel,a.firefly.settings.maxPixel),f=a.firefly.create(e);a.firefly.fly(f)}return a.firefly.sparks=a(a.firefly.settings.on).children("."+a.firefly.settings.namespace),this},a.firefly.pause=function(b){a.firefly.settings._paused=!0,b&&a.each(a.firefly.sparks,function(b,c){a(c).stop(!0)})},a.firefly.resume=function(){a.firefly.settings._paused=!1,a.each(a.firefly.sparks,function(b,c){a.firefly.fly(c)})},a.firefly.create=function(b){return spark=a("<div>").hide(),spark.addClass(a.firefly.settings.namespace),a.firefly.settings._onSparkID++,"document.body"===a.firefly.settings.on?a(document.body).append(spark):a(a.firefly.settings.on).append(spark),spark.css({position:"absolute",width:b,height:b,"background-color":a.firefly.settings.color,"z-index":a.firefly.settings.zIndex,"border-radius":a.firefly.settings.borderRadius,top:a.firefly.offsetTop+a.firefly.random(a.firefly.eleHeight-50),left:a.firefly.offsetLeft+a.firefly.random(a.firefly.eleWidth-50),"pointer-events":"none"}).show()},a.firefly.fly=function(b){a(b).animate({top:a.firefly.offsetTop+a.firefly.random(a.firefly.eleHeight-50),left:a.firefly.offsetLeft+a.firefly.random(a.firefly.eleWidth-50),opacity:a.firefly.opacity(a.firefly.settings.twinkle)},{duration:2e3*(a.firefly.random(10)+5),done:function(){a.firefly.settings._paused||a.firefly.fly(b)}})},a.firefly.randomPixel=function(a,b){return Math.floor(Math.random()*(b-a+1)+a)},a.firefly.random=function(a){return Math.ceil(Math.random()*a)-1},a.firefly.opacity=function(a){return op=Math.random(),op<a?0:1}}(jQuery);
