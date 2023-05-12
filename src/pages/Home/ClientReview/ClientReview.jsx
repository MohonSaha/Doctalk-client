// import React from 'react';
// import ClientReviewCard from './ClientReviewCard';

// const ClientReview = () => {


//     const [diseases, setDideases] = useState([])
//     useEffect(() => {
//         fetch('diseases.json')
//             .then(res => res.json())
//             .then(data => {
//                 setDideases(data)
//             })
//     }, [])


//     return (
//         <div className='mt-32'>

//             <div className='text-center mb-16'>
//                 <h3 className='font-bold text-xl text-info'>Client Testimonials</h3>
//                 <h1 className='font-bold text-6xl text-[#017f7f]'>What Our Clients Say</h1>
//             </div>

//             <div>
//                 {

//                     diseases.map(disease => <ClientReviewCard
//                         key={disease.diseases_id}
//                         disease={disease}
//                     ></ClientReviewCard>)

//                 }
//             </div>

//         </div>
//     );
// };

// export default ClientReview;