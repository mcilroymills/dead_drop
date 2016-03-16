//Google map object
var map;
var pin;//The new pin that is added to the map
var onePin = true;//Only allows one pin to be placed at a time

$(document).ready(function () {
  $.getJSON("/pins/api", function(json) {
    initMap(json);
  });
});

function initMap(pins) {

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

    //Current position
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    //Create google map object
    map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 13
    });

    //Adds event listener to the map for new pins
    map.addListener('click', function(event) {
      addPin(event.latLng);
    });

    //Create a single infowindow object
    var infowindow = new google.maps.InfoWindow({
        content: 'test'
      });

    //Create markers with pins from database
    for (var i = 0; i < pins.length; i++) {
      var latitude = parseFloat(pins[i].latitude);
      var longitude = parseFloat(pins[i].longitude);
      var contentString = '<div id="content"><h3>'+ pins[i].pin_title + '</h3><p>' + pins[i].pin_description +
      '</p><p>Dropped by ' + pins[i].username + '</p></div>';

      var marker = new google.maps.Marker({
        position: {lat: latitude, lng:longitude},
        map: map,
        windowContent: contentString
      });
      //Add event listener for pin clicks
      google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(this.windowContent);
            infowindow.open(map, this);

        });
    }
    //Error function
  },function() {
      //Client declined to allow current location, center map at enter map at city & county bldg
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.739209, lng: -104.990255},
      zoom: 13
      });

      //Adds event listener to the map for new pins
      map.addListener('click', function(event) {
        addPin(event.latLng);
      });

      //Create a single infowindow object
      var infowindow = new google.maps.InfoWindow({
        content: 'test'
      });

    //Create markers with pins from database
    for (var i = 0; i < pins.length; i++) {
      var latitude = parseFloat(pins[i].latitude);
      var longitude = parseFloat(pins[i].longitude);
      var contentString = '<div id="content"><h3>'+ pins[i].pin_title + '</h3><p>' + pins[i].pin_description +
      '</p><p>Dropped by ' + pins[i].username + '</p></div>';

      var marker = new google.maps.Marker({
        position: {lat: latitude, lng:longitude},
        map: map,
        windowContent: contentString
      });
      //Add event listener for pin clicks
      google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(this.windowContent);
            infowindow.open(map, this);

        });
    }
    });
  } else {
    // Browser doesn't support Geolocation, center map at city & county bldg
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.739209, lng: -104.990255},
    zoom: 13
    });

    //Adds event listener to the map for new pins
    map.addListener('click', function(event) {
      addPin(event.latLng);
    });

    //Create a single infowindow object
    var infowindow = new google.maps.InfoWindow({
        content: 'test'
      });

    //Create markers with pins from database
    for (var i = 0; i < pins.length; i++) {
      var latitude = parseFloat(pins[i].latitude);
      var longitude = parseFloat(pins[i].longitude);
      var contentString = '<div id="content"><h3>'+ pins[i].pin_title + '</h3><p>' + pins[i].pin_description +
      '</p><p>Dropped by ' + pins[i].username + '</p></div>';

      var marker = new google.maps.Marker({
        position: {lat: latitude, lng:longitude},
        map: map,
        windowContent: contentString
      });
      //Add event listener for pin clicks
      google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(this.windowContent);
            infowindow.open(map, this);

        });
    }
  }
}

function addPin (location) {
  //Only allows one pin to be placed
  if (onePin) {
    var lat = location.lat;
    var lng = location.lng;

    //Assign hidden input vals on page to lat & lng
    $('#latitude').val(lat);
    $('#longitude').val(lng);

    pin = new google.maps.Marker({
      position: location,
      map: map
    });
  onePin = false;

  google.maps.event.addListener(pin, 'click', function () {
      this.setMap(null);
      onePin = true;
    });
  }
}




