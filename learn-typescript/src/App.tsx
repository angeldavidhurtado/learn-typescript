import { useState } from 'react'
import Button from './Components/Button'
import Father from './Components/Father'
import Link from './Components/Link'
import Component from './Components/Component'
import State from './Components/State'
import UtilityTypes from './Components/UtilityTypes'
import Desconocido from './Components/Desconocido'
import Generics from './Components/Generics'
import Functions from './Components/Functions'
import useTemplateUnionTypes from './hooks/useTemplateUnionTypes'
import useLessonTwo from './hooks/useLessonTwo.mts'
import useMagicStrings from './hooks/useMagicStrings'
import usePersonajes from './hooks/usePersonajes'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useTemplateUnionTypes()
  console.log([data, setData])
  useLessonTwo()
  useMagicStrings()
  usePersonajes()

  return (
    <>
      <h1 className='text-center'>Hola mundo</h1>
      <Button
        text='Hola mundo'
        names={['Ángel', 'Hurtado']}
        style={{fontSize: '32px'}}
        userAgesGeneric={{ a: 0, b: 1, c: 2 }}
        userAges={{
          Ángel: 20,
          David: 21,
          Hurtado: 22
        }}
        onClick={text => {alert(`Hola soy ${text}`)}}
      />
      <Father setCount={setCount}>
        <span>{`Elemento hijo ${count}`}</span>
      </Father>
      <Link href='https://angeldavidhurtado.github.io' target='_blank' customProp={3}>
        {123}
      </Link>
      <Component />
      <State />
      <UtilityTypes name="Ángel" age={15} />
      <Desconocido />
      <Generics />
      <Functions />
      <button
        // onClick={() => setData(val => val + 1)}
        onClick={() => setData(val => val + 1)}
        className='block w-fit min-w-12 border-1 px-2 rounded-md cursor-pointer'
      >
        {data}
      </button>
    </>
  )
}

export default App
