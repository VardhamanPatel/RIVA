import React from "react";

function HeroSection() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-5 px-4 flex flex-col md:flex-row  bg-black my-20 text-white">
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12  md:mt-32">
          <div className=" space-y-12 ">
            <h1 className="text-2xl">
              Hello, welcome to RIVA, We create world finnest
              <span className="text-rose-50 tex-2xl font-bold">  Bags..</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              numquam minus velit corporis, magni quos aliquam eaque. Laborum
              doloribus soluta, porro rem, libero odit rerum temporibus
              architecto, aperiam corporis cumque.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <button className="px-6 py-2 rounded-full text-black font-medium bg-white">Sumit</button>
          </div>
        </div>
        <div className=" order-1 w-full md:w-1/2 mt-12  md:mt-32 ">
        <img className=" object-cover" src="https://images.unsplash.com/photo-1524679813234-66a389fe1a42?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
