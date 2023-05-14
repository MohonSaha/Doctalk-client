import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditServices = () => {

    const {id} = useParams()
    const [service, setService] = useState({})
    // console.log(id);

    useEffect( () =>{
        fetch(`http://localhost:5000/singleServices/${id}`)
        .then(res => res.json())
        .then(data => {
            setService(data);
        })
    
    } ,[])
    // console.log(service);

    const handleUpdateService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const newServices = { name, photo, details };
    }


    return (
        <div>
            <div className="bg-[#017f7f89] py-20 px-60 min-h-screen">
                <Link to='/'>All Services</Link>

                <form onSubmit={handleUpdateService}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Service Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={service.name} placeholder="Enter service name" name="name" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={service.photo} type="text" placeholder="Enter url" name="photo" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Service Details</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={service.details} type="text" placeholder="Enter service details" name="details" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>


                    <input type="submit" className="btn w-full bg-[#06625e] mt-10" value="Save" />
                </form>
            </div>
        </div>
    );
};

export default EditServices;