function obtenerNombre(codigo){
    return codigo.split(":")[1]
}
let obtenerResultado=obtenerNombre("454:juan")
console.log(obtenerResultado)

//funcion flecha

let obtenerNombreFlecha = (codigo)=>codigo.split(":")[1]
console.log(obtenerNombre("454:juan"))