// The locations for this app are ballparks for Major League Baseball teams
var ballparks = [{
    title: 'Angel Stadium of Anaheim',
    lat: 33.800326,
    lng: -117.882762,
    markerID: 0
}, {
    title: 'AT&T Park',
    lat: 37.778858,
    lng: -122.389248,
    markerID: 1
}, {
    title: 'Busch Stadium',
    lat: 38.622837,
    lng: -90.192799,
    markerID: 2
}, {
    title: 'Chase Field',
    lat: 33.445039,
    lng: -112.066732,
    markerID: 3
}, {
    title: 'Citi Field',
    lat: 40.757226,
    lng: -73.845824,
    markerID: 4
}, {
    title: 'Citizens Bank Park',
    lat: 39.905569,
    lng: -75.166591,
    markerID: 5
}, {
    title: 'Comerica Park',
    lat: 42.339420,
    lng: -83.048942,
    markerID: 6
}, {
    title: 'Coors Field',
    lat: 39.755907,
    lng: -104.994173,
    markerID: 7
}, {
    title: 'Dodger Stadium',
    lat: 34.072974,
    lng: -118.240619,
    markerID: 8
}, {
    title: 'Fenway Park',
    lat: 42.346859,
    lng: -71.097229,
    markerID: 9
}, {
    title: 'Great American Ball Park',
    lat: 39.097466,
    lng: -84.507029,
    markerID: 10
}, {
    title: 'Globe Life Park in Arlington',
    lat: 32.750289,
    lng: -97.081287,
    markerID: 11
}, {
    title: 'Kauffman Stadium',
    lat: 39.051839,
    lng: -94.480303,
    markerID: 12
}, {
    title: 'Marlins Park',
    lat: 25.778344,
    lng: -80.219723,
    markerID: 13
}, {
    title: 'Miller Park',
    lat: 43.028213,
    lng: -87.971172,
    markerID: 14
}, {
    title: 'Minute Maid Park',
    lat: 29.757413,
    lng: -95.355529,
    markerID: 15
}, {
    title: 'Nationals Park',
    lat: 38.873219,
    lng: -77.007411,
    markerID: 16
}, {
    title: 'O.co Coliseum',
    lat: 37.751595,
    lng: -122.200528,
    markerID: 17
}, {
    title: 'Oriole Park at Camden Yards',
    lat: 39.283505,
    lng: -76.621911,
    markerID: 18
}, {
    title: 'Petco Park',
    lat: 32.707582,
    lng: -117.156999,
    markerID: 19
}, {
    title: 'PNC Park',
    lat: 40.4470471765,
    lng: -80.0061745423,
    markerID: 20
}, {
    title: 'Progressive Field',
    lat: 41.495537,
    lng: -81.685278,
    markerID: 21
}, {
    title: 'Rogers Centre',
    lat: 43.641453,
    lng: -79.389353,
    markerID: 22
}, {
    title: 'Safeco Field',
    lat: 47.591653,
    lng: -122.332335,
    markerID: 23
}, {
    title: 'Target Field',
    lat: 44.981911,
    lng: -93.277830,
    markerID: 24
}, {
    title: 'Tropicana Field',
    lat: 27.768485,
    lng: -82.653345,
    markerID: 25
}, {
    title: 'Turner Field',
    lat: 33.735085,
    lng: -84.389973,
    markerID: 26
}, {
    title: 'U.S. Cellular Field',
    lat: 41.830176,
    lng: -87.634225,
    markerID: 27
}, {
    title: 'Wrigley Field',
    lat: 41.947902,
    lng: -87.655823,
    markerID: 28
}, {
    title: 'Yankee Stadium',
    lat: 40.829848,
    lng: -73.926191,
    markerID: 29
}];

