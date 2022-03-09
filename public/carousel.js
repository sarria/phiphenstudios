/*
document.addEventListener("DOMContentLoaded", function(){
    console.log('DOM Loaded')
});
const btns = document.getElementById('slider_btns');
if (btns) {
	const bullets = btns.getElementsByTagName('a');
	let slide = 0;
	bullets[slide].focus();
	setInterval(function() {
		slide++;
		if (slide===bullets.length) slide = 0;
		bullets[slide].click();
		bullets[slide].focus();
	}, 5000);
}
*/