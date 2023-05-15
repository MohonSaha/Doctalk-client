import React from 'react';
import { FaArrowRight, FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DoctorsCard = ({ doctor }) => {

    const { name, _id, photo, degree, speciality } = doctor;


    const handleFavourite = (id) =>{
        console.log(id);
    }

    return (
        <div className=''>
            <div className="card border-4 border-base-300 card-side bg-base-200 h-[270px]">
                <figure className='w-1/3'>
                    <img className='h-full w-48' src={photo} alt="Movie" />
                </figure>
                <div className="card-body w-2/3">
                    <h2 className="card-title text-xl">{name}</h2>
                    <p className='font-medium'><small>{degree}</small></p>
                    <p className='font-medium text-red-600'>{speciality}</p>
                    <div className="w-full">


                    <div className="card-actions flex justify-between items-center">
                        <span className='font-bold cursor-pointer  text-[#09c3d0]'>
                            <Link className='flex items-center' to={`/doctorsDetails/${_id}`}>
                                See Details
                                <FaArrowRight className='ml-2 -mb-1'></FaArrowRight>
                            </Link>
                        </span>



                        <div className="dropdown dropdown-top dropdown-end">
                            <label tabIndex={0} className=" m-1"><FaEllipsisH className='text-[#09c3d0]'></FaEllipsisH></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#017f7f] rounded-box w-52">

                                <li className='text-white'>
                                    <span className='font-semibold cursor-pointer'><Link className='w-full' to={`/services/${_id}`}>Appointment</Link></span>
                                </li>

                                <li className='text-white'>
                                    <span onClick={() => handleFavourite(_id)} className='font-semibold cursor-pointer '>Add Favourite</span>
                                </li>

                            </ul>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;