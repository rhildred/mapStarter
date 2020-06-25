let mymap = null;

function showPosition(oPosition){
    mymap = L.map('map-here').setView([oPosition.coords.latitude, oPosition.coords.longitude], 13);
    // Use OpenStreetMap tiles and attribution
    let osmTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let attribution = '© OpenStreetMap contributors';

    // Create the basemap and add it to the map
    L.tileLayer(osmTiles, {
        maxZoom: 18,
        attribution: attribution
    }).addTo(mymap);

    mymap.on("contextmenu", (evt)=>{
        alert("latitude: " + 
            evt.latlng.lat +
            " longitude: " +
            evt.latlng.lng
        );
        L.marker([evt.latlng.lat, evt.latlng.lng]).addTo(mymap);
    });

    // put a maker at 43.45367826273489 longitude: -80.5510711669922

    const marker = L.marker([43.45367826273489, -80.5510711669922]).addTo(mymap);
    marker.bindPopup("Rich is here.");



}

window.addEventListener("load", () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        alert("geolocation not supported");
    }

});