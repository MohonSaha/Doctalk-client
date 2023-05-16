import React, { useContext, useEffect, useState } from 'react';
import { stateContext } from '../../../providers/StateChange';
import { Link } from 'react-router-dom';

const ManageDoctor = () => {

    const [doctorsData, setDosctorsData] = useState([])

    const {control, setControl} = useContext(stateContext);

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/removeDoctor/${id}`,{
            method: "DELETE",
            headers: {
                "content-type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount > 0){
                setControl(!control)
            };
        })
        console.log(id);
    }



    useEffect(() => {
        fetch('http://localhost:5000/allDoctorsData')
            .then(res => res.json())
            .then(data => {
                setDosctorsData(data)
            })
    }, [control])

    

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 md:mx-16'>
            {
                doctorsData.map((doctor, i) => <div key={doctor._id}>
                    <div className="card w-96 bg-base-200 m-auto  h-[560px]">
                        <figure>
                            <img className='w-full h-72' src={doctor.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                           
                            <h2 className="card-title">{doctor.name}</h2>
                            <p>{doctor.degree}</p>
                            <p className='text-red-600'>{doctor.speciality}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#017f7f] border-[#017f7f] text-white"><Link to={`/admin/dashboard/EditDoctor/${doctor._id}`}>Update</Link></button>
                                <button onClick={() => handleDelete(doctor._id)} className="btn bg-red-500 border-red-500 text-white">Delete</button>
                            </div>
                            <p>Serial No: {i + 1}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageDoctor;