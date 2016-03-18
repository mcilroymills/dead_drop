//Global map variable
var map;

function getPin (pin_id) {
  $.getJSON("/pins/getpin/" + pin_id, function(json) {
    initMap(json);
  });
}

function initMap(pin) {

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

    //Current position
    var pos = {
      lat: parseFloat(pin[0].latitude),
      lng: parseFloat(pin[0].longitude)
    };

    console.log(pos);

    //Create google map object
    map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 18
    });

    //Create a single infowindow object
    var infowindow = new google.maps.InfoWindow({
        content: 'test'
      });

    //Create markers with pin from database
    for (var i = 0; i < pin.length; i++) {
      var latitude = parseFloat(pin[i].latitude);
      var longitude = parseFloat(pin[i].longitude);
      var contentString = '<div class="content"><h3>'+ pin[i].pin_title + '</h3><img alt="No image uploaded...be ready for a surprise!" src="' + pin[i].pin_image + '"><br><br><p><strong>' + pin[i].pin_description + '</strong></p><p>Dropped by <a>' + pin[i].username + '</a></p></div>';

      var marker = new google.maps.Marker({
        position: {lat: latitude, lng:longitude},
        map: map,
        windowContent: contentString,
        icon: '../images/grn_blank.png'
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
      zoom: 18
      });

    //Create a single infowindow object
    var infowindow = new google.maps.InfoWindow({
        content: 'test'
      });

    //Create markers with pin from database
    for (var i = 0; i < pin.length; i++) {
      var latitude = parseFloat(pin[i].latitude);
      var longitude = parseFloat(pin[i].longitude);
      var contentString = '<div id="content"><h3>'+ pin[i].pin_title + '</h3><p>' + pin[i].pin_description +
      '</p><p>Dropped by ' + pin[i].username + '</p></div>';

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
    zoom: 18
    });

    //Create a single infowindow object
    var infowindow = new google.maps.InfoWindow({
        content: 'test'
      });

    //Create markers with pin from database
    for (var i = 0; i < pin.length; i++) {
      var latitude = parseFloat(pin[i].latitude);
      var longitude = parseFloat(pin[i].longitude);
      var contentString = '<div id="content"><h3>'+ pin[i].pin_title + '</h3><p>' + pin[i].pin_description +
      '</p><p>Dropped by ' + pin[i].username + '</p></div>';

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