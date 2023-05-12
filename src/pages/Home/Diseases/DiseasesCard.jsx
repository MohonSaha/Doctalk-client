import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const DiseasesCard = ({ disease }) => {

    const { diseases_id, title, img, description } = disease;


    return (
        <div className="carousel-item mr-12 w-96">



            <div className="card w-96 bg-base-100 shadow-2xl border-slate-500">
                <figure>

                    <img className='rounded-lg' src={img} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#017f7f]">{title}</h2>
                    <p>
                        {
                            description.length > 50 ?
                                 description.slice(0, 200) + '...' : description
                        }
                    </p>
                    <div className="card-actions">
                        <span className='flex font-bold cursor-pointer items-center text-[#09c3d0]'>Read More <FaArrowRight className='ml-3'></FaArrowRight></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiseasesCard;