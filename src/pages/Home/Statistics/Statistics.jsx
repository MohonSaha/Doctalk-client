import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import StaCard from './StaCard';

const Statistics = () => {

    const [statistics, setStatistics] = useState([]);
    useEffect( () => {
        fetch('statistics.json')
        .then(res => res.json())
        .then(data => {
            setStatistics(data)
        })
    } ,[])

    return (
        <div className='relative -top-64 w-3/4 mx-auto'>
            <div className="form-control h-48 bg-[#09c3d0] shadow-xl rounded-lg ">
                <div className='flex flex-col items-center h-full md:flex-row justify-around '>
                    {
                        statistics.map(statistic => <StaCard
                            key={statistic.statictics_id}
                            statistic={statistic}
                        ></StaCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Statistics;