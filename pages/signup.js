import React from "react";
import { useState } from "react";
import Link from "next/link";
import signupValidation from "../YupValidationSchema/signupValidation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import template from "../utilities/template";
import AuthBanner from "../components/AuthBanner";
import CountrySelection from "../components/CountrySelection";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import AuthLoading from '../components/AuthLoading';

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const router = useRouter();

  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidation),
  });

  
  const handleSignup = async (input) => {
    setAuthErrorMessage("");
    
    setLoading(true);
    const newUserData = {
      email: input.email,
      password: input.password,
      firstname: input.firstname,
      lastname: input.lastname,
      // country: input.country,
      // zip: input.zip,
    };
    const req = await axios.post(`${template}api/signup`, newUserData);

    if (req.data.status === "Error") {
      setAuthErrorMessage("This email already exists");
      
      setLoading(false);
    }

    if (req.data.status === "Success") {
      
      setLoading(false);
      
      router.push("/dashboard.js");
    }
  };

  return (
    <div className="w-screen h-screen shadow-md p-5 max-w-[900px] lg:mx-auto lg:flex lg:items-center lg:justify-between">
      {/* Auth Banner */}
      <AuthBanner type="signup" />
      {/* Form Title */}
      <div className="lg:mb-auto lg:mt-10">
        <h2 className="text-center ml-4 font-bold text-2xl mb-4 lg:text-left">
          Sign Up
        </h2>
        <p className="text-center ml-4 lg:text-left">
          Already have a TicketExpress account?{" "}
          <span className="font-bold text-blue-600">
            <Link href="/dashboard">Sign In</Link>
          </span>{" "}
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="mt-2 flex flex-col gap-y-3 max-w-[500px] mx-auto"
        >
          <div>
            <label>Email Address</label>
            <Controller
              control={control}
              name="email"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div>
                  <input
                    type="email"
                    value={value || ""}
                    className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-blue-600"
                    onChange={onChange}
                  />
                  
                  {!!error && (
                    <p className="text-red-500 text-xs">{error?.message}</p>
                  )}
                </div>
              )}
            />
          </div>
          <div>
            <label>Password</label>
            <Controller
              control={control}
              name="password"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div>
                  <input
                    type="password"
                    value={value || ""}
                    className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-blue-600"
                    onChange={onChange}
                  />
                  
                  {!!error && (
                    <p className="text-red-500 text-xs">{error?.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="w-full flex justify-between items-center gap-x-8">
            <div className="flex-1">
              <label>First Name</label>
              <Controller
                control={control}
                name="firstname"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <div>
                    <input
                      type="text"
                      value={value || ""}
                      className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-blue-600"
                      onChange={onChange}
                    />
                    
                    {!!error && (
                      <p className="text-red-500 text-xs">{error?.message}</p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="flex-1">
              <label>Last Name</label>
              <Controller
                control={control}
                name="lastname"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <div>
                    <input
                      type="text"
                      value={value || ""}
                      className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-blue-600"
                      onChange={onChange}
                    />
                    
                    {!!error && (
                      <p className="text-red-500 text-xs">{error?.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

           <div className="w-full flex justify-between items-center gap-x-8">
            <div className="flex-1">
              <label>Country of Residence</label>
              <Controller
                control={control}
                name="country"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <div>
                    <CountrySelection onChange={onChange} value={value} />
                    
                    {!!error && (
                      <p className="text-red-500 text-xs">{error?.message}</p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="flex-1">
              <label>Zip/country code</label>
              <Controller
                control={control}
                name="zip"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <div>
                    <input
                      type="text"
                      value={value || ""}
                      className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-blue-600"
                      onChange={onChange}
                    />
                    
                    {!!error && (
                      <p className="text-red-500 text-xs">{error?.message}</p>
                    )}
                  </div>
                )}
              /> 
            </div> 
          </div>

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
          <button
            type="submit"
            className="ml-auto bg-orange-600 rounded text-white h-10 w-[80px] flex justify-center items-center hover:bg-blue-700"
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
        </form>
      </div>
    </div>
  );
}
