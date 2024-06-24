"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const index = () => {
  return (
    <>
      <section className="masthead -type-7 pt-0 pb-0">
        <div className="masthead-slider js-masthead-slider-7">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".hero7-next-active",
              prevEl: ".hero7-prev-active",
            }}
          >
            <SwiperSlide style={{ height: "350px" }}>
              <div
                className="row justify-center text-center"
                style={{ height: "100%" }}
              >
                <div className="col-auto" style={{ height: "100%" }}>
                  <div className="masthead__content" style={{ height: "100%" }}>
                    <div className="masthead__bg">
                      <img src="/img/masthead/homeSlider1.jpg" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover amzaing places at exclusive deals
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "350px" }}>
              <div
                className="row justify-center text-center"
                style={{ height: "100%" }}
              >
                <div className="col-auto" style={{ height: "100%" }}>
                  <div className="masthead__content" style={{ height: "100%" }}>
                    <div className="masthead__bg">
                      <img src="/img/masthead/homeSlider2.jpg" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover amzaing places at exclusive deals
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="masthead-slider__nav -prev js-prev">
            <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-prev-active">
              <i className="icon-arrow-left" />
            </button>
          </div>
          {/* End prev navigation */}

          <div className="masthead-slider__nav -next js-next">
            <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-next-active">
              <i className="icon-arrow-right" />
            </button>
          </div>
          {/* End next navigation */}
        </div>
        {/* End slider */}

        {/* End tab-filter */}
      </section>
      {/* End section */}
    </>
  );
};

export default index;
