//Google map object
var map;
var onePin = true;

$(document).ready(function () {
  $.getJSON("http://localhost:5000/pins/api", function(json) {
    initMap(json);
  });
});

function initMap(pins) {

  //Declare map variables
  var marker;

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

    //Populate map with pins from database
    for (var i = 0; i < pins.length; i++) {
      var latitude = parseFloat(pins[i].latitude);
      var longitude = parseFloat(pins[i].longitude);

      marker = new google.maps.Marker({
        position: {lat: latitude, lng:longitude},
        map: map,
      });
    }

    //
  map.addListener('click', function(event) {
    addPin(event.latLng);
  });
    //Error function
  },function() {
      //Client declined to allow current location, center map at enter map at city & county bldg
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.739209, lng: -104.990255},
      zoom: 13
      });

      //Populate map with pins from database
      for (var i = 0; i < pins.length; i++) {
        var latitude = parseFloat(pins[i].latitude);
        var longitude = parseFloat(pins[i].longitude);

        marker = new google.maps.Marker({
          position: {lat: latitude, lng:longitude},
          map: map,
        });
      }
    });
  } else {
    // Browser doesn't support Geolocation, center map at city & county bldg
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.739209, lng: -104.990255},
    zoom: 13
    });
    //Populate map with pins from database
    for (var i = 0; i < pins.length; i++) {
      var latitude = parseFloat(pins[i].latitude);
      var longitude = parseFloat(pins[i].longitude);

      marker = new google.maps.Marker({
        position: {lat: latitude, lng:longitude},
        map: map,
      });
    }
  }
}

function addPin (location) {
  //Only allows one pin to be placed
  if (onePin) {
    var pin = new google.maps.Marker({
      position: location,
      map: map
    });
  onePin = false;
  }
}




