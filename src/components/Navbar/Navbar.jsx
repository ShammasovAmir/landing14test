import logo from "../../assets/ai-logo-1.png"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="col-xl-4">
          <img src={logo} alt="" className="nav__logo" />
        </div>
        <div className="col-xl-4">
          <ul className="nav__main">
            <li className="nav__link">
              <a href="#">Home</a>
            </li>
            <li className="nav__link">
              <a href="#">About</a>
            </li>
            <li className="nav__link">
              <a href="#">Services</a>
            </li>
            <li className="nav__link">
              <a href="#">Blog</a>
            </li>
            <li className="nav__link">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-xl-4">
          <div className="nav__btn-container">
            <button className="nav__btn">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
