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


// //Reference messages collection
// var messagesRef = firebase.database().ref('messages');




// //listen for form submit
// document.getElementById('serial').addEventListener('submit', submitForm);

// //submit form
// function submitForm(e){
// 	e.preventDefault();

// 	//Get values
// 	var serialNumber = getInputVal('serialNumber');

// 	//save message
// 	saveMessage(serialNumber);

// 	console.log(serialNumber);
// }

// //function to get get form values
// function getInputVal(id){
// 	return document.getElementById(id).value;
// }


// //save message to firebase
// function saveMessage(serialNumber){
// 	var newMessageRef =  messagesRef.push();
// 	newMessageRef.set({
// 		serialNumber: serialNumber
// 	});
// }

var rootRef = firebase.database().ref();
var masterRef = rootRef.child("messages");


masterRef.orderByChild("number").equalTo(1).on("child_added", function(snapshot) {
  var newPost = snapshot.val();
  console.log(newPost.firstname);

  document.getElementById("text2").innerHTML = "Name: " + newPost.firstname + " " +newPost.surname + "<br>City: " + newPost.locality; 
});




masterRef.on("child_added", function(snapshot) {
  var newPost = snapshot.val();

  // console.log("Name: " + newPost.firstname);
  //     console.log("Name: " + newPost.surname);
  //       console.log("Name: " + newPost.locality);
document.getElementById("text").innerHTML = "Name: " + newPost.firstname + " " +newPost.surname + "<br>City: " + newPost.locality; 
},

  function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});



