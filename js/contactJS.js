let pos1 = 0;
let pos2 = 1;
let pos3 = 2;

var stop = -1;

var table = [];
var tabble = [];
var tabbble = [];

function next() {

    if (stop >= 0 && pos3 < (stop - 1)) {
        pos1 = pos1 + 1;
        pos2 = pos2 + 1;
        pos3 = pos3 + 1;

        document.getElementById("firstYear").innerHTML = table[pos1];
        document.getElementById("firstCountry").innerHTML = tabble[pos1];
        document.getElementById("firstArtist").innerHTML = tabbble[pos1];

        document.getElementById("secondYear").innerHTML = table[pos2];
        document.getElementById("secondCountry").innerHTML = tabble[pos2];
        document.getElementById("secondArtist").innerHTML = tabbble[pos2];

        document.getElementById("thirdYear").innerHTML = table[pos3];
        document.getElementById("thirdCountry").innerHTML = tabble[pos3];
        document.getElementById("thirdArtist").innerHTML = tabbble[pos3];
    }
}

function back() {
    if (stop >= 0 && pos1 > 0) {
        pos1 = pos1 - 1;
        pos2 = pos2 - 1;
        pos3 = pos3 - 1;

        document.getElementById("firstYear").innerHTML = table[pos1];
        document.getElementById("firstCountry").innerHTML = tabble[pos1];
        document.getElementById("firstArtist").innerHTML = tabbble[pos1];

        document.getElementById("secondYear").innerHTML = table[pos2];
        document.getElementById("secondCountry").innerHTML = tabble[pos2];
        document.getElementById("secondArtist").innerHTML = tabbble[pos2];

        document.getElementById("thirdYear").innerHTML = table[pos3];
        document.getElementById("thirdCountry").innerHTML = tabble[pos3];
        document.getElementById("thirdArtist").innerHTML = tabbble[pos3];
    }
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "data.xml", true);
    xhttp.send();
}

function myFunction(xml) {

    var i ;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("DATA");

    for (i = 0; i <x.length; i++) {
        stop++;
        table[i] = x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
        tabble[i] = x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
        tabbble[i] = x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
    }

    document.getElementById("firstYear").innerHTML = table[pos1];
    document.getElementById("firstCountry").innerHTML = tabble[pos1];
    document.getElementById("firstArtist").innerHTML = tabbble[pos1];

    document.getElementById("secondYear").innerHTML = table[pos2];
    document.getElementById("secondCountry").innerHTML = tabble[pos2];
    document.getElementById("secondArtist").innerHTML = tabbble[pos2];

    document.getElementById("thirdYear").innerHTML = table[pos3];
    document.getElementById("thirdCountry").innerHTML = tabble[pos3];
    document.getElementById("thirdArtist").innerHTML = tabbble[pos3];
}