var mapView = {

    // markers is used to track the map markers
    markers: [],



    zoomIn: function() {
        console.log(mapView.map);
    },

    zoomOut: function() {

    },

    init: function() {

        // These values will be used to center the map.
        // Coordinates are in the center of the ballparks
        defaultLat = 39.6;
        defaultLng = -98.4;
        defaultZoom = 4;

        // error handling in case Google Maps API cannot be loaded
        $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA6iBuksqPJTyum-cfdpN_nAMkp3_YINJw")
        .done(function() {

            // make a map
            var map = new google.maps.Map(document.getElementById('map'), {
                // coordinates are in the center of the ballparks
                center: {
                    lat: defaultLat,
                    lng: defaultLng
                },
                zoom: defaultZoom
            });

            // create one infoWindow for use by the marker for the activeBallpark
            infoWindow = new google.maps.InfoWindow();

            // create map markers for all ballparks
            for (i = 0; i < ballparks.length; i++) {
                mapView.markers[i] = new google.maps.Marker({
                    map: map,
                    title: ballparks[i].title,
                    lat: ballparks[i].lat,
                    lng: ballparks[i].lng,
                    position: new google.maps.LatLng(ballparks[i].lat, ballparks[i].lng),
                    animation: google.maps.Animation.DROP
                });

                // create event listener for clicking the marker
                google.maps.event.addListener(mapView.markers[i], 'click', (function(marker) {
                    return function() {

                        // call Flickr API first since downloading the picture thumbnails is slowest the operation
                        viewModel.getFlickrPics(marker.title);

                        // get Wikipedia article
                        viewModel.getWikipediaArticles(marker.title);

                        // make the marker bounce for 750ms
                        mapView.setBounce(marker);

                        // content for infoWindow is ballpark name and lat/lng coordinates
                        var contentHTML = '<h4>' + marker.title + '</h4><p>Latitude: ' + marker.lat + '</p><p>Longitude: ' + marker.lng + '</p>';

                        // close the infoWindow (if it is open)
                        infoWindow.close();

                        // initialize infoWindow
                        mapView.initializeInfoWindow(marker, contentHTML, infoWindow);

                        // open the infoWindow
                        infoWindow.open(map, marker);

                        // set activeBallparkName for activeBallpark div
                        viewModel.activeBallparkName(marker.title);

                        // hide the search div and show the activeBallpark div
                        viewModel.searchVisible(false);

                        // zoom in map on ballpark
                        map.setZoom(15);
                        map.setCenter(new google.maps.LatLng(marker.lat,marker.lng));

                    };
                })(mapView.markers[i]));
            }

            // create event listener for closing the infoWindow
            google.maps.event.addListener(infoWindow, 'closeclick', function() {
                // zoom out map to default view
                map.setZoom(defaultZoom);
                        map.setCenter(new google.maps.LatLng(defaultLat,defaultLng));
                // show the search div and hide the activeBallpark div
                viewModel.searchVisible(true);
            })
        })
        .fail(function(jqxhr, textStatus, error) {
            alert("Sorry, there was an error loading Google Maps.");
            console.log("Error loading Google Maps API script");
            console.log(jqxhr);
            console.log(textStatus);
            console.dir(error);
        });
    },

    initializeInfoWindow: function(marker, contentHTML, infoWindow) {

        // set InfoWindow content
        // I decided to show the Wikipedia article snippet and Flicker pics
        // in the activeBallpark div because it just looked better to me.
        // To meet the rubric requirement of "[each marker] shows unique information
        // about a location in an infoWindow" I am showing each parks latitude and longitude.
        infoWindow.setContent(contentHTML);
    },

    // make the marker bounce for 750ms
    setBounce: function(marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null);
        }, 750);
    }
};

