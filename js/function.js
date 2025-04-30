$(function(){
  $(window).on('load',function(){
    new WOW().init();
  });
});//wow plugin 초기화

$(function(){
  //var
  var $header = $('header');
  var $mnu = $('header>.container>nav>.gnb>li>a');
  var scrollTop = 0;
  var nowIdx = 0;
  var arrTopVal = [];

  $('section').each(function(idx){
    arrTopVal[idx] = $(this).offset().top;
  });

  //header
  $mnu.on('click',function(event){
    event.preventDefault();
    nowIdx = $mnu.index(this);

    $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $('html,body').stop().animate({
      scrollTop : arrTopVal[nowIdx]
    },500,'easeInOutCubic');
  });

  $(window).on('scroll',function(){
    scrollTop = $(this).scrollTop();

    if(scrollTop>arrTopVal[0]){
      $header.addClass('active');
    }else{
      $header.removeClass('active');
    }

    for(var i=0; i<6; i++){
      if(scrollTop>=arrTopVal[i]){ 
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
      }
    }
  });//end of header

  if ($(window).width() < 768) {
    // 모바일 화면에서 추가적인 작업 수행
    // 예를 들어, 메뉴를 터치할 때 메뉴를 숨기는 기능 추가 등
  }

});//end of header handler




