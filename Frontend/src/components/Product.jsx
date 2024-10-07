import React from 'react';
import bagdata from "../assets/bagsdata.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-black'>
        <div className='flex-col items-center justify-center text-center py-32'>
          <h1 className='font-semibold text-2xl text-white mt-12'>
            We're Delighted to have you <span className='text-2xl text-pink-400 font-bold'>HERE!</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt expedita odio sapiente nisi consequatur deserunt earum necessitatibus laboriosam labore architecto error, quisquam inventore at nemo ipsum enim blanditiis iusto.
            Aperiam at consectetur saepe temporibus, quasi facilis adipisci neque illum accusamus mollitia laudantium accusantium expedita voluptatem suscipit, quae dolor itaque ex ipsa, consequuntur dolore hic. Commodi quisquam dicta quas et?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima praesentium dicta eos, molestiae aperiam perspiciatis dolor, deleniti tenetur eveniet vero quidem excepturi. Illo aspernatur distinctio, a officia facilis dolor.
          </p>
          
          <Link to={"/"}>
            <button className='bg-white text-black px-6 py-2 font-semibold tracking-wide rounded-md mt-12'>
              Back
            </button>
          </Link>
        </div>
        
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            bagdata.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Product;
