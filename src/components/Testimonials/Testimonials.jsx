import { Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
// Swiper CSS
import "swiper/swiper-bundle.min.css"
// Slider data
import { sliderData } from "./data/sliderData"
// Images
import testimonialsImg from "../../assets/testimonials.png"

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__slider-container">
        <div className="container">
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            style={{ height: "450px" }}
            breakpoints={{
              1158: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              1: {
                slidesPerView: 1,
              },
            }}
          >
            {sliderData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="testimonials__slide">
                  <div className="testimonials__slide-img">
                    <img src={slide.img} alt="" />
                  </div>
                  <h6 className="testimonials__slide-title">{slide.title}</h6>
                  <p className="testimonials__slide-subtext">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="testimonials__info-container">
        <div className="container">
          <div className="col-md-6" style={{ height: "100%" }}>
            <div className="testimonials__info-text">
              <h1 className="testimonials__title">
                What our clients say about our awesome solutions
              </h1>
              <p className="testimonials__info">
                To take a trivial example, which of us ever undertakes laborious
                physical exercise, except to obtain some advantage from it who
                do not know.
                <br />
                <br />
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing .
                <br />
                <br />
                Lorem ipsum is placeholder previewing layouts and visual
                mockups.
                <br />
                <br />
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonials__img-container">
              <img src={testimonialsImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
