const numbers = [1,2,3,4,5];
console.log(numbers);
//1
const squared = [];
for(i = 0; i < numbers.length; i++){
    squared[i] = Math.pow(numbers[i],2);
}
console.log(squared);
//2
const squared2 = numbers.map(e => e*e);
console.log(squared2);