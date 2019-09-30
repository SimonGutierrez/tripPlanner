const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FndXRpMTUiLCJhIjoiY2sxNms2bDQyMHk1OTNibGJpa2E5YnpxOCJ9.lghiwZkOxYaP9ZLXJVp0Lw';


const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const fullStack = document.createElement('FullStack');
fullStack.style.width = '32px';
fullStack.style.height = '32px';
fullStack.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(fullStack).setLngLat([-74.009151, 40.705086]).addTo(map);

