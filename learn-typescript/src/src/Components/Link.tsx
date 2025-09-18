import type { ComponentPropsWithoutRef } from "react"

// type LinkProps = ComponentProps<'a'>
type Props = Omit<ComponentPropsWithoutRef<"a">, "href">
type LinkProps = Props & {
  href?: string
  children: number
  customProp?: number
} /* & { // asi se puede seguir extendiendo
  properties: types
}
*/

function Link({href, children, customProp, ...props}: LinkProps) {
  console.log(`Prop personalizado: ${customProp}`)
  return (
    <>
      <div className='size-10 bg-amber-300' />

      {/* <a href={href} children='hola' /> */}
      <a href={href} {...props}>
        {children}
      </a>
    </>
  )
}

export default Link
