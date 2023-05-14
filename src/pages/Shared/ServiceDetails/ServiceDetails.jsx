import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const {id} = useParams();

    const [details, setDetails] = useState([])
    
    useEffect( () =>{
        fetch(`http://localhost:5000/singleServices/${id}`)
        .then(res => res.json())
        .then(data => {
            setDetails(data);
        })
    
    } ,[])

    return (
        <div>
            <h2>Name: {details.name}</h2>
        </div>
    );
};

export default ServiceDetails;