import { analizador } from "./analyzer.js";

const textarea = document.querySelector("textarea.textArea");
const buttonLimpiar = document.getElementById("limpiarMetricas");

const limpiarMetricas = () => {
    textarea.value = "";
    const spans = document.querySelectorAll(".tdp span");
    spans.forEach(span => (span.textContent = `${span.id}: `));
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

    const spans = document.querySelectorAll("span");
    spans[0].textContent = `caracteres: ${charCount}`;
    spans[1].textContent = `caracteres sin espacios: ${charCountNoSpaces}`;
    spans[2].textContent = `Número de palabras: ${wordCount}`;
    spans[3].textContent = `numeros: ${numberCount}`;
    spans[4].textContent = `suma de neumeros: ${addNumberCount}`;
    spans[5].textContent = `promedio Longitud: ${getAverageWordLength}`;
};

textarea.addEventListener("keyup", () => {
    analizadorText();
});

buttonLimpiar.addEventListener("click", () => {
    limpiarMetricas();
});