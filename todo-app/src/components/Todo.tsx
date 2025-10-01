import type { Todo as TodoType, TodoId } from '@/types/todo'

interface TodoProps extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}


function Todo({ id, title, completed, onRemoveTodo, onToggleCompleted }: TodoProps) {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleted({ id, completed: e.target.checked })
  }

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox}
        /*
        onChange={e => {
          onToggleCompleted({ id, completed: e.target.checked })
        }}
        */
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
