import Todos from './components/Todos'

// https://www.youtube.com/watch?v=4lAYfsq-2TE&t=866s
// tuilizar la inferencia siempre que se puede, porque si no
// enntonces se va a estar tipando demasiado y se van a
// acoplar mucho los tipos de dato y cuando se quiera cambiar
// la estructura de un dato o el tipo de dato va a costar mucho

const mockTodos = [
  {
    id: 1,
    title: 'todo 1',
    completed: false
  },
  {
    id: 2,
    title: 'todo 2',
    completed: false
  },
  {
    id: 3,
    title: 'todo 3',
    completed: false
  }
]

function App() {
  return (
    <>
      <h1 className=''>To Do</h1>
      <Todos todos={mockTodos} />
    </>
  )
}

export default App

/*
type NestedNumberArray = number | NestedNumberArray[]
const numbers: NestedNumberArray = [1, 2, [[3, 4], [5, 6]], 7, [8], [[9], 0]]

es como si fuera una función recursiva
function NestedNumberArray(siguienteDato) {
  if (typeof siguienteDato === 'number')
    return number
  NestedNumberArray(siguienteDato)
}
*/
