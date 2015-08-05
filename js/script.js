var url = "http://hbcuchicagoconnection.azurewebsites.net/";

function submitInfo () {
	var email = $("#emailInput").val();
	var name = $("#nameInput").val();
	if(name && isValidEmailAddress(email)) {
		$.ajax({
			type: "POST",
			url: url + "join",
			data: { 
				email: email,
				name: name 
			},
			success: function (data) {
				alert("Success!")
			},
			error: function (error) {
				var code = error.status;
				switch (code) {
					case 500:
						alert("Some went wrong!");
						break;
					case 400:
						alert("Bad input!");
						break;
					case 409:
						alert("Email already on the list!");
						break;
					default:
						break;
				}
			}
		});
		$("#emailInput").val("");
		$("#nameInput").val("");
	} else {
		alert("Please provide a name and a vaild email.")
	}	
}

function isValidEmailAddress(email) {
	var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	return pattern.test(email);
}

// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });