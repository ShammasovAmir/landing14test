import { useState, useEffect } from "react"
import logo from "../../assets/ai-logo-1.png"
import { MobileNavigation } from "../MobileNavigation/MobileNavigation"

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  useEffect(() => {
    if (isMobileNavOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [isMobileNavOpen])

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="col-xs-6 col-lg-4 col-xl-4">
            <img src={logo} alt="" className="nav__logo" />
          </div>
          {width > 1008 ? (
            <div className="col-lg-5 col-xl-4">
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
          ) : (
            ""
          )}
          <div className="col-xs-6 col-lg-3 col-xl-4">
            <div className="nav__btn-container">
              <button className="nav__btn">Sign In</button>
            </div>
            <div className="nav__burger-container">
              <button
                className="nav__burger-btn"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {width < 1008 ? (
        <MobileNavigation
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
      ) : (
        ""
      )}
    </>
  )
}

export default Navbar
