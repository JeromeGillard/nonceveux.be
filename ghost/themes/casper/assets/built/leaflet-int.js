
const map = L.map('map').setView([49.2125578, 16.62662018], 14); //starting position
L.tileLayer(`https://api.maptiler.com/maps/${map_style}/{z}/{x}/{y}.png?key=${key}`,{ //style URL
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
}).addTo(map);

if(geojson_file != undefined){
    fetch(geojson_file)
        .then(response => response.json())
        .then(json => {

          function onEachFeature(feature, layer) {

            if(feature && feature.properties){
              var popupContent = '';

              if (feature.properties.name) {
                popupContent += feature.properties.name;
              }
              if (feature.properties.description) {
                popupContent += feature.properties.description;
              }

              if (feature.properties.amenity === 'parking') {
                // Check if feature is a polygon
                if (feature.geometry.type === 'Polygon') {
                  // Prepare a parking icon
                  var parkingIcon = L.icon({
                    iconUrl: '/assets/extensions/jeromegillard-map/pin-icon-parking.png',
                    iconSize: [20, 20],
                    iconAnchor: [10, 20],
                    popupAnchor: [0, -10]
                  });
                  // Get bounds of polygon
                  var bounds = layer.getBounds();
                  // Get center of bounds
                  var center = bounds.getCenter();
                  // Use center to put marker on map
                  var marker = L.marker(center,
                    {icon: parkingIcon}
                    ).addTo(map);
                  }
              }

              if(popupContent !== ''){
                layer.bindPopup(popupContent);
              }
            }
          }

          var geoJSONLayer = L.geoJSON([json], {
            style: function (feature) {
              if( feature.properties && feature.properties.colour){
                return {
                  color: feature.properties.colour,
                  weight: 3,
                  opacity: 1
                  };
              }
            },
            onEachFeature: onEachFeature,
          }).addTo(map);
          map.fitBounds(geoJSONLayer.getBounds());
          });
}

console.log("loaded", geojson_file);