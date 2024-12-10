window.onload = () =>{
    document.querySelector(".btn1").addEventListener("click",getGenres);
    document.querySelector(".btn2").addEventListener("click",getGenres);
    document.querySelector(".btn3").addEventListener("click",getGenres);
    document.querySelector(".btn4").addEventListener("click",getGenres);
    document.querySelector(".btn5").addEventListener("click",getGenres);
}

//Starting HTML for table
const lista = document.querySelector(".lista");
lista.innerHTML = `<thead id="tHead" class="table-dark">
<tr id="tr0">
</tr>
</thead>
<tbody id="tBody" class="table-group-divider">
</tbody>`;
//Element constants
const body = document.getElementById("tBody");
const results = document.getElementById("results");

//Table Header HTML generation
const elements = Object.keys(books[0]);
elements.forEach(element => {
    document.getElementById("tr0").innerHTML += `<th>
    ${element}
    </th>`
});

//Table Body HTML generation
let i = 1;
books.forEach(e => {
    body.innerHTML += `<tr id="tr${i}"></tr>`
    elements.forEach(element => {
        let row = document.getElementById(`tr${i}`);
        switch (element) {
            case "Website":
                row.innerHTML += `<td><a href="${e[element]}" target="_blank">${e[element]}</a></td>`;
                break;
            case "Author":
                row.innerHTML += `<td>${e[element].join("<br>")}</td>`;
                break;
            default:
                row.innerHTML += `<td>${e[element]}</td>`;
                break;
        }
    });
    i++;
});


const getGenres = ()=>{
    results.innerHTML = "";
    let genres = new Set("");
    let cont = 0;
    books.forEach(e => {
        if (!genres.has(e.Genre)){
            if(cont % 9 == 0){
                genres.add(`<br id="s${cont}">`)
            } 
            genres.add(e.Genre);
            cont++;
        }
    });
    results.innerHTML = [...genres].join(" "); 
};