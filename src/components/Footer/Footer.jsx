import logo from "../../assets/ai-logo-2.png"
import phoneLogo from "../../assets/icons/phone.svg"
import mailLogo from "../../assets/icons/mail.svg"
import mapIconLogo from "../../assets/icons/map-icon.svg"
import globeLogo from "../../assets/icons/globe.svg"
import fbLogo from "../../assets/icons/fb.svg"
import igLogo from "../../assets/icons/ig.svg"
import twitterLogo from "../../assets/icons/twitter.svg"
import linkedinLogo from "../../assets/icons/linkedin.svg"
import ytLogo from "../../assets/icons/yt.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div
          className="col-lg-3 col-md-4 col-sm-12"
          style={{ marginBottom: 30 }}
        >
          <img src={logo} className="footer__ai-logo" alt="" />
          <p className="footer__normal-text">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and layouts and visual mockups.
          </p>
          <p className="footer__bold-text">
            <img src={mailLogo} alt="" /> Company@gmail.com.com
          </p>
          <p className="footer__bold-text">
            <img src={phoneLogo} alt="" /> Phone: (064) 332-1233
          </p>
          <p className="footer__bold-text">
            <img src={mapIconLogo} alt="" /> 450 Wall Street, USA, New York
          </p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <h4 className="footer__title">INFORMATION</h4>
          <ul className="footer__list">
            <li className="footer__list-item">New Collection</li>
            <li className="footer__list-item">About Store</li>
            <li className="footer__list-item">Contact Us</li>
            <li className="footer__list-item">Latest News</li>
            <li className="footer__list-item">Our Sitemap</li>
            <li className="footer__list-item">Orders History</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <h4 className="footer__title">FOOTER MENU</h4>
          <ul className="footer__list">
            <li className="footer__list-item">Instagram profile</li>
            <li className="footer__list-item">New Collection</li>
            <li className="footer__list-item">Contact Us</li>
            <li className="footer__list-item">Latest News</li>
            <li className="footer__list-item">Terms & Conditions</li>
            <li className="footer__list-item">Purchase Theme</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <h4 className="footer__title">USEFUL LINKS</h4>
          <ul className="footer__list">
            <li className="footer__list-item">Instagram profile</li>
            <li className="footer__list-item">New Collection</li>
            <li className="footer__list-item">Contact Us</li>
            <li className="footer__list-item">Latest News</li>
            <li className="footer__list-item">Terms & Conditions</li>
            <li className="footer__list-item">Purchase Theme</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div>
            <h4 className="footer__title">ABOUT THE STORE</h4>
            <p className="footer__normal-text">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and layouts and visual mockups.
            </p>
            <a href="#" className="footer__link">
              www.company.com
            </a>
            <div className="footer__icons-container">
              <img src={fbLogo} alt="" className="footer__icon" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={igLogo} alt="" className="footer__icon" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={twitterLogo} alt="" className="footer__icon" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={linkedinLogo} alt="" className="footer__icon" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ytLogo} alt="" className="footer__icon" />
            </div>
          </div>
          <div className="footer__language-tooltip">
            <img src={globeLogo} alt="" />
            &nbsp;&nbsp;English&nbsp;&nbsp;
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
