const lista = [4, 6, 3, 8, 4, 7, 11];
console.log(lista);
/* function double(dato) {
    dato.forEach(d => {
        console.log(d*2);
    });
} */
//Instrucciones
//Mapas
const lista3 = lista.map(e => e);
console.log("Mapa\t| " + lista3);

const lista2 = lista.map(e => e * 2);
console.log("Mapa x2\t| " + lista2);

//Filtros
const mayorCinco = lista.filter(e => e > 5);
console.log("Filtro Mayor 5\t| " + mayorCinco);

const pares = lista.filter(e => !(e % 2));
console.log("Filtro Pares\t| " + pares);

const otros = lista.filter(e => {
    let ee = e + 5;
    ee = ee - 11;
    ee = ee + 3;
    return ee % 2 == 0;
});
console.log("Filtro Otros\t| " + otros);

//Find
let elem = lista.find(e => e > 5);
console.log("Enc. Elemento mayor 5\t| " + elem);
//FindIndex
elem = lista.findIndex(e => e > 5);
console.log("Enc. Posicon Elemento mayor 5\t| " + elem);
//IndexOf
elem = lista.indexOf(5);
console.log("Posicion Elemento 5\t| " + elem);

//Join (concat)
const frase = ["Hola", "hoy", "es", "viernes"];
console.log(frase.join("-"));

//Reduce (recorrer)
const value = 0;
const sumInitial = lista.reduce(
    (ac, c) => ac + c,
    value
);
console.log("Suma Total lista\t| " + sumInitial);

//Foreach
[2, 5, , 9].forEach(e => console.log("Nueva lista\t| " + e));

//Array
lista.push(20);
console.log("Lista Push '20'\t| " + lista);

lista.pop();
console.log("Lista Pop\t| " + lista);

lista.unshift(20);
console.log("Lista Unshift '20'\t| " + lista);

lista.shift(20);
console.log("Lista Shift\t| " + lista);

