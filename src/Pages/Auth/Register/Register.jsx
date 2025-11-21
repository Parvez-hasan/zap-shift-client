import React from "react";
import { useForm } from "react-hook-form";


const Register = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleRegister = (data) => {
        console.log("after register", data);
        
    }

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
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
      </form>
    </div>
  );
};

export default Register;
