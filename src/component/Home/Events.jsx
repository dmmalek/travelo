import React from "react";
import Link from "next/link";
import { blogData } from "@/Data/blogData";

const Events = () => {
  return (
    <section className="container">
      <h1 className="text-center section__heading">upcoming events</h1>
      <span className="line"></span>
      <div className=" mt-14 text-center  gap-16 grid sm:grid-cols-2 grid-cols-1">
        {blogData.slice(0, 2).map((item, index) => {
          const { title, slug, img, description1 } = item;
          return (
            <div key={index}>
              <img
                className="mb-6 h-[350px] object-cover"
                src={img}
                alt="hiking"
              />
              <div>
                <h3 className="blog__title">{title}</h3>
                <p className="blog__description">{description1}</p>
                <Link
                  href={`http://localhost:3000/blog/${slug}`}
                  className="btn"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Events;
