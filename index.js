import { analizador } from "./analyzer.js";

const textarea = document.querySelector("textarea.textArea");
const buttonLimpiar = document.getElementById("limpiarMetricas");

const limpiarMetricas = () => {
    textarea.value = "";
    const li = document.querySelectorAll("li");
    li.forEach(span => (span.textContent = `${span.id}: `));
    document.getElementById("promedioLongitud").textContent = "promedio Longitud: ";
};

const analizadorText = () => {
    const textoIngresado = textarea.value;
    const wordCount = analizador.getWordCount(textoIngresado);
    const charCount = analizador.getCharacterCount(textoIngresado);
    const charCountNoSpaces = analizador.getCharacterCountExcludingSpaces(textoIngresado);
    const numberCount = analizador.getNumberCount(textoIngresado);
    const addNumberCount = analizador.getNumerosSum(textoIngresado);
    const getAverageWordLength = analizador.getAverageWordLength(textoIngresado);

    const li = document.querySelectorAll("li");
    li[0].textContent = `caracteres: ${charCount}`;
    li[1].textContent = `caracteres sin espacios: ${charCountNoSpaces}`;
    li[2].textContent = `Número de palabras: ${wordCount}`;
    li[3].textContent = `numeros: ${numberCount}`;
    li[4].textContent = `suma de neumeros: ${addNumberCount}`;
    li[5].textContent = `promedio Longitud: ${getAverageWordLength}`;
};

textarea.addEventListener("keyup", () => {
    analizadorText();
});

buttonLimpiar.addEventListener("click", () => {
    limpiarMetricas();
});