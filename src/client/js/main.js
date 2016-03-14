// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  var myCenter=new google.maps.LatLng(39.73929, -104.99039);
  console.log("myCenter:",myCenter);

  function initialize(myCenter) {
    var mapProp = {
          center:myCenter,
          zoom:18,
          mapTypeId:google.maps.MapTypeId.HYBRID
        };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker=new google.maps.Marker({
          position:myCenter,
          animation:google.maps.Animation.BOUNCE
        });
    }

  google.maps.event.addDomListener(window, 'load', initialize);

});