import React, { useContext } from 'react';
import { FaArrowRight, FaEllipsisH } from 'react-icons/fa';
import { authContext } from '../../../providers/AuthProviders';
import { Link } from 'react-router-dom';

const DiseasesCard = ({ disease, handleDelete }) => {

    const { user } = useContext(authContext);
    const { _id, name, photo, details } = disease;



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
                    <div className="card-actions flex justify-between items-center mt-4">
                        <span className='font-bold cursor-pointer  text-[#09c3d0]'>
                            <Link className='flex items-center' to={`/servicesDetails/${_id}`}>
                                Read More
                                <FaArrowRight className='ml-2 -mb-1'></FaArrowRight>
                            </Link>
                        </span>



                        <div className="dropdown dropdown-top dropdown-end">
                            <label tabIndex={0} className=" m-1"><FaEllipsisH className='text-[#09c3d0]'></FaEllipsisH></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#017f7f] rounded-box w-52">

                                <li className='text-white'>
                                    <span className='font-semibold cursor-pointer'><Link className='w-full' to={`/services/${_id}`}>Edit</Link></span>
                                </li>

                                <li className='text-white'>
                                    <span onClick={() => handleDelete(_id)} className='font-semibold cursor-pointer'>Remove</span>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiseasesCard;