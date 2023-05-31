import React, { useContext, useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const {user,loginByGoogle,signInByEmail}=useContext(AuthContext)
    const [disable,setDisable]=useState(true)

   // console.log(location)
    const toGo= location?.state?.from?.pathname || '/'

    useEffect(()=>{
        loadCaptchaEnginge(3); 
    },[])

    // const captchaRef=useRef(null);

    const handleValidateCaptcha=(e)=>{
        // const userCaptchaValue = captchaRef.current.value;
        const userCaptchaValue = e.target.value;
        console.log(userCaptchaValue)
        if(validateCaptcha(userCaptchaValue)){
            setDisable(false)
            console.log("Valid Captcha")
        }else{
            console.log("Invalid Captcha")
            setDisable(true)
        }
    }
    const handleLogin=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        signInByEmail(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            navigate(toGo,{replace:true})

               //Sweet Alert start
               Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Login',
                showConfirmButton: false,
                timer: 1500
              })
            //Sweet Alert end

        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    const handleGoogleSignIn=()=>{
        loginByGoogle()
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            navigate(toGo, {replace: true})

            //Sweet Alert start
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Login',
                showConfirmButton: false,
                timer: 1500
              })
            //Sweet Alert end
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
  return (
   <>
    <Helmet>
        <title>Login | Bistro Boss</title>
    </Helmet>

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row  ">
        <div className="text-center lg:text-left w-full md:w-1/2 bg-green-300">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card  max-w-sm shadow-2xl bg-base-100 w-full md:w-1/2 ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                   <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                // ref={captchaRef}
                type="text"
                placeholder="Write captcha text"
                className="input input-bordered"
                name="captcha"
                required
              />
              {/* <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button> */}
              {/* <button  className="btn btn-outline btn-xs mt-2">Validate</button> */}
            </div>
            <div className="form-control mt-6">
              <input type="submit" disabled={disable} className="btn btn-primary" value="Login" />
            </div>
          </form>
          <p className="text-center">New to Here? <Link to='/signup' className="font-semibold">Create an Account</Link> </p>
          <div className=" flex justify-center items-center p-5">
              <button onClick={handleGoogleSignIn} className="text-yellow-400 "> <FaGoogle/> </button>
          </div>
        
        </div>
      </div>
    </div>
   </>
  );
};

export default Login;
