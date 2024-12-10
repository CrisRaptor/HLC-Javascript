import Empresa from './Empresa.js';

const empresas = [{"id":"1","nombre":"google","direccion":"sv"}];

export function crearEmpresa(nombre, direccion) {
    const id = empresas.length + 1;
    const nuevaEmpresa = new Empresa(id, nombre, direccion);
    empresas.push(nuevaEmpresa);
    return nuevaEmpresa;
}

export function obtenerEmpresas() {
    return empresas;
}

////Nuevo //Funcion para editar un elemento, su parametro es un objeto Empresa
export function editarEmpresa(empresaNueva) {
    let empresaId = empresas.findIndex(empresa => empresa.id == parseInt(empresaNueva.id));
    empresas[empresaId] = empresaNueva;
    return empresas;
}

export function eliminarEmpresa(id) {
    const index = empresas.findIndex(empresa => empresa.id == parseInt(id)); //Cambio === -> ==
    if (index !== -1) {
        empresas.splice(index, 1);
    }
}
