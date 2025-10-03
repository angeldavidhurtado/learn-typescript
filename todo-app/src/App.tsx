import { useState } from 'react'
import Footer from '@/components/Footer'
import Todos from './components/Todos'
import Header from './components/Header'
import type { Todo as TodoType, TodoList, TodoId, TodoTitle } from '@/types/todo'
import { TODO_FILTERS, type FilterValue } from '@/constants/todosChecks'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleOnAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleOnAddTodo} />

      <Todos
        onToggleCompleted={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />

      {/*
      Si intento pasar esto:
      <Todos todos={mockTodos[0]} />
      TypeScript se va a quejar porque estoy pasando algo
      que no cumple el contrato, eso hace que se prevengan
      errores y se mejora la experiencia de desarrollo
      */}

      <Footer
        activeCount={activeCount}
        filterSelected={filterSelected}
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
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
