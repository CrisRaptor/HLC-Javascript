let chronoOn = false;
let num = 0;
let contador = document.getElementById('contador');
let intervalID;

function startChrono(){
    chronoOn = true;
    num = 0;
    intervalID = setInterval(chrono,1000);
}

function stopChrono(){
    chronoOn = false;
    clearInterval(intervalID);
}

function chrono(){
    if (chronoOn) {
        contador.innerText = num;
        num++;
    }
}

