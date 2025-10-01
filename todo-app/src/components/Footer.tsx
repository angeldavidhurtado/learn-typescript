import Filters from './Filters'

function Footer({
  /*
  activeCount,
  todos,
  onClearCompleted
  */
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {/* <strong>{todos.length}</strong> tareas pendientes */}
      </span>

      <Filters
        /*
        {filterSelected={}}
        onFilterChange={() => {}}
        */
      />
    </footer>
  )
}

export default Footer
