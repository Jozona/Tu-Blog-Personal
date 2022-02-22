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
const password2 = document.getElementById('password2');
const btnConfirmarRegs= document.getElementById('btnConfirmarRegs');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

var correcto = true;
function checkInputs() {
	//Checamos los valores individualmente
    const nombreValor = nombre.value.trim();
    const apellidoValor = apellido.value.trim();
    const nacimientoValor = nacimiento.value.trim();
    const correoValor = correo.value.trim();
    const fotoPerfilValor = fotoPerfil.value.trim();
	const usernameValor = username.value.trim();
	const passwordValor = password.value.trim();
    const passwordConfirmarValor = password2.value.trim();

    if(nombreValor === '') {
		setErrorFor(nombre, 'Escribe tu nombre');
        correcto = false;
	} else if (!esNombre(nombreValor)) {
		setErrorFor(nombre, 'Nombre invalido');
        correcto = false;
	} else {
		setSuccessFor(nombre);
	}

    if(apellidoValor === '') {
		setErrorFor(apellido, 'Escribe tus apellidos');
        correcto = false;
	} else if(!esApellido(apellidoValor)) {
        setErrorFor(apellido, 'Apellido invalido');
        correcto = false;
    }
    else {
		setSuccessFor(apellido);
	}

    if(nacimientoValor === '') {
		setErrorFor(nacimiento, 'Escoge una fecha de nacimiento');
        correcto = false;
	} else if(!esNacimiento(nacimientoValor)) {
        setErrorFor(nacimiento, 'Fecha de nacimiento invalida');
        correcto = false;
    }else {
		setSuccessFor(nacimiento);
	}

	if(correoValor === '') {
		setErrorFor(correo, 'Correo no puede estar en blanco');
        correcto = false;
	} else if (!esCorreo(correoValor)) {
		setErrorFor(correo, 'Correo invalido');
        correcto = false;
	} else {
		setSuccessFor(correo);
	}

    if(fotoPerfilValor === '') {
		setErrorFor(fotoPerfil, 'Una foto de perfil es necesaria');
        correcto = false;
	} else if (!esFoto(fotoPerfilValor)) {
		setErrorFor(fotoPerfil, 'Foto invalida');
        correcto = false;
	} else {
		setSuccessFor(fotoPerfil);
	}

    if(usernameValor === '') {
		setErrorFor(username, 'Usuario no puede estar en blanco');
        correcto = false;
	} else if(!esUsername(usernameValor)) {
        setErrorFor(username, 'Nombre de usuario invalido');
        correcto = false;
    }else {
		setSuccessFor(username);
	}
	
	if(passwordValor === '') {
		setErrorFor(password, 'Contraseña no puede estar en blanco');
        correcto = false;
	}else if (!esContra(passwordValor)) {
		setErrorFor(password, 'La contraseña necesita: 8 caracteres, 1 letra mayuscula, 1 letra minuscula, 1 numero, 1 signo de puntuacion');
        correcto = false;
    } else {
		setSuccessFor(password);
	}

    if(passwordConfirmarValor === '') {
		setErrorFor(password2, 'Contraseña no puede estar en blanco');
        correcto = false;
	}else if (!esContra(passwordConfirmarValor)) {
		setErrorFor(password2, 'Contraseña invalida');
        correcto = false;
	}else if(passwordConfirmarValor != passwordValor){
        setErrorFor(password2, 'Contraseña no coincide');
        correcto = false;
    }
    else {
		setSuccessFor(password2);
	}

    if(correcto){
        alert("Has sido registrado.");
        window.location.reload(); 
    }
    correcto = true;
}

//Cambiar aparencia de seccion de input
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'estilo-input success';
}

//Cambiar aparencia si el input es incorrecto
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'estilo-input error';
	small.innerText = message;
} 

// Funciones que verifican los inputs

//Checar correo
function esCorreo(correo) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
}

function esNombre(input){
    return /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/ .test(input); 
}

function esApellido(input){
    return /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/ .test(input); 
}

function esNacimiento(input){
    return true;
}


let regexContra = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
function esContra(input){
    return regexContra.test(input);
}

function esUsername(input){
    return true;
}

function esFoto(input){
    return true;
}

//Checar fecha 
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("nacimiento").setAttribute("max", today);