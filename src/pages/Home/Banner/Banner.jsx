import React from 'react';
import img1 from '../../../assets/image/banner/1.jpg'
import img2 from '../../../assets/image/banner/2.jpg'
import img3 from '../../../assets/image/banner/3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full absolute top-0 h-[800px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />

                    <div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#017f7f89] to-[#017f7f89] h-full w-full">

                        <div className='text-white pl-12 w-full text-center'>
                            <h3 className='text-xl font-bold mb-6'>Markets & Resource</h3>
                            <h2 className='text-7xl font-bold mb-28'>Find The Best <br />Doctor Near By You.</h2>
                            <div>
                                <button className="text-white btn bg-[#09c3d0] border-[#09c3d0] mr-5">Discover More</button>
                                <button className="btn text-white btn-outline border-[#FFFFFF]">Latest Project</button>

                            </div>
                        </div>

                    </div>




                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;