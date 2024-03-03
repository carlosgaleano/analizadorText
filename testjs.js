const getWordCount= (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
   
  // Eliminar espacios en blanco al inicio y al final del párrafo
  text = text.trim();

  
  // Dividir el párrafo en palabras usando espacios como separadores
  const palabras = text.split(/\s+/);

   // console.log('resultado del split',palabras);

  // Devolver la cantidad de palabras en el párrafo como cadena de texto // cuenta los elmemntos del array
  return "Número de palabras: " + palabras.length;
};


const getCharacterCount= (text) => {


    // Eliminar espacios en blanco, comas y puntos al inicio y al final del párrafo
    text = text.replace(/[,. ]/g, '');;

    console.log(text);

    return "Número de caracteres: " + text.length;

}

const textPrueba='este tony';






console.log(getWordCount(textPrueba));

console.log(getCharacterCount(textPrueba));
