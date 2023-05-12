import React from 'react';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import Diseases from '../Diseases/Diseases';

const Home = () => {
    return (
        <div>
            <h2>I am home</h2>
            <Banner></Banner>
            <Search></Search>
            <Diseases></Diseases>
        </div>
    );
};

export default Home;