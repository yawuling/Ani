$('.js-transition-hover').hover(function(){
  $(this).find('.js-transition-bottom').addClass('focus');
}, function(){
  $(this).find('.js-transition-bottom').removeClass('focus');
});
$('.search-input').focus(function(){
  $(this).parent().find('.js-transition-bottom').addClass('focus');
});
$('.search-input').blur(function(){
  $(this).parent().find('.js-transition-bottom').removeClass('focus');
});
$('#to-top').click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});
$(window).scroll(function(){
  if ($(window).scrollTop() <= 20) {
    $('#to-top').hide();
  } else {
    $('#to-top').show();
  }
});
$('#tip-btn').on('click', function () {
  var tipBlock = $(this).next('.tip-method');
  tipBlock.slideToggle();
});
