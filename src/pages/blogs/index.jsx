import Footer from "@/component/Global/Footer";
import Header from "@/component/Global/Header";
import Featured from "@/component/Global/Featured";
import { blogData } from "@/Data/blogData";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <>
      <Header />
      <Featured title="Blogs" />
      <div className="!mt-20 grid gap-10 grid-cols-1 sm:grid-cols-2 container">
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
              <div className="flex justify-center">
                <Link href={`/blogs/${slug}`} className="btn mt-5">
                  LEARN MORE
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* <ServicesContent /> */}
      {/* <ServicesInfo /> */}
      <Footer />
    </>
  );
};

export default Blog;
