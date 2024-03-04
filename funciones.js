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

    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    // Eliminar espacios en blanco, comas y puntos al inicio y al final del párrafo
    text = text.replace(/[,. ]/g, "");

    return text.length;
  },
  getNumberCount: (text) => {
    const numerosEncontrados = text.match(/\d/g);

    // Si no se encuentran números, retornamos 0
    if (numerosEncontrados === null) {
      return 0;
    }

    // Retornamos la cantidad de números encontrados
    return numerosEncontrados.length;
  },

  getNumerosSum: (text) => {

    const numerosEncontrados = text.match(/\d/g);

    // Si no se encuentran números, retornamos 0
    if (numerosEncontrados === null) {
        return 0;
    }

    // Convertimos cada número de string a número y sumamos
    const sumaNumeros = numerosEncontrados.map(Number).reduce((acumulador, numero) => acumulador + numero, 0);

    // Retornamos la suma de números
    return sumaNumeros;


  },

  getAverageWordLength:(text) => {

     // Eliminar espacios en blanco al inicio y al final del párrafo
     text = text.trim();

     // Dividir el párrafo en palabras usando espacios como separadores
     const palabras = text.split(/\s+/);
 
     // Calcular la longitud total de las palabras
     const longitudTotal = palabras.reduce((total, palabra) => total + palabra.length, 0);
 
     // Calcular la longitud media con dos dígitos decimales
     const longitudMedia = longitudTotal / palabras.length || 0; // evitar división por cero
 
     // Retornar la longitud media con dos dígitos decimales
     return longitudMedia.toFixed(2);


  	}


    
};

// Exportar el módulo `analizador` (objeto)

export { analizador };
