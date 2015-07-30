function submitInfo() {
	var name = $("#nameinput").val();
	var email = $("#emailinput").val();

	if (name && email){
		// this is where you make ajax call
		alert("Is your name " + name + "? Is your email " + email + "?" );
	} else {
		// tell the user they didn't give the right info
		if (name){
			alert("I didnt recieve you email address.");
		} else if (email) {
			alert("I didnt get your name.");
		} else{
			alert("I didnt get your name or email.")
		}
	}
}