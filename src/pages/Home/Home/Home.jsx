import React from 'react';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import Diseases from '../Diseases/Diseases';
import Teams from '../../Teams/Teams';
import Test from '../../Teams/test';
// import ClientReview from '../ClientReview/ClientReview';

const Home = () => {
    return (
        <div>
            <h2>I am home</h2>
            <Banner></Banner>
            <Search></Search>
            <Diseases></Diseases>
            <Teams></Teams>
            {/* <ClientReview></ClientReview> */}
            {/* <Test></Test> */}
        </div>
    );
};

export default Home;