//////////////////////////////////////////////////////////////////////////////
// Udacity Front End Developer Nanodegree
// Project 5-1: Neighborhood Map Project
// By: Patrick Roche
//     patrick.l.roche@gmail.com
//     https://github.com/plr108
//////////////////////////////////////////////////////////////////////////////
// The locations for this map app are the ballparks for
// all 30 Major League Baseball teams
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
  lat: 40.4470472,
  lng: -80.006175,
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

// mapView creates and manipulates a map using the Google Maps API
var mapView = {
  // Default map coordinates are in the center of all 30 ballparks
  defaultLat: 39,
  defaultLng: -109,
  defaultZoom: 3,
  // the value of windowWidth will be set by getWindowWidth()
  windowWidth: undefined,
  // markers[] is used to track the map markers
  markers: [],
  // buildMap is the Google Maps API callback function.
  // Make the map and related objects and event listeners.

  buildMap: function() {
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
    for (var i = 0; i < ballparks.length; i++) {
      // Create path to custom marker.
      // Each marker features a color of the ballpark's home team!
      // The markers were created using this site:
      // https://mapicons.mapsmarker.com/markers/sports/ball-sports/baseball/
      var image = "img/" + ballparks[i].abbrev + '.png';
      // create the map marker
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
      google.maps.event.addListener(
        mapView.markers[i], 'click', (function(marker) {
          return function() {
            // call Flickr API first since downloading the
            // picture thumbnails is slowest the operation
            viewModel.getFlickrPics(marker.title);
            // get Wikipedia article
            viewModel.getWikipediaArticle(marker.title);
            // make the marker bounce for 700ms
            mapView.setBounce(marker);
            // Content for infoWindow is in this format:
            // ballpark name,
            // "Home of the (Location and Team Name)" message,
            // and lat/lng coordinates
            var contentHTML = '<div id="info-window-content"><p><strong>' +
              marker.title + '</strong></p><p>Home of the ' +
              marker.location + ' ' + marker.nickname;
            // Add "of Anaheim" to the message for Angels Stadium
            if (marker.nickname === "Angels") {
              contentHTML += " of Anaheim";
            }
            contentHTML += '</p><p><strong>Latitude: </strong>' +
              marker.lat + '</p><p><strong>Longitude: </strong>' +
              marker.lng + '</p></div>';
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
            // get the windowWidth
            mapView.getWindowWidth();
            var mapLng = marker.lng;
            // if viewport is large enough that infoWindow
            // will be shown, shift map center so the ballpark appears
            // in center of visible portion of the map
            if (mapView.windowWidth > 609) {
              mapLng = marker.lng - 0.005;
            }
            map.setCenter(new google.maps.LatLng(marker.lat, mapLng));
          };
        })(mapView.markers[i])
      );
    }
    // create event listener for closing the infoWindow
    google.maps.event.addListener(infoWindow, 'closeclick', function() {
      mapView.reset();
      viewModel.reset();
    });
  },

  // onerror calls googleMapsFail() if there is an
  // error calling the Google Maps JavaScript API
  googleMapsFail: function() {
    alert("Sorry, there was an error loading Google Maps.");
    console.log("Error loading Google Maps");
  },

  // initialize and load the map and map objects
  init: function() {
    mapView.setMapDefaults();
  },

  // saves the width of the window (viewport) for future use.
  getWindowWidth: function() {
    mapView.windowWidth = Math.max(
      $(window).width(), $(window).innerWidth() || 0
    );
  },

  // simulate click on the map marker that corresponds to markerID
  openMarker: function(markerID) {
    google.maps.event.trigger(mapView.markers[markerID], 'click', {
      latLng: new google.maps.LatLng(0, 0)
    });
  },

  // Check the viewport size and determine:
  // 1) the map zoom and center, and
  // 2) if the info div should be shown or hidden
  setMapDefaults: function() {
    // check the windowWidth
    mapView.getWindowWidth();
    // if windowWidth < 610px
    if (mapView.windowWidth < 610) {
      // recenter the map
      mapView.defaultLng = -97;
      // info div is not visible by default
      // if 610 <= windowWidth < 900
    } else if (mapView.windowWidth < 900) {
      // Make center coordinates slightly west of the center of the
      // ballparks to account for space info div takes up.
      mapView.defaultLng = -108 - (mapView.windowWidth) / 50;
      // show the info div
      viewModel.infoVisible(true);
      // else windowWidth is >= 900
    } else {
      // change zoom to show more detail
      mapView.defaultZoom = 4;
      // show the info div
      viewModel.infoVisible(true);
    }
  },

  reset: function() {
    // close the infoWindow
    infoWindow.close();
    mapView.setMapDefaults();
    map.setCenter(new google.maps.LatLng(
      mapView.defaultLat, mapView.defaultLng
    ));
    map.setZoom(mapView.defaultZoom);
    // make all map markers visible
    for (var i = 0; i < ballparks.length; i++) {
      mapView.markers[i].setVisible(true);
    }
  },

  // Set InfoWindow content.
  // I decided to show the Wikipedia article snippet and Flicker pics in the
  // activeBallpark div instead of infoWindow because it just looked better
  // to me.  To meet the rubric requirement of "[each marker] shows unique
  // information about a location in an infoWindow" I am showing a
  // "Home of the (Home Team)" message and the park's latitude and longitude.
  initializeInfoWindow: function(marker, contentHTML, infoWindow) {
    infoWindow.setContent(contentHTML);
  },

  // Make the marker bounce for 700ms
  setBounce: function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
      marker.setAnimation(null);
    }, 700);
  }
};

