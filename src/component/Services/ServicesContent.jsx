import { blogData } from "@/Data/blogData";
import React from "react";
import Link from "next/link";

const ServicesContent = () => {
  return (
    <div className="text-center  container section">
      <h1 className="section__heading">IT'S TIME TO START YOUR ADVENTURES</h1>
      <span className="line"></span>
      <p className="mt-4 py-0 px-20">
        Click edit button to change this text. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe pulvinar.
      </p>
      <div className="mt-20 grid gap-10 grid-cols-1 sm:grid-cols-2">
        {blogData.map((item, index) => {
          const { title, slug, img, description1 } = item;
          return (
            <div>
              <img
                className="w-full h-[285px] object-cover"
                src={img}
                alt="hiking"
              />
              <div className="pt-4 pr-3 pb-0 pl-3">
                <h3 className="blog__title">{title}</h3>
                <p>{description1.substring(0, 200)}</p>
              </div>
              <Link href={`/blogs/${slug}`} className="btn mt-5">
                LEARN MORE
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesContent;
