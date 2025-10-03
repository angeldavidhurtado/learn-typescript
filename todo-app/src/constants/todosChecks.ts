/*
El compilador de TypeScript
usa la información estática
del valor para inferir tipos
*/

export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const
/*
"as const" es de TypeScript
hace que el dato solo sea de lectura
igual que readonly
*/


export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
/*
se puede romper porque si se modifica
"@/constants/todosChecks" entonces ya no estaría
sincronizados los datos
filterSelected: 'all' | 'active' | 'completed'
*/


export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'Todos',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  },
} as const
