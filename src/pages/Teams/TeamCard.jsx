import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { SwiperSlide } from 'swiper/react';







const TeamCard = ({ disease }) => {


    const { diseases_id, title, img, description } = disease;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeamCard;