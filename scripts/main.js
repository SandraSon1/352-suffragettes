
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC584d7KlFtgazL7SjOPMKkUD--HB6lZnA",
    authDomain: "suffragettes-2a52c.firebaseapp.com",
    databaseURL: "https://suffragettes-2a52c.firebaseio.com",
    projectId: "suffragettes-2a52c",
    storageBucket: "suffragettes-2a52c.appspot.com",
    messagingSenderId: "220107970430"
  };
  firebase.initializeApp(config);



var rootRef = firebase.database().ref();
var masterRef = rootRef.child("SUFPART1");



var log = document.getElementById('log');

document.getElementById('init').addEventListener('click', function(event) {
    var username = prompt('Enter Number');
   
    masterRef.once('value', function(snapshot) {
        if (snapshot.hasChild(username)) {
            masterRef.child(username).update({ NUMBER: username });
        }
        else {
            alert("Signature doesn't exists");
        }
    });
});

masterRef.on('child_changed', function(snapshot) {
    var val = snapshot.val();
    console.log(val.FIRST_NAME);
    document.getElementById("text2").innerHTML = val.TTL +" "+ val.FIRST_NAME + " " +val.SURNAME;
    document.getElementById("text3").innerHTML = val.TOWN_SUBUR +"<br> "+ val.LOCALITY;


    
});


