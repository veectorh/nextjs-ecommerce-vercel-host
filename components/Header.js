import Link from "next/link";
const Header = () => {

  return (
    <header className="header">
      <Link href="/">
        <h1 className="header__title">Relic</h1>
      </Link>
      <a className="header__summary snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
        <span className="header__price">My Collection</span>
      </a>
    </header>
  )
}

export default Header;