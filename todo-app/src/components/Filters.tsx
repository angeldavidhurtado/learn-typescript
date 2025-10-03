import { type FilterValue, FILTERS_BUTTONS } from "@/constants/todosChecks"
/*
Al importar con type:
* El valor solo se podrá utilizar en contexto de tipos
* Si tiene type ese valor solo existirá en tiempo de compilación, no de ejecución
* Si se importa un tipo entonces se tendrá el valor del tipo
* 
* Si se importa una variable o una constante se importará
* el valor pero solo se podrá utilizar en compilación, además
* el valor de tipo que será importado será "unresolved", entonces
* el valor como tal es el valor de la variable o constante, y
* el valor de tipo será "unresolved", para extraer el tipo se puede utilizar typeof porque sí
* puede saber el valor de la variable, y ya se podrá utilizar en contexto de tipos
*/

interface FiltersProps {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

// const Filters: React.FC<FiltersProps> = ({ filterSelected, onFilterChange }) => {
function Filters({ filterSelected, onFilterChange }: FiltersProps) {
  const handleClick = (key: FilterValue) => 
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      onFilterChange(key)
    }

  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a
                href={href}
                className={className}
                onClick={handleClick(key as FilterValue)}
                /*
                onClick={e => {
                  e.preventDefault()
                  onFilterChange(key as FilterValue)
                  // ts debería ser capaz de inferir el dato,
                  // pero no lo hace, así que hay que uitlizar
                  // el "as FilterValue"
                }}
                */
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Filters


/*
[] -> es lo que me falta por aprender
aprender solo el 20% que se utiliza el 80% de las veces

HTML - [semantica, seo, accesibilidad]
CSS - position, display, flex, grid
JavaScript

react - redux toolkit
tailwind css - [chadcn]
[typescript - zod]

node.js
express
[
  jwt
  oaut
  api rest
  postgresql
  typescript backend
  next.js
]

hacer 5 proyecto de javascript mastering para mi portafolio freelance
*/
