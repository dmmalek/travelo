import { blogData } from "@/Data/blogData";
import React from "react";

const Blog1 = ({ data }) => {

  return (
    <div>
      <div
        className={`w-full h-[80vh] bg-no-repeat bg-cover bg-[#00000099] text-white bg-blend-color `}
        style={{backgroundImage: `url('${data[0]?.img}')`}}
      >
        <div className="container h-full flex flex-col items-center justify-center text-center">
          <a href="#" className="btn mb-8">
            News
          </a>
          <h1 className="text-xl sm:text-4xl mb-8">
           {data[0]?.title}
          </h1>
          <span>By {data[0]?.author} - {data[0]?.date}</span>
        </div>
      </div>

      <div className="mt-10 px-40 flex flex-col justify-center text-center gap-4">
        <h1 className="section__heading">
          {data[0]?.subtitle}
        </h1>
        <hr className=" border" />
        <p className="text-justify">
         {data[0]?.description1}
        </p>

        <p className="text-justify">
        {data[0]?.description2}
        </p>
      </div>
    </div>
  );
};

export default Blog1;
