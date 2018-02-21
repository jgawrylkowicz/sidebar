// Settings for pjax
(function($) {
  $(document).pjax('[data-pjax] a, a[data-pjax]', '#main', {
    fragment: '#main',
    timeout: 10000,
    push: true
  }).on('pjax:send', function() {
    //console.log('sent');
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
   // console.log("complete");
  }).ready(function() {
    //console.log('rendered');
  }).on('pjax:end', function(){
    resize_excerpts();
  });
})(jQuery);

// Open the sidebar
$('#menu').click(function(event) {
  event.stopPropagation();
  $('#header').toggleClass('show-header');
});

// Close the sidebar
$('#close').click(function(event) {
  event.stopPropagation();
  $('#header').toggleClass('show-header');
});

// Close the sidebar whhen clicked on a element
$('body,html').click(function(event){
  $('#header').removeClass('show-header');
});

// Flowtype.js
$('body').flowtype({
  minFont : 13,
  maxFont : 17
});


// Resize the posts' excerpt 
// There seems to be no other way
$( window ).resize(function(){
  resize_excerpts();
});

//TODO doesnt work with pjax
var resize_excerpts = function(){
  let post_height = $('.post_container').height();
  let content_height = $('.post_thumbnail').height() + $('.post_content_thumbnail').height() + $('.post_footer').height();
  let height = (post_height - content_height) * .8;
  $('.post_excerpt_hidden').css('height' , height)
  console.log("resized", height);
}

window.onscroll = function(){
  let topbar = $('#topbar');
  if ($(window).scrollTop() > topbar.height()){
    topbar.addClass('show-topbar');
  } else {
    topbar.removeClass('show-topbar');
  }
}

// Functions loaded at the beginning
window.onload = function(){
  resize_excerpts();
};