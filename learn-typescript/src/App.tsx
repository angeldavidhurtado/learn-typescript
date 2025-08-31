function Button(props: {text: string}) {
  return (
    <button className='bg-amber-500 text-blue-950 font-semibold py-1 px-2 rounded-md'>
      {props.text}
    </button>
  )
}

function App() {
  return (
    <>
      <h1>Hola mundo</h1>
      <Button text={'hola undo'} />
    </>
  )
}

export default App
