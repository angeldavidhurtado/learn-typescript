type ButtonProps = {
  children: React.ReactNode // varios elementos hijo - el mas utilizado generalmente
  // children: React.JSX.Element | string // solo un elemento hijo
  // children: React.JSX.Element[] // varios elemento hijo
  setCount: React.Dispatch<React.SetStateAction<number>>
}

function Father({children, setCount}: ButtonProps) {
  return (
    <button className='block' onClick={() => setCount(prev => prev + 1)}>
      {children}
    </button>
  )
}

export default Father
