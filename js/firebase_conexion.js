(function() {

	var config = {
		    apiKey: "AIzaSyAU5rM0ToeXT5u5lDsbYKqXGHvlkbjHrVM",
		    authDomain: "busqueda-b35b3.firebaseapp.com",
		    databaseURL: "https://busqueda-b35b3.firebaseio.com",
		    storageBucket: "busqueda-b35b3.appspot.com",
		    messagingSenderId: "1068056825197"
	};
	firebase.initializeApp(config);

	angular.module('app', ['firebase']);
	angular.controller('MyCrtl', function($firebaseObject) {
		const rootRef = firebase.database().ref().child('angular');
		const ref = rootRef.child('object');
		this.object = $firebaseObject(ref);
	});
}());