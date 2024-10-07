import React, { useState, useEffect } from "react";
import bagsdata from "../assets/bagsdata.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function BasicBags() {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filtered = bagsdata.filter((data) => data.category === "BestSeller");
    setFilterData(filtered);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: filterData.length < 3 ? filterData.length : 3, // Adjust based on data
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: filterData.length < 3 ? filterData.length : 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: filterData.length < 2 ? filterData.length : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-4 mb-12 p-2">
      <div className="space-y-12">
        <h1 className="text-white text-xl">
          <span className="font-bold text-2xl">RIVA's Bestsellers: </span>
          The most popular items on RIVA
        </h1>
        <p className="text-gray-300 text-lg pb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit illo numquam accusamus commodi nihil temporibus
          perferendis ipsa, sunt tenetur rem ex. Vel illo molestiae adipisci
          error animi? Culpa, quisquam assumenda!
        </p>
      </div>

      <div>
        {filterData.length > 0 ? (
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        ) : (
          <p className="text-gray-300">No bestselling bags available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default BasicBags;
