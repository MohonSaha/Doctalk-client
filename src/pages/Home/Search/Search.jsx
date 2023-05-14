import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div className='relative -top-44 md:w-3/4 mx-auto w-full px-6 md:px-0'>
            <div className="form-control md:h-48 h-36 bg-white shadow-xl rounded-lg border-t-8 border-t-[#09c3d0] px-4 md:px-0">
                <label className="input-group flex justify-center my-auto">
                    <input type="text" placeholder="Search Doctor, Clinic And Hospital" className="input input-bordered w-1/3 font-semibold" /> <input type="text" placeholder="Location" className="input input-bordered w-1/3 font-semibold" />
                    <span className='text-white btn bg-[#09c3d0] border-[#09c3d0]'><FaSearch className='md:mr-2 mr-1 hidden md:flex'></FaSearch> Find Now</span>
                </label>
            </div>
        </div>
    );
};

export default Search;