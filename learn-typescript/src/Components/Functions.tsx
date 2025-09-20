/*
mal, Function es como el any de las funciones
const sayHiFronFunction = (fn: Function) => {
  fn('Ángel')
}
*/

// void significa que no retorna algo o que ignoramos lo que retorne
// si fuera number, string, boolean, type o alguno así entonces
// obliga a retornar un valor de ese tipo
const sayHiFronFunction = (fn: (name: string) => void) => {
  fn('Ángel')
}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
  return 3
}

sayHiFronFunction(sayHi)

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


function Functions() {
  return (
    <>
    </>
  )
}

export default Functions
