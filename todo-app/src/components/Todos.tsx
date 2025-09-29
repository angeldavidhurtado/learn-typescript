import type { TodosProps } from './../types/todo'

function Todos({ todos }: TodosProps) {
  console.log(todos)
  return (
    <>
      <h2>Todos</h2>
    </>
  )
}

export default Todos
