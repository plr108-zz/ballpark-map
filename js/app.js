var initialBallparks = [{
    name: "PNC Park",
    lat: 40.4470471765,
    lng: -80.0061745423
}];

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        // coordinates to show entire US on a 1600x900px display
        center: {
            lat: 40.4470471765,
            lng: -80.0061745423
        },
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: {
            lat: 40.4470471765,
            lng: -80.0061745423
        },
        title: 'PNC Park'
    });
}