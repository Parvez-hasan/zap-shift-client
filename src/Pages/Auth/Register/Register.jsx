import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios, { Axios } from "axios";


const Register = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const {registerUser, updateUserProfile} = UseAuth()

    const location = useLocation()
    const navigate = useNavigate()
    console.log('in the register ' , location);
    
    const handleRegister = (data) => {

       // console.log("after register", data.photo[0]);
        const profileImg = data.photo[0]
        registerUser(data.email, data.password)
        .then(result => {
          console.log(result.user);

          //store the image in form data. the photo url

          const  formData =  new FormData();
          formData.append('image', profileImg)

          // sand the photo to store and get the url
          const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_kay}`

          axios.post(image_API_URL, formData)
          .then(res => {
            console.log('after image upload', res.data.data.url);

            //  update user profile to firebase

             const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url
             }

             updateUserProfile(userProfile)
             .then(() => {
                console.log('user profile updated');
                navigate(location.state || '/' )
                
             })
             .catch( error => {
              console.log(error);
              
             })
            
          })
          
        }).catch(error => {
          console.log(error);
          
        })
        
    }

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h2 className='text-2xl font-bold text-center'>Welcome to zap shift</h2>
            <p className=' font-bold text-center'>pleas register</p>
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <fieldset className="fieldset">

          {/* Name feild  */}
          <label className="label">Name</label>
          <input type="text" {...register('name', {required: true})} className="input" placeholder="Your name" />

          {errors.name?.type == "required" && <p className="text-red-500">pleaes type your valid name</p>}

           {/* photo and image feild  */}
          <label className="label">Image</label>
          <input type="file" {...register('photo', {required: true})} className="file-input" placeholder="your photo" />

          {errors.photo?.type == "required" && <p className="text-red-500">photo is required</p>}

           {/* email feild  */}
          <label className="label">Email</label>
          <input type="email" {...register('email', {required: true})} className="input" placeholder="Email" />

          {errors.email?.type == "required" && <p className="text-red-500">pleaes type your valid email</p>}

          {/* password fild */}
          <label className="label">Password</label>
          <input type="password" {...register('password', {required: true, minLength: 6 , pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~|.,;:]).{8,}$/


          })} className="input" placeholder="Password" />

          {errors.password?.type === "required" && <p className="text-red-600">pleaes password is required</p>}
          {errors.password?.type === "minLength" && <p className="text-red-500">password must be 6 chaceters or longer</p>}
          {errors.password?.type === "pattern" && <p className="text-red-400">password with at the least one uppercahse and least one lowercase and least one number and one spieal chectors</p>}
         
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
          <p>Aready have an zap shift account<Link 
          state={location.state}
          to={'/login'} className='text-blue-700'>Login</Link></p>

      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
