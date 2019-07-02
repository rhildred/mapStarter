import L from "leaflet";

function showPosition(oPosition){
    alert("position lat: " + oPosition.coords.latitude + " long: " + oPosition.coords.longitude);
}

window.addEventListener("load", () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        alert("geolocation not supported");
    }

});