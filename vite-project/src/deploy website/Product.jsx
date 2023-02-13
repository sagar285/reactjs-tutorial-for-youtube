import React from "react";
import { Link } from "react-router-dom";
import api2 from "./api2.json"

const Product = () => {
  return (
    <div>
     <nav className="flex list-none px-[45rem] bg-slate-500 hover:bg-blue-500 hover:text-white hover:font-bold">
      <Link to ="/"><li className="m-2 ">NewsPage</li></Link>
        <Link to ="/product"><li className="m-2">Productpage</li></Link>
      </nav>

      <div className="grid gap-2 lg:grid-cols-4">
                {api2.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.image}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className=" font-semibold text-green-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.category}
                            </p>
                            <p className="mb-2 leading-normal">
                                <span>price: </span>
                            {items.price}
                            </p>
                            <button className="px-4 py-2 font-bold text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Buy now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  );
};


export default Product;
