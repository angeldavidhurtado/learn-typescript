import type { TodoTitle } from "@/types/todo"
import CreateTodo from "./CreateTodo"

interface HeaderProps {
  onAddTodo: (title: TodoTitle) => void
}

function Header({ onAddTodo }: HeaderProps) {
  return (
    <header className='flex flex-col gap-2 mb-3'>
      <h1 className="flex text-4xl justify-center">
        todo
        <img
          // style={{ width: '60px', height: 'auto' }}
          className="w-10 h-min ml-1"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png"
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}

export default Header
