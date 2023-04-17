import about from "../../assets/about.png"

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="col-lg-6 col-md-6">
          <div className="about__img-container">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="about__main-text">
            <h1 className="about__title">
              Apply AI, Deep Learning and Data Sciece to solve
            </h1>
            <p className="about__subtitle">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="about__button-container">
              <button className="about__button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
