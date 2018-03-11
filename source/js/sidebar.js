
new Pjax({
  elements: "a[data-pjax]", // default is "a[href], form[action]"
  selectors: ["#main" , "#menu-text"], 
  switches: {
    //"#main": Pjax.switches.sideBySide
    // Can be used as modal to view the projects
  }
})

// Open & close the sidebar
var menu = document.getElementById('menu');
menu.addEventListener('click', function(){
  var header = document.getElementById('header');
  header.classList.toggle('show-header').focus();
}, false );

var close = document.getElementById('close');
close.addEventListener('click', function(){
  var header = document.getElementById('header');
  header.classList.remove('show-header');
}, false );


// Close the sidebar when clicked on a element


//Flowtype.js
$('body').flowtype({
   minFont : 12,
   maxFont : 15
});

document.onload = document.body.style.opacity = 1;
