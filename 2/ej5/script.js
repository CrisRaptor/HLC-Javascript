const numbers1 = [1,2,3,4,5];
const numbers2 = [1,2,4,3,5];
const numbers3 = [1,2,3,4,5];
console.log("Lista 1");
console.log(numbers1);
console.log("Lista 2");
console.log(numbers2);
console.log("Lista 3");
console.log(numbers3);

function equals(array1, array2){
    if(Array.isArray(array1) && Array.isArray(array2)){
        if(array1.every((value,index) => value === array2[index])) {
            return true;
        } else {
            return false;
        }
    }
}

console.log("¿Son iguales...\nLista 1 y 2");
console.log(equals(numbers1,numbers2));
console.log("Lista 2 y 3");
console.log(equals(numbers2,numbers3));
console.log("Lista 1 y 3");
console.log(equals(numbers1,numbers3));