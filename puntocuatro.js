/* // *** METODO TRADICIONAL ***

function contarSablesNegativos(energias) {
    let contador = 0; // Contador desde 0
  
    // Se recorre el arreglo
    for (let i = 0; i < energias.length; i++) {
      // Verificamos si la energía actual es negativa
      if (energias[i] < 0) {
        contador++; // Incrementamos el contador si la energía es negativa
      }
    }
  
    return contador; // Devolvemos la cantidad de sables con energía negativa
  }
  
  let energias = [2, 4, -8, 5, -6];
  let sablesNegativos = contarSablesNegativos(energias);
  
  console.log(`La cantidad de sables defectuosos con energía negativa es: ${sablesNegativos}`);
 */

   // *** METODO FLECHA ***
   const contarSablesNegativos = (energias) => {
    let contador = 0;
  
    energias.forEach((energia) => {
      if (energia < 0) {
        contador++;
      }
    });
  
    return contador;
  };
  
  // Ejemplo de uso
  const energias = [2, 4, -8, 5, -6];
  const sablesNegativos = contarSablesNegativos(energias);
  
  console.log(`La cantidad de sables defectuosos con energía negativa es: ${sablesNegativos}`);