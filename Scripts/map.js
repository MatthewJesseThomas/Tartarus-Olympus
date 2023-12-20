// Replace YOUR_LATITUDE, YOUR_LONGITUDE, and YOUR_MAPBOX_ACCESS_TOKEN with your actual values
const CAPE_TOWN_LATITUDE = -33.918861; // Cape Town's latitude
const CAPE_TOWN_LONGITUDE = 18.423300; // Cape Town's longitude
const YOUR_MAPBOX_ACCESS_TOKEN = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox access token

// Initialize the map
const map = L.map('map').setView([CAPE_TOWN_LATITUDE, CAPE_TOWN_LONGITUDE], 13);

// Add the Mapbox tile layer
L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${YOUR_MAPBOX_ACCESS_TOKEN}`, {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
}).addTo(map);

// Add a marker to the map
let marker = L.marker([CAPE_TOWN_LATITUDE, CAPE_TOWN_LONGITUDE]).addTo(map);
