// set up to focus on singapore
const singapore = [1.29, 103.85];

// set up leaflet map
const map = L.map("map").setView(singapore, 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Function to create random marker
// This function is not part of Leaflet
// It is created to generate ONE random marker
function getRandomLatLng(map) {
  // get the boundaries of the map
  let bounds = map.getBounds();
  let southWest = bounds.getSouthWest();
  let northEast = bounds.getNorthEast();
  let lngSpan = northEast.lng - southWest.lng;
  let latSpan = northEast.lat - southWest.lat;

  let randomLng = Math.random() * lngSpan + southWest.lng;
  let randomLat = Math.random() * latSpan + southWest.lat;

  return [randomLat, randomLng];
}

// #1 Create marker cluster group
let markerClusterLayer = L.markerClusterGroup();

// #2 Create a For loop and generate 1000 random markers
for (let i = 0; i < 1000; i++) {
  // Call the function and generate one random marker
  let pos = getRandomLatLng(map);

  // add the random marker to the Cluster Layer
  L.marker(pos).addTo(markerClusterLayer);
}

// #3 Add the Cluster Layer to the map
markerClusterLayer.addTo(map);

// #4 To clear the Cluster Layer:
document.querySelector("#clear-cluster").addEventListener("click", function () {
  // Command to remove cluster  map.removeLayer( Cluster Layer to be remove )
  map.removeLayer(markerClusterLayer);
});


