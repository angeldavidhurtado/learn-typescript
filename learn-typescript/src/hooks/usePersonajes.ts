import type { IMario, ISonic } from './../types/personajes-de-jeugo'

class Mario implements IMario {
  company: 'nintendo' = 'nintendo'
  readonly #name = 'Mario' // privado en tiempo de ejecución
  private readonly lastname = 'Bross' // privado en tiempo de compilación
  // no se puede tener privado en js y ts al mismo tiempo

  saltar = () => {
    this.saludar()
    console.log('Saltando')
  }

  private saludar = () => {
    console.log(`Hola, soy ${this.#name} ${this.lastname}`)
  }
}

class Sonic implements ISonic {
  company: 'sega' = 'sega'
  readonly #name = 'Sonic'
  protected readonly lastname = 'X'

  correr = () => {
    this.saludar()
    console.log('Corriendo')
  }

  protected saludar = () => {
    console.log(`Hola, soy ${this.#name} ${this.lastname}`)
  }
}

function usePersonajes() {
  const mario = new Mario()
  const sonic = new Sonic()

  mario.saltar()
  sonic.correr()
}

export default usePersonajes
