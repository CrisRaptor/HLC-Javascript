//Request four grades for a student, calculate the average, indicate whether the grade is pass, sufficient, good or outstanding (array).
const grades = [4, 7, 2, 9];

let addition = grades.reduce((a, b) => a + b, 0);
console.log("La media de las notas es: " + addition/grades.length);
