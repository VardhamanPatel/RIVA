import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3">
      <div className="card bg-base-100 w-92 shadow-xl m-2 hover:scale-105 duration-200">
        <figure>
          <img
            src={item.image}
            alt={item.name || "Product image"} // Provide meaningful alt text
            className="object-cover h-48 w-full" // Optional: restrict image height for consistency
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between mt-2">
            <div className="px-4 py-2 border-white border rounded-full">
              ${item.price}
            </div>
            <button
              className="cursor-pointer rounded-full hover:bg-pink-700 hover:text-white px-4 py-2 border"
              onClick={() => alert(`Added ${item.name} to cart!`)} // Replace with your logic
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
