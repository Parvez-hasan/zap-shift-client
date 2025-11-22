import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";


const Register = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const {registerUser} = UseAuth()

    const handleRegister = (data) => {
        console.log("after register", data);
        registerUser(data.email, data.password)
        .then(result => {
          console.log(result.user);
          
        }).then(error => {
          console.log(error);
          
        })
        
    }

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h2 className='text-2xl font-bold text-center'>Welcome to zap shift</h2>
            <p className=' font-bold text-center'>pleas register</p>
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email', {required: true})} className="input" placeholder="Email" />

          {errors.email?.type == "required" && <p className="text-red-500">pleaes type your valid email</p>}

          <label className="label">Password</label>
          <input type="password" {...register('password', {required: true, minLength: 6 , pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~|.,;:]).{8,}$/


          })} className="input" placeholder="Password" />

          {errors.password?.type === "required" && <p className="text-red-600">pleaes password is required</p>}
          {errors.password?.type === "minLength" && <p className="text-red-500">password must be 6 chaceters or longer</p>}
          {errors.password?.type === "pattern" && <p className="text-red-400">password with at the least one uppercahse and least one lowercase and least one number and one spieal chectors</p>}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
          <p>Aready have an zap shift account<Link to={'/login'} className='text-blue-700'>Login</Link></p>

      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
