import React from 'react';
import dna from '../../../assets/image/New folder/ddna.jpg'
import doc1 from '../../../assets/image/New folder/doc-1.jpg'
import doc2 from '../../../assets/image/New folder/doc-2.jpg'

const WhyChoose = () => {
    return (
        <div className='mb-36'>
            <div className='relative'>
                <img className='max-h-[760px] w-full' src={dna} alt="" />
                <div className='absolute flex pt-24 left-0 top-0 bg-gradient-to-r from-[#017777b4] to-[#017777b4] h-full w-full px-24 space-x-8'>

                    <div className='mt-24 w-1/2'>
                        <h1 className='font-bold text-6xl text-white'>Why Choose Doctalk Clinic?</h1>
                        <p className=' font-semibold text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta velit iusto quaerat quibusdam voluptates reprehenderit aspernatur deleniti autem hic.</p>
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