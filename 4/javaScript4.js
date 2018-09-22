function update(){
	var bG = document.getElementById("bg").value;
	var bR = document.getElementById("b").value;
	var wD = document.getElementById("w").value;
	

	if (bG == "red" || bG == "green" || bG == "blue"){
		document.getElementById("newLook").style.backgroundColor = bG;
	}
	else{
		alert("Chose from the list above!");
	}
	if (bR == "red" || bR == "green" || bR == "blue"){
		document.getElementById("newLook").style.borderColor = bR;
	}
	else{
		alert("Chose from the list above!");
	}
	if (isNaN(wD)){
		alert("Enter a number");
	}
	else{
		document.getElementById("newLook").style.borderWidth=wD+'px';
	}

}