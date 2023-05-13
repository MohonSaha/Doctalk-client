import React from 'react';
import dna from '../../../assets/image/New folder/ddna.jpg'
import doc1 from '../../../assets/image/New folder/doc-1.jpg'
import doc2 from '../../../assets/image/New folder/doc-2.jpg'
import { FaHandHoldingMedical, FaUsers } from 'react-icons/fa';

const WhyChoose = () => {
    return (
        <div className='mb-36'>
            <div className='relative'>
                <img className='max-h-[760px] w-full' src={dna} alt="" />
                <div className='absolute flex pt-20 left-0 top-0 bg-gradient-to-r from-[#017777b4] to-[#017777b4] h-full w-full px-24 space-x-8'>

                    <div className='mt-6 w-1/2'>
                        <h1 className='font-bold text-6xl text-white'>Why Choose Doctalk Clinic?</h1>
                        <p className=' font-semibold text-slate-300 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta velit iusto quaerat quibusdam voluptates reprehenderit aspernatur deleniti autem hic.</p>

                        <div className='mt-6 flex'>
                            <FaUsers className='text-white text-4xl'></FaUsers> <h3 className='text-2xl text-white ml-4 font-semibold'>
                                Highly Professional Staff</h3>
                        </div>
                        <p className='font-semibold text-slate-300 ml-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse illum ex soluta ipsum distinctio saepe?</p>

                        <div className='mt-6 flex'>
                            <FaHandHoldingMedical className='text-white text-4xl'></FaHandHoldingMedical> <h3 className='text-2xl text-white ml-4 font-semibold'>
                            Quality Control System</h3>
                        </div>
                        <p className='font-semibold text-slate-300 ml-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse illum ex soluta ipsum distinctio saepe?</p>


                    </div>

                    <div>
                        <img className='rounded-lg w-[400px]' src={doc1} alt="" />
                        <img className='rounded-lg relative -top-20 left-40' src={doc2} alt="" />
                    </div>


                </div>
            </div>


        </div>
    );
};

export default WhyChoose;