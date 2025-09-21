/*
mal, Function es como el any de las funciones
const sayHiFromFunction = (fn: Function) => {
  fn('Ángel')
}
*/

// void significa que no retorna algo o que ignoramos lo que retorne
// si fuera number, string, boolean, type o alguno así entonces
// obliga a retornar un valor de ese tipo
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn('Ángel')
}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
  return 3
}

sayHiFromFunction(sayHi)

// --- --- ---

// en este caso se puede evitar tipar el tipo de dato de retorno
// siempre que se pueda, evitarlo y mejor dejar a TS inferir tipos
const sumar = (a: number, b: number): number => {
  return a + b
}
sumar(1, 2)

// otra forma distinta de tipar arrow functions
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b
}
restar(2, 1)

// -- -- --

// da error porque debe retornar void, osea nada
// antes no daba error porque se definia
// un parametro que recibia una funcion
// ahora se define es una funcion como tal, no un parametro
/*
function regresar(msg: string): void {
  return 123 // incorrecto
  return null // incorrecto
  return undefined // correcto
}
*/
/*
  never
    la función nunca finaliza porque:
    1. entra en un bucle infinito
    2. retorna una excepción - un informe de un error
  void
    return undefined
*/

function regresar(msg: string): never {
  /*
  Nota: TypeScript no hace razonamiento complejo
  for (let i = 0; i < 10; i--) {} // no aceptado para never
  */
  /*
  // formas validas para never
  for(;;) {}
  while (true) {}
  */
  throw new Error(msg)
}

try {
  regresar('error')
} catch(e) {
  console.log(e)
}


function Functions() {
  return (
    <>
    </>
  )
}

export default Functions
