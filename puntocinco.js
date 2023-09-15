/* // *** METODO TRADICIONAL ***
//Función que toma el parametro principal
function calcularSalarioMensual(ventasLicencias) {
    const salarioBase = 3500000; // Salario base mensual
    const comisionPorLicencia = 1500000; // Comisión por cada licencia vendida
    const deduccionesPorImpuestos = (salarioBase + ventasLicencias * comisionPorLicencia) * 0.05; // 5% de deducciones por impuestos
    
    const salarioTotal = salarioBase + ventasLicencias * comisionPorLicencia - deduccionesPorImpuestos;
    
    return salarioTotal;
  }
  
  
  const ventasLicencias = 3; // Número de licencias vendidas
  
  const salarioVendedor = calcularSalarioMensual(ventasLicencias);
  console.log(`El salario mensual del vendedor es: ${salarioVendedor} COP`); */
  


   // *** METODO FLECHA ***
   const calcularSalarioMensual = (ventasLicencias) => {
    const salarioBase = 3500000; // Salario base mensual
    const comisionPorLicencia = 1500000; // Comisión por cada licencia vendida
    const deduccionesPorImpuestos = (salarioBase + ventasLicencias * comisionPorLicencia) * 0.05; // 5% de deducciones por impuestos
    
    const salarioTotal = salarioBase + ventasLicencias * comisionPorLicencia - deduccionesPorImpuestos;
    
    return salarioTotal;
  };
  
 
  const ventasLicencias = 3; // Número de licencias vendidas por el vendedor
  
  const salarioVendedor = calcularSalarioMensual(ventasLicencias);
  console.log(`El salario mensual del vendedor es: ${salarioVendedor} COP`);