/* // *** METODO TRADICIONAL ***
// Arreglo para almacenar los números
let numeros = [];

// Leer 10 números
for (let i = 1; i <= 10; i++) {
  let numero = parseFloat(prompt(`Ingrese el número ${i}:`));
  numeros.push(numero);
}

// Función para encontrar el número más cercano a cero
let numeroMasCercano = numeros[0]; // Inicializamos con el primer número
for (let i = 1; i < numeros.length; i++) {
  if (Math.abs(numeros[i]) < Math.abs(numeroMasCercano)) {
    numeroMasCercano = numeros[i];
  }
}

// Mostrar el resultado
console.log(`El número más cercano a cero es: ${numeroMasCercano}`);
 */
// *** METODO FLECHA *** 
// Arreglo para almacenar los números
let numeros = [];

// Leer 10 números
for (let i = 1; i <= 10; i++) {
  let numero = parseFloat(prompt(`Ingrese el número ${i}:`));
  numeros.push(numero);
}

// Función de flecha para encontrar el número más cercano a cero
const numeroMasCercanoACero = () => {
  let numeroMasCercano = numeros[0]; // Inicializamos con el primer número
  for (let i = 1; i < numeros.length; i++) {
    if (Math.abs(numeros[i]) < Math.abs(numeroMasCercano)) {
      numeroMasCercano = numeros[i];
    }
  }
  return numeroMasCercano;
};

// Llamada a la función y mostrar el resultado
const resultado = numeroMasCercanoACero();
console.log(`El número más cercano a cero es: ${resultado}`);
