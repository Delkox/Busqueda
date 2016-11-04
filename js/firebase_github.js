var config = {
	apiKey: "AIzaSyAU5rM0ToeXT5u5lDsbYKqXGHvlkbjHrVM",
	authDomain: "busqueda-b35b3.firebaseapp.com",
	databaseURL: "https://busqueda-b35b3.firebaseio.com",
	storageBucket: "busqueda-b35b3.appspot.com",
	messagingSenderId: "1068056825197"
};

firebase.initializeApp(config);

var prueba = document.getElementById('prueba');
var dbRef = firebase.database().ref().child('text');
dbref.on('value', snap => prueba.innerText = snap.val());