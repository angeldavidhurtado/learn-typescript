import Filters from './Filters'
import { type FilterValue } from '@/constants/todosChecks'

interface FooterProps {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

function Footer({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}: FooterProps) {
  return (
    <footer className="footer text-sm">
      <span>
        <strong>{activeCount}</strong> tareas pendientes
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {
        completedCount > 0 && (
          <button
            onClick={onClearCompleted}
          >
            Borrar completadas
          </button>
        )
      }
    </footer>
  )
}

export default Footer
