# Udacity Front-End Web Developer Nanodegree
## Project 5-1: Neighborhood Map Project by Patrick Roche

This repository contains my submission for the Front-End Web Developer Nanodegree project of the [Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).

### Overview
This map displays a Google Map of the ballparks for all 30 Major League Baseball Teams!  It also links to the Wikipedia page and a set of 20 Flickr pics for each park.

### Installing the App
To install this website copy all files to the desired location on your web server.  Open index.html in your favorite browser.

### Using the App

When the app opens it will show a map.  On larger screen sizes the left side of the page will show the Ballpark Info view.  On smaller screen sizes the Ballpark Info view will be hidden; the "Show Ballpark Info" button can be clicked to open the Ballpark Info view.

#### The Map
The map shows markers for the 30 major league ballparks and the markers are in colors of the ballpark's home team.  Click on a marker to zoom in and see the area around the park.  The Home Team and the Latitude and Longitude of the ballpark will also be displayed.  Click the "x" on the infoWindow or press escape to reset the map.  The map also has buttons to open/close the Ballpark Info view.

#### Ballpark Info View: Ballpark Search
The Ballpark Info view shows a search input and a list of all 30 Major League Ballparks.  Enter a search term in the search input and the ballpark list will update to show only those ballparks matching the input.  The markers on the map will also update to match the search input.

#### Ballpark Info View: Wikipedia Article and Flickr Pictures
Select a park by clicking a ballpark name in the list or by clicking a ballpark's map marker.   The ballpark info view will show a snippet of the Wikipedia article for the park and a link to the full article.  Thumbnails of 20 Flickr pictures of the ballpark will also be displayed.  Clicking on a picture will open the picture on Flickr.  Press the escape or click on the Search Again button to return to the Search filter.

### The Nuts and Bolts
This app uses the Google Maps API, the WikiMedia API and the Flickr API.  It also uses Knockout.js to implement the ballpark search filter and list.