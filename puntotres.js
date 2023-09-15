//Función de flecha que tiene 2 parametros
//Las variables let hacen el calculo de la temperatura
let calcularTempMedia = (tempMaxima, tempMinima) => {
    let tempMedia = (tempMaxima + tempMinima) / 2;
        
    //Esta función nos retorna el valor calculado de la temperatura    
        return tempMedia;
      };
      
      let tempMaxima = 28; 
      let tempMinima = 15; 
      
      let tempMedia = calcularTempMedia(tempMaxima, tempMinima);
      console.log(`La temperatura media de la luna de Endor es ${tempMedia} grados Celsius.`);
      
    
    
      //Funcion tradicional
      function calcularTempMedia (tempMaxima, tempMinima) {
        let tempMedia = (tempMaxima + tempMinima)/2;
        
        return tempMedia;
      };
    