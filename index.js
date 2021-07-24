const botonTortuga = document.getElementById("boton-uno")
const botonDelfin = document.getElementById("boton-dos")
const botonPulpo = document.getElementById("boton-tres")
const pregunta = document.getElementById("span-pregunta")
const respuesta = document.getElementById("span-respuesta")


const respuestaCorrecta = () => {
    respuesta.textContent= "¡Respuesta correcta!"
    botonDelfin.style.backgroundColor = "green"
} 

const respuestaIncorrecta = () => {
    respuesta.textContent= "¡Respuesta equivocada!"
    botonDelfin.style.backgroundColor = "green"
    botonTortuga.style.backgroundColor = "red"
    botonPulpo.style.backgroundColor = "red"
}


botonDelfin.onclick = respuestaCorrecta
botonTortuga.onclick = respuestaIncorrecta
botonPulpo.onclick = respuestaIncorrecta