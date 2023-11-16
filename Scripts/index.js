// Code for mappu
// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);
  
// Add the Mapbox tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN'
}).addTo(map);

// Add a marker to the map
var marker = L.marker([51.505, -0.09]).addTo(map);
// Endu Ofu Codu