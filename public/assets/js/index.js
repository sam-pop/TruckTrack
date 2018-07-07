var baseCoords = [38.889463, -77.035146];
var mymap = L.map('mapid').setView(baseCoords, 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.emerald/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2FtLXBvcCIsImEiOiJjamhucjhhNXgwNTE0MzZwYWQxenprNG5kIn0.9c-GiLb45NYrZeAiy3TZ6w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 13,
    id: 'mapbox.emerald',
    accessToken: 'pk.eyJ1Ijoic2FtLXBvcCIsImEiOiJjamhucjhhNXgwNTE0MzZwYWQxenprNG5kIn0.9c-GiLb45NYrZeAiy3TZ6w'
}).addTo(mymap);

// Show my current location 
var myLoc = mymap.locate({
    setView: true,
    maxZoom: 15,
    // watch: true,
    enableHighAccuracy: true
});

// Current location custom icon
var currentLocIcon = L.icon({
    iconUrl: './assets/img/map-marker-person.png',
    iconSize: [38, 42],
    iconAnchor: [20, 36],
    popupAnchor: [-3, -76],
    shadowUrl: '',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

// Current location success function
function onLocationFound(e) {
    // mymap.removeLayer(currentMarker); 
    var radius = e.accuracy / 2;
    var currentMarker = L.marker(e.latlng, {
        icon: currentLocIcon
    });
    currentMarker.addTo(mymap);
    // L.circle(e.latlng, radius).addTo(mymap);
}
// Current location error function
function onLocationError(e) {
    alert(e.message);
}
mymap.on('locationfound', onLocationFound);
mymap.on('locationerror', onLocationError);

$(function () {
    mymap.setView(baseCoords, 15);
});