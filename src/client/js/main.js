




function initMap(pins) {
  pins = JSON.parse(pins);
  var markerArray = [];
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.739209, lng: -104.990255},
    zoom: 13
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
  for (var i = 0; i < pins.length; i++) {
    var latitude = parseFloat(pins[i].latitude);
    var longitude = parseFloat(pins[i].longitude);

    var marker = new google.maps.Marker({
      position: {lat: latitude, lng:longitude},
      map: map,
      title: 'Hello World!'
    });
  }
}