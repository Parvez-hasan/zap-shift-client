import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';

const PrivatRouter = ({children}) => {
    const {user, loading} = UseAuth();


    //user jay page a jete chai login korar pore sei page a naviget korar jonno use
    const location = useLocation();
  //  console.log('location' , location);
    


    if(loading) {
        return <div className='flex justify-between items-center py-8'>
            <span className="loading loading-spinner text-neutral"></span>
        </div>
    }

    if(!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    
    return children;
}

export default PrivatRouter;