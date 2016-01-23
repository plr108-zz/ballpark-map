var ballparks = [{
    title: 'PNC Park',
    lat: 40.4470471765,
    lng: -80.0061745423
},
{
    title: 'Citizens Bank Park',
    lat: 39.905569,
    lng: -75.166591
},
{
    title: 'Oriole Park at Camden Yards',
    lat: 39.283505,
    lng: -76.621911
},
{
    title: 'Progressive Field',
    lat: 41.495537,
    lng: -81.685278
},
{
    title: 'U.S. Cellular Field',
    lat: 41.830176,
    lng: -87.634225
},
{
    title: 'Great American Ball Park',
    lat: 39.097466,
    lng: -84.507029
},
{
    title: 'Wrigley Field',
    lat: 41.947902,
    lng: -87.655823
}
];

var Ballpark = function(data) {
    this.title = ko.observable(data.title);
    this.lat = ko.observable(data.lat);
    this.lng = ko.observable(data.lng);
};

var ViewModel = function() {
    var self = this;

    this.ballparkList = ko.observableArray([]);

    ballparks.forEach(function(ballparkItem) {
        self.ballparkList.push(new Ballpark(ballparkItem));

    });
};

ko.applyBindings(new ViewModel());

// Google Maps callback function
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        // coordinates to show entire US on a 1600x900px display
        center: {
            lat: 41.5,
            lng: -80.5
        },
        zoom: 6
    });

    // create map markers for all ballparks
    for (i = 0; i < ballparks.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            title: ballparks[i].title,
            position: new google.maps.LatLng(ballparks[i].lat, ballparks[i].lng)
        });
    }

};
