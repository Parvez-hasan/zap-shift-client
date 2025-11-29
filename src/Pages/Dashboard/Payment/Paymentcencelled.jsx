import React from 'react';
import { Link } from 'react-router';

const Paymentcencelled = () => {
    return (
        <div>
            <h2>payment is cancelled. please try again</h2>
            <Link to='/dashboard/my-parcels'>
            <button className='btn btn-primary text-black '>Try Again</button>
            </Link>
        </div>
    );
};

export default Paymentcencelled;