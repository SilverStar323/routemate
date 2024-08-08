import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        <img src={Logo} alt="Routemate Logo" />
        <span>Routemate</span>
      </a>
      <nav className="navigation" >
        <a href="/" className="link">Home</a>
        <a href="/products" className="link">Products</a>
        <a href="/contact" className="link">Contact</a>
      <fotter>FOOTER</fotter>
      </nav>
    </header>
  )
}

export default Header;