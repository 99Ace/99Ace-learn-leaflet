// set up to focus on singapore
const singapore = [1.29, 103.85];

// set up leaflet map
const map = L.map("map").setView(singapore, 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
