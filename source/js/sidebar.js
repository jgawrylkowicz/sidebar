
new Pjax({
  elements: "a[data-pjax]", // default is "a[href], form[action]"
  selectors: ["#main" , "#menu-text"], 
  switches: {
    //"#main": Pjax.switches.sideBySide
    // Can be used as modal to view the projects
  }
})

var showHeader = function(){
  var header = document.getElementById('header');
  if(!(header.classList.contains("show-header"))){
    header.classList.add('show-header');
  } else {
    header.classList.toggle('show-header');
  }
  header.focus();
}

var hideHeader = function(){
  var header = document.getElementById('header');
  header.classList.remove('show-header');
}


// Open & close the sidebar
var menu = document.getElementById('menu');
menu.addEventListener('click', function(e){
  showHeader();
}, false );

var close = document.getElementById('close');
close.addEventListener('click', function(e){
  hideHeader();
}, false );


// Close the sidebar when clicked on a element
var header = document.getElementById('header');
header.onblur = function(e){
  if (!(e.explicitOriginalTarget.classList.contains( 'top-bar__button' )))
    hideHeader();
    e.stopPropagation();
    // Normally, if the header has no hiding animation, this code wouldn't work – the navigation links wouldn't work. 
    // The header would hide before the link event would fire. 
}

// Close the sidebar by using Esc key
document.addEventListener('keydown', (event) => {
  if (event.which == 27)
    hideHeader();
    event.preventDefault();
});

//Flowtype.js
$('body').flowtype({
   minFont : 12,
   maxFont : 15
});

document.onload = document.body.style.opacity = 1;
