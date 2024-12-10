//Csv variable formating
csv = csvToArray(csv);
console.log(csv);

//Starting HTML for table
const lista = document.querySelector(".lista");
lista.innerHTML = `<thead id="tHead" class="table-dark">
<tr id="tr0">
</tr>
</thead>
<tbody id="tBody" class="table-group-divider">
</tbody>`;
//Element constants
const head = document.getElementById("tHead");
const body = document.getElementById("tBody");

//Header HTML generation
csv[0].map(e => {
  document.getElementById("tr0").innerHTML += `<th>
        ${e}
        </th>`
})
//Body HTML generation
for(i=1;i<csv.length;i++){
  body.innerHTML += `<tr id="tr${i}"></tr>`
  csv[i].map(e => {
    document.getElementById(`tr${i}`).innerHTML += `<td>
        ${e}
        </td>`
  })
}

//Function to turn CSV into 2D array
function csvToArray(csv) {
  let filas = csv.trim().split("\n");
  return filas.map(fila => fila.trim().split(";"));
};