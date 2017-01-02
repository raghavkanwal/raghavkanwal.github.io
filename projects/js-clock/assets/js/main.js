setInterval(setDate,1000);

var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".minute-hand");
var hourHand = document.querySelector(".hour-hand");

function setDate() {
	var now = new Date();
	var seconds = now.getSeconds();
	var secondsDegrees = seconds / 60 * 360 + 90;
	secondHand.style.transform="rotate("+secondsDegrees+"deg)";
	var minutes = now.getMinutes();
	var minutesDegrees = minutes / 60 * 360 + 90;
	minuteHand.style.transform="rotate("+minutesDegrees+"deg)";
	var hours = now.getHours();
	var hoursDegree = hours / 60 * 360 + 90;
	hourHand.style.transform="rotate("+hoursDegree+"deg)";
}