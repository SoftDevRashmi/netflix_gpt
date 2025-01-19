import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative text-white ">
      <Header />
      <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"></img>
      </div>
      <form className=" bg-black w-5/12 text-center absolute p-8 top-40 left-0 right-0 mx-auto opacity-85">
        <h1 className="text-4xl font-bold  text-left mx-12 p-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            className="p-3 w-96 m-4 rounded-md bg-darkbg border border-white"
            placeholder="Name"
          />
        )}
        <input
          type="text"
          className="border w-96 border-white p-3 m-4 rounded-md bg-darkbg"
          placeholder="email address"
        />
        <input
          type="text"
          className="p-3 w-96 m-4 rounded-md bg-darkbg border border-white"
          placeholder="password"
        />
        <button className="p-2 w-96 py-2 m-4  text-white-50 bg-btnRed rounded-md">
          Sign In
        </button>

        <button className="p-2 w-96 py-2 m-4 font-semibold  text-white-50 bg-zinc-900 rounded-md">
          Use a sign in code
        </button>

        <p className="m-2">Forgot pasword?</p>
        <div className="text-left mx-16 p-1">
          <input className="" type="checkbox" value=""></input>
          <lable className="p-2 text-lg ">Remember me</lable>
        </div>
        <p
          className="text-left mx-16 p-2 text-gray-500 "
          onClick={toggleSignInForm}
        >
          New to Netflix?
          <span className="font-semibold cursor-pointer text-white">
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already registerd? sign in now"}
          </span>
        </p>
        <p className="text-center text-sm text-gray-500 mt-4 mx-14 leading-tight">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a
          bot.
          <a href="#" className="text-blue-600 hover:underline">
            Learn more
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
