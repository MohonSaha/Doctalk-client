import React from 'react';
import health from '../../../assets/image/banner/health.jpeg'

const Subscribe = () => {
    return (
        <div className='md:-mt-[380px] -mt-[60%]'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={health} className="w-sm md:max-w-sm rounded-lg shadow-2xl" />
                    <div className='md:w-1/2 w-full'>
                        <h1 className="text-5xl font-bold">Subscribe Out Email For Newslater</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="form-control">
                            <label className="input-group">
                                
                                <input type="text" placeholder="info@site.com" className="input input-bordered" />
                                <span className='text-white bg-[#09c3d0] border-[#09c3d0]'>Email</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;