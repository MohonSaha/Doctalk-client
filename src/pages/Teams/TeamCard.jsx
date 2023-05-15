import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { SwiperSlide } from 'swiper/react';


const TeamCard = ({ disease }) => {


    const { _id, name, photo, details } = disease;


    return (
        <div>
            <div className="card w-full bg-base-100 shadow-2xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#017f7f]">{name}</h2>
                    <p>
                        {
                            details.length > 50 ?
                                details.slice(0, 200) + '...' : details
                        }
                    </p>
                    <div className="card-actions justify-end">
                        <button className="text-white btn bg-[#09c3d0] border-[#09c3d0]">Appointment</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeamCard;