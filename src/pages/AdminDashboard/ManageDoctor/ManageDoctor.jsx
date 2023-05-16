import React, { useEffect, useState } from 'react';

const ManageDoctor = () => {

    const [doctorsData, setDosctorsData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allDoctorsData')
            .then(res => res.json())
            .then(data => {
                setDosctorsData(data)
            })
    }, [])

    

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 md:mx-16'>
            {
                doctorsData.map(doctor => <div key={doctor._id}>
                    <div className="card w-96 bg-base-200 m-auto">
                        <figure><img className='w-full h-72' src={doctor.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{doctor.name}</h2>
                            <p>{doctor.degree}</p>
                            <p className='text-red-600'>{doctor.speciality}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#017f7f] border-[#017f7f] text-white">Update</button>
                                <button className="btn bg-red-500 border-red-500 text-white">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageDoctor;