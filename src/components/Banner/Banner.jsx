import banner from "../../assets/banner.png"
import companyLogo1 from "../../assets/logoipsum1.png"
import companyLogo2 from "../../assets/logoipsum2.png"
import companyLogo3 from "../../assets/logoipsum3.png"
import companyLogo4 from "../../assets/logoipsum4.png"

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="col-xl-7">
          <div className="banner__main-text">
            <div className="banner__subheadline">Next genaretion platform</div>
            <h1 className="banner__headline">
              Artificial intelligence & Cyber security
            </h1>
            <p className="banner__info-text">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="banner__buttons-container">
              <button className="banner__button">Get Started</button>
              <button className="banner__button">
                <i class="fa-solid fa-play"></i> Watch Video
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-5">
          <div className="banner__img-container">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
      <div className="banner__company-logos">
        <div className="container">
          <div className="col-lg-3">
            <img src={companyLogo1} alt="" className="banner__info-img" />
          </div>
          <div className="col-lg-3">
            <img src={companyLogo2} alt="" className="banner__info-img" />
          </div>
          <div className="col-lg-3">
            <img src={companyLogo3} alt="" className="banner__info-img" />
          </div>
          <div className="col-lg-3">
            <img src={companyLogo4} alt="" className="banner__info-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
