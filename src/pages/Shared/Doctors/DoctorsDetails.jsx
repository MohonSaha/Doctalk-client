import { deleteApp } from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorsDetails = () => {

    const { id } = useParams()
    console.log(id);
    const [doctorDetails, setDoctorDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/doctorsDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setDoctorDetails(data);
            })

    }, [])

    const { name, photo, _id, work_place, First_fee, fee, degree, rating, speciality, working_hour, details, Chamber } = doctorDetails;

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 md:mx-28 min-h-screen gap-8 md:gap-0'>
            <div className='w-2/3 m-auto md:m-0'>
                <div className="card  bg-base-100 shadow-xl">
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



            <div className=' h-[calc(85vh-20px)] overflow-y-scroll px-8'>

                <div>
                    <div className="card w-full bg-base-300">
                        <figure className="px-4 pt-10">
                            <h2 className='text-2xl font-semibold'>About {name}</h2>
                        </figure>
                        <hr className='border-1 border-stone-400 mt-2' />
                        <div className="card-body items-center text-center -mt-4">
                            <p>{details}</p>
                        </div>
                    </div>
                </div>

                <div>
                    {
                        Chamber?.map(chem => <div className="card bg-base-300 w-full my-8">
                            <figure className="px-4 pt-10">
                                <h2 className='text-lg text-[#017f7f] font-bold'>{chem.place}</h2>
                            </figure>
                            <hr className='border-1 border-stone-400 mt-2' />
                            <div className="card-body items-center text-center -mt-4">
                                <p className='font-medium'>Address: {chem.address}</p>
                                <p className='font-medium'>Address: {chem.time}</p>
                                <p className='font-medium'>Address: {chem.phone}</p>
                                <div className="card-actions">
                                    <button className="btn bg-[#017f7f] border-[#017f7f] text-white">Appointment</button>
                                </div>
                            </div>

                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default DoctorsDetails;