// viewModel displays a search input and a ballpark list.
// When a ballpark is selected, the activeBallpark is shown, a snippet of the
// ballpark's Wikipedia article is shown, and Flickr pics of the ballpark are
// displayed.
var viewModel = {
  // infoVisible contains a boolean value related
  // to visibility of the info div
  infoVisible: ko.observable(false),
  // searchVisible contains a boolean value related to visibility
  // of the search view and activeBallpark views
  searchVisible: ko.observable(true),
  // activeBallparkName contains the title (name) of the activeBallpark
  activeBallparkName: ko.observable(),
  // activeBallparkName contains the markerID of the activeBallpark
  activeBallparkMarkerID: ko.observable(),
  // snippet contains a snippet (i.e., the beginning text of)
  // an article about activeBallpark
  snippet: ko.observable(),
  // flickrPics contains the HTML necessary to show
  // flickr pictures related to the activeBallpark
  flickrPics: ko.observable(),
  // searchModeMessage contains a message about the search mode status
  searchModeMessage: ko.observable("Advanced Search OFF"),
  // advancedSearchMode contains a boolean value related to search mode status
  advancedSearchMode: ko.observable(false),
  // regularSearchQuery contains the regular search query
  regularSearchQuery: ko.observable(null),
  // advancedSearchResult contains the search result for advanced search
  advancedSearchResult: ko.observable(),
  // ballparkList contains an array of ballparks for use in
  // regular search queries and the search view
  ballparkList: ko.observableArray(),
  // observableBallparks contains an array of Ballparks for use in advanced
  // search queries.  Note that ballparkList contains ballpark objects
  // (the model object) and observableBallparks contains Ballpark objects
  // (an object containing the observable ballpark properties required for
  // advanced search).
  observableBallparks: ko.observableArray(),
  // Initialize the map, viewModel and key input listener.
  // Build observableBallparks.

  init: function() {
    mapView.init();
    viewModel.showAllBallparks();
    viewModel.keyListener();
    viewModel.buildBallparkObservables();
  },

  // set the activeBallpark title and markerID.
  // Show the activeBallpark on the map.
  setActiveBallpark: function(activeBallpark) {
    viewModel.activeBallparkName(activeBallpark.title);
    viewModel.activeBallparkMarkerID(activeBallpark.markerID);
    // simulate a click on the marker for the activeBallpark
    mapView.openMarker(activeBallpark.markerID);
  },

  // reset the ballparkList to show all ballparks
  showAllBallparks: function() {
    // clear the ballparkList
    viewModel.ballparkList.removeAll();
    // populate the ballparkList with all ballparks
    for (var i = 0; i < ballparks.length; i++) {
      viewModel.ballparkList.push(ballparks[i]);
    }
  },

  // Search for the searchTerm in the title values for each ballpark.
  // If a ballpark's title contains the search term, the ballpark is
  // displayed in the ballpark list and the ballpark's marker is displayed
  // on the map.
  regularSearch: function(searchTerm) {
    // clear the ballpark list
    viewModel.ballparkList.removeAll();
    if (searchTerm === '') {
      // show all ballparks if there is no search input
      viewModel.showAllBallparks();
      // set visibility of all map markers
      for (var i = 0; i < mapView.markers.length; i++) {
        mapView.markers[i].setVisible(true);
      }
      return;
    }
    for (var i = 0; i < ballparks.length; i++) {
      //if searchTerm is found
      if (viewModel.searchTermFound(searchTerm, i)) {
        // show ballpark in list
        viewModel.ballparkList.push(ballparks[i]);
        // make corresponding map marker visible
        mapView.markers[i].setVisible(true);
      } else {
        // hide corresponding map marker
        mapView.markers[i].setVisible(false);
      }
    }
  },

  // searchTermFound() returns true if searchTerm is
  // found in the ballpark title (name)
  searchTermFound: function(searchTerm, ballpark) {
    var ballparkTitle = ballparks[ballpark].title;
    if (ballparkTitle.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
      return true;
    } else {
      return false;
    }
  },

  // Modified version of the keyboard input handler from my
  // Udacity FEND Project 3 submission
  // https://github.com/plr108/FrontEndNanodegreeProject3/blob/master/js/app.js
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
        // reset the app when the escape key is pressed
        mapView.reset();
        viewModel.reset();
        break;
      default:
        // do nothing
        break;
    }
  },

  // reset all viewModel values related to performing another search
  reset: function() {
    viewModel.searchVisible(true);
    mapView.getWindowWidth();
    // If viewport 610px or greater show the info div.
    // If viewport less than 610px keep info div in current display state.
    if (mapView.windowWidth >= 610) {
      viewModel.infoVisible(true);
    }
    // Make the search view visible when info window is shown
    viewModel.searchVisible(true);
    // show all ballparks
    viewModel.showAllBallparks();
    // Reset regular search input string
    viewModel.regularSearchQuery("");
    // NOTE: no advancedSearch viewModel values need to be reset here
  },

  // Using the MediaWiki API show a snippet of a Wikipedia article about
  // ballparkName and a link to the full article
  getWikipediaArticle: function(ballparkName) {
    var requestString = null;
    // Clear the previously-displayed Wikipedia article snippet
    viewModel.snippet("");
    // Searching for "Miller Park" returns this disambiguation page:
    // https://en.wikipedia.org/wiki/Miller_Park
    // For a better user experience, the search query used is
    // "Miller Park Milwaukee" which returns this Miller Park ballpark page:
    // https://en.wikipedia.org/wiki/Miller_Park_(Milwaukee)
    if (ballparkName === "Miller Park") {
      requestString = ballparkName + " Milwaukee";
    } else {
      // encode special characters in the ballparkName
      requestString = ballparkName;
    }
    var queryUrl = 'https://en.wikipedia.org/w/api.php' +
      '?action=query&callback=?&list=search&srsearch=';
    queryUrl += encodeURIComponent(requestString) + '&srlimit=1&format=json';
    $.getJSON(queryUrl)
      .done(function(json) {
        var title = json.query.search[0].title;
        viewModel.snippet(
          '<p>' + json.query.search[0].snippet +
          '  <a target="_blank" href="https://en.wikipedia.org/wiki/' +
          title + '">(Click for More)</a></p>'
        );
      })
      .fail(function(jqxhr) {
        alert("Sorry, there was an error getting an article from Wikipedia.");
        console.log("Error getting article from Wikipedia");
        //write the returned object to console.log
        console.log(jqxhr);
      });
  },

  // Using the Flickr API show thumbnails of 20 Flickr pictures
  // about ballparkName and links to the pictures on Flickr
  getFlickrPics: function(ballparkName) {
    // Clear any previously-displayed Flickr Pics
    viewModel.flickrPics("");
    // build URL for the Flickr API request
    var requestString = "https://api.flickr.com/services/rest/?method=" +
      "flickr.photos.search&api_key=fb90366ca9b7f830a002e1ff0924da2a&text=";
    // At the time of coding this, Flickr only returned 3 pictures for
    // the search "AT&T Park baseball"
    // https://www.flickr.com/search/?text=AT%26T%20park%20baseball
    // "ATT park baseball" returns over 7400 pictures so for a better user
    // experience (more picture results), search for "ATT park baseball"
    // https://www.flickr.com/search/?text=ATT%20park%20baseball
    if (ballparkName === "AT&T Park") {
      requestString += encodeURIComponent("ATT Park baseball");
    } else {
      // encode special characters in the ballparkName
      requestString += encodeURIComponent(ballparkName + " baseball");
    }
    requestString += "&sort=relevance&media=photos&content_type=1" +
      "&format=json&nojsoncallback=1&page=1&per_page=20";
    $.getJSON(requestString)
      .done(function(json) {
        var flickrPicsHTML = '';
        // Show 20 Flickr pictures for the ActiveBallpark
        for (var i = 0; i < 20; i++) {
          // flickrURL is the link to open the pic on flickr.com
          var flickrURL = "https://www.flickr.com/photos/" +
            json.photos.photo[i].owner + "/" + json.photos.photo[i].id;
          // staticURL is the link to display the pic outside of flickr.com
          // '_n' option requests a picture of 320px on longest side
          var staticURL = "https://farm" + json.photos.photo[i].farm +
            ".staticflickr.com/" + json.photos.photo[i].server;
          staticURL += "/" + json.photos.photo[i].id + "_" +
            json.photos.photo[i].secret + "_n.jpg";
          var thisPicHTML = '<a target="_blank" href="' + flickrURL + '">' +
            '<img src="' + staticURL + '"></a>';
          flickrPicsHTML += thisPicHTML;
        }
        viewModel.flickrPics(flickrPicsHTML);
      })
      .fail(function(jqxhr) {
        alert("Sorry, there was an error getting pictures from Flickr.");
        console.log("Error getting pictures from Flickr");
        //write the returned object to console.log
        console.log(jqxhr);
      });
  },

  // Show the info div
  showInfo: function() {
    viewModel.infoVisible(true);
  },

  // Hide the info div
  hideInfo: function() {
    viewModel.infoVisible(false);
  },

  // Ballpark() contains the set of observable ballpark properties
  // necessary to perform the advanced search
  Ballpark: function(title, location, nickname, abbrev, markerID) {
    // title, location, nickname and abbreviation are searchable fields for
    // the advanced search
    this.title = ko.observable(title);
    this.location = ko.observable(location);
    this.nickname = ko.observable(nickname);
    this.abbrev = ko.observable(abbrev);
    // markerID is used to show the selected ballpark on the map
    this.markerID = ko.observable(markerID);
    // searchResultString is the displayed advanced search result
    // and has this format:
    // BallparkTitle -- TeamLocation TeamNickname (TeamAbbreviation)
    this.searchResultString = ko.computed(function() {
      var resultString = this.title() + " -- " +
        this.location() + " " + this.nickname();
      // if searching for the Angels (or Angels' location or ballpark)
      if (this.nickname() === "Angels") {
        // Then add "of Anaheim" to the displayed Team Name.
        resultString += " of Anaheim";
      }
      resultString += " (" + this.abbrev() + ")";
      return resultString;
    }, this);
  },

  // buildBallparkObservables populates observableBallparks with Ballpark
  // objects.  Each Ballpark object contains observables containing individual
  // ballpark properties.
  buildBallparkObservables: function() {
    for (var i = 0; i < ballparks.length; i++) {
      var thisBallpark = new viewModel.Ballpark(
        ballparks[i].title, ballparks[i].location, ballparks[i].nickname,
        ballparks[i].abbrev, ballparks[i].markerID
      );
      viewModel.observableBallparks.push(thisBallpark);
    }
  }
};

