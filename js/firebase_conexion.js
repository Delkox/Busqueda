 var config = {													//otro JSON
    apiKey: "AIzaSyAU5rM0ToeXT5u5lDsbYKqXGHvlkbjHrVM",
    authDomain: "busqueda-b35b3.firebaseapp.com",
    databaseURL: "https://busqueda-b35b3.firebaseio.com",
    storageBucket: "busqueda-b35b3.appspot.com",
    messagingSenderId: "1068056825197"
  };
  firebase.initializeApp(config);

  var ref = new firebase(config.databaseURL);
  ref.child("text").on("value", function(snapshot){
  	console.log(snapshot.val());
  });