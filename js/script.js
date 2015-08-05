// function submitInfo() {
// 	var name = $("#nameinput").val();
// 	var email = $("#emailinput").val();

// 	if (name && email){
// 		// this is where you make ajax call
// 		alert("Is your name " + name + "? Is your email " + email + "?" );
// 	} else {
// 		// tell the user they didn't give the right info
// 		if (name){
// 			alert("I didnt recieve you email address.");
// 		} else if (email) {
// 			alert("I didnt get your name.");
// 		} else{
// 			alert("I didnt get your name or email.")
// 		}
// 	}
// }

// function submitInfo(){
// 	$.ajax ({
// 		url:"http://347e6913.ngrok.com/test"
// 	})
// 	.done(function(data){
// 		alert(data.message);
// 	})
// 	.error(function (error){
// 		alert(error.message);
// 	});
// }

// function submitInfo(){
// 	var data= $("#nameinput").val();
// 	$. ajax({
// 		url:"http://347e6913.ngrok.com/test",
// 		method: "POST",
// 		dataType: "JSON",
// 		data: { message: data }
// 	})
// 	.done (function (data) {
// 		alert(data.message);
// 	})
// 	.error (function (error){
// 		alert(data.message);
// 	});
// }

function submitInfo () {
	var email = $("#emailinput").val();
	$.ajax({
		type: "POST",
		url: "http://localhost:3000/join",
		data:{ email: email },
		success: function (data) { console.log(data), alert("Success!"); }
	});
}

 var image1 = new Image()
 image1.src = "https://scontent-ord1-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/1918349_1243553161812_7632156_n.jpg?oh=65836c7a36f9d8cd795afc1e40817589&oe=56480037"
var image2 = new Image()
image2.src = "https://scontent-ord1-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/1918349_1243553161812_7632156_n.jpg?oh=65836c7a36f9d8cd795afc1e40817589&oe=56480037"
var image3 = new Image()
image3.src = ""
function slideit(){
     var step=1;
   	document.images.slide.src = eval("image"+step+".src")
  	if(step<2)
    step++
    step=1
  	setTimeout("slideit()",2500)
}
slideit();