var viewModel = {

    // used to display the active Ballpark name in activeBallpark div and infoWindow
    activeBallparkName: ko.observable(),

    // used to display list of ballparks when search is visible
    ballparks: ko.observableArray(),

    // used to toggle between search view and activeBallpark view
    searchVisible: ko.observable(true),

    // used to show search results
    query: ko.observable(''),

    // used to display the snippet of the activeBallpark's Wikipedia article and the article link
    snippet: ko.observable(),

    // used to display the flickr pictures and the picture links
    flickrPics: ko.observable(),

    init: function() {
        mapView.init();
        this.showAllBallparks();
    },

    setActiveBallpark: function(activeBallpark) {
        // simulate marker click to show infoWindow containing activeBallpark info
        google.maps.event.trigger(mapView.markers[activeBallpark.markerID], 'click', {
            latLng: new google.maps.LatLng(0, 0)
        });
    },

    showAllBallparks: function() {
        for (i = 0; i < ballparks.length; i++) {
            this.ballparks.push(ballparks[i]);
        }
    },

    search: function(value) {
        viewModel.ballparks.removeAll();

        if (value == '') {
            viewModel.showAllBallparks();

            // set visibility of all map markers
            for (i = 0; i < mapView.markers.length; i++) {
                mapView.markers[i].setVisible(true);
            }
            return;
        }

        // clear visibility of all map markers
        for (i = 0; i < mapView.markers.length; i++) {
            mapView.markers[i].setVisible(false);
        }

        var activeBallparkFound = false;

        for (var ballpark in ballparks) {
            if (ballparks[ballpark].title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                // show ballpark in list
                viewModel.ballparks.push(ballparks[ballpark]);

                // make corresponding map marker visible
                mapView.markers[ballpark].setVisible(true);
            }
        }
    },

    getWikipediaArticles: function(ballparkName) {

        var requestString = null;

        // Searching for "Miller Park" returns a disambiguation page:
        // https://en.wikipedia.org/wiki/Miller_Park
        // For a better user experience, search for "Miller Park Milwaukee"
        // which returns the Miller Park ballpark page:
        // https://en.wikipedia.org/wiki/Miller_Park_(Milwaukee)
        if (ballparkName === "Miller Park") {
            requestString = ballparkName + " Milwaukee";
        } else {
            // encode special characters in the ballparkName
            requestString = ballparkName;
        }

        var queryUrl = 'https://en.wikipedia.org/w/api.php?action=query&callback=?&list=search&srsearch=';
        queryUrl += encodeURIComponent(requestString) + '&srlimit=1&format=json';

        $.getJSON(queryUrl)
            .done(function(json) {
                var title = json.query.search[0].title;
                viewModel.snippet('<p>' + json.query.search[0].snippet + '  <a target="_blank" href="https://en.wikipedia.org/wiki/' + title + '">(Click for More)</a></p>');
            })
            .fail(function(jqxhr, textStatus, error) {
                alert("Sorry, there was an error getting an article from Wikipedia.");
                console.log("Error getting article from Wikipedia");
                console.log(jqxhr);
                console.log(textStatus);
                console.dir(error);
            });
    },

    getFlickrPics: function(ballparkName) {

        // build URL for the Flickr API request
        var requestString = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fb90366ca9b7f830a002e1ff0924da2a&text=";

        // At the time of coding this, Flickr only returned 3 pictures for the search "AT&T Park baseball"
        // https://www.flickr.com/search/?text=AT%26T%20park%20baseball
        // "ATT park baseball" returns over 7400 pictures so for a better user experience (more picture results) , search for "ATT park baseball"
        // https://www.flickr.com/search/?text=ATT%20park%20baseball
        if (ballparkName === "AT&T Park") {
            requestString += encodeURIComponent("ATT Park baseball")
        } else {
            // encode special characters in the ballparkName
            requestString += encodeURIComponent(ballparkName + " baseball");
        }

        requestString += "&sort=relevance&media=photos&content_type=1&format=json&nojsoncallback=1&page=1&per_page=20";

        var result = $.getJSON(requestString)
            .done(function(json) {
                var flickrPicsHTML = '<div id="flickr-pics"><h2>Flickr pics</h2>';
                // Show 20 Flickr pictures for the ActiveBallpark
                for (i = 0; i < 20; i++) {

                    // flickrURL is the link to open the pic on flickr.com
                    var flickrURL = "https://www.flickr.com/photos/" + json.photos.photo[i].owner + "/" + json.photos.photo[i].id;
                    // staticURL is the link to display the pic outside of flickr.com
                    // '_n' option requests a picture of 320px on longest side
                    var staticURL = "https://farm" + json.photos.photo[i].farm + ".staticflickr.com/" + json.photos.photo[i].server;
                    staticURL += "/" + json.photos.photo[i].id + "_" + json.photos.photo[i].secret + "_n.jpg";
                    thisPicHTML = '<a target="_blank" href="' + flickrURL + '"> <img src="' + staticURL + '"></a>';

                    flickrPicsHTML += thisPicHTML;
                }

                flickrPicsHTML += '</div>';

                viewModel.flickrPics(flickrPicsHTML);
            })
            .fail(function(jqxhr, textStatus, error) {
                alert("Sorry, there was an error getting pictures from Flickr.");
                console.log("Error getting pictures from Flickr");
                console.log(jqxhr);
                console.log(textStatus);
                console.dir(error);
            });
    }
};

// subscribe to search results
viewModel.query.subscribe(viewModel.search);

// activate Knockout
ko.applyBindings(viewModel);

// Initialize the viewModel
viewModel.init();
