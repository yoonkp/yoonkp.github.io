jQuery(function($){
  $('#full').fullpage({
    navigation:true,
    anchors:['main', 'profile', 'career', 'project', 'contacts'],
    scrollOverflow:true,
    scrollOverflowReset:true,
    resetSliders:true,
    recordHistory:false,
  });
  
//  push side bar
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
  $('.container').on('click',function(e){
    $('.wrap').animate({left:0},function(){
      $h.removeClass('on')
    });
    $('.side_close').removeClass('on');
  });

  
//$(document).ready(function(){
//  $('.skill_list').each(function(){
//    $(this).find('.bar_now').animate({
//      width:$(this).attr('data-percent')
//    },1000);
//  });
//});
  
  
$("#fp-nav li:eq(1) a").click(function(){
  $('.skill_list').each(function(){
    $(this).find('.bar_now').animate({
      width:$(this).attr('data-percent')
    },1000);
  });
});
  
  
});