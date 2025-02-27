import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import edu1 from "../../../../assets/education/edu1.jpg";
import edu2 from "../../../../assets/education/edu2.jpg";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";

function EducationeHero() {
  const [, setSwiper] = useState();
  const [, setActiveSlide] = useState(1);

  const imgs = [
    {
      id: 1,
      img: edu1,
      headline: "university college \n school education", // Line break added here
      paragraph:
        "A small river named Duden flows by their place and supplies it  with \n the necessary regelialia.", // Line break added here
    },
    { id: 2, img: edu2, headline: "education needs \n complete solution", paragraph: "A small river named Duden flows by their place and supplies it  with \n the necessary regelialia.", },
  ];

  return (
    <>
      <section className="p-0 m-0">
        <div>
          <Swiper
            className="h-screen w-full"
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 3000, // Change slide every 3 seconds
              disableOnInteraction: false,
            }}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
          >
            {imgs.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="slider-item w-full h-screen relative bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.img})` }}
                >
                  <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                  <div className="container relative z-10 h-full flex justify-start items-center text-left px-20">
                    <div className="text-white">
                      <h1 className="font-custom text-5xl font-normal mb-4">
                        {slide.headline.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </h1>
                      <p className="font-custom text-xl mb-6">
                        {slide.paragraph.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                      <p>
                      <a
  href="#"
  className="font-custom btn btn-primary px-6 py-3 mt-3 text-lg bg-teal-500 text-white rounded-full hover:bg-black hover:bg-opacity-50"
>
  Contact Us
</a>

                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default EducationeHero;
