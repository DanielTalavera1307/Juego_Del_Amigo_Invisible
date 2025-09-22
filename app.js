let amigos = []

function agregarAmigo () {
    const texto = document.getElementById("amigo")
    const contenedor = document.getElementById("listaAmigos")
    if (texto.value === "") {
        alert ("Por favor escribe un nombre válido")

        return
    }

    const li = document.createElement("li")
    li.textContent = texto.value

    contenedor.appendChild(li)
    amigos.push(texto.value)
    texto.value = ""
}

function sortearAmigo () {
    const numeroAmigos = amigos.length
    const contenedor = document.getElementById("resultado")
    if (numeroAmigos < 1) {
        alert("Debes colocar al menos un amigo")
    }

    const ganador = Math.floor(Math.random() * numeroAmigos)

    contenedor.textContent = "El amigo secreto es: " + amigos[ganador];
} 