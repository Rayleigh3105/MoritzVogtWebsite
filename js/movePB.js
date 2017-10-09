if ($(window).width() >= 1024) {
$(window).scroll(function(){
  if($(window).scrollTop() > 800){
    $('.Pic_mv').addClass('scrolled');     
  }
  if($(window).scrollTop() < 800){
    $('.Pic_mv').removeClass('scrolled');
  }

});
}