//Ejercicio 4, DOM Events
//Part 1
//a, Find the table with id="age-table".
let table = document.getElementById("age-table");
//Alternative -> let table2 = document.querySelector("#age-table")
table.classList.add("bg-primary")

//b, All label elements inside that table (there should be 3 of them)
let labels = table.querySelectorAll("label")
//Alternative ->  let labels2 = document.querySelectorAll("table label")
labels.forEach(e => e.classList.add("bg-danger"))

//c, The first td in that table (with the word “Age”)
let td = table.querySelectorAll("td");
let finded = false;
td.forEach(e => {
    if (!finded && e.innerText.includes("Age")){
        e.classList.add("bg-warning");
        finded = true;
    }
});
//Alternative -> table.rows.cells

//d, The form with name="search".
let form = document.getElementsByName("search");
form.forEach(element => {
    element.classList.add("bg-secondary","text-light");
});
//Alternative -> form2 = document.querySelector("form[name="search"]"); form.classList.add("bg-secondary","text-light");

//e, The first input in that form.
let input = form[0].querySelector("input");
input.classList.add("bg-success");

//f, The last input in that form.
let lastInput = form[0].querySelectorAll("input")[form[0].querySelectorAll("input").length-1];
lastInput.classList.add("bg-info")