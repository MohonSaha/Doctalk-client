import React from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const ClientReviewCard = ({ disease }) => {

    const { diseases_id, title, img, description } = disease;


    return (
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='rounded-full w-32 h-32' src={img} alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aut, obcaecati quidem esse nulla quis.</p>
                    <div className="card-actions justify-around w-2/3 mt-8">
                        <button className="text-white btn bg-[#017f7f] border-[#017f7f]"><FaEdit></FaEdit></button>
                        <button className="text-white btn bg-[#017f7f] border-[#017f7f]"><FaTrash></FaTrash> </button>
                        <button className="text-white btn bg-[#017f7f] border-[#017f7f]"><FaEye></FaEye> </button>
                    </div>
                </div>
            </div>
    );
};

export default ClientReviewCard;