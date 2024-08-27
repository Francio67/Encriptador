// Declaración de variables
let texto = "";
let resultado = "";

// Seleccionando los elementos del DOM
const textoInput = document.getElementById("texto");
const resultadoOutput = document.getElementById("resultado");

// Función para cifrar el texto
function cifrarTexto() {
    texto = textoInput.value;
    if (validarTexto(texto)) {
        resultado = texto.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
        resultadoOutput.innerText = resultado;
    }
}

// Función para descifrar el texto
function descifrarTexto() {
    texto = resultadoOutput.innerText;
    resultado = texto.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    resultadoOutput.innerText = resultado;
}

// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    if (!regex.test(texto)) {
        alert("No se aceptan mayúsculas ni caracteres especiales.");
        return false;
    }
    return true;
}

// Función para copiar el texto resultante
function copiarTexto() {
    navigator.clipboard.writeText(resultadoOutput.innerText)
        .then(() => alert("Texto copiado al portapapeles."))
        .catch(err => console.error("Error al copiar texto: ", err));
}
