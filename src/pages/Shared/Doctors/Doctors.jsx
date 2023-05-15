import React, { useContext, useEffect, useState } from 'react';
import { FaArrowRight, FaHeart, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DoctorsCard from './DoctorsCard';
import { authContext } from '../../../providers/AuthProviders';

const Doctors = () => {

    const {user} = useContext(authContext);


    const [currentPage, setCurentPage] = useState(0);
    const [totalDoctors, setTotalDoctors] = useState(null)
    const [doctorPerPage, setDoctorPerPage] = useState(4);
    const totalPages = Math.ceil(totalDoctors / doctorPerPage);
    const pageNumbers = [...Array(totalPages).keys()]
   




    useEffect(() => {
        fetch('http://localhost:5000/totalDoctors')
            .then(res => res.json())
            .then(totalDoc => {
                setTotalDoctors(totalDoc.totalDoctors);
            })
    }, [])
    // console.log(totalDoctors);




    const [doctors, setDoctors] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/allDoctors')
    //         .then(res => res.json())
    //         .then(data => {
    //             setDoctors(data)
    //         })
    // }, [])

    useEffect( ()=>{
        async function fetchData() {
            const response = await fetch (`http://localhost:5000/allDoctors?page=${currentPage}&limit=${doctorPerPage}`)
            const data = await response.json()
            setDoctors(data)
        }
        fetchData()
    } , [currentPage, doctorPerPage])



    const options = [2, 4, 6, 8];
    function handleSelectChange(event) {
        setDoctorPerPage(parseInt(event.target.value))
        setCurentPage(0)
    }


    return (
        <>
            <div className='mb-60'>
                <div className='text-center mb-16 -mt-12'>
                    <h3 className='font-bold text-xl text-info'>Our Hero</h3>
                    <h1 className='font-bold md:text-6xl text-5xl text-[#017f7f]'>Specialist Doctor</h1>
                </div>

                <div className='flex justify-between mx-6 md:mx-28 mb-6'>

                    <p className=' text-[#017f7f] font-semibold  cursor-pointer'><Link className='flex items-center' to='/addDiseases'>Add Doctors <FaPlus className='ml-3'></FaPlus></Link></p>

                   { user ?  <p className=' text-[#017f7f] font-semibold  cursor-pointer'><Link className='flex items-center' to='/addDiseases'>Fevourite List<FaHeart className='ml-3'></FaHeart></Link></p> : ''}


                </div>

                <div className="grid md:grid-cols-2 gap-8 grid-cols-1 mx-6 md:mx-28">
                    {
                        doctors?.map(doctor => <DoctorsCard
                            key={doctor._id}
                            doctor={doctor}
                        ></DoctorsCard>)
                    }
                </div>



                {/* Pagination */}
                <div className="pagination text-end mx-6 md:mx-28 mt-6">
                    <p><small>Current Page: {currentPage}</small></p>
                    {
                        pageNumbers.map(number => <button className={`btn bg-white ml-3 border-[#017f7f] ${currentPage === number ? "bg-teal-700 text-white": 'text-black'}`} 
                        key={number}
                        onClick={() => setCurentPage(number)}
                        >{number + 1}</button>)
                    }

                    <select className='ml-4' value={doctorPerPage} onChange={handleSelectChange}>
                        {
                            options.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>


        </>
    );
};

export default Doctors;