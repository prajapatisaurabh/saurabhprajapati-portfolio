function cheak() {
	var uname = document.getElementById('uname');
	var pass = document.getElementById('pass');
	if (uname.value === 'goodmorning') {
		if (pass.value === 'goodmorning') {
			window.location.href="home.html"
		}else{
			alert('enter proper password');
		}
	}else{
		alert('error plase enter proper username');
	}
}