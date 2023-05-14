import React from 'react';

const StaCard = ({statistic}) => {

    const {statictics_id, title, number} = statistic;
    console.log(title);

    return (
        <div className='my-10 md:my-0'>
            <h1 className='text-5xl font-bold text-white'>{number}+</h1>
            <h2 className='tetx-2xl font-bold mt-2 text-white'>{title}</h2>
        </div>
    );
};

export default StaCard;