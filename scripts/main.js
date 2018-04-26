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




//Reference messages collection
var messagesRef = firebase.database().ref('messages');




//listen for form submit
document.getElementById('serial').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
	e.preventDefault();

	//Get values
	var serialNumber = getInputVal('serialNumber');
  
	//save message
	saveMessage(serialNumber);

	console.log(serialNumber);


}

//function to get get form values
function getInputVal(id){
	return document.getElementById(id).value;
}


//save message to firebase
function saveMessage(serialNumber){
	var newMessageRef =  messagesRef.push();
	newMessageRef.set({
		serialNumber: serialNumber
	});







//reference to database .child reference the child

var rootRef = firebase.database().ref();
var masterRef = rootRef.child("SUFPART1");
var messages = rootRef.child("messages");



messages.once("child_added", function(snapshot) {
  var newPost = snapshot.val();


document.getElementById("text").innerHTML = "Serial Number: " + newPost.serialNumber; },

);


//retrieves suffragette data

//I tried to pass serialNumber into equalTo() but it won't work
masterRef.orderByChild("NUMBER").equalTo(6).on("child_added", function(snapshot) {
  var newPost = snapshot.val();
  console.log(newPost.FIRST_NAME);

  document.getElementById("text2").innerHTML = "Name: " + newPost.TTL +" "+ newPost.FIRST_NAME + " " +newPost.SURNAME+ "<br>Locality: " + newPost.LOCALITY + "<br>Town/Suburb: " + newPost.TOWN_SUBUR; 
});




}




