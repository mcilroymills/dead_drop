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
      var latitude = parseFloat(pins[i].latitude);
      var longitude = parseFloat(pins[i].longitude);

      var marker = new google.maps.Marker({
        position: {lat: latitude, lng:longitude},
        map: map,
        title: 'Hello World!'
      });
      console.log(latitude);
      console.log(longitude);
    }
  }




