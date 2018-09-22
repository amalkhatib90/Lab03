function myFunc(){

  var password = prompt("Enter your password");
while (password.length < 8){
alert("password should be at least 8 char")
password = prompt("Enter your password");
}
var passwordV = prompt ("Vertify your password");
while (password != passwordV){
alert ("The passwords do not match")
passwordV = prompt ("Vertify your password");
if (passwordV === null)
break;
}
}
