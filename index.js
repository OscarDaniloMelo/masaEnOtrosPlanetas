
function planetaElegido() {
    var masa = document.getElementById("masaUsuario").value
    var planeta = document.getElementById("planetaSeleccionado").value

    if (masa == "") {
        alert("Proporciona tu peso")
    } else {
            document.getElementById("masaUsuario").value = ""
        }
    
    if (planeta == "") {
        alert("Selecciona un planeta")
    } else {
    switch (planeta) {
        case "Jupiter":
            var masaFinal = masa * g_jupiter / g_tierra
            break;
        case "Marte":
            var masaFinal = masa * g_marte / g_tierra
            break;
    
        case "La Tierra":
            var masaFinal = masa
            break;
        }
        resultado.innerHTML = "Tu peso es " + masa + " kilogramos"
        resultado2.innerHTML = "tu peso en " + planeta + " es " + masaFinal + " Kg" 
    }
}

const g_tierra = 9.8
const g_marte = 3.7
const g_jupiter = 24.8

var masaFinal
var resultado = document.getElementById("resultado")
var resultado2 = document.getElementById("resultado2")

var enviar = document.getElementById("enviar")
enviar.addEventListener("click", planetaElegido)