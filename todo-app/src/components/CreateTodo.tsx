import type { TodoTitle } from "@/types/todo"
import { useState } from "react"

interface CreateTodoProps {
  saveTodo: (title: TodoTitle) => void
}

function CreateTodo({ saveTodo }: CreateTodoProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={e => { setInputValue(e.target.value) }}
        placeholder="¿Qué quiere hacer?"
        autoFocus
      />
    </form>
  )
}

export default CreateTodo
