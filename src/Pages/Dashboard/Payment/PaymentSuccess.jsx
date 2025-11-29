import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSeceure from "../../../Hooks/useAxiosSeceure";


const PaymentSuccess = () => {

    const [searchParams] = useSearchParams();

    const [paymentInfo , setPaymentInfo] = useState({});
    const sessionId = searchParams.get('session_id')
    const axiosSecure = useAxiosSeceure();
    console.log(sessionId);

    useEffect(()=> {
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res => {
                
                console.log(res.data);
                setPaymentInfo({
                    transactionId: res.data.transactionId,
                    trackingId: res.data.trackingId
                })
                
            })
        }
    },[sessionId, axiosSecure])
    

    return (
        <div>
            <h2 className='text-3xl font-bold text-center py-5'>Payment Successful</h2>
            <div className="mt-5">
                <h2>Your TransactionId :  {paymentInfo.transactionId}</h2>
                <h2>Your parcel tracking id :  {paymentInfo.trackingId}</h2>

            </div>
        </div>
    );
};

export default PaymentSuccess;
