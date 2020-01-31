function mostrarPeso() {
    if (masa == null) {
        resultado.innerHTML = "Ingresa un valor"
    }
    else{
        var masaUsuario = document.getElementById("masaUsuario")
        masa = parseInt(masaUsuario.value)
        resultado.innerHTML = "Este es tu peso " + masa
        console.log(masa)
    }
}

var masa = null
var planetaSeleccionado = document.getElementById("planetaSeleccionado")
var resultado = document.getElementById("resultado")
var resultado2 = document.getElementById("resultado2")

var enviar = document.getElementById("enviar")
enviar.addEventListener("click", mostrarPeso)