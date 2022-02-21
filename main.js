//Obetenemos el modal
var modal= document.getElementById('registroModal');
//Obtener donde hace click
var registrateLInk = document.getElementById('linkModal');
//Boton de cerrar
var cerrarBtn = document.getElementsByClassName('closeBtn')[0];

//Buscar el click
registrateLInk.addEventListener('click', openModal);

//Buscar click para cerrar
cerrarBtn.addEventListener('click', closeModal);

//Funcion para abrir el modal
function openModal(){
    modal.style.display = 'block';
}


//Funcion para cerrar el modal
function closeModal(){
    modal.style.display = 'none';

}

// // Validaciones
const form = document.getElementById('form-registro');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const nacimiento = document.getElementById('nacimiento');
const correo = document.getElementById('correo');
const fotoPerfil = document.getElementById('fotoPerfil');
const username = document.getElementById('username');
const password = document.getElementById('password');
const btnConfirmarRegs= document.getElementById('btnConfirmarRegs');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
    const nombreValor = username.value.trim();
    const apellidoValor = username.value.trim();
    const nacimientoValor = username.value.trim();
    const correoValor = username.value.trim();
    const usernameValue = username.value.trim();
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
}