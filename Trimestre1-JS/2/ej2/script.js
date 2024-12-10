const numbers = [-5,-4,-3,-2,-1,1,2,3,4,5];
console.log(numbers);
//1
const positiveN = [];
for(i = 0; i < numbers.length; i++){
    if(numbers[i]>0){
        positiveN.push(numbers[i])
    }
}
console.log(positiveN);
//2
const positiveN2 = numbers.filter(e => e>0)
console.log(positiveN2);