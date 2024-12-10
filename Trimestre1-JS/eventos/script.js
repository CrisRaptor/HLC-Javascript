const form = document.forms.agendaForm;
console.log(form.txtUsuario);
form.innerHTML += `<p id="error"></p>`;
const errorP = document.querySelector('p[id="error"]');
const botonCrear = document.querySelector('button[id="btnAdd"]');
console.log(botonCrear);

let id = 0;

botonCrear.addEventListener('click', (event) => {
    let checked = form.chkSeguro.checked
    if (form.txtUsuario.value !== "" && checked){
        console.log("yes");
        errorP.innerText = "";
        insertData();
    } else {
        console.log("no");
        errorP.innerText = "";
        if (form.txtUsuario.value === ""){
            console.log("no user");
            errorP.innerText += `El usuario esta vacio. 
            Escriba un usuario valido.
            `;
        }
        if(!checked){
            console.log("no check");
            errorP.innerText += `No estas seguro. 
            Marca 'segurisimo' si lo estás.
            `;
        } 
    }
    
    });


const insertData = () => {
    let table = document.querySelector("table");
    let data = form.elements;
    
   
    console.log(table.rows[0].cells.length)
    table.innerHTML += `<tr id="row${id}"></tr>`;
    let row = document.querySelector(`tr[id="row${id}"]`)
    let contador = 0;
    while (contador < table.rows[0].cells.length){
        row.innerHTML += `<td>${data[contador].value}</td>`
        contador++;
    };
    id++;
}

/*{
    let escribir = function(mensaje) {
        document.getElementById("caja").innerHTML = '<p>' + mensaje + '</p>';
    }

    let teclasnormales = function(e) {
        let codigo = e.charCode || e.keyCode;
        let letra = String.fromCharCode(codigo);
        escribir("Carácter [" + letra + "]<br>Código [" + codigo + "]");
    }

    let teclasespeciales = function(e) {
        if (e.ctrlKey) {
            escribir("Carácter [ctrl]<br>Código [" + e.keyCode + "]");
        }
        if (e.altKey) {
            escribir("Carácter [alt]<br>Código [" + e.keyCode + "]");
        }
        if (e.shiftKey) {
            escribir("Carácter [shift]<br>Código [" + e.keyCode + "]");
        }
    }

    let init = function() {
        document.addEventListener("keyup", teclasnormales);
        document.addEventListener("keydown", teclasespeciales);
    }

    window.onload = init;
}*/
