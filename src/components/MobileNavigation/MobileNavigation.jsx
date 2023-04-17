import { useEffect, useRef } from "react"

export const MobileNavigation = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  const wrapperRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileNavOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setIsMobileNavOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileNavOpen])

  return (
    <div className="mobile-navigation-wrapper" ref={wrapperRef}>
      <div
        className={`mobile-navigation ${
          isMobileNavOpen ? "mobile-navigation--open" : ""
        }`}
      >
        <ul>
          <li className="mobile-navigation__link">
            <a href="#">Home</a>
          </li>
          <li className="mobile-navigation__link">
            <a href="#">About</a>
          </li>
          <li className="mobile-navigation__link">
            <a href="#">Services</a>
          </li>
          <li className="mobile-navigation__link">
            <a href="#">Blog</a>
          </li>
          <li className="mobile-navigation__link">
            <a href="#">Contact</a>
          </li>
          <li className="mobile-navigation__link">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
