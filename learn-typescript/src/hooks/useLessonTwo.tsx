const a = '1'
const b = 2
const c = a + b
console.log(c)

function divide(a: number, b: number) {
  if (b === 0) throw new Error("division by zero") // rama con tipo `never`
  return a / b // rama con tipo `number`
}


// Edicion de objetos

type Carro = {
  id: {
    readonly saludo: number
    data: {}
  }
}

const carro: Carro = {
  id: {
    saludo: 2,
    data: {}
  }
}

// carro.id.saludo = 3 // error
carro.id = { saludo: 2, data: {} }


// asdf

type tupla = readonly [number, number]
const data: tupla = [1, 2]
// data.push(3)
// esto debería dar un error
// es un fallo de typescript que no arreglan para mantener la retro compatibilidad
// se puede medio solucionar colocando en la definicion del tipo un readonly
// aunque eso hace que la tupla no se pueda editar, util si se guardan colores
// ya definidos pero en casos donde se quiera modificar el contenido no tan bueno
// pero es lo que hay jaja
console.log(data)

// cómo hago un array de tantos arrays como se quiera y digamos todos con string
// y si quiero string number string number ...
// o si quiero string, number, boolean, number, string, number, boolean, number, string, ...



function useLessonTwo() {
  const dato = divide(4, 2) // aunque puede dar una excepcion el tipo de dato es number no never
  console.log(dato)
}

export default useLessonTwo
