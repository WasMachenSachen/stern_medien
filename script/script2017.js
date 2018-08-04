var aktuellesSpiel = 0;
var data;


document.addEventListener("DOMContentLoaded", function(event) {
  var url = window.location.search;
  url = url.replace("?spiel=", ''); // remove the ?spiel=
  if(url == ''){aktuellesSpiel = 0;}
  else{aktuellesSpiel = url;}

var request = new XMLHttpRequest();
request.open('GET', 'https://gist.githubusercontent.com/BenediktEngel/4f74cf087bbdaa6dfc3897ad43c81ded/raw/2262bf7ddc35fd200581ceeb6b8438fc7ec58a10/spiele2017.json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      data = JSON.parse(request.responseText);

      for (var i = 0; i < data.alle_spiele.length; i++) {

         var zwischen = '<tr class="spielliste_content"><td>'+
                          data.alle_spiele[i].Name_der_Entwickler+
                          '</td><td>'+
                          data.alle_spiele[i].Spiel_title+
                          '</td><td><a target="_blank" href="'+
                          data.alle_spiele[i].scratch_link+
                          '">Jetzt spielen</a></td><td><a href="'+
                          data.alle_spiele[i].download_link+
                          '">Download</a></td></tr>';
        document.querySelector('#spielliste_table').innerHTML += zwischen;
      }

    } else {
      // We reached our target server, but it returned an error
    }

  inhaltLoader();
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };
  request.send();

});

function spielAnzeigen(){
  document.querySelector('#spielliste').classList.toggle("hidden");
}
function nächstesSpiel(){
  if(aktuellesSpiel < data.alle_spiele.length-1){aktuellesSpiel ++;}
  document.getElementById('nächstesSpiel').href = 'spiele2017.html?spiel='+aktuellesSpiel;
}
function letztesSpiel(){
  if(aktuellesSpiel > 0){aktuellesSpiel --;}
  document.getElementById('letztesSpiel').href = 'spiele2017.html?spiel='+aktuellesSpiel;
}
function inhaltLoader() {
  document.getElementById('spiel_ersteller').innerHTML = data.alle_spiele[aktuellesSpiel].Name_der_Entwickler;
  document.getElementById('btn_scratch-link').href = data.alle_spiele[aktuellesSpiel].scratch_link;
  document.getElementById('btn_download-link').href = data.alle_spiele[aktuellesSpiel].download_link;
  document.getElementById('titel_bild').src = data.alle_spiele[aktuellesSpiel].picture_link;
  document.getElementById('titel_bild-link').href = data.alle_spiele[aktuellesSpiel].scratch_link;
}
