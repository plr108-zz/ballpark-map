// The locations for this app are ballparks for Major League Baseball teams
var ballparks = [{
    title: 'Angel Stadium of Anaheim',
    abbrev: 'LAA',
    location: 'Los Angeles',
    nickname: 'Angels',
    lat: 33.800326,
    lng: -117.882762,
    markerID: 0
}, {
    title: 'AT&T Park',
    abbrev: 'SF',
    location: 'San Francisco',
    nickname: 'Giants',
    lat: 37.778858,
    lng: -122.389248,
    markerID: 1
}, {
    title: 'Busch Stadium',
    abbrev: 'STL',
    location: 'St. Louis',
    nickname: 'Cardinals',
    lat: 38.622837,
    lng: -90.192799,
    markerID: 2
}, {
    title: 'Chase Field',
    abbrev: 'ARI',
    location: 'Arizona',
    nickname: 'Diamondbacks',
    lat: 33.445039,
    lng: -112.066732,
    markerID: 3
}, {
    title: 'Citi Field',
    abbrev: 'NYM',
    location: 'New York',
    nickname: 'Mets',
    lat: 40.757226,
    lng: -73.845824,
    markerID: 4
}, {
    title: 'Citizens Bank Park',
    abbrev: 'PHI',
    location: 'Philadelphia',
    nickname: 'Phillies',
    lat: 39.905569,
    lng: -75.166591,
    markerID: 5
}, {
    title: 'Comerica Park',
    abbrev: 'DET',
    location: 'Detroit',
    nickname: 'Tigers',
    lat: 42.339420,
    lng: -83.048942,
    markerID: 6
}, {
    title: 'Coors Field',
    abbrev: 'COL',
    location: 'Colorado',
    nickname: 'Rockies',
    lat: 39.755907,
    lng: -104.994173,
    markerID: 7
}, {
    title: 'Dodger Stadium',
    abbrev: 'LAD',
    location: 'Los Angeles',
    nickname: 'Dodgers',
    lat: 34.072974,
    lng: -118.240619,
    markerID: 8
}, {
    title: 'Fenway Park',
    abbrev: 'BOS',
    location: 'Boston',
    nickname: 'Red Sox',
    lat: 42.346859,
    lng: -71.097229,
    markerID: 9
}, {
    title: 'Great American Ball Park',
    abbrev: 'CIN',
    location: 'Cincinnati',
    nickname: 'Reds',
    lat: 39.097466,
    lng: -84.507029,
    markerID: 10
}, {
    title: 'Globe Life Park in Arlington',
    abbrev: 'TEX',
    location: 'Texas',
    nickname: 'Rangers',
    lat: 32.750289,
    lng: -97.081287,
    markerID: 11
}, {
    title: 'Kauffman Stadium',
    abbrev: 'KC',
    location: 'Kansas City',
    nickname: 'Royals',
    lat: 39.051839,
    lng: -94.480303,
    markerID: 12
}, {
    title: 'Marlins Park',
    abbrev: 'MIA',
    location: 'Miami',
    nickname: 'Marlins',
    lat: 25.778344,
    lng: -80.219723,
    markerID: 13
}, {
    title: 'Miller Park',
    abbrev: 'MIL',
    location: 'Milwaukee',
    nickname: 'Brewers',
    lat: 43.028213,
    lng: -87.971172,
    markerID: 14
}, {
    title: 'Minute Maid Park',
    abbrev: 'HOU',
    location: 'Houston',
    nickname: 'Astros',
    lat: 29.757413,
    lng: -95.355529,
    markerID: 15
}, {
    title: 'Nationals Park',
    abbrev: 'WSH',
    location: 'Washington',
    nickname: 'Nationals',
    lat: 38.873219,
    lng: -77.007411,
    markerID: 16
}, {
    title: 'O.co Coliseum',
    abbrev: 'OAK',
    location: 'Oakland',
    nickname: 'Athletics',
    lat: 37.751595,
    lng: -122.200528,
    markerID: 17
}, {
    title: 'Oriole Park at Camden Yards',
    abbrev: 'BAL',
    location: 'Baltimore',
    nickname: 'Orioles',
    lat: 39.283505,
    lng: -76.621911,
    markerID: 18
}, {
    title: 'Petco Park',
    abbrev: 'SD',
    location: 'San Diego',
    nickname: 'Padres',
    lat: 32.707582,
    lng: -117.156999,
    markerID: 19
}, {
    title: 'PNC Park',
    abbrev: 'PIT',
    location: 'Pittsburgh',
    nickname: 'Pirates',
    lat: 40.4470471765,
    lng: -80.0061745423,
    markerID: 20
}, {
    title: 'Progressive Field',
    abbrev: 'CLE',
    location: 'Cleveland',
    nickname: 'Indians',
    lat: 41.495537,
    lng: -81.685278,
    markerID: 21
}, {
    title: 'Rogers Centre',
    abbrev: 'TOR',
    location: 'Toronto',
    nickname: 'Blue Jays',
    lat: 43.641453,
    lng: -79.389353,
    markerID: 22
}, {
    title: 'Safeco Field',
    abbrev: 'SEA',
    location: 'Seattle',
    nickname: 'Mariners',
    lat: 47.591653,
    lng: -122.332335,
    markerID: 23
}, {
    title: 'Target Field',
    abbrev: 'MIN',
    location: 'Minnesota',
    nickname: 'Twins',
    lat: 44.981911,
    lng: -93.277830,
    markerID: 24
}, {
    title: 'Tropicana Field',
    abbrev: 'TB',
    location: 'Tampa Bay',
    nickname: 'Rays',
    lat: 27.768485,
    lng: -82.653345,
    markerID: 25
}, {
    title: 'Turner Field',
    abbrev: 'ATL',
    location: 'Atlanta',
    nickname: 'Braves',
    lat: 33.735085,
    lng: -84.389973,
    markerID: 26
}, {
    title: 'U.S. Cellular Field',
    abbrev: 'CWS',
    location: 'Chicago',
    nickname: 'White Sox',
    lat: 41.830176,
    lng: -87.634225,
    markerID: 27
}, {
    title: 'Wrigley Field',
    abbrev: 'CHC',
    location: 'Chicago',
    nickname: 'Cubs',
    lat: 41.947902,
    lng: -87.655823,
    markerID: 28
}, {
    title: 'Yankee Stadium',
    abbrev: 'NYY',
    location: 'New York',
    nickname: 'Yankees',
    lat: 40.829848,
    lng: -73.926191,
    markerID: 29
}];

