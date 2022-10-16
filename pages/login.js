import React from 'react';
import { useState } from "react";
import Link from "next/link";
import AuthBanner from "../components/AuthBanner";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import AuthLoading from './../components/AuthLoading';

function Login() {

    const [loading, setLoading] = useState(false);
    const [authErrorMessage, setAuthErrorMessage] = useState("");
    const [error, setError] = useState('');
    const router = useRouter();


    return (
        <div className="w-screen h-screen shadow-md p-5 max-w-[900px] lg:mx-auto lg:flex lg:items-center lg:justify-between">
            {/* Auth Banner */}
            <AuthBanner type="login" />
            {/* Form Title */}
            <div className="lg:mb-auto  lg:mt-10">
                <h2 className="text-center  ml-4  font-bold text-2xl mb-4 lg:text-left">
                    Log In
                </h2>
                <p className="text-center  ml-4  lg:text-left">
                    New to TicketExpress?{" "}
                    <span className="font-bold text-orange-600">
                        <Link href="/signup">Sign Up</Link>
                    </span>{" "}
                </p>
            
            {/* Form */}
            <form
                className="mt-2 flex flex-col gap-y-3 max-w-[500px] mx-auto"
            >
                <div>
                    <label>Email Address</label>
                    <div>
                        <input
                            type="email"
                            className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-orange-600"
                        />
                        {!!error && (
                            <p className="text-red-500 text-xs">{error?.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label>Password</label>
                    <div>
                        <input
                            type="password"
                            className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-orange-600"
                        />
                        {!!error && (
                            <p className="text-red-500 text-xs">{error?.message}</p>
                        )}
                    </div>
                </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <span className="font-bold text-orange-400 cursor-pointer">
                    Forgot Password?
                </span>
          </div>

          <button
             type="submit"
             className="ml-auto bg-orange-600 rounded text-white h-10 w-[80px] flex justify-center items-center hover:bg-orange-300"
            >
             {!loading ? <div>Next</div> : <AuthLoading />}
        </button>
        {authErrorMessage && (
             <div className="bg-red-500 ml-auto mt-4 h-10 w-fit flex justify-center items-center gap-x-3 p-2 rounded">
               <p className="text-white font-bold">{authErrorMessage}</p>
               <CloseIcon
                 className="text-white cursor-pointer"
                 onClick={() => setAuthErrorMessage("")}
               />
             </div>
           )}

          <p className="text-xs text-gray-500">
                By continuing pass this page, you agree to the{" "}
                <span className="font-bold text-orange-400 cursor-pointer">
                Terms of Use
                </span>{" "}
                and understand that information will be used as described in our{" "}
                <span className="font-bold text-orange-400 cursor-pointer">
                Privacy Policy.
                </span>
            </p>
            </form>
            </div>
        </div>
    )
}

export default Login
