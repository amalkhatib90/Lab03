function next(){
	var theImgTag = document.getElementById("imgId");
	var base = "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image.jpg"
	var list = ["file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image1.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image2.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image3.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image4.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image5.jpg"];
				
	var src = theImgTag.src;
	var i = list.indexOf(src);
	if (i != 4){
		theImgTag.src= list[i+1];
	}
	else{
		theImgTag.src = base;
	}
}

function pre(){
	var theImgTag = document.getElementById("imgId");
	var list = ["file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image1.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image2.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image3.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image4.jpg", "file:///C:/Users/ayaha/Desktop/EECS448New/Lab03/2/image5.jpg"];
	var src = theImgTag.src;
	var i = list.indexOf(src);
	if (i != 0){
		theImgTag.src= list[i-1];
	}
	else {
		theImgTag.src = list[4];
	}
}