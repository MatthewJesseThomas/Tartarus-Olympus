// Initialize the map
const map = L.map('map').setView([YOUR_LATITUDE, YOUR_LONGITUDE], 13);

// Add the Mapbox tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN'
}).addTo(map);

// Add a marker to the map
let marker = L.marker([YOUR_LATITUDE, YOUR_LONGITUDE]).addTo(map);
