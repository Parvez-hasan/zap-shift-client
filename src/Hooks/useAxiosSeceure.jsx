import axios from 'axios';
import React from 'react';

const axiosSecere = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSeceure = () => {
    
    
    return axiosSecere; 
};

export default useAxiosSeceure;