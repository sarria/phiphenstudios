const btns = document.getElementById('slider_btns');
if (btns) {
	const bullets = btns.getElementsByTagName('a');
	let slide = 0;
	bullets[slide].focus();
	setInterval(function() {
		if (window.location.pathname === '/') {
			slide++;
			if (slide===bullets.length) slide = 0;
			bullets[slide].click();
			bullets[slide].focus();
		}
	}, 5000);
}
