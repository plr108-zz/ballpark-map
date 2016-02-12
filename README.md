# Udacity Front-End Web Developer Nanodegree
## Project 5-1: Neighborhood Map Project by Patrick Roche

This repository contains my submission for the Front-End Web Developer Nanodegree project of the [Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).

### Overview
This map displays a Google Map of the ballparks for all 30 Major League Baseball Teams!  It also links to the Wikipedia page and a set of 20 Flickr pics for each park.

### Installing the App
To install this website copy all files in the dist folder to the desired location on your web server.

The dist folder can be rebuilt using the default gulp task.  To rebuild, install the packages listed in the JavaScript Packages Used section and run the `gulp` command.  Please see [this site](https://www.npmjs.com/package/gulp) for more information on using gulp and installing the packages.

### Starting the App

After installing the app, to start the app open index.html (e.g., http://your_domain_name/index.html) in your favorite browser.

### Using the App

When the app opens it will show a map.  On larger screen sizes the left side of the page will show the Ballpark Info view.  On smaller screen sizes the Ballpark Info view will be hidden; the "Show Ballpark Info" button can be clicked to open the Ballpark Info view.

#### The Map
The map shows markers for the 30 major league ballparks and the markers are in colors of the ballpark's home team.  Click on a marker to zoom in and see the area around the park.  The Home Team and the Latitude and Longitude of the ballpark will also be displayed.  Click the "x" on the infoWindow or press escape to reset the map.  The map also has buttons to open/close the Ballpark Info view.

#### Ballpark Info View: Ballpark Search
The Ballpark Info view shows a search input and a list of all 30 Major League Ballparks.  Enter a search term in the search input and the ballpark list will update to show only those ballparks matching the input.  The markers on the map will also update to match the search input.

#### Ballpark Info View: Wikipedia Article and Flickr Pictures
Select a park by clicking a ballpark name in the list or by clicking a ballpark's map marker.   The ballpark info view will show a snippet of the Wikipedia article for the park and a link to the full article.  Thumbnails of 20 Flickr pictures of the ballpark will also be displayed.  Clicking on a picture will open the picture on Flickr.  Press the escape or click on the Search Again button to return to the Search filter.

### The Nuts and Bolts

APIs used:

* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/) -- Used to build the ballpark map.

* [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page) -- Used to get Wikipedia information about the ballparks.

* [Flickr API](https://www.flickr.com/services/api/) -- Used to get Flickr pcitures related to the ballparks.

Framework used:

* [Knockout JS](http://knockoutjs.com/) -- Used to handle everything in the app that changes state (except for functionality related to the Google Map).

Packages used for production build:

Note: For simplicity and due to file size limitations, only the gulpfile.js and package.json used are included in this repository.  If you wish to use the gulpfile, the resources listed below must be installed.

The following packages were installed via [npm](https://www.npmjs.com/) and used to create the production build of this app.

* [gulp](https://www.npmjs.com/package/gulp): The stream building system.  Please see gulpfile.js for details on how gulp was used to create the production build.

* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin): used to compress images

* [gulp-minifier](https://github.com/webyom/gulp-minifier): used to minify CSS and JavaScript files

* [del](https://www.npmjs.com/package/del): used to delete old files before rebuilding the dist directory
