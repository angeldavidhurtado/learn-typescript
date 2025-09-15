type ButtonProps = {
  children: React.ReactNode // varios elementos hijo - el mas utilizado generalmente
  // children: React.JSX.Element | string // solo un elemento hijo
  // children: React.JSX.Element[] // varios elemento hijo
}

function Father({children}: ButtonProps) {
  return (
    <button className='block'>
      {children}
    </button>
  )
}

export default Father
