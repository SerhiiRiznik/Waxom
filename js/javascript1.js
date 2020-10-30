let scrollMenu = document.querySelector('.menu');
let showBox = document.querySelectorAll('.box');
let goTop = document.querySelector('.goTop');
let navBag = document.getElementById('bag');


let myNumber = document.getElementById('num1');



document.addEventListener('scroll', function () {
	let showBoxY = window.scrollY

	if (showBoxY >= 1) {
		scrollMenu.classList.add('ScrollFixed');
	} else {
		scrollMenu.classList.remove('ScrollFixed');
	}

})

// back to top 
goTop.onclick = function timeToTop() {
	butTop = window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});

}




























