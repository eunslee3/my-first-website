const input = document.getElementById('btn');

function clickAlert() {
	alert('I was clicked!');
}

input.addEventListener('click', clickAlert);