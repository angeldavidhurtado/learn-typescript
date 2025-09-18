type ButtonProps = {
  children: React.ReactNode // varios elementos hijo - el mas utilizado generalmente
  // children: React.JSX.Element | string // solo un elemento hijo
  // children: React.JSX.Element[] // varios elemento hijo
  setCount: React.Dispatch<React.SetStateAction<number>>
  defaultValue?: string
}

function Father({children, setCount, defaultValue = 'Ángel'}: ButtonProps) {
  console.log(defaultValue)

  return (
    <button className='block' onClick={() => setCount(prev => prev + 1)}>
      {children}
    </button>
  )
}

export default Father
