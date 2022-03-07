document.addEventListener("DOMContentLoaded", function(){
    console.log('DOM Loaded')
});
const btns = document.getElementById('slider_btns');
alert(btns);
if (btns) {
	const bullets = btns.getElementsByTagName('a');
	console.log(bullets.length);
	bullets[1].click()
}