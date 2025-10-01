/*
import { FILTERS_BUTTONS, TODO_FILTERS } from "@/constants/todosChecks"

interface FiltersProps {
  // se puede romper porque si se modifica
  // "@/constants/todosChecks" entonces ya no estaría
  // sincronizados los datos
  // filterSelected: 'all' | 'active' | 'completed'
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
}
*/

/*
type a = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
type b = keyof typeof TODO_FILTERS
type j = typeof TODO_FILTERS[ 'ALL' | 'ACTIVE' | 'COMPLETED' ]
*/

/*
const j = TODO_FILTERS
const jj = typeof TODO_FILTERS
console.dir((j))
*/

function Filters(/*{ filterSelected, onFilterChange }*/) {
  return (
    <>

    </>
  )
}

export default Filters
