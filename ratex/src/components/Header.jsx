

const Header = () => {
  return (
    <header className=" p-4 text-center border-b-8 border-neutral-500  ">
      <h1 className="text-2xl font-semibold tracking-tight">Ratex Currency Exchange</h1>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header