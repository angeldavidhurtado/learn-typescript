import Button from './Components/Button'
import Father from './Components/Father'

function App() {
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
      <Father>
        <span>{'Este es un elemento hijo'}</span>
      </Father>
    </>
  )
}

export default App
