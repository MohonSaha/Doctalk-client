import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { authContext } from '../../../providers/AuthProviders';

const DiseasesCard = ({ disease, handleDelete }) => {

    const {user} = useContext(authContext);
    const {_id, name, photo, details } = disease;



    return (
        <div className="carousel-item mr-12 w-96">



            <div className="card w-96 bg-base-100 shadow-2xl border-slate-500">
                <figure>

                    <img className='rounded-lg' src={photo} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#017f7f]">{name}</h2>
                    <p>
                        {
                            details.length > 50 ?
                                 details.slice(0, 200) + '...' : details
                        }
                    </p>
                    <div className="card-actions flex justify-between">
                        <span className='flex font-bold cursor-pointer items-center text-[#09c3d0]'>Read More <FaArrowRight className='ml-3'></FaArrowRight></span>
                        
                             <span onClick={() => handleDelete(_id)} className='font-bold cursor-pointer text-red-500'>Remove</span>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiseasesCard;