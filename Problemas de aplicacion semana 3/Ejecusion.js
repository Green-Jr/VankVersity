//Aqui se traen los ejercisios para probarlos

// 4. Función que muestra los números de 1 a n
function ejecutarProblema() {
    let cadenaVocales = prompt("Ingrese una cadena de texto:");
function contarVocales(cadena) {
  let vocales = "aeiouAEIOU";
  let contador = 0;
  for (let char of cadena) {
    if (vocales.includes(char)) {
      contador++;
    }
  }
  return contador;
}
alert(`Cantidad de vocales en la cadena '${cadenaVocales}': ${contarVocales(cadenaVocales)}`);
    
}
  
