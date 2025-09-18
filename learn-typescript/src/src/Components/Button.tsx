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
