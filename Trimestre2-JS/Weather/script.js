let apiURL = "http://api.weatherapi.com/v1/current.json?key=";
const apiKey = "2359545abe664b778b3115617251601";
let url = "";
let divLocation = document.querySelector("#divLocation");
let divWeather = document.querySelector("#divWeather");
let input = document.querySelector("#inputCiudad");
let search = document.querySelector("#btnBuscar");

search.addEventListener("click", async e => {
    cleanDiv(divLocation);
    cleanDiv(divWeather);

    if(input.value === "") {
        url = apiURL + apiKey + "&q=malaga";  
    } else {
        url = apiURL + apiKey + "&q=" + input.value.toLowerCase();    
    }    
    
    await fetch(url).then( async (response) => {
        if(!response.ok) {
            throw new Error("Network response was not ok")
        }        

        return await response.json();
    }).then((dataCiudad) => {
        console.log(dataCiudad);

        let newH1 = document.createElement('h1');
        divLocation.innerHTML = `<img src="${dataCiudad.current.condition.icon}"/>`
        newH1.innerHTML += `${dataCiudad.location.name}`;
        divLocation.appendChild(newH1);

        
        let newH2 = document.createElement('h2');
        newH2.innerHTML = `${dataCiudad.current.condition.text}. ` + `Temp: ${dataCiudad.current.temp_c}ºC`;
        divWeather.appendChild(newH2);
        
    }).catch(error => {
        console.log(error);   
        divLocation.innerHTML = `<h1>La ciudad '${input.value}' no existe</h1>`     
    });
})

function cleanDiv(div) {
    div.innerHTML = "";
}