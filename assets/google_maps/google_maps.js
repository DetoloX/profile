function initMap() {
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


//35.8389803,-47.4638417
var uluru = {lat: 35.8389803, lng: -55.4638417};
var map = new google.maps.Map(document.getElementById('map'), { zoom: 2, center: uluru });


var iconCoffee = {
    url: iconBase + 'coffee.png', // url
    scaledSize: new google.maps.Size(20, 20), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};

var iconDollar = {
    url: iconBase + 'dollar.png', // url
    scaledSize: new google.maps.Size(20, 20), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};

// mi universidad
var uluru = {lat: 43.5234823, lng: -5.6249236};
var marker = new google.maps.Marker({ position: uluru, map: map, icon: iconCoffee  });

// elcero gijon ,,17
var uluru = {lat: 43.5410346, lng: -5.6666497};
var marker = new google.maps.Marker({ position: uluru, map: map, icon: iconDollar });

// elcero oviedo ,
var uluru = {lat: 43.3640489, lng: -5.8572103};
var marker = new google.maps.Marker({ position: uluru, map: map, icon: iconDollar });

//!4d
// laboral centro de arte
var uluru = {lat: 43.5239272, lng: -5.6142859};
var marker = new google.maps.Marker({ position: uluru, map: map, icon: iconDollar });

// EMIP A Coruña ,
var uluru = {lat: 43.368613, lng: -8.390856};
var marker = new google.maps.Marker({ position: uluru, map: map, icon: iconCoffee });



// GAMOL ,,
var uluru = {lat: 19.4363987, lng: -99.1943588};
var marker = new google.maps.Marker({ position: uluru, map: map, icon: iconDollar });

// MUDO ,
var uluru = {lat: 19.3800015, lng: -99.1608341};
var marker = new google.maps.Marker({ position: uluru, map: map, icon: iconDollar });


// UP ,
var uluru = {lat: 19.3739029, lng: -99.1851291};
var marker = new google.maps.Marker({ position: uluru, map: map, icon: iconCoffee });

// KAPLAN USA ,
var uluru = {lat: 37.786572, lng: -122.4021734};
var marker = new google.maps.Marker({ position: uluru, map: map, icon: iconCoffee });

// Mérida Yucatan 21.026115,-89.5753583 ,
var uluru = {lat:  21.026115, lng: -89.5753583};
var marker = new google.maps.Marker({ position: uluru, map: map, icon: iconDollar });


}
