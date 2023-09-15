/* // *** METODO TRADICIONAL ***
//Se define la función calcularDistanciaNaboo la cual contiene 4 parametros 
function DistanciaNaboo(x1, y1, x2, y2) {

// Declaramos las variables locales usando "let", las cuales calculan la diferencia entre las coordenadas X & Y
    let distanciaX = x2 - x1;
    let distanciaY = y2 - y1;

// Calculo de la distancia utilizando el teorema de Pitágoras
    let distancia = Math.sqrt(Math.pow(distanciaX, 2) + Math.pow(distanciaY, 2));
  
// Esta función d   evuelve el valor de la distancia calculada
    return distancia;
  }
  
  let xNaboo = 10; // Coordenada X de Naboo en UA
  let yNaboo = 20; // Coordenada Y de Naboo en UA
  
  let xPlaneta = 15; // Coordenada X del otro planeta en UA
  let yPlaneta = 25; // Coordenada Y del otro planeta en UA
  
  let distancia = DistanciaNaboo(xNaboo, yNaboo, xPlaneta, yPlaneta);
  console.log("La distancia entre Naboo y el otro planeta es " + distancia + " UA"); */
  


//*** METODO FLECHA ***
// Función de flecha para calcular la distancia entre dos puntos
const calcularDistanciaNaboo = (x1, y1, x2, y2) => {
    // Cálculo de la distancia utilizando la fórmula mencionada
    let distanciaX = x2 - x1;
    let distanciaY = y2 - y1;
    
    let distancia = Math.sqrt(Math.pow(distanciaX, 2) + Math.pow(distanciaY, 2));
    
    return distancia;
  };
  
  // Coordenadas del planeta Naboo en UA
  let xNaboo = 10; // Coordenada X de Naboo en UA
  let yNaboo = 20; // Coordenada Y de Naboo en UA
  
  // Coordenadas del otro planeta en UA
  let xPlaneta = 15; // Coordenada X del otro planeta en UA
  let yPlaneta = 25; // Coordenada Y del otro planeta en UA
  
  // Llamada a la función para calcular la distancia
  let distancia = calcularDistanciaNaboo(xNaboo, yNaboo, xPlaneta, yPlaneta);
  
  console.log(`La distancia entre Naboo y el otro planeta es ${distancia} UA.`);