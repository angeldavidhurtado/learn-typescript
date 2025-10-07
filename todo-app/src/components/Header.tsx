import type { TodoTitle } from "@/types/todo"
import CreateTodo from "./CreateTodo"

interface HeaderProps {
  onAddTodo: (title: TodoTitle) => void
}

function Header({ onAddTodo }: HeaderProps) {
  return (
    <header>
      <h1>
        todo
        <img
          // style={{ width: '60px', height: 'auto' }}
          className="w-14 h-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png"
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}

export default Header
