// The locations for this app are ballparks for Major League Baseball teams
var ballparks = [{
    title: 'PNC Park',
    lat: 40.4470471765,
    lng: -80.0061745423,
    markerID: 0
}, {
    title: 'Oriole Park at Camden Yards',
    lat: 39.283505,
    lng: -76.621911,
    markerID: 1
}, {
    title: 'Citizens Bank Park',
    lat: 39.905569,
    lng: -75.166591,
    markerID: 2
}, {
    title: 'Progressive Field',
    lat: 41.495537,
    lng: -81.685278,
    markerID: 3
}, {
    title: 'U.S. Cellular Field',
    lat: 41.830176,
    lng: -87.634225,
    markerID: 4
}, {
    title: 'Great American Ball Park',
    lat: 39.097466,
    lng: -84.507029,
    markerID: 5
}, {
    title: 'Wrigley Field',
    lat: 41.947902,
    lng: -87.655823,
    markerID: 6
}, {
    title: 'Fenway Park',
    lat: 42.346859,
    lng: -71.097229,
    markerID: 7
}, {
    title: 'Busch Stadium',
    lat: 38.622837,
    lng: -90.192799,
    markerID: 8
}, {
    title: 'Kauffman Stadium',
    lat: 39.051839,
    lng: -94.480303,
    markerID: 9
}, {
    title: 'AT&T Park',
    lat: 37.778858,
    lng: -122.389248,
    markerID: 10
}, {
    title: 'O.co Coliseum',
    lat: 37.751595,
    lng: -122.200528,
    markerID: 11
}, {
    title: 'Nationals Park',
    lat: 38.873219,
    lng: -77.007411,
    markerID: 12
}, {
    title: 'Safeco Field',
    lat: 47.591653,
    lng: -122.332335,
    markerID: 13
}, {
    title: 'Target Field',
    lat: 44.981911,
    lng: -93.277830,
    markerID: 14
}, {
    title: 'Miller Park',
    lat: 43.028213,
    lng: -87.971172,
    markerID: 15
}, {
    title: 'Turner Field',
    lat: 33.735085,
    lng: -84.389973,
    markerID: 16
}, {
    title: 'Globe Life Park in Arlington',
    lat: 32.750289,
    lng: -97.081287,
    markerID: 17
}, {
    title: 'Minute Maid Park',
    lat: 29.757413,
    lng: -95.355529,
    markerID: 18
}, {
    title: 'Tropicana Field',
    lat: 27.768485,
    lng: -82.653345,
    markerID: 19
}, {
    title: 'Marlins Park',
    lat: 25.778344,
    lng: -80.219723,
    markerID: 20
}, {
    title: 'Yankee Stadium',
    lat: 40.829848,
    lng: -73.926191,
    markerID: 21
}, {
    title: 'Citi Field',
    lat: 40.757226,
    lng: -73.845824,
    markerID: 22
}, {
    title: 'Comerica Park',
    lat: 42.339420,
    lng: -83.048942,
    markerID: 23
}, {
    title: 'Rogers Centre',
    lat: 43.641453,
    lng: -79.389353,
    markerID: 24
}, {
    title: 'Chase Field',
    lat: 33.445039,
    lng: -112.066732,
    markerID: 25
}, {
    title: 'Coors Field',
    lat: 39.755907,
    lng: -104.994173,
    markerID: 26
}, {
    title: 'Petco Park',
    lat: 32.707582,
    lng: -117.156999,
    markerID: 27
}, {
    title: 'Angel Stadium of Anaheim',
    lat: 33.800326,
    lng: -117.882762,
    markerID: 28
}, {
    title: 'Dodger Stadium',
    lat: 34.072974,
    lng: -118.240619,
    markerID: 29
}];

// Ballpark object used by KO
var Ballpark = function(data) {
    this.title = ko.observable(data.title);
    this.lat = ko.observable(data.lat);
    this.lng = ko.observable(data.lng);
    this.markerID = ko.observable(data.markerID);
};

// markers[] is used to track the map markers
var markers = [];

// Google Maps callback function
window.initMap = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
        // coordinates are in the center of the ballparks
        center: {
            lat: 39.6,
            lng: -98.4
        },
        zoom: 4
    });

    // create one infoWindow for use by the marker for the activeBallpark
    var infoWindow = new google.maps.InfoWindow();

    // create map markers for all ballparks
    for (i = 0; i < ballparks.length; i++) {
        markers[i] = new google.maps.Marker({
            map: map,
            title: ballparks[i].title,
            position: new google.maps.LatLng(ballparks[i].lat, ballparks[i].lng),
            animation: google.maps.Animation.DROP
        });

        // create event listener for clicking the marker
        google.maps.event.addListener(markers[i], 'click', (function(marker) {
            return function() {
                // make the marker bounce for 750ms
                setBounce(marker);

                // create infoWindow contentHTML
                var contentHTML = marker.title;

                // close the infoWindow (if it is open)
                infoWindow.close();

                // initialize infoWindow
                initializeInfoWindow(marker, contentHTML, infoWindow);

                // open the infoWindow
                infoWindow.open(map, marker);
            };
        })(markers[i]));

        var initializeInfoWindow = function(marker, contentHTML, infoWindow) {

            // set InfoWindow content
            infoWindow.setContent(contentHTML);
        }

        // make the marker bounce for 750ms
        function setBounce(marker) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                marker.setAnimation(null);
            }, 750);
        };
    }
};




var ViewModel = function() {
    // self is the ViewModel binding
    var self = this;

    // self.ballparkList
    this.ballparkList = ko.observableArray([]);
    this.activeBallpark = null;

    ballparks.forEach(function(ballpark) {
        self.ballparkList.push(new Ballpark(ballpark));

    });

    this.activeBallpark = ko.observable(this.ballparkList()[0]);

    this.setActiveBallpark = function(activeBallpark) {
        // set KO binding
        self.activeBallpark(activeBallpark);

        // simulate marker click to show infoWindow containing activeBallpark info
        google.maps.event.trigger(markers[activeBallpark.markerID()], 'click', {
            latLng: new google.maps.LatLng(0, 0)
        });
    }
};

// activate Knockout
ko.applyBindings(new ViewModel());
