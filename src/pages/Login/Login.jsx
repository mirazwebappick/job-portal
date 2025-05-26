import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router";
import loginAnimation from "../../assets/lotties/login.json";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={loginAnimation} style={{ width: "350px" }} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login here!</h1>
            <form>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>

            <p className="text-base">
              Don't have an account
              <Link
                to="/register"
                className="text-blue-600 underline p-1 font-semibold"
              >
                Register
              </Link>
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
