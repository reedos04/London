
/*$(document).ready(function(){
	alert("ready for jQUery");
});*/


var myImage = document.getElementById("pauls");
var imageArray = ["stpauls.jpg", "stpauls1.jpg", "stpauls2.jpg", "stpauls3.jpg", "stpauls4.jpg", "stpauls5.jpg", "stpauls6.jpg", "stpauls7.jpg","stpauls8.jpg","stpauls9.jpg","stpauls10.jpg","stpauls11.jpg"];
var imageIndex = 0;



function changeImage () {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex ++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
};

setInterval(changeImage, 800);
