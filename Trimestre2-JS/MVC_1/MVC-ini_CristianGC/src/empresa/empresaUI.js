////Cambio //Nuevo importe "editarEmpresa"
import { crearEmpresa, obtenerEmpresas, editarEmpresa, eliminarEmpresa } from './empresaController.js';
import Empresa from './Empresa.js'; ////Nuevo

let idEditar = -1; //Almacena el id de la empresa en edicion

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-alta-empresa');
    const tablaEmpresas = document.getElementById('tabla-empresas').querySelector('tbody');

    ////Nuevo //Reinicia los textos
    form.nombre.value = "";
    form.direccion.value = "";

    // Función para renderizar la tabla
    const renderTablaEmpresas = () => {
        const empresas = obtenerEmpresas();
        console.log(empresas);

        tablaEmpresas.innerHTML = '';
        empresas.forEach(empresa => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${empresa.id}</td>
                <td>${empresa.nombre}</td>
                <td>${empresa.direccion}</td>
                 <td>
                    <button class="editar" data-id="${empresa.id}">Editar</button>
                    <button class="eliminar" data-id="${empresa.id}">Eliminar</button>
                </td>
            `;
            tablaEmpresas.appendChild(fila);
        });
    };

    ////Cambio // Asignar eventos a los botones de editar y eliminar 
    tablaEmpresas.addEventListener('click', (e) => {
        const empresaId = e.target.dataset.id;
        //Cambio asignacion individual por delegada
        if (e.target.className == "editar"){
            //Editar
            // Lógica para editar la empresa
            alert(`Editar empresa con ID: ${empresaId}`);
            // Aquí puedes cargar los datos en un formulario para editar
            ////Nuevo //Funcionalidad
            cargarDatos(empresaId); 
            renderTablaEmpresas();
        } else if (e.target.className == "eliminar"){
            //Eliminar
            alert(`Eliminar empresa con ID: ${empresaId}`);
            eliminarEmpresa(empresaId);
            renderTablaEmpresas(); // Recargar la tabla después de eliminar
        }
    });

////Cambio // Manejo del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = form.nombre.value;
    const direccion = form.direccion.value;

    const button = document.getElementById('form-alta-empresa').querySelector('button');

    ////Nuevo//Funcionalidad al editar
    if (button.innerText == "Editar Empresa"){ 
        //Reinicia los textos
        document.getElementById("form-h2").innerText = "Añadir Nueva Empresa"
        button.innerText = "Crear Empresa";
        //Crear Empresa y editar
        let empresa = new Empresa(idEditar, nombre, direccion);
        editarEmpresa(empresa);
    } else { //Funcionalidad al crear
        crearEmpresa(nombre, direccion);
    }
    renderTablaEmpresas();

    // Limpiar el formulario
    form.reset();
});

// Cargar la tabla inicialmente
renderTablaEmpresas();
});

////Nuevo //Funcion para cargar datos en el formulario alta empresa
function cargarDatos(id){
    const form = document.getElementById('form-alta-empresa');
    let empresa = obtenerEmpresas().find(empresa => empresa.id == parseInt(id));
    //Guarda la id para la edicion
    idEditar = empresa.id
    form.nombre.value = empresa.nombre;
    form.direccion.value = empresa.direccion;

    //Cambia los textos del formulario
    form.querySelector('button').innerText = "Editar Empresa";
    document.getElementById("form-h2").innerText = "Editar Empresa"
}
