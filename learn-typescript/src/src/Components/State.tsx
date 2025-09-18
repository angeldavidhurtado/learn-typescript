import { useRef, useState } from 'react'

type User = {
  name: string,
  age: number
}

function State() {
  const [user, setUser] = useState<User|null>(null)
  console.log(`${user?.name} ${user?.age}`)

  const setState = () => setUser({name: 'Ángel', age: 26})
  const showState = () => console.log(user)
  const buttonsStyle = 'border-1 px-2 rounded-md cursor-pointer'

  const myButton = useRef<HTMLButtonElement>(null)
  console.log(myButton)

  // type de un elemento html, tambien se ve pasando
  // el raton por el nombre de la variable button
  const button = document.createElement('button')
  const buttonType = button.constructor.name
  console.log(buttonType)

  return (
    <div className='bg-amber-950 flex flex-col items-center gap-2 p-2 rounded-md w-fit m-2'>
      <h2>State</h2>
      <button
        ref={myButton}
        onClick={setState}
        className={buttonsStyle}
      >
        Set State
      </button>
      <button
        onClick={showState}
        className={buttonsStyle}
      >
        Show state
      </button>
    </div>
  )
}

export default State
