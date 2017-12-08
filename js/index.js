$function(){
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
//	 $.ajax({
//             url: '/places-info',
//             data: {
//                'location': position.lat + ',' + position.lng,
//                 'type': 'restaurant',
//                 'key': GOOGLE_API_KEY,
//                 'radius': 500
//             },
//             success: function(data) {
//                 debugger;
//             },
//             fail: function(data) {
//                 debugger;
//             }
//         });


        var params = {
             'location': new google.maps.LatLng(position.lat, position.lng),
             'radius': 500,
             'type': 'restaurant'
        };
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(params, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                var current_infowindow;
                _.each(results, function(place) {
                    var marker = new google.maps.Marker({
                        position: {
                            'lat': place.geometry.location.lat(),
                            'lng': place.geometry.location.lng()
                        },
                        map: map,
                        title: place.name
                    });
                    var infowindow_content = '<div id="content">' +
                                            '<h1 id="firstHeading" class="firstHeading">' + place.name + '</h1>'+
                                             '</div>';
                    var infowindow = new google.maps.InfoWindow({
                        content: infowindow_content
                    });

                    marker.addListener('click', function() {
                        if (current_infowindow) {
                            current_infowindow.close();
                        }
                        infowindow.open(map, marker);
                        current_infowindow = infowindow;

                        showDetailedInfo(place);
                    });
                });
            }
        });
    };

    function showDetailedInfo(place) {
        $('#detailed-info-wrapper').show();
    };

     
   initMap();
});

