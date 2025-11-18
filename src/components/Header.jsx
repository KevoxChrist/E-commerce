
import '../styles/Header.css'

function Header(){
  return(
    //  <!-- Header -->
    <header className="header">
      <a href="/">
        <div className="logo">VISI</div>
      </a>
      <nav className="nav-menu">
        <a href="/contact" className="nav-item contact">CONTACT</a>
        <a href="/products" className="nav-item shop">SHOP</a>
      </nav>
    </header>
  )
}

export default Header;