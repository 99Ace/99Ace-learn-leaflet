// set up to focus on singapore
const singapore = [1.29, 103.85];

// set up leaflet map
const map = L.map("map").setView(singapore, 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// #1 Set up Leaf icon template
var LeafIcon = L.Icon.extend({
  options: {
    // set the icon X and Y
    iconSize: [38, 95],
    // set the shadowSize X and Y
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  },
});

// #2 Set up a leaf icon
var greenIcon = new LeafIcon({
  iconUrl: "http://leafletjs.com/examples/custom-icons/leaf-green.png",
  shadowUrl: "http://leafletjs.com/examples/custom-icons/leaf-shadow.png",
});

// #3 Set the icon into the marker
let singaporeMarker = L.marker(
  [1.29, 103.85], // first index contains the lat/lng
  {
    // second index contains an object
    icon: greenIcon, // pass the greenIcon setting to 'icon' key
  }
);

// #4 add to the map
singaporeMarker.addTo(map);
