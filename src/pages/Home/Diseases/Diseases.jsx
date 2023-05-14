import React, { useEffect, useState } from 'react';
import DiseasesCard from './DiseasesCard';
import { FaArrowRight, FaPlus } from 'react-icons/fa';

const Diseases = () => {
    const [diseases, setDideases] = useState([])
    useEffect(() => {
        fetch('diseases.json')
            .then(res => res.json())
            .then(data => {
                setDideases(data)
            })
    }, [])


    return (
        <div>
            <div className='text-center mb-16 -mt-12'>
                <h3 className='font-bold text-xl text-info'>What We do</h3>
                <h1 className='font-bold md:text-6xl text-5xl text-[#017f7f]'>Our Services</h1>
            </div>

            <div className='flex justify-between mx-6 md:mx-28 mb-6'>

                <p  className=' text-[#017f7f] font-semibold  flex items-center cursor-pointer'>Add Services <FaPlus className='ml-3'></FaPlus></p>

                <p className=' text-[#017f7f] font-semibold  flex items-center cursor-pointer'>Swipe Right <FaArrowRight className='ml-3'></FaArrowRight></p>


            </div>

            <div className="carousel carousel-center rounded-box md:mx-28 mx-6">
                {
                    diseases.map(disease => <DiseasesCard
                        key={disease.diseases_id}
                        disease={disease}
                    ></DiseasesCard>)
                }
            </div>
        </div>
    );
};

export default Diseases;