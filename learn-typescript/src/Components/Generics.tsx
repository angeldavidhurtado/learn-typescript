interface Box<T> {
  content: T
}
const box1: Box<string> = { content: 'hola' }
const box2: Box<number> = { content: 123 }
console.log(box1)
console.log(box2)


function getFirstElement<T>(arr: T[]) {
  return arr[0]
}
// si dejas el raton sobre las funciones
// typescript infiere el tipo de dato a leer y retornar
getFirstElement([1, 2, 3])
getFirstElement(['hello', 'world'])
getFirstElement([true, false])


type ApiResponse<T> = {
  status: number
  data: T
}

const response1: ApiResponse<{name: string; age: number}> = {
  status: 200,
  data: {name: 'Ángel', age: 26}
}

const response2: ApiResponse<string> = {
  status: 200,
  data: 'Hola mundo!'
}

const response3: ApiResponse<string[]> = {
  status: 200,
  data: ['Hola', 'mundo']
}

console.log(response1)
console.log(response2)
console.log(response3)


function identity<T>(value: T) {
  return value
}


function Generics() {
  identity<string>('hello')
  identity<number>(123)
  identity<boolean>(true)

  return (
    <>
      Generics
    </>
  )
}

export default Generics
