
let login = document.querySelector('#login');
let signup = document.querySelector('#signup');
let go_signup =  document.querySelector('#go-signup');
let back_login = document.querySelector('#back-login');

go_signup.addEventListener('click', (event) => {
	login.style.display = "none";
	signup.style.display = "block";
});

back_login.addEventListener('click', (event) => {
	signup.style.display = "none";
	login.style.display = "block";
});

let inputs = document.querySelectorAll('input');

for (let h = 0; h < inputs.length; h++) {
	
	inputs[h].addEventListener('focusin', (event) => {
		event.target.parentElement.style.boxShadow = "1px 1px 5px rgba(41, 98, 255, 0.5)";
	});

	inputs[h].addEventListener('focusout', (event) => {
		event.target.parentElement.style.boxShadow = "none";
		if (!validateData(event.target)) {
			event.target.parentElement.style.border = "2px solid #d50000";
			event.target.nextSibling.nextSibling.style.color = "#d50000";
		} else {
			event.target.parentElement.style.border = "2px solid #2962ff";
			event.target.nextSibling.nextSibling.style.color = "#2962ff";
		}
	});
}

function validateData(elt) {

	let name = elt.attributes.name.value;

	switch (name) {
		case 'email':
			return validateEmail(elt);
		case 'senha':
		case 'confirm':
			return validatePassword(elt, name);
		case 'nome':
			return validateNome(elt);
	}

	return true;
}

function validateNome(elt) {
	let value = elt.value || null;
	let error = document.querySelector(`#error-${elt.id}`);
	
	if (!value) {
		error.innerHTML = "Requerido";
		error.style.display = 'block';
		return false;			
	}

	error.style.display = 'none';
	return true
}

function validateEmail(elt) {
	let value = elt.value || null;
	let error = document.querySelector(`#error-${elt.id}`);

	if (!value) {
		error.innerHTML = "Requerido";
		error.style.display = 'block';
		return false;			
	}

	let pattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

	console.log(pattern.test(value));

	if (!pattern.test(value)) {
		error.innerHTML = "Inválido";
		error.style.display = 'block';
		return false;
	}

	error.style.display = 'none';
	return true;
}

function validatePassword(elt, name) {

	let value = elt.value || null;
	let error = document.querySelector(`#error-${elt.id}`);

	if (!value) {
		error.innerHTML = "Requerido";
		error.style.display = 'block';
		return false;			
	}

	if (name === 'confirm') {
		let senha = document.querySelector('#senha2').value;
		if (!(senha === value)) {
			error.innerHTML = "Não compatível";
			error.style.display = 'block';
			return false;		
		}
	}

	error.style.display = 'none';

	return true;		
}
