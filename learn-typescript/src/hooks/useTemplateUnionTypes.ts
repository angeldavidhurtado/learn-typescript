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
}

type Hero2 = HeroBasicInfo & HeroProperties

const hero2: Hero2 = {
  name: 'Ángel',
  age: 26,
  id: crypto.randomUUID(),
  isActive: true
}

console.log(hero2)


function useTemplateUnionTypes() {
  const hero = createHero({ name: 'Ángel' })
  const age = hero.age ?? 0 // hero.age === null || hero.age === undefined ? b : a
  console.log(`Hero: ${hero}, Age: ${age}`)
}

export default useTemplateUnionTypes