// subscribe to changes to search results
viewModel.regularSearchQuery.subscribe(viewModel.regularSearch);

// subscribe to changes to advancedSearchMode
viewModel.advancedSearchMode.subscribe(function(newValue) {
  // toggle searchModeMessage based on state of advancedSearchMode
  (newValue === true) ?
  viewModel.searchModeMessage("Advanced Search ON"):
    viewModel.searchModeMessage("Advanced Search OFF");
  // reset the map view and viewModel
  mapView.reset();
  viewModel.reset();
});

// Search for the search term in the following values for each ballpark:
// title, location, nickname, abbrev
// Using jQuery-UI autocomplete, return a list of all ballparks where the
// search term is found in any of the fields listed above.  When the user
// selects a search result, display the selected ballpark on the map and in
// the activeBallpark view.
// advancedSearch is a modified version of the approach shown here:
// http://stackoverflow.com/questions/7537002/how-to-create-an-auto-complete-combobox/7538860#7538860
ko.bindingHandlers.advancedSearch = {
  init: function(element, valueAccessor, allBindingsAccessor) {
    // options for jQueryUI autocomplete
    var options = {};
    // On item select
    options.select = function(event, ui) {
      // Override default onSelect behavior.  This prevents the selected
      // label from being displayed as the input value
      event.preventDefault();
      // write marker ID value to selectedBallparkMarkerID
      allBindingsAccessor().selectedBallparkMarkerID(ui.item.markerID);
      // clear the ballparkList
      viewModel.ballparkList.removeAll();
      for (var i = 0; i < ballparks.length; i++) {
        //if this ballpark was selected
        if (
          allBindingsAccessor().selectedBallparkMarkerID() ===
          ballparks[i].markerID
        ) {
          // add the selected ballpark to the ballparkList
          viewModel.ballparkList.push(ballparks[i]);
          // make the selected ballpark's map marker visible
          mapView.markers[i].setVisible(true);
        } else {
          // hide all other map markers
          mapView.markers[i].setVisible(false);
        }
      }
      // Clear the user input
      $(element).val(null);
      // simulate a click on the marker for the activeBallpark
      mapView.openMarker(allBindingsAccessor().selectedBallparkMarkerID());
    };
    var mappedSource = ko.computed(
      function() {
        // map the possible results to the corresponding
        // values tracked by observableBallparks
        var mapped = ko.utils.arrayMap(
          ko.utils.unwrapObservable(viewModel.observableBallparks),
          function(item) {
            var result = {};
            // result.label contains the label string
            // displayed in the suggestion menu
            result.label = ko.utils.unwrapObservable(
              item[allBindingsAccessor().advancedSearchResult]
            );
            // result.markerID contains the markerID used
            // to open the ballpark marker on the map
            result.markerID = ko.utils.unwrapObservable(item['markerID']);
            // result.value is not set since activeBallpark view
            // will be opened on selection of a ballpark's label
            return result;
          });
        return mapped;
      }
    );
    options.source = mappedSource();
    // Initialize autocomplete attibute of input element
    $(element).autocomplete(options);
  }
};

// Initialize the viewModel
viewModel.init();

// activate Knockout
ko.applyBindings(viewModel);
