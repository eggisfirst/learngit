$(function(){
  /*下拉导航*/
  $(".nav_box ul>li").hover(function(){
    $(this).find(".down").stop().slideDown({duration:1351,easing:"easeOutBounce"})
  },function(){
    $(this).find(".down").stop().slideUp(0.2)
  })

 /*自动无缝轮播效果*/
  var i=0;           
  var clone=$(".bg_box .img li").first().clone();
  $(".bg_box .img").append(clone);
  var len=$(".bg_box .img li").length;
  console.log(len)

  /*自动添加下标*/
  for(var j=0;j<len-1;j++){
      $(".bg_box .num").append("<li></li>")          
  }
  $(".bg_box .num li").first().addClass("on");

  //下标连接图
  $(".main .num li").hover(function(){
      var index=$(this).index();
      i=index;
      $(".bg_box .img").stop().animate({left:-index*1351},500)
      $(this).addClass("on").siblings().removeClass("on");
  })

  //定时器
  var t=setInterval(function(){
          i++;
          move()
  },2000)

  //鼠标滑入
  $(".main").hover(function(){
      clearInterval(t);
  },function(){
    t=setInterval(function(){
          i++;
          move()
    },2000)
  })

  //向左轮播
  $(".bg_box .left").click(function(){
          i++;
          move()
  })

   //向右轮播
   $(".bg_box .right").click(function(){
          i--;
          move()
  })

   /*运动函数*/
  function move(){  
    if(i==len){
      $(".bg_box .img").css({left:0})
          i=1
    }
    if(i==-1){
      $(".bg_box .img").css({left:-(len-1)*1351})
          i=len-2;
    }
    $(".bg_box .img").stop().animate({left:-i*1351},500)
    if(i==len-1){
      $(".bg_box .num li").eq(0).addClass("on").siblings().removeClass("on")
    }else{
      $(".bg_box .num li").eq(i).addClass("on").siblings().removeClass("on")
    }
}  

/*左侧导航内容*/
  $(".content .list>li").hover(function(){
    $(this).find(".len").show()
  },function(){
    $(this).find(".len").hide()
  })
})
    


    
  