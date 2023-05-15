import React from 'react';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import Diseases from '../Diseases/Diseases';
import Teams from '../../Teams/Teams';
import ClientReview from '../ClientReview/ClientReview';
import Subscribe from '../Subscribe/Subscribe';
import WhyChoose from '../WhyChoose/WhyChoose';
import Statistics from '../Statistics/Statistics';
import Doctors from '../../Shared/Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Search></Search>
            <Doctors></Doctors>
            <Diseases></Diseases>
            <Teams></Teams>
            <Subscribe></Subscribe>
            <WhyChoose></WhyChoose>
            <Statistics></Statistics>
            <ClientReview></ClientReview>
           
        </div>
    );
};

export default Home;