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
}