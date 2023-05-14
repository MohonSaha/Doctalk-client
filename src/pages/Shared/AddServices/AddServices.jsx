import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { stateContext } from '../../../providers/StateChange';

const AddServices = () => {

    const {control, setControl} = useContext(stateContext);

    const handleAddServices = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const newServices = { name, photo, details };

        fetch('http://localhost:5000/addServices', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newServices)
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
        <div>
            <div className="bg-[#017f7f89] py-20 px-60 min-h-screen">
                <Link to='/'>All Services</Link>

                <form onSubmit={handleAddServices}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Service Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter service name" name="name" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter url" name="photo" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Service Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter service details" name="details" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>


                    <input type="submit" className="btn w-full bg-[#06625e] mt-10" value="Save" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;