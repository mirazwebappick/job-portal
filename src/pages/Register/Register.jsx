import Lottie from "lottie-react";
import React, { use } from "react";
import registerAnimation from "../../assets/lotties/register.json";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import GoogleLogin from "../Shared/GoogleLogin";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        console.log("user created successful", result);
      })
      .catch((error) => {
        console.log("user created error", error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={registerAnimation}
            style={{ width: "350px" }}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register here!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
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
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>

            <p className="text-base">
              Already have an account
              <Link
                to="/login"
                className="text-blue-600 underline p-1 font-semibold"
              >
                Login
              </Link>
              here
            </p>
            <div className="">
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
