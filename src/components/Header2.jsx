
import '../styles/Header2.css'

function HeaderTwo(){
  return(
    //  <!-- Header -->
    <header className="header-2">
      <a href="/">
        <div className="logo-2">VISI</div>
      </a>
      <nav className="nav-menu-2">
        <a href="/contact" className="nav-item-2 contact-2">CONTACT</a>
        <a href="/products" className="nav-item-2 shop-2">SHOP</a>
      </nav>
    </header>
  )
}

export default HeaderTwo;