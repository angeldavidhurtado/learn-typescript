type User = {
  name: string
  age: number
  email: string
  password: string
}

type UserWithoutPassword = Omit<User, 'email' | 'password'>
/*
elimina una propiedad del type User y guarda
el nuevo tipo de dato en UserWithoutPassword
type UserWithoutPassword = {
  name: string
  age: number
  email: string
}
*/
const data1: UserWithoutPassword = {
  name: 'Ángel',
  age: 26
}
console.log(data1)

type UpdateUser = Partial<User>
/*
se puden ver dejando el raton sobre UpdateUser
type UpdateUser = {
  name?: string | undefined
  age?: number | undefined
  email?: string | undefined
  password?: string | undefined
}
*/

type UserPublicData = Pick<User, 'name' | 'password'>
const data2: UserPublicData = {
  name: 'Ángel',
  password: 'abcd'
}
console.log(data2)

// type OptionalUserWithoutPassword = Partial<UserWithoutPassword>
// Es como funciones Omit omite password en User y
// luego Partial vuelve esos atributos opcionales
/*
  entonces es como que los <> y las palabras antes de los <>
  como PalabraAntesDe<OtraCosas, 'aveces' | 'cosas' & 'aqui'>
  todo esto en realidad son como funciones, clases o cosas pero
  especificas para los tipos de datos pero es como lo mismo en
  si
*/
type OptionalUserWithoutPassword = Partial<Omit<User, 'password'>>
const data3: OptionalUserWithoutPassword = {
  name: 'Ángel',
  age: 26,
  // email: 'angeldavidhurtado.dev@gmail.com'
}
console.log(data3)

type Status = 'active' | 'inactive' | 'pending' | 'deleted' | 'blocked'
type AllowedStatus = Exclude<Status, 'inactive' | 'pending'>
const data4: AllowedStatus = 'active'
console.log(data4)


function UtilityTypes({ name, age }: UpdateUser) {
  console.log(`Name ${name} age ${age}`)
  name = 'David'
  age = 26
  console.log(`Name ${name} age ${age}`)

  return (
    <>
      Utility
    </>
  )
}

export default UtilityTypes
