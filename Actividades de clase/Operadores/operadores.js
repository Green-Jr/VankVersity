// Operadores aritmeticos

let num1 = 10;
let num2 = 5;

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;

// Operadores de division

let division = num1 / num2;
let divisionEntera = Math.floor(num1 / num2);

// Operadores de modulo

let modulo = num1 % num2;

// Operadores de incremento y decremento

let incremento = num1++;
let decremento = num1--;

// Operadores de exponenciacion

let exponente = Math.pow(num1, num2);

// Operadores de bitwise

let bitwiseAnd = num1 & num2;
let bitwiseOr = num1 | num2;
let bitwiseXor = num1 ^ num2;
let bitwiseLeftShift = num1 << 2;
let bitwiseRightShift = num1 >> 2;

// Operadores de comparacion

let esIgual = num1 === num2;
let esDiferente = num1 !== num2;
let esMenor = num1 < num2;
let esMenorIgual = num1 <= num2;
let esMayor = num1 > num2;

// Operadores de comparacion estricta

let esIgualStricto = num1 == num2;
let esDiferenteStricto = num1 != num2;
let esMenorStricto = num1 < num2;
let esMenorIgualStricto = num1 <= num2;
let esMayorStricto = num1 > num2;

// Operadores logicos

let and = num1 && num2;
let or = num1 || num2;
let not = !num1;

// Operadores ternarios

let resultado = num1 > num2 ? num1 : num2;

// Resultados

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicacion:", multiplicacion);
console.log("Division:", division);
console.log("Division entera:", divisionEntera);

console.log("Modulo:", modulo);

console.log("Incremento:", incremento);

console.log("Decremento:", decremento);

console.log("Exponente:", exponente);

console.log("Bitwise AND:", bitwiseAnd);

console.log("Bitwise OR:", bitwiseOr);

console.log("Bitwise XOR:", bitwiseXor);

console.log("Bitwise Left Shift:", bitwiseLeftShift);

console.log("Bitwise Right Shift:", bitwiseRightShift);

console.log("Es igual?", esIgual);

console.log("Es diferente?", esDiferente);

console.log("Es menor?", esMenor);

console.log("Es menor o igual?", esMenorIgual);

console.log("Es mayor?", esMayor);

console.log("Es igual estricto?", esIgualStricto);

console.log("Es diferente estricto?", esDiferenteStricto);

console.log("Es menor estricto?", esMenorStricto);

console.log("Es menor o igual estricto?", esMenorIgualStricto);

console.log("Es mayor estricto?", esMayorStricto);

console.log("AND:", and);

console.log("OR:", or);

console.log("NOT:", not);

console.log("Resultado con operador ternario:", resultado);
