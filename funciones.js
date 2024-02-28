//objeto que contiene las funciones que se encargan de analizar el texto

const analizador = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    // Eliminar espacios en blanco al inicio y al final del párrafo
    text = text.trim();

    // Dividir el párrafo en palabras usando espacios como separadores
    const palabras = text.split(/\s+/);

    // console.log('resultado del split',palabras);

    // Devolver la cantidad de palabras en el párrafo como cadena de texto // cuenta los elmemntos del array
    return palabras.length;
  },

  getCharacterCount: (text) => {
    // Eliminar espacios en blanco, comas y puntos al inicio y al final del párrafo
    text = text.replace(/[,. ]/g, "");

    console.log(text);

    return text.length;
  },
};

// Exportar el módulo `analizador` (objeto)

export { analizador };