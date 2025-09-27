// .d.ts d-definiciones
// en este archivo solo debería ir definiciones de tipos

export interface IMario {
  company: 'nintendo'
  // puede ser de tipo string pero con el texto como
  // tal oliga a que simpre sea ese texto especifico
  saltar: () => void
}

export interface ISonic {
  company: 'sega'
  correr: () => void
}
