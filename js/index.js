const USERNAME = 'MARCIO';
const PASSWORD = 'PASS';


const doLogin = (e) => {
	const username = $('#username').val();
	const password = $('#password').val();
	
	if(!(username.length && password.length)){
		alert('You need to type username and password.');
		return;
	}
	
	if(username !== USERNAME || password !== PASSWORD){
		alert('Invalid username and/or password.');
		return;
	}
	
	window.location.href = 'https://oliveira-marcio.github.io/';
	e.preventDefault();
}

$('#form-container').submit(doLogin);