function Component() {
  /*
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e)
  }
  */

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e)
  }

  return (
    <button
      onClick={handleClick}
      className='block border-1 px-2 rounded-md cursor-pointer'>
      Click me
    </button>
  )
}

export default Component
