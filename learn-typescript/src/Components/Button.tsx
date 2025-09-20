type Color = 'bg-yellow-500' | 'bg-blue-500' | 'bg-red-500'

type ButtonProps = {
  text: string
  subtitle?: string
  color?: Color
  backgroundColor?: Color
  padding?: number[]
  paddingLengLimit?: [number, number, number?, number?]
  names: ['Ángel' | 'David', 'Hurtado']
  style: React.CSSProperties
  userAgesGeneric: Record<string, number>
  userAges: Record<'Ángel'|'David'|'Hurtado', number>
  onClick: (text: string) => void
}

// esto esta mal
// javascript renombra name a string, cambia el nombre de las variables
/*
function saludar({ userName: j, userAge: a }: { userName: string, userAge: number }) {
  console.log([j, a])
}
saludar({ userName: 'Ángel', userAge: 26 })
*/
function saludar({ name, age }: { name: string, age: number }): string { // tipo de dato que retorna
  return `Soy ${name} y tengo ${age}`
} // esta es la forma mas usada, creo, o con los type como fazt
const saludo = saludar({name: 'Ángel', age: 26})
console.log(saludo)
/*
function saludar(persona: { name: string, age: number }) {
  const { name, age } = persona
  return `Soy ${name} y tengo ${age}`
}
*/

function Button({text, backgroundColor, style, userAges, onClick, ...rest}: ButtonProps) {
  const bg = backgroundColor ? backgroundColor : 'bg-amber-500'
  console.log(rest)

  return (
    <button
      style={style}
      className={`${bg} text-blue-950 font-semibold py-1 px-2 rounded-md cursor-pointer`}
      onClick={() => onClick('Ángel')}
    >
      {text}
    </button>
  )
}

export default Button
