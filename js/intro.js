// Make sure you open up the console in your browser!

// Map
var mapContainer1 = document.querySelector('#map1');
var mapContainer2 = document.querySelector('#map2');

var map1;
function initMap() {

	var myLatLng1 = {lat: -44.658812, lng: 169.130262};

  map1 = new google.maps.Map(document.getElementById('map1'), {
    zoom: 10,
    center: myLatLng1
  });

  var marker1 = new google.maps.Marker1({
    position: myLatLng1,
    map: map1,
    title: 'Fly to the Limit - Wanaka'
  });
}

var map2;
function initMap() {

	var myLatLng2 = {lat: -45.031998, lng: 168.648768};

  map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 10,
    center: myLatLng2
  });

  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map2,
    title: 'Fly to the Limit - Queenstown'
  });
}

// Booking form 

var registrationForm = document.querySelector('#registration');

// Get references to the input fields
var firstnameInput = document.querySelector('#firstname');
var firstnameMessage = document.querySelector("#firstname-message");
var lastnameInput = document.querySelector('#lastname');
var lastnameMessage = document.querySelector("#lastname-message");
var emailInput = document.querySelector('#email');
var emailMessage = document.querySelector("#email-message");
var mobileInput = document.querySelector('#mobile');
var mobileMessage = document.querySelector("#mobile-message");

var firstnamePattern = new RegExp("^[a-zA-Z]{1,20}$");
var lastnamePattern = new RegExp("^[a-zA-Z'.-]{1,20}$");
var mobilePattern = new RegExp("^[0-9 ]{12,13}$");
var emailPattern = new RegExp("^[0-9a-zA-Z@-_.]{5,30}$");


firstnameInput.onblur = function(){

	if( firstname.value.length < 3 ) {

		firstnameMessage.innerHTML = "Firstname must not be at least 3 characters";

	} else if( firstname.value.length > 20 ) {

		firstnameMessage.innerHTML = "Firstname must be at most 20 characters";

	} else if( firstnamePattern.test( this.value ) ) {
		// Hide any existing messages
		firstnameMessage.innerHTML = '';

	} else {
		// DIsplay an error to the user
		firstnameMessage.innerHTML = 'Please type your correct name';

	}
}

lastnameInput.onblur = function(){

	if( lastname.value.length < 3 ) {

		lastnameMessage.innerHTML = "Lastname must not be at least 3 characters";

	} else if( lastname.value.length > 20 ) {

		lastnameMessage.innerHTML = "Lastname must be at most 20 characters";

	} else if( lastnamePattern.test( this.value ) ) {
		// Hide any existing messages
		lastnameMessage.innerHTML = '';

	} else {
		// DIsplay an error to the user
		lastnameMessage.innerHTML = 'Please type your correct name';
	}
}

mobileInput.onblur = function(){

	if( mobile.value.length < 12 ) {

		mobileMessage.innerHTML = "Mobile number must be at least 12 numbers";

	} else if( mobile.value.length > 13 ) {

		mobileMessage.innerHTML = "Mobile number must be at most 13 numbers";

	} else if( mobilePattern.test( this.value ) ) {
		// Hide any existing messages
		mobileMessage.innerHTML = '';

	} else {
		// DIsplay an error to the user
		mobileMessage.innerHTML = 'Please use only number';
	}
}

emailInput.onblur = function(){

	if( emailPattern.test( this.value ) ) {
		// Hide any existing messages
		emailMessage.innerHTML = '';

	} else {
		// DIsplay an error to the user
		emailMessage.innerHTML = 'Please type in a right form as like an example';
	}
}



function clicked() {
    alert(' Booking confirmation will be arrive to your email in 24 hours. We are so looking forward to see you, thanks!');
}



































