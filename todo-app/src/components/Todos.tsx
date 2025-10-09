import type { Todo as TodoType, TodoList, TodoId } from '@/types/todo'
import Todo from './Todo'

interface TodosProps {
  todos: TodoList
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

function Todos({ todos, onToggleCompleted, onRemoveTodo }: TodosProps) {
  return (
    <ul className='mt-6 mb-5'>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}

export default Todos
