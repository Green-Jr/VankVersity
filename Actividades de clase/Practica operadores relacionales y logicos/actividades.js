// Declarar e inicializar variables
let precio = 48.5;     // Variable para almacenar el precio en dólares
let letra = 'z';       // Variable para almacenar la letra 'z'
let esVerdadero = true; // Variable para almacenar el valor booleano verdadero

// Imprimir el valor de las variables
console.log("El precio de FIFA18 es: $" + precio);
console.log("La letra almacenada es: " + letra);
console.log("El valor lógico es: " + esVerdadero);

// Ejercicios
let Ej1 = 10 % 2 * 5 / 10 + 3 * (5 + 2 * 3) % 60;
let Ej2 = -3 * (4 - 8) + 15 - 3 * 15 - 0 % 5;
let Ej3 = -15 % 3 - 15000 / 3000 * (4 * (-12 + 15 * 6)) / 10;
let Ej4 = -1 * (15 / 5 - 2) + 2 - 4 % 4 + 2;
let Ej5 = -50 / -3 - 50 % 60 - 4 * (-5 - 9 - 4 * (-3 - 7) - 49) - 7 % -7;
let Ej6 = 3 * 50 / 5 + 90 % 100 - 100 / (4 * -3 + 2);
let Ej7 = 8 * (17 - 3 * -9 - (15 + 21 % 7 - 2) / 13 - (-1 - 100) / 10) + 17 * 8 - 1;
let Ej8 = 5 % 1 + 2 % 2 * 12565 - 7 * (4 / 2 / 2 * 8 - 8);
let Ej9 = (5 / 3) + (((48 % 15) - 1) / 3) + 10 / 5 * 2;
let Ej10 = ((-5 * 12) / 5) - 6 % 2 + 3;
let Ej11 = 5 * (4 / 4 * 4 - (44 + 4 / -4)) - 6 % 9;
let Ej12 = 12 / 4 % 5 + 7 / (8 * ((11 / 3) / 17) - 23 % 8) + 78;

// Imprimir los resultados
console.log("Resultado Ej1: " + Ej1);
console.log("Resultado Ej2: " + Ej2);
console.log("Resultado Ej3: " + Ej3);
console.log("Resultado Ej4: " + Ej4);
console.log("Resultado Ej5: " + Ej5);
console.log("Resultado Ej6: " + Ej6);
console.log("Resultado Ej7: " + Ej7);
console.log("Resultado Ej8: " + Ej8);
console.log("Resultado Ej9: " + Ej9);
console.log("Resultado Ej10: " + Ej10);
console.log("Resultado Ej11: " + Ej11);
console.log("Resultado Ej12: " + Ej12);

// 1) (Verdadero && Falso) || (Falso || Verdadero)
console.log((true && false) || (false || true));  // Resultado esperado: true

// 2) (Verdadero && Falso) || (Verdadero && (Falso || Verdadero))
console.log((true && false) || (true && (false || true)));  // Resultado esperado: true

// 3) (Falso == !Verdadero) && ((Falso && Verdadero) && Verdadero)
console.log((false == !true) && ((false && true) && true));  // Resultado esperado: false

// 4) (Falso == !Verdadero) || (Falso && Falso) || (Falso || Verdadero)
console.log((false == !true) || (false && false) || (false || true));  // Resultado esperado: true

// 5) (Falso == Verdadero) && (Verdadero && Verdadero) && (Falso && Verdadero)
console.log((false == true) && (true && true) && (false && true));  // Resultado esperado: false

// 6) 4 > 6 && 10 == 10 && 3 % 3 <= 0
console.log(4 > 6 && 10 == 10 && 3 % 3 <= 0);  // Resultado esperado: false

// 7) 7 != 8 && 5 * (8 - 9) > -3 && 4 == 5 || 6 != 5
console.log(7 != 8 && 5 * (8 - 9) > -3 && 4 == 5 || 6 != 5);  // Resultado esperado: true

// 8) (5 % 5 > 1 || ! (5 == 4)) || 4 != 1 || 4 < -4
console.log((5 % 5 > 1 || !(5 == 4)) || 4 != 1 || 4 < -4);  // Resultado esperado: true

// 9) !(6 * -1 == 6) && (2 < 3 * -1) || (3 == 3) || (9 < 50 / 10) || !(18 == 2 * 9)
console.log(!(6 * -1 == 6) && (2 < 3 * -1) || (3 == 3) || (9 < 50 / 10) || !(18 == 2 * 9));  // Resultado esperado: true

// 10) (Falso != 2 > 1) && (Verdadero == 4 < 2)
console.log((false != 2 > 1) && (true == 4 < 2));  // Resultado esperado: false
