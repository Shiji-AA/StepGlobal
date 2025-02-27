import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../../../assets/architect/1.jpg"
import img2 from "../../../../assets/architect/2.jpg"
import img3 from "../../../../assets/architect/3.jpg"
import img4 from "../../../../assets/architect/1.jpg"
import img5 from "../../../../assets/architect/2.jpg"
import img6 from "../../../../assets/architect/3.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';
//import 'swiper/css/navigation';


function ArchitectureHero3() {
    const[swiper,setSwiper]=useState()
    const[activeSlide, setActiveSlide]=useState(1);

    const imgs =[
        {id:1,img:img1},
        {id:2,img:img2},
        {id:3,img:img3},
        {id:4,img:img4},
        {id:5,img:img5},
        {id:6,img:img6}
    ]

    const CustomNextArrow =() =>(
        <button className ="swiper-button-next" >
            <FaLongArrowAltRight/>
        </button>
    )

    const CustomPrevArrow =() =>(
        <button className ="swiper-button-prev" >
            < FaLongArrowAltLeft/>
        </button>
    )

    const handlePrev=()=>{
swiper?.slidePrev()
    }
    const handleNext=()=>{
        swiper?.slideNext()
            }


    return (
        <>
        <section className="p-20">
            <div className="flex items-center justify-around mb-10">
                <h1 className="font-custom text-4xl">StepGlobal Gallery</h1>
                <div className="custom-navigation ">
                    <div onClick={handlePrev}>
                        <CustomPrevArrow/>
                        </div>
                        <span>{activeSlide} / {imgs.length}</span>
                    <div onClick={handleNext}>
                    <CustomNextArrow/>
                    </div>

                </div>
            </div>
            <div>
            <Swiper className="h-[500px] px-20 ml-40"
      // install Swiper modules
      modules={[Navigation,   A11y]}
      spaceBetween={50}
      slidesPerView={1}
      //navigation
      navigation = {{
        prevE1:".swiper-button-prev",
        nextE1:".swiper-button-next"
      }}
      //pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={setSwiper}

      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex+1)}
    >

{
    imgs.map((slide)=>{
        return <div key={slide.id}>
     <SwiperSlide>
        <img  className="h-full object-cover  w-[100%] rounded-xl" src={ slide.img} alt=""/>
     </SwiperSlide>
        </div>
    })
}

         ...
    </Swiper>
            </div>

        </section>
            
        </>
    )
}

export default ArchitectureHero3
