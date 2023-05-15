import React, { useEffect, useState } from 'react';
import ClientReviewCard from './ClientReviewCard';

const ClientReview = () => {


    const [diseases, setDideases] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => {
                setDideases(data)
            })
    }, [])


    return (
        <div className='mb-32 w-full'>

            <div className='text-center mb-16'>
                <h3 className='font-bold text-xl text-info'>Client Testimonials</h3>
                <h1 className='font-bold md:text-6xl text-5xl px-5 text-[#017f7f]'>What Our Clients Say</h1>
            </div>

            <div className='grid px-10 md:grid-cols-3 grid-cols-1 md:mx-10 gap-10'>
                {

                    diseases.map(disease => <ClientReviewCard
                        key={disease.diseases_id}
                        disease={disease}
                    ></ClientReviewCard>)

                }
            </div>

        </div>
    );
};

export default ClientReview;