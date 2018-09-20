function next(){
	var theImgTag = document.getElementById("imgId");
	var list = ["file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image1.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image2.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image3.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image4.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image5.jpg"];
	var src = theImgTag.src;
	var i = list.indexOf(src);
	if (i != 5){
		theImgTag.src= list[i+1];
	}
	else{
		theImgTag.src = list[0];
	}
}

function pre(){
	var theImgTag = document.getElementById("imgId");
	var list = ["file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image1.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image2.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image3.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image4.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/image5.jpg"];
	var src = theImgTag.src;
	var i = list.indexOf(src);
	if (i != 0){
		theImgTag.src= list[i-1];
	}
	else {
		theImgTag.src = list[5];
	}
}