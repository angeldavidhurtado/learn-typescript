import { useState } from 'react'
import Todos from './components/Todos'
import type { Todo as TodoType, TodoList, TodoId } from '@/types/todo'

// https://www.youtube.com/watch?v=4lAYfsq-2TE&t=866s
// tuilizar la inferencia siempre que se puede, porque si no
// enntonces se va a estar tipando demasiado y se van a
// acoplar mucho los tipos de dato y cuando se quiera cambiar
// la estructura de un dato o el tipo de dato va a costar mucho

const mockTodos: TodoList = [
  {
    id: '1',
    title: 'todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

function App() {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id)
        return { ...todo, completed }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <h1>To Do</h1>
      <Todos
        onToggleCompleted={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos}
      />

      {/*
      Si intento pasar esto:
      <Todos todos={mockTodos[0]} />
      TypeScript se va a quejar porque estoy pasando algo
      que no cumple el contrato, eso hace que se prevengan
      errores y se mejora la experiencia de desarrollo
      */}

    </div>
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
