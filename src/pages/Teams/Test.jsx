import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'


import img1 from '../../assets/image/banner/1.jpg'
import img2 from '../../assets/image/banner/2.jpg'
import img3 from '../../assets/image/banner/3.jpg'



const Test = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            

            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>
            ...
        </Swiper>
    );
};

export default Test;