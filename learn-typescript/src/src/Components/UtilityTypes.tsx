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
