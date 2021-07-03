//Reescribir la siguiente función tal que retorne una 
//promesa que se cumpla luego de 3 segundos (usar setTimeout), devolviendo el mismo resultado que la función dada.
//Usando then y catch completar la función "programa" dada para llamar a dividirNumeros e imprimir el resultado
 //o imprimir un mensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.
//
  console.clear()
  function dividirNumeros(dividendo, divisor) {
    return new Promise (function(resolve,reject){
        try {
          if(isFinite(dividendo/divisor)){
          setTimeout(()=>{
            
            resolve(dividendo/divisor)
          },3000)
        }else{
          reject(" no se divide por 0")
        }
        }catch(error){
          reject(error)
        }
    })
  }
  function Programa(){
  const promise= dividirNumeros(5,1)
  promise.then((resultadofinal)=>{
    console.log("el resultado es:"+resultadofinal)
  }).catch((error)=>{
    console.log("Hubo un error:"+error)
  }
  )
  }
  Programa();
  //lo mismo pero con async y await:
  async function programaAsync() {
    try {
    let resultado = await dividirNumeros(4,2);
    console.log("El resultado con async-await es: " + resultado)
    } catch (error){
        console.log(error.message)
    }
    
}

programaAsync();