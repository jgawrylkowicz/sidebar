
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
  
  var menu = document.getElementById('menu');
  menu.classList.add("rotated");
}

var hideHeader = function(){
  var header = document.getElementById('header');
  header.classList.remove('show-header');
  var menu = document.getElementById('menu');
  menu.classList.remove("rotated");
}


// Open & close the sidebar
var menu = document.getElementById('menu');
menu.addEventListener('click', function(e){
  showHeader();
  e.stopPropagation();
}, false );


var close = document.getElementById('close');
close.addEventListener('click', function(e){
  hideHeader();
  e.stopPropagation();
}, false );


// Close the sidebar when clicked on a element
var header = document.getElementById('header');
header.onblur = function(e){

  var id;
  if (e.explicitOriginalTarget){
    id = e.explicitOriginalTarget.id;
  }
  console.log(e);
  if (id == "menu"){
    // do nothing
  } else {
    hideHeader();   
  }
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

document.onload = document.body.style.opacity = 1;
