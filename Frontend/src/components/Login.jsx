import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can also add logic to handle successful login, like closing the modal
    document.getElementById("my_modal_3").close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Modal Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-center text-2xl py-4">Login Page</h3>
            {/* Email Field */}
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
              {errors.email && <span className="text-red-500  text-sm ">{errors.email.message}</span>}
            </div>
            {/* Password Field */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-96 px-4 py-2 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              <br/>
              {errors.password && <span className="text-red-500 text-sm ">{errors.password.message}</span>}
            </div>

            {/* Login Button */}
            <div className="flex items-center justify-between mt-6">
              <button type="submit" className="px-4 py-2 border rounded-md hover:bg-zinc-200 hover:text-black font-bold">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
