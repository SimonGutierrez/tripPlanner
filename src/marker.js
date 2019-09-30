const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FndXRpMTUiLCJhIjoiY2sxNms2bDQyMHk1OTNibGJpa2E5YnpxOCJ9.lghiwZkOxYaP9ZLXJVp0Lw';

const activityPic = 'https://i.imgur.com/WbMOfMl.png'
const hotelPic = 'http://i.imgur.com/D9574Cu.png'
const restaurantPic = 'http://i.imgur.com/cqR6pUI.png'


export const buildMarker = (name, map, markerType, coords) => {
    console.log("function hit")
    let newMarker = document.createElement(name)
    newMarker.style.width = '32px';
    newMarker.style.height = '32px';
    switch (markerType) {
        case "activity": 
            newMarker.style.backgroundImage = `url(${activityPic})`;
            break;
        case "hotel": 
            newMarker.style.backgroundImage = `url(${hotelPic})`;
            break;
        case "restaurant": 
            newMarker.style.backgroundImage = `url(${restaurantPic})`;
            break;
        default: 
            break;
    }
    new mapboxgl.Marker(newMarker).setLngLat(coords).addTo(map);
}
