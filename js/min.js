jQuery(function($){
  $('#full').fullpage({
    navigation:true,
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    scrollOverflow:true
  });
  $h=$('#btnHamburger');
  $h.on('click',function(e){
    e.preventDefault();
    // 애니메이션이 끝날을 때 on을 갖는다.
    if($(this).hasClass('on')){
      $('.wrap').animate({left:0},function(){
        $h.removeClass('on')
      });
      $('.side_close').removeClass('on');
    } else{
      $('.wrap').animate({left:320},function(){
        $h.addClass('on')
      });
      $('.side_close').addClass('on');
    }
  });
  $('.side_close').on('click',function(e){
    e.preventDefault();
    $('.wrap').animate({left:0},function(){
      $h.removeClass('on')
    });
    $('.side_close').removeClass('on');
  });
  
//  var H = [0];
//  var idx = $(this).index();
//  $('.logo').on('click',function(){
//    $('.wrap').clearQueue().animate({'scrollTop' : H[0]}, 600);
//  });
//
//  $('.scroll_ico').on('click',function(){
//    $('.wrap').clearQueue().animate({'scrollTop' : H[1]}, 600);
//  });
//  
});