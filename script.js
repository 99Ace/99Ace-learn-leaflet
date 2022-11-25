// set up to focus on singapore
const singapore = [1.29, 103.85];

// set up leaflet map
const map = L.map("map").setView(singapore, 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// 1. set up marker to point to zoo location
const zoological = L.marker([1.4043, 103.793]);

// 2. add popup details
zoological.bindPopup(`
<div>
    <h2>Singapore Zoo</h2>
    <p>Singapore Zoo, formerly known as the Singapore Zoological Gardens or Mandai Zoo, is a 28 hectares (69 acres) zoo located on the margins of Upper Seletar Reservoir within Singapore's heavily forested central catchment area. Opened in 1973, the zoo was built at a cost of $9 million that was granted by the government of Singapore.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Singapore_Zoo_entrance-15Feb2010.jpg/300px-Singapore_Zoo_entrance-15Feb2010.jpg" alt="Singapore Zoo" style="width:100%"/>
</div>
`);

// 3. add eventListener
zoological.addEventListener("click", function () {
  alert("this is Singapore Zoo");
});
// 4. render to map
zoological.addTo(map);
