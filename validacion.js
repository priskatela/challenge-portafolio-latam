/*function validarFormulario() {
    var nombre = document.querySelector["form"]["nombre"].value;
    var email = document.querySelector["form"]["email"].value;
    var asunto = document.querySelector["form"]["asunto"].value;
    var mensaje = document.querySelector["form"]["mensaje"].value;

    var nombreError = document.getElementById("nombreError");
    var emailError = document.getElementById("emailError");
    var asuntoError = document.getElementById("asuntoError");
    var mensajeError = document.getElementById("mensajeError");

    var valido = true;

    // Validación del nombre
    if (nombre.length < 3) {
        nombreError.textContent = "El nombre debe tener al menos 3 caracteres";
        valido = false;
    } else {
        nombreError.textContent = "";
    }

    // Validación del email
    if (email.length < 5 || email.indexOf("@") === -1) {
        emailError.textContent = "Por favor ingrese un correo electrónico válido";
        valido = false;
    } else {
        emailError.textContent = "";
    }

    // Validación del asunto
    if (asunto.length === 0) {
        asuntoError.textContent = "Por favor ingrese un asunto";
        valido = false;
    } else {
        asuntoError.textContent = "";
    }

    // Validación del mensaje
    if (mensaje.length === 0) {
        mensajeError.textContent = "Por favor ingrese un mensaje";
        valido = false;
    } else {
        mensajeError.textContent = "";
    }*/

const form=document.querySelector("form");
const inputs= document.querySelectorAll("form input");
const inputA= document.querySelectorAll("form texarea");
const inputE=document.querySelector("#enviar")

const expresiones = {
    nombre:/^[a-zA-Z\s]{1,40}$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto:/^[a-zA-Z\s]{1,20}$/,
    mensaje:/^[a-zA-Z\s]{1,200}$/,
};

const campos={
    nombre: false,
    email: false,
    asunto:false,
    mensaje: false,
}
const validarFormulario=(e)=>{
    switch(e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre,e.target,"nombre");
            break;
        case "email":
            validarCampo(expresiones.email,e.target,"email");
             break;
        case "asunto":
            validarCampo(expresiones.asunto,e.target,"asunto");
            break;
         case "mensaje":
            TextArea(expresiones.mensagem,e.target,"mensaje");
            break;
        }
};
const validarCampo=(expresion,input,campo) =>{
    if(expresion.test(input.value)){
    document.getElementById(campo).classList.remove("incorrecto");
    document.getElementById(campo).classList.add("correcto");

    campos[campo]=true;
} else{
    document.getElementById(campo).classList.add("incorrecto");
    document.getElementById(campo).classList.remove("correcto");

    campos[campo]=false;
    }
};

inputs.forEach((input) =>{
    input.addEventListener("blur",validarFormulario);
});







