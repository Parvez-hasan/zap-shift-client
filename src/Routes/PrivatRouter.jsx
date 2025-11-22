import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router';

const PrivatRouter = ({children}) => {
    const {user, loading} = UseAuth();

    if(loading) {
        return <div className='flex justify-between items-center mx-auto py-6'>
            <span className="loading loading-spinner text-neutral"></span>
        </div>
    }

    if(!user) {
        return <Navigate to='/login'></Navigate>
    }
    
    return children;
}

export default PrivatRouter;