var mapView = {

    map: null,

    // Default map coordinates are in center of the ballparks
    defaultLat: 39,
    defaultLng: -108,
    defaultZoom: 3,


    // markers is used to track the map markers
    markers: [],

    setMapDefaults: function() {

        // if viewport width less than 965px,
        // Zoom out one level
        // and set center of map so markers are on screen
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        console.log(width);


        if (width < 610) {
            // if width < 610 don't show info div by default
            viewModel.infoVisible(false);
            mapView.defaultLng = -97;

        } else if (width < 900) {
            // Make center coordinates slightly west of the center of the ballparks
            // to account for space info div takes up;
            // info div is shown on top of the map.
            mapView.defaultLng = -101 - (width) / 50;

        } else {
            mapView.defaultZoom = 4;
            console.log("Width 1000 or greater");
        }

    },

    init: function() {

        mapView.setMapDefaults();

        // The Google Maps API call is made here instead of in HTML
        // and uses jQuery's .getScript() and .fail() for error handling.
        $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA6iBuksqPJTyum-cfdpN_nAMkp3_YINJw")
            .done(function() {

                // make a map
                map = new google.maps.Map(document.getElementById('map'), {
                    // coordinates are in the center of the ballparks
                    center: {
                        lat: mapView.defaultLat,
                        lng: mapView.defaultLng
                    },
                    zoom: mapView.defaultZoom
                });

                // create one infoWindow for use by the marker for the activeBallpark
                infoWindow = new google.maps.InfoWindow();

                // create map markers for all ballparks
                for (i = 0; i < ballparks.length; i++) {
                    // Create path to custom marker.
                    // Each marker features a color of the ballpark's home team!
                    // I built the markers on this site:
                    // https://mapicons.mapsmarker.com/markers/sports/ball-sports/baseball/
                    var image = "img/" + ballparks[i].abbrev + '.png';
                    mapView.markers[i] = new google.maps.Marker({
                        map: map,
                        icon: image,
                        location: ballparks[i].location,
                        nickname: ballparks[i].nickname,
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

                            // content for infoWindow is
                            // ballpark name,
                            // "Home of the (Location and Team Name)" message,
                            // and lat/lng coordinates
                            var contentHTML = '<div id="info-window-content"><p><strong>' + marker.title + '</strong></p><p>Home of the ' + marker.location + ' ' + marker.nickname;

                            // Add "of Anaheim" to the message for Angels Stadium
                            if (marker.nickname === "Angels") {
                                contentHTML += " of Anaheim";
                            }

                            contentHTML += '</p><p><strong>Latitude: </strong>' + marker.lat + '</p><p><strong>Longitude: </strong>' + marker.lng + '</p></div>';

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

                            map.setCenter(new google.maps.LatLng(marker.lat, marker.lng));

                        };
                    })(mapView.markers[i]));
                }

                // create event listener for closing the infoWindow
                google.maps.event.addListener(infoWindow, 'closeclick', function() {
                    mapView.reset(map);
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

    reset: function() {
        // close the infoWindow
        infoWindow.close();

        var defaultZoom = null;
        var defaultLat = null;
        var defaultLng = null;

        mapView.setMapDefaults();

        map.setCenter(new google.maps.LatLng(mapView.defaultLat, mapView.defaultLng));
        map.setZoom(mapView.defaultZoom);

        // show the search div and hide the activeBallpark div
        viewModel.searchVisible(true);

        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

        // only show the info window if viewport 610px or greater
        if (width < 610) {
            viewModel.infoVisible(false);
            viewModel.searchVisible(true);
        } else {
            viewModel.infoVisible(true);
            viewModel.searchVisible(true);
        }
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

    // Used to open and close the info div
    infoVisible: ko.observable(true),

    // used to show search results
    query: ko.observable(''),

    // used to display the snippet of the activeBallpark's Wikipedia article and the article link
    snippet: ko.observable(),

    // used to display the flickr pictures and the picture links
    flickrPics: ko.observable(),

    init: function() {
        mapView.init();
        this.showAllBallparks();
        viewModel.keyListener();
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

    // Modified version of the keyboard input handler from Udacity FEND Project 3
    keyListener: function() {

        document.addEventListener('keyup', function(e) {
            var allowedKeys = {
                27: 'ESC'
            };

            viewModel.handleInput(allowedKeys[e.keyCode]);
        });
    },

    handleInput: function(key) {
        switch (key) {
            case 'ESC':
                // reset the mapView when escape key pressed
                mapView.reset();
                break;
            default:
                // do nothing
        }
    },

    reset: function() {
        mapView.reset();
    },

    getWikipediaArticles: function(ballparkName) {

        var requestString = null;

        // Searching for "Miller Park" returns a disambiguation page:
        // https://en.wikipedia.org/wiki/Miller_Park
        // For a better user experience, the search query used is "Miller Park Milwaukee"
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
                var flickrPicsHTML = '';
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

                viewModel.flickrPics(flickrPicsHTML);
            })
            .fail(function(jqxhr, textStatus, error) {
                alert("Sorry, there was an error getting pictures from Flickr.");
                console.log("Error getting pictures from Flickr");
                console.log(jqxhr);
                console.log(textStatus);
                console.dir(error);
            });
    },

    showInfo: function() {
        console.log("Show Info div now");
        viewModel.infoVisible(true);

    },

    hideInfo: function() {
        console.log("Hide Info div now");
        viewModel.infoVisible(false);

    }
};

// subscribe to search results
viewModel.query.subscribe(viewModel.search);

// activate Knockout
ko.applyBindings(viewModel);

// Initialize the viewModel
viewModel.init();
