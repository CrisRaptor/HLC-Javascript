let mensaje = document.getElementById("mensaje");
let aviso = document.getElementById("aviso");
let form = document.forms[0]
let btnRegistrarse = form.querySelector("button");
let userInput = form.querySelector("input");
let cookieUser = docCookies.getItem("user");
let textUser = document.querySelector("textarea");


document.addEventListener("DOMContentLoaded", () => {
    btnRegistrarse.addEventListener('click',registrar);
    userInput.addEventListener('keydown',validarInput);
    let cookieTextUser = docCookies.getItem("userdata");
    aviso.style.visibility = "hidden"

    if (existeUsuario()){
        inicioSesion()
        
    } else {
        ocultarDisplayFormulario(false);
        mensaje.innerText = "¡Bienvenido a la página web!";
    }
})

//Funcion del boton Registrar del formulario
function registrar() {
    if (validarInput()){
        docCookies.setItem("user",userInput.value, 300);
    } else {
        inicioSesion();
    }
}

//Funcionalidad al registrarse
function inicioSesion(){
    let idInterval = setInterval(guardarTextArea,2000);
    let userData = cookieUser.split(";");
    ocultarDisplayFormulario(true);
    if (cookieTextUser != null){
        let cookieTextData = cookieTextUser.split(";");
        textUser.value = (cookieTextData[1] == undefined)?"":cookieTextData[1];
    }
    mensaje.innerText = `¡Bienvenido a la página web ${cookieUser}!`;
}

//Comprueba si hay una cookie de usuario
function existeUsuario(){
    return (cookieUser != null);
}

function validarInput(){
    if (userInput.value.toString().length < 4) {
        aviso.style.visibility = "visible";
        return false;
    } else {
        aviso.style.visibility = "hidden";
        return true;
    }
}

function ocultarDisplayFormulario(booleano){
    if (booleano){
        form.style.display = "none";
        textUser.style.display = "initial";
    } else {
        form.style.display = "initial";
        textUser.style.display = "none";
    }
}

function guardarTextArea(){
    docCookies.setItem("userdata",textUser.value);
}