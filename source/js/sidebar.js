(function($) {
  $(document).pjax('[data-pjax] a, a[data-pjax]', '#main', {
    fragment: '#main',
    timeout: 10000,
    push: true
  }).on('pjax:send', function() {
    console.log('sent');
    $('#content')
    .animate({
      opacity: 0,
    },{
      duration: 150,
    })
    .removeClass('fade-in');
  }).on('pjax:complete', function() {
    $('#content')
    .css('opacity', '0')
    .addClass('fade-in');
  }).ready(function() {
    console.log('rendered');
  });
})(jQuery);
