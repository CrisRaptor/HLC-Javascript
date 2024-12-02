const students  = [
    { name: 'Jhon', lastName1: "Sanz", lastName2: "Smith"}, 
    { name: 'Anna', lastName1: "Taylor", lastName2: "Johnson"}, 
    { name: 'Steve', lastName1: "Davies"},
    { name: 'Albert', lastName1: "Williams", lastName2: "Patel"}, 
    { name: 'Ellen', lastName1: "Wilson"}, 
    { name: 'Jhonas', lastName1: "Sanz", lastName2: "Patel"}
];
console.log(students)

const sorted = students.sort((e1,e2) => {
    if(e1.lastName1 > e2.lastName1){
        return 1;
    } else if (e1.lastName1 < e2.lastName1){
        return -1;
    } else {
        return 0;
    }
})

console.log(sorted);

//Alternativa
console.log("Segunda forma")
const students2  = [
    "Jhon Sanz Smith", 
    "Anna Taylor Johnson",
    "Steve Davies",
    "Albert Williams Patel", 
    "Ellen Wilson", 
    "Jhonas Sanz Patel"
];
const sorted2 = students2.map(e => e.split(' ')).sort((e1,e2) => {
    if(e1[1] > e2[1]){
        return 1;
    } else if (e1[1] < e2[1]){
        return -1;
    } else {
        return 0;
    }
});
console.log(sorted2);