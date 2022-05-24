import Countdown from "./countdown.js";

const TempoParaFacul = new Countdown("19 octuber 2022 18:00:00 GMT-0300")

const tempos = document.querySelectorAll('[data-time');

function mostrartempo() {
    tempos.forEach((tempo, index) => 
        tempo.innerHTML = TempoParaFacul._formato[index]

    )
}

setInterval(mostrartempo,1000)
console.log(tempos);