import type { Todo as TodoType, TodoId } from '@/types/todo'

interface TodoProps extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
}

function Todo({ id, title, completed, onRemoveTodo }: TodoProps) {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id })
        }}
      >
        X
      </button>
    </div>
  )
}

export default Todo
