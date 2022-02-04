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