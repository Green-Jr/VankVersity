// 1. Calcular la edad en un futuro
const edadActual = parseInt(prompt("Ingrese su edad actual:"));
const aniosFuturos = parseInt(prompt("¿Cuántos años desea sumar?:"));
const edadFutura = edadActual + aniosFuturos;
console.log(`En ${aniosFuturos} años, tendrá ${edadFutura} años.`);

// 2. Operaciones matemáticas básicas
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

console.log(`Producto: ${num1 * num2}`);
console.log(`Módulo: ${num1 % num2}`);
console.log(`Cociente: ${num1 / num2}`);
console.log(`Suma: ${num1 + num2}`);
console.log(`Resta: ${num1 - num2}`);

// 3. Valor de electrodoméstico a crédito
const precio = parseFloat(prompt("Ingrese el precio del electrodoméstico:"));
const meses = parseInt(prompt("Ingrese la cantidad de meses para el crédito:"));

const interes = 0.05 * meses;
const precioFinal = precio * (1 + interes);
const cuotaMensual = precioFinal / meses;

console.log(`El valor de las cuotas mensuales es de: ${cuotaMensual.toFixed(2)}`);

// 4. Área de un triángulo
const base = parseFloat(prompt("Ingrese la base del triángulo:"));
const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
const areaTriangulo = (base * altura) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}`);

// 5. Área y perímetro de un círculo
const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
const areaCirculo = Math.PI * Math.pow(radio, 2);
const perimetroCirculo = 2 * Math.PI * radio;

console.log(`Área: ${areaCirculo}`);
console.log(`Perímetro: ${perimetroCirculo}`);

// 6. Volumen de un cubo
const lado = parseFloat(prompt("Ingrese el lado del cubo:"));
const volumenCubo = Math.pow(lado, 3);
console.log(`El volumen del cubo es: ${volumenCubo}`);

// 7. Precio con IVA
const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
const precioFinalConIVA = precioProducto * 1.19;
console.log(`El precio final con IVA es: ${precioFinalConIVA.toFixed(2)}`);

// 8. Precio con descuento
const precioConDescuento = precioProducto * 0.9;
console.log(`El precio final con descuento es: ${precioConDescuento.toFixed(2)}`);

// 9. Calcular porcentaje
const cantidad = parseFloat(prompt("Ingrese la cantidad:"));
const porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular:"));
const resultadoPorcentaje = (cantidad * porcentaje) / 100;
console.log(`El ${porcentaje}% de ${cantidad} es: ${resultadoPorcentaje}`);

// 10. Valor absoluto
const numeroReal = parseFloat(prompt("Ingrese un número real:"));
const valorAbsoluto = Math.abs(numeroReal);
console.log(`El valor absoluto es: ${valorAbsoluto}`);

// 11. Lanzamiento de dos dados
const dado1 = Math.floor(Math.random() * 6) + 1;
const dado2 = Math.floor(Math.random() * 6) + 1;
const sumaDados = dado1 + dado2;
console.log(`Resultado de los dados: ${dado1} y ${dado2}, suma: ${sumaDados}`);

// 12. Conversión de Celsius a Fahrenheit
const celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
const fahrenheit = (celsius * 9/5) + 32;
console.log(`La temperatura en Fahrenheit es: ${fahrenheit}`);

// 13. Factorial de 5
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log(`El factorial de 5 es: ${factorial}`);

// 14. Número aleatorio en un rango
const min = parseInt(prompt("Ingrese el valor mínimo:"));
const max = parseInt(prompt("Ingrese el valor máximo:"));
const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Número aleatorio entre ${min} y ${max}: ${numeroAleatorio}`);

// 15. Conversión de segundos a horas y minutos
const segundos = parseInt(prompt("Ingrese la cantidad de segundos:"));
const horas = Math.floor(segundos / 3600);
const minutos = Math.floor((segundos % 3600) / 60);
console.log(`${segundos} segundos son ${horas} horas y ${minutos} minutos.`);

// 16. Fórmula general de la ecuación cuadrática
const a = parseFloat(prompt("Ingrese el valor de a:"));
const b = parseFloat(prompt("Ingrese el valor de b:"));
const c = parseFloat(prompt("Ingrese el valor de c:"));

const discriminante = Math.pow(b, 2) - 4 * a * c;

if (discriminante >= 0) {
  const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  console.log(`Las soluciones son: x1 = ${x1}, x2 = ${x2}`);
} else {
  console.log("No hay soluciones reales.");
}
