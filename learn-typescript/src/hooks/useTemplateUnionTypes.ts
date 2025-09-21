type Hero = {
  id: `${string}-${string}-${string}-${string}-${string}`
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


function useTemplateUnionTypes() {
  const hero = createHero({ name: 'Ángel' })
  const age = hero.age ?? 0 // hero.age === null || hero.age === undefined ? b : a
  console.log(`Hero: ${hero}, Age: ${age}`)
}

export default useTemplateUnionTypes
