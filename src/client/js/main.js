  console.log('sanity check!');

  var map;
  function initMap(pins) {
    pins = JSON.parse(pins);
    var markerArray = [];
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.739209, lng: -104.990255},
      zoom: 13
    });
    for (var i = 0; i < pins.length; i++) {


      var marker = new google.maps.Marker({
        position: {lat: parseFloat(pins[i].latitude), lng:parseFloat(pins[i].longitude)},
        map: map,
        title: 'Hello World!'
      });
      console.log(marker.position);
    }
  }