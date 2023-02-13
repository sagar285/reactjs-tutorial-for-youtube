import React from "react";
import { Link } from "react-router-dom";
import api from "./api.json"

const News = () => {
  return (
    <div>
      <nav className="flex list-none px-[45rem] bg-slate-500 hover:bg-blue-500 hover:text-white hover:font-bold">
      <Link to ="/"><li className="m-2 ">NewsPage</li></Link>
        <Link to ="/product"><li className="m-2">Productpage</li></Link>
      </nav>
     
      <div className="grid gap-2 lg:grid-cols-4">
                {api.articles.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.urlToImage}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>



    </div>
  );
};

export default News;
