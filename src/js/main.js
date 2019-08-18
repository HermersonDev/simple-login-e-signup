
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
		validateData(event.target);
	});
}

function validateData(elt) {

	let name = elt.attributes.name.value;

	switch (name) {
		case 'email':
			validateEmail(elt);
			break;
		case 'senha':
		case 'confirm':
			validatePassword(elt, name);
			break;
		case 'nome':
			let value = elt.value || null;
			let error = document.querySelector(`#error-${elt.id}`);
			
			if (!value) {
				error.innerHTML = "Requerido";
				error.style.display = 'block';
				return false;			
			}

			break;
	}

	return;
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
		return;	
	}

	error.style.display = 'none';
	return;
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
			return;		
		}
	}

	error.display = 'none';

	return;		
}
