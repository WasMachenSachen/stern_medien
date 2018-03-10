//media query
function watchScreenSize(x) {
    if (ScreenSize.matches) { // If media query matches
      document.getElementById('back_text').innerHTML = "zurück zum SSC";
    }
    else{
      document.getElementById('back_text').innerHTML = "zurück zum Summer-Science-Camp";
    }
}

var ScreenSize = window.matchMedia("(max-width: 1000px)");
watchScreenSize(ScreenSize); // Call listener function at run time
ScreenSize.addListener(watchScreenSize); // Attach listener function on state changes

document.getElementById('back_div').onmouseover = function() {textIn();};
document.getElementById('back_div').onmouseout = function() {textOut();};

function textIn(){
  document.getElementById('back_text').classList.add("slide-in-content");
  //document.getElementById('back_text').classList.add("slide-in-content");
}
function textOut(){
  document.getElementById('back_text').classList.remove("slide-in-content");
  //document.getElementById('back_text').classList.remove("");
}
