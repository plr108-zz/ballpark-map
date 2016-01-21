var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    // coordinates to show entire US on a 1600x900px display
    center: {lat: 38, lng: -96},
    zoom: 5
  });
}