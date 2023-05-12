import React, { useEffect, useState } from 'react';
import DiseasesCard from './DiseasesCard';

const Diseases = () => {
    const [diseases, setDideases] = useState([])
    useEffect( () =>{
        fetch('diseases.json')
        .then(res=> res.json())
        .then(data =>{
            setDideases(data)
        })
    } ,[])


    return (
        <div>
            <div className='text-center mb-16'>
                <h3 className='font-bold text-xl text-info'>What We do</h3>
                <h1 className='font-bold text-6xl text-[#017f7f]'>Our Services</h1>
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