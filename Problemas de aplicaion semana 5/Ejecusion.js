//Aqui se traen los ejercisios para probarlos

function ejecutarProblema() {
  // Recorrer mostrando propiedad y valor usando Object.keys
let numeros = { 1: "uno", 2: "dos", 3: "tres" };

function recorrerPropiedades(obj) {
  Object.keys(obj).forEach(clave => {
    console.log(`Propiedad: ${clave}, Valor: ${obj[clave]}`);
  });
}

recorrerPropiedades(numeros);
  }
  
