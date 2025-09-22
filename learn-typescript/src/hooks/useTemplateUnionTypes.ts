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


function useTemplateUnionTypes() {
  const hero = createHero({ name: 'Ángel' })
  const age = hero.age ?? 0 // hero.age === null || hero.age === undefined ? b : a
  console.log(`Hero: ${hero}, Age: ${age}`)
}

export default useTemplateUnionTypes
