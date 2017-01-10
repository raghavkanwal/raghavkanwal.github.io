var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = [];

fetch(endpoint).then(function(blob) {
	return blob.json().then( function(data) {
		cities = data;
		console.log(cities);
	});
});

console.log("cities" , cities);

function findMatch(word,cities) {
	console.log("find matches");
	return cities.filter( function(elem, index) {
		var regex = new RegExp(word,'gi');
		return elem.city.match(regex) || elem.state.match(regex);
	})
}

var search = document.getElementById("search_field");
var suggestions = document.querySelector(".suggestions");

search.addEventListener('keyup', displayMatches);

function displayMatches() {
	matchArray = findMatch(this.value,cities);
	console.log("matches", matchArray);
	var html = matchArray.map ( function(elem, index) {
		return '<li class="suggestion">'+elem.city+', '+elem.state+'<span> | '+elem.population+'</span></li>';
	}).join('');

	suggestions.innerHTML = html;

	console.log(html);
}
