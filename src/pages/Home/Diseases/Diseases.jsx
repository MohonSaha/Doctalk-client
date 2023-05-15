import React, { useContext, useEffect, useState } from 'react';
import DiseasesCard from './DiseasesCard';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../../providers/AuthProviders';
import { stateContext } from '../../../providers/StateChange';

const Diseases = () => {

    
    const [diseases, setDideases] = useState([]);
    const {user} = useContext(authContext);
    // const [control, setControl] = useState(false)
    const {control, setControl} = useContext(stateContext);
    const navigate = useNavigate()


    const handleDelete = (id) =>{
        if(!user){
            navigate('/login')
        }

        fetch(`http://localhost:5000/remove/${id}`, {
            method: "DELETE", 
            headers: {
                "content-type" : "application/json"
            }
        })
        .then(res=> res.json())
        .then(data => {
            if(data?.deletedCount > 0){
                setControl(!control)
            };
        })
    }


    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => {
                setDideases(data)
            })
    }, [control])


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

            <div className="carousel carousel-center rounded-box md:mx-28 mx-6">
                {
                    diseases.map(disease => <DiseasesCard
                        key={disease._id}
                        disease={disease}
                        handleDelete={handleDelete}
                    ></DiseasesCard>)
                }
            </div>
        </div>
    );
};

export default Diseases;