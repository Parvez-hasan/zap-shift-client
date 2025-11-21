import React from 'react';
import errorImg from "..//..//..//assets/images.jpeg"
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex justify-center flex-col items-center py-6 px-3'>
            <img src={errorImg} alt="" />
            <h2 className='pb-4 text-4xl font-semibold'>Error 404</h2>
           <Link to='/'>
              <button className='btn bg-primary'>Go Home</button>
           </Link>
        </div>
    );
};

export default Error;