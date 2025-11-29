import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSeceure from '../../../Hooks/useAxiosSeceure';

const Payment = () => {

    const axiosSecure = useAxiosSeceure();

    const {parcelId} = useParams();
    const { isLoading , data: parcel} = useQuery ({
        queryKey: ['/parcels', parcelId],

        queryFn: async() => { 
            const res = await axiosSecure.get(`/parcels/${parcelId}`)
            return res.data;       

        }
        
    })

    if(isLoading){
        return  <div className='flex justify-between items-center py-8'>
            <span className="loading loading-spinner text-neutral"></span>
        </div>
    }

    const handlePayment = async() => {
        const paymentInfo = {
            cost : parcel.cost ,
            parcelId : parcel._id,
            senderEmail : parcel.senderEmail,
           parcelName : parcel.parcelName
        }
       const res = await axiosSecure.post('/create-checkout-session' , paymentInfo)
       console.log(res.data);

      // react router onno page kaj kore na. akoni page payment methord dekanur jonno use
       window.location.href = res.data.url;
       
    }

    return (
        <div>
            <h2 className='py-6'>please pay ${parcel.cost} for :  {parcel.parcelName}</h2>
            <div>
                <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
            </div>
        </div>
    );
};

export default Payment;