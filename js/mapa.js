function init(){

}
var miMapa;
function initMap() {
  miMapa = new google.maps.Map(document.getElementById('map'), {
    center: {
    	lat: -16.457389199999998, 
    	lng: -71.5315308},
    	zoom: 16
  });
  var latLongPazPeru={
	lat: -16.457389199999998, 
    lng: -71.5315308
}
var pazPeru = new google.maps.Marker({
    position: latLongPazPeru,
    map: miMapa,
    title: 'aquí estamos!!'
  });
}

