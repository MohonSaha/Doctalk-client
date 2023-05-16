import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { stateContext } from '../../../providers/StateChange';
import { FaArrowLeft } from 'react-icons/fa';

const AddDoctors = () => {

    const {control, setControl} = useContext(stateContext);

    const handleAddDoctors = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const speciality = form.speciality.value;
        const degree = form.degree.value;
        const Wplace = form.Wplace.value;
        const newDoctors = { name, photo, details, speciality, degree, Wplace};
        console.log(newDoctors);

        fetch('http://localhost:5000/addDoctors', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDoctors)
        })
            .then(res => res.json())
            .then(data => {
                if(data?.insertedId){
                    setControl(!control)
                }
                form.reset()
            })
            .catch(err => console.log(err))

    }



    return (
        <div className=''>
            <div className="bg-[#017f7f89] py-16 md:px-64 px-8 min-h-screen">
                <Link className='flex items-center font-semibold text-xl' to='/'><FaArrowLeft className='mr-3'></FaArrowLeft> All Doctors</Link>

                <form onSubmit={handleAddDoctors}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Doctor Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Doctor name" name="name" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Doctor's Speciality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Speciality" name="speciality" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Doctor's Degree</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Degree" name="degree" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Doctor's Work Place</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Work Place" name="Wplace" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="url" placeholder="Enter url" name="photo" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Doctor's Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter details" name="details" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>


                    <input type="submit" className="btn w-full bg-[#06625e] mt-10" value="Save" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctors;