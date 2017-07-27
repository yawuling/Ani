var toolbarTop = $('#toolbar').scrollTop(),
  toolbarHeight = $('#toolbar').height();
$(document).ready(function () {
  $('.markdown-body img').each(function () {
    $(this).wrap('<a href="' + this.src + '" data-fancybox="group"></a>')
  });
  $("[data-fancybox]").fancybox();
});
$('.js-transition-hover').hover(function () {
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
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();

  if (scrollTop <= 20) {
    $('#to-top').hide();
  } else {
    $('#to-top').show();
  }
  if (scrollTop > (toolbarTop + toolbarHeight)) {
    $('#post-toc').addClass('fixed');
  } else {
    $('#post-toc').removeClass('fixed');
  }
});
$('#tip-btn').on('click', function () {
  var tipBlock = $(this).next('.tip-method');
  tipBlock.slideToggle();
});
