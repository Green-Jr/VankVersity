// 1. Imprimir los elementos de índice 2 y 4 en el arreglo j
let j = [200, -100, 45, 78, 32];
function obtenerElementosJ() {
  return `${j[2]}, ${j[4]}`;
}
alert(`Elementos índice 2 y 4 de arreglo ${j} son: ${obtenerElementosJ()}`);  

// 2. Imprimir los elementos "cd" y "gh" en el arreglo f
let f = ["ab", "cd", "ef", "gh"];
function obtenerElementosF() {
  return `${f[1]}, ${f[3]}`;
}
alert(`Elementos "cd" y "gh": ${obtenerElementosF()}`);

// 3. Eliminar el elemento de índice 2 en el arreglo
let arreglo3 = [1, 2, false];
function eliminarIndice2() {
  arreglo3.splice(2, 1);
  return arreglo3;
}
alert(`Arreglo después de eliminar índice 2: ${eliminarIndice2()}`);

// 4. Imprimir todos los elementos usando foreach en el arreglo aux
let aux = [10, true, "k200", 20.7];
function imprimirElementosAux() {
  let elementos = "";
  aux.forEach(elemento => elementos += elemento + " ");
  return elementos.trim();
}
alert(`Elementos de aux: ${imprimirElementosAux()}`);

// 5. Imprimir números impares en el arreglo k
let k = [17, 4, 64, 79, 109, 112];
function obtenerImparesK() {
  let impares = [];
  k.forEach(num => {
    if (num % 2 !== 0) impares.push(num);
  });
  return impares.join(", ");
}
alert(`Números impares en k: ${obtenerImparesK()}`);

// 6. Cambiar valores de índice en el arreglo h
let h = [true, true, false, true, false];
function cambiarValoresH() {
  h[2] = true;
  h[3] = false;
  return h;
}
alert(`Arreglo h después de cambios: ${cambiarValoresH()}`);

// 7. Cambiar elementos "jp" por true y "qr" por 30 en el arreglo w
let w = ["wc", "jp", "zx", "qr"];
function cambiarValoresW() {
  w[w.indexOf("jp")] = true;
  w[w.indexOf("qr")] = 30;
  return w;
}
alert(`Arreglo w después de cambios: ${cambiarValoresW()}`);

// 8. Recorrer e imprimir elementos en el arreglo
let arreglo8 = [2, 5, 7, 9];
function recorrerArreglo(arr) {
  let elementos = "";
  arr.forEach(elemento => elementos += elemento + " ");
  return elementos.trim();
}
alert(`Elementos del arreglo: ${recorrerArreglo(arreglo8)}`);

// 9. Retornar el número de elementos en un arreglo
function contarElementos(arr) {
  return arr.length;
}
alert(`Número de elementos: ${contarElementos([2, 5, 7, 9])}`);

// 10. Usar indexOf para mostrar índices de 44, 89, 70 en el arreglo
let arreglo10 = [30, 44, 54, 89, 100];
function obtenerIndices() {
  return `Índice de 44: ${arreglo10.indexOf(44)}, Índice de 89: ${arreglo10.indexOf(89)}, Índice de 70: ${arreglo10.indexOf(70)}`;
}
alert(obtenerIndices());

// 11. Eliminar elementos desde índice 3 hasta 4 en un solo llamado
let arreglo11 = [34, ["q"], 67, 1, 99, 1 / 2];
function eliminarRango() {
  arreglo11.splice(3, 2);
  return arreglo11;
}
alert(`Arreglo después de eliminación: ${eliminarRango()}`);

// 12. Ordenar frutas y verduras en los arreglos correspondientes
let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];
function ordenarFrutasVerduras() {
  let frutas = ["Pera", "Limón", "Manzana", "Banano"];
  let verduras = ["Cebolla", "Pimentón", "Lechuga", "Perejíl"];
  return { frutas, verduras };
}
let resultado12 = ordenarFrutasVerduras();
alert(`Frutas: ${resultado12.frutas.join(", ")}, Verduras: ${resultado12.verduras.join(", ")}`);

// 13. Contar letra "c" en nombres
function contarLetraC(nombres) {
  let contador = 0;
  nombres.forEach(nombre => {
    for (let letra of nombre) {
      if (letra.toLowerCase() === 'c') contador++;
    }
  });
  return contador;
}
alert(`La letra "c" aparece ${contarLetraC(["Carlos", "Cecilia", "Ana"])} veces`);

// 14. Ordenar números enteros
function ordenarNumeros(arr) {
  return arr.sort((a, b) => a - b);
}
alert(`Arreglo ordenado: ${ordenarNumeros([5, 3, 8, 1]).join(", ")}`);

// 15. Ordenar letras alfabéticamente
function ordenarLetras(arr) {
  return arr.sort();
}
alert(`Letras ordenadas: ${ordenarLetras(["c", "a", "d", "b"]).join(", ")}`);

// 16. Mostrar cadena de ADN con mayor Timina (T)
function adnMayorTimina(adn) {
  return adn.reduce((mayor, cadena) => 
    (cadena.split("T").length > mayor.split("T").length ? cadena : mayor)
  );
}
alert(`Cadena con más Timina: ${adnMayorTimina(["ATT", "ACTT", "AGT"])}`);

// 17. Encontrar consecutivos en el arreglo
let arr17 = [5, 7, 90, 2, 5, 3, 8, 99];
function encontrarConsecutivos() {
  let consecutivos = [];
  arr17.forEach((num1, i) => {
    arr17.forEach((num2, j) => {
      if (i !== j && num1 + 1 === num2) {
        consecutivos.push(`${num1} y ${num2}`);
      }
    });
  });
  return consecutivos.join(", ");
}
alert(`Números consecutivos: ${encontrarConsecutivos()}`);

// 18. Contar cuántas veces aparece "Maria"
let arr18 = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
function contarMaria() {
  let contador = 0;
  arr18.forEach(nombre => {
    if (nombre === "Maria") contador++;
  });
  return contador;
}
alert(`"Maria" aparece ${contarMaria()} veces`);

// 19. Sumar los cuadrados de los elementos
let arr19 = [-2, 8, 99, 1, 7];
function sumaCuadrados() {
  let suma = 0;
  arr19.forEach(num => {
    suma += num ** 2;
  });
  return suma;
}
alert(`Suma de cuadrados: ${sumaCuadrados()}`);

// 20. Sumar los elementos del arreglo
let arr20 = [15, 7, 9, 12, 1];
function sumaElementos() {
  let suma = 0;
  arr20.forEach(num => {
    suma += num;
  });
  return suma;
}
alert(`Suma de elementos: ${sumaElementos()}`);

// 21. Función que calcula el promedio de un arreglo de números
function calcularPromedio(numeros) {
  let suma = 0;
  numeros.forEach(numero => {
    suma += numero;
  });
  return suma / numeros.length;
}

// Ejemplo de uso
let numeros1 = [10, 20, 30, 40, 50];
alert(`El promedio es: ${calcularPromedio(numeros)}`);

// Función que filtra los números impares de un arreglo de números enteros
function obtenerImpares(numeros) {
  let impares = numeros.filter(numero => numero % 2 !== 0);
  return impares;
}

// Ejemplo de uso
let numeros = [10, 21, 32, 43, 54, 65];
alert(`Números impares: ${obtenerImpares(numeros)}`);
