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


function useLessonTwo() {
  const dato = divide(4, 2) // aunque puede dar una excepcion el tipo de dato es number no never
  console.log(dato)
}

export default useLessonTwo
