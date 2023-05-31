import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const SignUp = () => {
    const navigate=useNavigate();

    const {signUpByEmail,updateUserProfile}=useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [showPassword,setShowPassword]=useState(false)
    const displayPassword=()=>{
        setShowPassword(!showPassword)
        console.log(showPassword)
    }

    const [accept,setAccept]=useState(false)
    const handleAccept=()=>{
        setAccept(!accept)
        console.log(accept)
    }

      const onSubmit=data=>{
        console.log(data)
        const {name,photo,email,password}=data
        // console.log(name)
        // console.log(photo)
        // console.log(email)
        // console.log(password)
         signUpByEmail(email,password)
         .then(result=>{
            const signUpUser=result.user;
            console.log(signUpUser)
            updateUserProfile(name,photo)
            .then(()=>{
                console.log('User Profile info Updated')
                navigate('/', {replace: true})
                //Sweet Alert start
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Sign Up',
                    showConfirmButton: false,
                    timer: 1500
                })
                //Sweet Alert end

            })
            .catch(error=>{
                console.log(error.message)
            })
           

          
         })
         .catch(err=>{
            console.log(err.message)
         })
      }
  // console.log(watch("example"));

    const handleSignUp=(event)=>[
        event.preventDefault()
    ]
   
    return (
       <>

            <Helmet>
                <title>Sign Up | Bistro Boss</title>
            </Helmet>

        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row  ">
          <div className="text-center lg:text-left w-full md:w-1/2 bg-green-300">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card  max-w-sm shadow-2xl bg-base-100 w-full md:w-1/2 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  {...register("name", {required: true})}
                //   required
                />
                {errors.name && <span className='text-red-400'>Name is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo url"
                  className="input input-bordered"
                  name="photo"
                  {...register("photo",{required:true})}
                />
                {errors.photo && <span className='text-red-400'>photo url is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  {...register("email", {required:true})}
                  
                />
                {errors.email && <span className='text-red-400'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword?'text':'password'}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  {...register("password",
                   {required: true,
        
                      minLength:6,
                      maxLength:20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                      })}
                />
                {errors.password?.type==='required' && <span className='text-red-400'>password  is required</span>}
                {errors.password?.type==='minLength' && <span className='text-red-400'>password must be 6 characters</span>}
                {errors.password?.type==='maxLength' && <span className='text-red-400'>password must be not more than 10 characters</span>}
                {errors.password?.type==='pattern' && <span className='text-red-400'>password must 1 uppercase, 1 lower case, 1 digit and 1 special character</span>}
                <p className='ms-2 font-bold' onClick={displayPassword}>{showPassword?'Hide Password':'Show Password'}</p>
              </div>
               {/* <div className='form-control'> */}
                 <p>
                    <input onClick={handleAccept} className='ms-2' type="checkbox" name="accept" id="" />
                    <span className='ms-2'>Accept Our Terms and Condition</span>
                 </p>
               {/* </div> */}
              <div className="form-control mt-6">
                <input type="submit" disabled={!accept} className="btn btn-primary" value="Sign Up" />
              </div>
            </form>
            <p className="text-center">Already Registered? <Link to='/login' className="font-semibold">Go to Login</Link> </p>

            
       
          
          </div>
        </div>
      </div>
       </>
    );
};

export default SignUp;