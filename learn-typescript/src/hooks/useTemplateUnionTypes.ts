type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
  id: HeroId
  name: string
  isActive?: boolean
  age?: number
}

function createHero(hero: Pick<Hero, 'name'>): Hero {
  const { name } = hero
  return {
    id: crypto.randomUUID(),
    name,
    isActive: true
  }
}

type HeroBasicInfo = {
  name: string
  age: number
}

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type HeroProperties = {
  readonly id?: HeroId
  isActive?: boolean
  powerScale?: HeroPowerScale
  address?: {
    planet: string
    city: string
  }
}

type Hero2 = HeroBasicInfo & HeroProperties

const hero2: Hero2 = {
  name: 'Ángel',
  age: 26,
  id: crypto.randomUUID(),
  isActive: true
}

console.log(hero2)

const address: HeroProperties['address'] = {
  planet: 'Tierra',
  city: 'Bogotá'
}

console.log(address)

// typeof para javascript normal dice el tipo de dato
// typeof cuando lo recibe un type como type Address
// ahí typescript guarda el type de typescript
type Address = typeof address

const myAddress: Address = {
  planet: 'Tierra',
  city: 'Bogotá'
}

console.log(myAddress)

// as const asigna readonly a todos los parametros
// si se quiere selectivamente se hace en la definicion del type
const addressConst = { city: 'Bogotá', country: 'Colombia' } as const
console.log(addressConst)

// typeof para funciones

function createAddress() {
  return {
    planet: 'Tierra',
    city: 'Bogotá'
  }
}

type typeAddress = ReturnType<typeof createAddress>
const otherAddressMore: typeAddress = {
  planet: 'Tierra',
  city: 'Bogotá'
}
console.log(otherAddressMore)

// Arrays

// antiguamente era el tipo por defecto para arrays vacios en typescript
// const languages: never[] = []
// const languages: any[] = [] // ahora por defecto es any[]
// const languages: string[] = []
// const languages: Array<string> = [] // forma alternativa 
// const languages: string[][] = []
const languages: (string | string[])[] = []
languages.push('JavaScript', ['hola'])

const strOrNum: (string | number)[] = []
strOrNum.push('a', 1)

// tipo recursivo
type NestedArray<T> = T | NestedArray<T>[]
type NestedStringArray = NestedArray<string> // Nested = Anidado
const arrayAnidado: NestedStringArray = ['a', ['b', ['c']], []]
console.log(arrayAnidado)
/*
 * T sí es el parámetro genérico
 * El NestedArray de la derecha no es un parámetro nuevo, es la misma
 * entidad que se esta definiendo (una referencia autorreferente).
 *
 * TypeScript trata las definiciones de tipos de forma declarativa, no ejecutable
 * le dices al compilador “hay un alias llamado NestedArray cuyo valor es T o un
 * array de NestedArray<T>” y el compilador acepta la referencia recursiva.
 *
 * No hay error aunque parezca que “apuntas a algo que no existe aún” porque el
 * comprobador de tipos resuelve el alias de forma laxa/recursiva durante el
 * análisis, no necesita que la entidad esté “ejecutada” antes.
 *
 * Esto NO crea nada en tiempo de ejecución: los tipos se eliminan al compilar a
 * JavaScript - sólo afectan al chequeo estático.
 *
 * En resumen:
 * NestedArray a la derecha es la misma definición, usada recursivamente;
 * T es el único parámetro;
 * el compilador soporta ese patrón porque trabaja con tipos de forma declarativa
 * y puede resolver referencias recursivas.
 */

const Heros: Hero[] = []
Heros.push(
  createHero({ name: 'A' }),
  createHero({ name: 'B' }),
  createHero({ name: 'C' })
)

// tuplas




function useTemplateUnionTypes() {
  const hero = createHero({ name: 'Ángel' })
  const age = hero.age ?? 0 // hero.age === null || hero.age === undefined ? b : a
  console.log(`Hero: ${hero}, Age: ${age}`)
}

export default useTemplateUnionTypes
