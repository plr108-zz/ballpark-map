# Udacity Front-End Web Developer Nanodegree
## Project 5-1: Neighborhood Map Project by Patrick Roche

This repository contains my submission for the Front-End Web Developer Nanodegree project of the [Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).

### Overview
This map displays a Google Map of the ballparks for all 30 Major League Baseball Teams!  It also links to the Wikipedia page and a set of 20 Flickr pics for each park.

### Installing the App
To install this website copy all files to the desired location on your web server.

### Using the App

#### The Map
The map shows markers for the 30 major league ballparks and the markers are in colors of the ballpark's home team.  Click on a marker to zoom in and see the area around the park.  The Home Team and the Latitude and Longitude of the ballpark will also be displayed.  Click the "x" on the infoWindow or press escape to reset the map.  The map also has buttons to open/close the Ballpark Info view.

#### Ballpark Info: Ballpark Search
The left side of the page will show a Search filter and a list of the ballparks.  When a search input is entered, the ballpark list will update to show only those parks matching the input.  The markers on the map will also update to match the search input.  Note: On smaller screen sizes, the Ballpark Info view is hidden by default, but can be opened by clicking the Show Ballpark Info button.

#### Ballpark Info: Wikipedia Article and Flickr Pictures
Click on a ballpark's map marker or name in the list will show a snippet of the Wikipedia article for the park and a link to the full article.  Thumbnails of 20 pictures from Flickr will also be displayed.  Clicking on a picture will open the picture on Flickr.  Press the escape or click on the Search Again button to return to the Search filter.

#### The Nuts and Bolts
This app uses the Google Maps API, the WikiMedia API and the Flickr API.  It also uses Knockout.js to implement the ballpark search filter and list.