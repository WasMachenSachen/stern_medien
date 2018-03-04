function spielAnzeigen(){
  document.querySelector('#spielliste').classList.toggle("hidden");
}


var request = new XMLHttpRequest();
request.open('GET', 'https://gist.githubusercontent.com/WasMachenSachen/2f0e8c10085e90a86487f4025e78d3f5/raw/b84a25d6ac8ec1394c7eedb35d93f0d8330392ce/spiele.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
