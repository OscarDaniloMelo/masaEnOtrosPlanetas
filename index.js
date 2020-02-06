
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
        case "Mercurio":
            var masaFinal = masa * g_mercurio / g_tierra
            break;
        case "Venus":
            var masaFinal = masa * g_venus / g_tierra
            break;
        case "Saturno":
            var masaFinal = masa * g_saturno / g_tierra
            break;
        case "Urano":
            var masaFinal = masa * g_urano / g_tierra
            break;
        case "Neptuno":
            var masaFinal = masa * g_neptuno / g_tierra
            break;
        case "Pluton":
            var masaFinal = masa * g_pluton / g_tierra
            break;
        case "Ceres":
            var masaFinal = masa * g_ceres / g_tierra
            break;
        case "Eris":
            var masaFinal = masa * g_eris / g_tierra
            break;
        case "Sedna":
            var masaFinal = masa * g_sedna / g_tierra
            break;
        case "Europa":
            var masaFinal = masa * g_europa / g_tierra
            break;
        case "la Luna":
            var masaFinal = masa * g_luna / g_tierra
            break;
        case "Io":
            var masaFinal = masa * g_io / g_tierra
            break;
        case "Titan":
            var masaFinal = masa * g_titan / g_tierra
            break;
        case "Calisto":
            var masaFinal = masa * g_calisto / g_tierra
            break;
    
        case "la Tierra":
            var masaFinal = masa
            break;
        }
        resultado.innerHTML = "Tu peso es: " + masa + " kilogramos"
        resultado2.innerHTML = "Tu peso en " + planeta + " es: " + Math.floor(masaFinal) + " Kilogramos" 
    }
}

const g_tierra = 9.8, g_marte = 3.7, g_jupiter = 24.8, g_mercurio = 2.8, g_venus = 8.9, g_saturno = 9.1,
      g_neptuno = 11, g_urano = 7.8, g_pluton = 0.6, g_ceres = 0.28, g_eris = 0.82, g_sedna = 0.5,
      g_luna = 1.662, g_europa = 1.314, g_io = 1.796, g_titan = 1.35, g_calisto = 1.235;     

var masaFinal 
var resultado = document.getElementById("resultado")
var resultado2 = document.getElementById("resultado2")

var enviar = document.getElementById("enviar")
enviar.addEventListener("click", planetaElegido)