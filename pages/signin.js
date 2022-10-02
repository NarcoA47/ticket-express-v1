import React from "react";
import { useState } from "react";
import Link from "next/link";
import signinValidation from "../YupValidationSchema/signinValidation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import template from "../utilities/template";
import AuthBanner from "../components/AuthBanner";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import AuthLoading from './../components/AuthLoading';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const router = useRouter();

  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinValidation),
  });

  
  const handleSignin = async (input) => {
    setLoading(true);
    setAuthErrorMessage("");
    const req = await axios.post(`${template}api/signin`, {
      email: input.email,
      password: input.password,
    });

    if (req.data.status === "Error") {
      setLoading(false);
      setAuthErrorMessage("Email or password invalid");
    }

    if (req.data.status === "Success") {
      setLoading(false);
      router.push("/");
    }
  };

  return (
    <div className="w-screen h-screen shadow-md p-5 max-w-[900px] lg:mx-auto lg:flex lg:items-center lg:justify-between">
      {/* Auth Banner */}
      <AuthBanner type="signin" />
      {/* Form Title */}
      <div className="lg:mb-auto  lg:mt-10">
        <h2 className="text-center  ml-4  font-bold text-2xl mb-4 lg:text-left">
          Sign In
        </h2>
        <p className="text-center  ml-4  lg:text-left">
          New to TicketExpress?{" "}
          <span className="font-bold text-blue-600">
            <Link href="/signup">Sign Up</Link>
          </span>{" "}
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleSignin)}
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <span className="font-bold text-orange-400 cursor-pointer">
              Forgot Password?
            </span>
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
            className="ml-auto h-10 w-[80px] bg-orange-600 rounded text-white flex justify-center items-center hover:bg-blue-700"
          >
            {!loading ? <div>Sign In</div> : <AuthLoading />}
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
