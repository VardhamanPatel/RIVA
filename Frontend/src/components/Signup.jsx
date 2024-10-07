import React from "react";
import { Link } from "react-router-dom";
import Login from "./login"; // Ensure Login is correctly imported
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can add your signup logic
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="w-[540px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Modal Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-center text-2xl py-4">Signup Page</h3>

            {/* Code for Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-96 px-4 py-2 border rounded-md outline-none"
                {...register("name", { required: "Name is required" })}
              />
              <br />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            {/* Code for Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-96 px-4 py-2 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              <br/>
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Code for Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-96 px-4 py-2 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>

            {/* Signup Button */}
            <div className="flex items-center justify-between mt-6">
              <button type="submit" className="px-4 py-2 border rounded-md hover:bg-zinc-200 hover:text-black font-bold">
                Signup
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <button
                  type="button"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* Render Login Modal */}
      <Login />
    </div>
  );
}

export default Signup;
