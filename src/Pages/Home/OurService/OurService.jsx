import React from 'react';

import { MdHomeRepairService } from 'react-icons/md';

const OurService = () => {
    return (
        <div className='bg-secondary'>
            <div className='p-10'>
                <h1 className='text-2xl md:text-3xl font-bold text-white text-center '>Our Services</h1>
                <p className='text-white text-center py-3'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                    <div className='bg-white p-4 rounded-lg'> 
                        
                            <MdHomeRepairService  className='h-16 w-18 mx-auto p-3 bg-gray-200 rounded-full '/>
                       
                        <h2 className='font-bold text-center py-2'>Express  & Standard Delivery</h2>
                        <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                    </div>
                    <div className='bg-primary p-4 rounded-lg'> 
                         <MdHomeRepairService  className='h-16 w-18 mx-auto p-3 bg-gray-200 rounded-full '/>
                        <h2 className='font-bold text-center py-2'>Nationwide Delivery</h2>
                        <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg'> 
                       <MdHomeRepairService  className='h-16 w-18 mx-auto p-3 bg-gray-200 rounded-full '/>
                        <h2 className='font-bold text-center py-2'>Fulfillment Solution</h2>
                        <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg'> 
                        <MdHomeRepairService  className='h-16 w-18 mx-auto p-3 bg-gray-200 rounded-full '/>
                        <h2 className='font-bold text-center py-2'>Cash on Home Delivery</h2>
                        <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg'> 
                        <MdHomeRepairService  className='h-16 w-18 mx-auto p-3 bg-gray-200 rounded-full '/>
                        <h2 className='font-bold text-center py-2'>Corporate Service / Contract In Logistics</h2>
                        <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg'> 
                         <MdHomeRepairService  className='h-16 w-18 mx-auto p-3 bg-gray-200 rounded-full '/>
                        <h2 className='font-bold text-center py-2'>Parcel Return</h2>
                        <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;