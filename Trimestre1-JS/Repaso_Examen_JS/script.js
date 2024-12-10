let table = '';
const form = document.forms[0];
let id = 0;
form.querySelector('select').disabled = true;

// Listar los valores
animals.forEach(animal => {
    table += `<tr id="row${id}">
        <td id="name${id}">${animal.name}</td>
        <td id="species${id}">${animal.species}</td>
        <td id="foodlike${id}">${animal.foods.likes.join(', ')}</td>
        <td id="fooddislike${id}">${animal.foods.dislikes.join(', ')}</td>
        <td><button id="b${id}" class="btn btn-light">Editar</button></td>
        </tr>
        `;
    id++;
});
let tbody = document.querySelector('tbody');
tbody.innerHTML = table;

//Añadir evento al boton Editar
tbody.querySelectorAll('button').forEach(e => {
    let id = e.getAttribute("id").substring(1);
    e.addEventListener('click',editarAnimal);
})
form.querySelector('button').addEventListener('click',guardarFormulario);

// Asignar las filas generadas a la tabla
function editarAnimal() {
    let id = this.getAttribute('id').substring(1);
    let row = tbody.querySelector(`tr[id=row${id}]`);
    let especie = tbody.querySelector(`td[id=species${id}]`).innerHTML
    let select = form.querySelector('select');
    let values = [];
    //Habilitar
    select.disabled = false;
    
    //Mostar datos en el formulario
    form.querySelector('input[name=nombre]').value = tbody.querySelector(`td[id=name${id}]`).innerText;

    //Buscar raza
    switch (especie) {
        case "dog":
            values.push("Pitbull");
            values.push("Chihuahua");
            values.push("Pastor aleman");
            break;
        case "cat":
            values.push("Ruso azul");
            values.push("Egipcio");
            values.push("Maine coone");
            break;
        default:
            break;
    }
    //Cargar razas
    select.innerHTML = `<option value="">--Raza--</option>`;
    values.forEach(e => {
        select.innerHTML += `<option value="${e}">${e}</option>`;
    });
    //Mostrar JSON
    mostrarDatos(tbody.querySelector(`td[id=name${id}]`).innerHTML);
};

//Carga del animal los datos en el formulario
function mostrarDatos(nombre){
    const animal = animals.find(a => a.name.toLowerCase() === nombre.toLowerCase());
    let component;
    
    if (animal) {
        component = `<pre class="border border-dark">${JSON.stringify(animal, null, 2)}</pre>`;
    } else {
        component = `<pre class="border border-dark">No se encontró el animal con el nombre "${nombre}".</pre>`;
    }
    form.querySelector('#json').innerHTML = component;
}

//Sin terminar, comprueba si los valores minimos se cumplen
function guardarFormulario(){
    let nombre = form.querySelector('input[name=nombre]').value;
    let raza = form.querySelector('select[name=raza]').value;
    let sexo = form.querySelector('input[name=sexo]').value;
    let peso = form.querySelector('input[name=peso]').value;
    let diagnostico = form.querySelector('textarea[name=diagnostico]').value;
    if (!nombre || !raza || !sexo || !peso || !diagnostico){
        alert(`Dato no introducido`);
    } else {
        //Insertar valores en json
    }
}
