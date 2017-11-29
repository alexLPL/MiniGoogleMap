$(function(){
 var DEFAULT_ZOOM = 15;
 var GOOGLE_API_KEY = 'AIzaSyCl2EfOePJUj5HmEjhGMvfLgoF1EFDghM0'; 

 function initMap() {
        var position = {lat: 47.6, lng: -122.3};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: DEFAULT_ZOOM,
          center: position
        });
        var marker = new google.maps.Marker({
          position: position,
          map: map
        });
	 $.ajax({
             url: '/places-info',
             data: {
                 'location': position.lat + ',' + position.lng,
                 'type': 'restaurant',
                 'key': GOOGLE_API_KEY,
                 'radius': 500
             },
             success: function(data) {
                 debugger;
             },
             fail: function(data) {
                 debugger;
             }
         });
      }
   initMap()
})
