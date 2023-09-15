/* // *** METODO TRADICIONAL ***
// Función para generar un número aleatorio entre min y max (ambos inclusive)
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Arreglos para almacenar edades y códigos
  let edades = [];
  let codigos = [];
  
  // Generar aleatoriamente 20 edades y 20 códigos
  for (let i = 0; i < 20; i++) {
    edades.push(generarNumeroAleatorio(18, 80)); // Edades entre 18 y 80 años
    codigos.push(generarNumeroAleatorio(1, 20)); // Códigos entre 1 y 20
  }
  
  // Encontrar la edad mayor y contar repeticiones
  let edadMayor = edades[0]; // Inicializamos con la primera edad
  let contadorRepeticiones = 0;
  
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] > edadMayor) {
      edadMayor = edades[i];
      contadorRepeticiones = 1; // Reiniciamos el contador
    } else if (edades[i] === edadMayor) {
      contadorRepeticiones++;
    }
  }
  
  // Mostrar resultados
  console.log("Edades generadas aleatoriamente:");
  console.log(edades);
  console.log("Códigos generados aleatoriamente:");
  console.log(codigos);
  console.log(`La edad mayor es ${edadMayor} años.`);
  console.log(`Se repite ${contadorRepeticiones} veces.`); */
  

  // *** METODO FLECHA ***
  // Función de flecha para generar un número aleatorio entre min y max (ambos inclusive)
  const generarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Arreglos para almacenar edades y códigos
  let edades = [];
  let codigos = [];
  
  // Generar aleatoriamente 20 edades y 20 códigos
  for (let i = 0; i < 20; i++) {
    edades.push(generarNumeroAleatorio(18, 80)); // Edades entre 18 y 80 años
    codigos.push(generarNumeroAleatorio(1, 20)); // Códigos entre 1 y 20
  }
  
  // Encontrar la edad mayor y contar repeticiones
  let edadMayor = edades[0]; // Inicializamos con la primera edad
  let contadorRepeticiones = 0;
  
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] > edadMayor) {
      edadMayor = edades[i];
      contadorRepeticiones = 1; // Reiniciamos el contador
    } else if (edades[i] === edadMayor) {
      contadorRepeticiones++;
    }
  }
  
  // Mostrar resultados
  console.log("Edades generadas aleatoriamente:");
  console.log(edades);
  console.log("Códigos generados aleatoriamente:");
  console.log(codigos);
  console.log(`La edad mayor es ${edadMayor} años.`);
  console.log(`Se repite ${contadorRepeticiones} veces.`);