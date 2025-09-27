type MSG_TYPES = Readonly<{
    ERROR: symbol
    WARNING: symbol
    INFO: symbol
}>

const MESSAGE_TYPES: MSG_TYPES = Object.freeze({
  ERROR: Symbol(),
  WARNING: Symbol(),
  INFO: Symbol()
})

function imprimirMensaje(tipo: symbol) {
  if (tipo === MESSAGE_TYPES.ERROR)
    console.log('Se ha producido un error')
  else if (tipo === MESSAGE_TYPES.WARNING)
    console.log('Esto es una advertencia')
  else if (tipo === MESSAGE_TYPES.INFO)
    console.log('Esto es información')
  else
    console.log('Mensaje no reconocido')
}

imprimirMensaje(MESSAGE_TYPES.WARNING)


// -- -- enums -- --
/*
 * En la realidad como que se utilizan mas type
 * en lugar de enum porque enum genera codigo js
 * en cambio type no deja residuos
 * para utilizar enum en tsconfig.app.json debe
 * estar "erasableSyntaxOnly" deshabilitado "false"
 */

// tiene un valor por defecto cuando no se define

/*
enum NAME {}
  Genera código JS
  Se utiliza cuando es una libreria y se necesita
  exportar los valores del enum, entonces ahí es
  mejor porque al generar el codigo JS se puede
  exportar
const enum NAME {}
  No genera código JS
  Siempre que se pueda tratar de utilizar esta
  version, pero en caso de necesitar exportar el
  enum a archivos externos ahí sí es mejor que
  genere el código JS
*/

/*
enum ERROR_TYPES {
  NOT_FOUND, // 0
  UNAUTHORIZED, // 1
  FORBIDEN // 2
}

const ERR = {
  NOT_FOUND: ERROR_TYPES.NOT_FOUND,
  UNAUTHORIZED: ERROR_TYPES.UNAUTHORIZED,
  FORBIDEN: ERROR_TYPES.FORBIDEN
}
console.log(ERR)
*/

/*
const enum Direccion {
  Norte = 'N',
  Sur = 'S',
  Este = 'E',
  Oeste = 'O'
}

let miDireccion: Direccion = Direccion.Norte
console.log(miDireccion)
*/


function useMagicStrings() {}

export default useMagicStrings
