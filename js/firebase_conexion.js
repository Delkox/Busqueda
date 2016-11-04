// Initialize Firebase
var config = {
	apiKey: "AIzaSyAU5rM0ToeXT5u5lDsbYKqXGHvlkbjHrVM",
    authDomain: "busqueda-b35b3.firebaseapp.com",
    databaseURL: "https://busqueda-b35b3.firebaseio.com",
    storageBucket: "busqueda-b35b3.appspot.com",
    messagingSenderId: "1068056825197"
};

firebase.initializeApp(config);

var app = angular.module("comment", ["firebase"]);
app.controller("MainCtrl", function($scope,$firebaseObject){

	var ref = firebase.database().ref();
	$scope.name = $firebaseObject(ref);

})