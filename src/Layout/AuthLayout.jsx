import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from "..//assets/authImage.png"

const AuthLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Logo> </Logo>

            <div className='flex'>
                {/* auth section  */}
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                {/* img */}
                <div className='flex-1'> 
                  <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;