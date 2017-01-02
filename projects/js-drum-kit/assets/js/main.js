// Main JS File

function playSound(e) {
	var key = document.querySelector(".button[data-key='"+e.keyCode+"']");
	if(!key) return;
	key.classList.add("playing");
	var audio = document.querySelector("audio[data-key='"+e.keyCode+"']");
	audio.currentTime = 0;
	audio.play();
}

function playClick(num) {
	var item = document.querySelector(".button[data-key='"+num+"']");
	if(!item) return;
	item.classList.add("playing");
	var audio = document.querySelector("audio[data-key='"+num+"']");
	audio.currentTime = 0;
	audio.play();
}

function removeClass(elem) {
	elem.target.classList.remove("playing");
}

var keys = document.querySelectorAll(".button"); // get all keys

keys.forEach( function(elem,index) {
	elem.addEventListener('transitionend', removeClass);
	elem.addEventListener('click', function(e) {
		if(e.target.classList[0] !== "button") {
			playClick(e.target.parentNode.dataset.key);
		}
		else {
			playClick(e.target.dataset.key);	
		}
	});
});


document.addEventListener('keydown',playSound);