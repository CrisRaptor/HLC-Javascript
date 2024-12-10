const numbers = [27,46,-23,102,3,0];
console.log(numbers);

let greater = Math.max(...numbers);

console.log(greater);

//Alternativa con reduce sin Math.max ¿?
let greater2 = numbers.reduce((max,value)=>max = (value>max)?value:max);
console.log(greater2);