import React, { useEffect, useState } from 'react';
import img1 from '../../assets/image/banner/1.jpg'
import TeamCard from './TeamCard';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { FaPlus } from 'react-icons/fa';


// import img1 from '../../assets/image/banner/1.jpg'
// import img2 from '../../assets/image/banner/2.jpg'
// import img3 from '../../assets/image/banner/3.jpg'





const Teams = () => {


    const [diseases, setDideases] = useState([])
    useEffect(() => {
        fetch('diseases.json')
            .then(res => res.json())
            .then(data => {
                setDideases(data)
            })
    }, [])




    return (
        <div className='mt-32'>
            <div className='relative'>
                <img className='max-h-screen w-full' src={img1} alt="" />
                <div className='absolute flex-col text-center left-0 top-0 bg-gradient-to-r from-[#017f7f89] to-[#017f7f89] h-full w-full'>

                    <div className='mt-24'>
                        <h3 className='font-bold text-xl text-white'>Meet Out Team</h3>
                        <h1 className='font-bold text-6xl text-white'>Our Creative Team</h1>
                    </div>
                </div>
            </div>


            <div className='relative -top-96 mx-10 '>
                <Swiper
                    className='mt-32'
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    // navigation
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    // pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log()}
                    onSlideChange={() => console.log()}
                >


                    {
                        diseases.map(disease => <SwiperSlide><TeamCard
                        key={disease.diseases_id}
                            disease={disease}
                        ></TeamCard></SwiperSlide>)
                    }


                </Swiper>

            </div>


            <p className='relative -top-[370px] mx-10 text-[#017f7f] font-semibold  flex items-center justify-end cursor-pointer'>Add Member <FaPlus className='ml-3'></FaPlus></p>
        </div>
    );
};

export default Teams;