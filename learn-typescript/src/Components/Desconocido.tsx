/*
  any
    Permite cualquier tipo de dato
  unknown
    * nos advierte que no sabemos el tipo de dato que estamos trabajando
    * TypeScript no sabe que tipo de operaciones puede realizar sobre el
*/

let someValue: unknown = 123
let stringLenght =  (someValue as string).length
console.log('-- -- --')
console.log(stringLenght)
console.log(typeof(someValue))
console.log('-- -- --')

// -- -- --

type User = {
  id: number
  name: string
}

let user: unknown = {
  id: '1',
  name: 'Ángel'
}

const newUser = user as User
console.log(`Suma: ${newUser.id + 1}`)

const colors = ['yellow', 'blue', 'red'] as const
console.log(colors[0])
// colors[0] = 'white' // TypeScript me da error porque se sopone que el array es contante, pero js si cambia su contenido porque js va como aparte de ts, ts es como una capa antes de compilar, pero como que siempre se puede compilar
console.log(colors[0])

let num: number = 123
let str = num as unknown as string
console.log(`Es str?: ${typeof str}`) // Esto engania al compilador


function Desconocido() {
  const body = document.getElementsByTagName('body')[0] as HTMLBodyElement
  const input = document.getElementById('user') as HTMLInputElement

  return (
    <>
      <input type="text" id="user" />
    </>
  )
}

export default Desconocido
