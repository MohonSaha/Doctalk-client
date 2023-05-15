import React from 'react';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Doctors = () => {


    return (
        <div>
            <div className='text-center mb-16 -mt-12'>
                <h3 className='font-bold text-xl text-info'>What We do</h3>
                <h1 className='font-bold md:text-6xl text-5xl text-[#017f7f]'>Our Services</h1>
            </div>

            <div className='flex justify-between mx-6 md:mx-28 mb-6'>

                <p  className=' text-[#017f7f] font-semibold  cursor-pointer'><Link className='flex items-center' to='/addDiseases'>Add Services <FaPlus className='ml-3'></FaPlus></Link></p>

                <p className=' text-[#017f7f] font-semibold  flex items-center cursor-pointer'>Swipe Right <FaArrowRight className='ml-3'></FaArrowRight></p>


            </div>

            <div className="">
                {
                    // diseases.map(disease => <DiseasesCard
                    //     key={disease._id}
                    //     disease={disease}
                    //     handleDelete={handleDelete}
                    // ></DiseasesCard>)
                }
            </div>
        </div>
    );
};

export default Doctors;