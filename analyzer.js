//objeto que contiene las funciones que se encargan de analizar el texto

const analizador = {
    getWordCount: (text) => {
      // Eliminar espacios en blanco al inicio y al final del párrafo
      let trimmedText = text.trim();
  
         trimmedText = text.split(' ');
    
         console.log(trimmedText);
  
        return trimmedText.length;
       
      
    }
    ,
  
    getCharacterCount: (text) => {
      // Eliminar espacios en blanco, comas y puntos al inicio y al final del párrafo
  
      return text.length;
    },
  
    getCharacterCountExcludingSpaces: (text) => {
      // Eliminar espacios en blanco, comas y puntos al inicio y al final del párrafo
      const trimmedText = text.trim();
      let count = 0;
    
      // Recorremos cada caracter en el texto
      for (let i = 0; i < trimmedText.length; i++) {
        const char = trimmedText[i];
    
        // Verificamos si el caracter no es un espacio, coma o punto
        if (char !== ' ' && char !== ',' && char !== '.') {
          count++;
        }
      }
    
      return count;
    },
    getNumberCount: (text) => {
      let cantidadDigitos = 0;
  const palabras = text.split(' '); // Dividir el texto en palabras

  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
    const numero = parseInt(palabra, 10);

    if (!isNaN(numero)) { // Verificar si la palabra es un número
      let digitosEnPalabra = 0;
      for (let j = 0; j < palabra.length; j++) {
        if (!isNaN(parseInt(palabra[j], 10))) {
          digitosEnPalabra++;
        }
      }
      cantidadDigitos += digitosEnPalabra;
    }
  }

  return cantidadDigitos;
 
    
      
    },
  
   getNumerosSum :(text) => {

    let sumaNumeros = 0;
    const palabras = text.split(' '); // Dividir el texto en palabras
  
    for (let i = 0; i < palabras.length; i++) {
      const numero = parseInt(palabras[i], 10);
      if (!isNaN(numero)) { // Verificar si la palabra es un número
        sumaNumeros += numero;
      }
    }
  
    return sumaNumeros;


  /*   let sumaNumeros = 0;
    let numerosEncontrados = text.match(/\b\d+\b/g);
  
    if (numerosEncontrados) {
      sumaNumeros = numerosEncontrados.reduce((acc, numero) => acc + parseInt(numero, 10), 0);
    }
  
    return sumaNumeros; */
   },
  
    getAverageWordLength: (text) => {
      // Eliminar espacios en blanco al inicio y al final del párrafo
      const trimmedText = text.trim();
    
      // Dividir el párrafo en palabras usando espacios como separadores
      const palabras = [];
      let palabraActual = '';
    
      // Recorremos cada caracter en el texto
      for (let i = 0; i < trimmedText.length; i++) {
        const char = trimmedText[i];
    
        // Si el caracter no es un espacio, lo agregamos a la palabra actual
        if (char !== ' ') {
          palabraActual += char;
        } else {
          // Si encontramos un espacio, agregamos la palabra actual al array de palabras
          if (palabraActual.length > 0) {
            palabras.push(palabraActual);
            palabraActual = '';
          }
        }
      }
    
      // Agregamos la última palabra si no hay espacio al final del texto
      if (palabraActual.length > 0) {
        palabras.push(palabraActual);
      }
    
      // Calcular la longitud total de las palabras
      let longitudTotal = 0;
    
      // Recorremos cada palabra y sumamos sus longitudes
      for (let i = 0; i < palabras.length; i++) {
        longitudTotal += palabras[i].length;
      }
    
      // Calcular la longitud media con dos dígitos decimales
      const longitudMedia = palabras.length > 0 ? longitudTotal / palabras.length : 0;
    
      // Retornar la longitud media con dos dígitos decimales
      return longitudMedia.toFixed(2);
    }
    
  
  
      
  };
  
  // Exportar el módulo `analizador` (objeto)
  
  export { analizador };
  