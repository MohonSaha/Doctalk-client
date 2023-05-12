import React from 'react';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import Diseases from '../Diseases/Diseases';
import Teams from '../../Teams/Teams';
import ClientReview from '../ClientReview/ClientReview';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <h2>I am home</h2>
            <Banner></Banner>
            <Search></Search>
            <Diseases></Diseases>
            <Teams></Teams>
            <Subscribe></Subscribe>
            <ClientReview></ClientReview>
           
        </div>
    );
};

export default Home;