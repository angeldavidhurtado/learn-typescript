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
}


function Button({text, backgroundColor, style}: ButtonProps) {
  const bg = backgroundColor ? backgroundColor : 'bg-amber-500'

  return (
    <button style={style} className={`${bg} text-blue-950 font-semibold py-1 px-2 rounded-md`}>
      {text}
    </button>
  )
}

function App() {
  return (
    <>
      <h1>Hola mundo</h1>
      <Button text='Hola undo' names={['Ángel', 'Hurtado']} style={{fontSize: '32px'}} />
    </>
  )
}

export default App
