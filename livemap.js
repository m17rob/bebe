var map = L.map('map').setView([44.6237792, 23.1892437], 16);

L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([44.6237792, 23.1892437]).addTo(map);
marker.bindPopup("<b>Clin Med Moso SRL</b><br>Farmacie Veterinara").openPopup();