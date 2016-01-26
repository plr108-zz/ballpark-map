// Model //////////////////////////////////////////////////////////////////////
var ballparks = [{
    title: 'PNC Park',
    lat: 40.4470471765,
    lng: -80.0061745423,
    markerID: 0
}, {
    title: 'Citizens Bank Park',
    lat: 39.905569,
    lng: -75.166591,
    markerID: 1
}, {
    title: 'Oriole Park at Camden Yards',
    lat: 39.283505,
    lng: -76.621911,
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
}];

// Ballpark object used by KO
var Ballpark = function(data) {
    this.title = ko.observable(data.title);
    this.lat = ko.observable(data.lat);
    this.lng = ko.observable(data.lng);
    this.markerID = ko.observable(data.markerID);
};

// End Model //////////////////////////////////////////////////////////////////

// View ///////////////////////////////////////////////////////////////////////

// markers[] will be used to track the map markers
var markers = [];

// Google Maps callback function
window.initMap = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
        // coordinates are in the center of current ballparks
        center: {
            lat: 41.5,
            lng: -80.5
        },
        zoom: 6
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

        // set markerID
        ballparks[i].markerID = i;

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

// End View ///////////////////////////////////////////////////////////////////

// View Model /////////////////////////////////////////////////////////////////
var ViewModel = function() {
    // self is the ViewModel binding
    var self = this;

    // self.ballparkList
    this.ballparkList = ko.observableArray([]);
    this.activeBallpark = null;

    ballparks.forEach(function(ballparkItem) {
        self.ballparkList.push(new Ballpark(ballparkItem));

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
// End View Model /////////////////////////////////////////////////////////////
