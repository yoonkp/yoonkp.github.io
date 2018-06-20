jQuery(function($){
  $('#full').fullpage({
    navigation:true
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
  })
});