//Create a list with people. Show the names of those whose age is greater or equal  than 18.
const list = [
        { name: 'Jhon', age: 30}, 
        { name: 'Anna', age: 25}, 
        { name: 'Steve', age: 22},
        { name: 'Albert', age: 15}, 
        { name: 'Ellen', age: 18}, 
        { name: 'Jhonas', age: 17}];
console.log(list);
const adultPeople = list.filter(e => e.age >= 18);
console.log(adultPeople);