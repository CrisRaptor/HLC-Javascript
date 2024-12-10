let csv = `Juan,Manuel,35
    Jorge,Peñalver,19
    Pedro,Sanchez,41`;

function csvToArray(csv) {
    let filas = csv.trim().split("\n");
    return filas.map(fila => fila.trim().split(","));
}

let resultado = csvToArray(csv);
console.log(resultado);