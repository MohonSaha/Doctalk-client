import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='min-h-screen md:mx-28 mx-6 text-center'>
            <div>
                <h2 className='my-6 font-semibold'>Doctor's Manager</h2>
                <ul>
                    <li><button className='btn text-white bg-[#017f7f] border-[#017f7f]'><Link className='text-2xl' to='/admin/dashboard/UpdateDoctor'>Update Doctor</Link></button></li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;