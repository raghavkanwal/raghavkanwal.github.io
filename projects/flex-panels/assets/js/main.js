var items = document.querySelectorAll(".gallery-item");

function toggleOpen(e) {
	// items.forEach(function(elem,index){
	// 	elem.classList.remove('selected');
	// })
	this.classList.toggle('selected');
}

function swipeIn() {
	this.classList.toggle('active');
}

items.forEach( function(elem, index) {
	elem.addEventListener('click',toggleOpen);
	elem.addEventListener('transitionend',swipeIn);
});

