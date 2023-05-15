import { deleteApp } from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorsDetails = () => {

    const { id } = useParams()
    console.log(id);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/doctorsDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
            })

    }, [])

    const { name, photo, _id, work_place, First_fee, fee, degree, rating, speciality, working_hour } = details;

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 md:mx-28 min-h-screen'>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img className='w-full h-80' src={photo} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p><small className='font-medium'>{degree}</small></p>
                        <p className='text-red-600 font-medium'>{speciality}</p>
                        <p className=''>{work_place}</p>
                    </div>
                </div>
            </div>



            <div>

                <div>
                    
                </div>

                
            </div>
        </div>
    );
};

export default DoctorsDetails;