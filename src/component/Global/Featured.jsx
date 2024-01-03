import React from "react";

const Featured = ({ title }) => {
  return (
    <div className="w-full h-[350px] flex justify-center items-center bg-[url('https://rococo-tartufo-cbea4b.netlify.app/static/media/about.9bacae31b111b15184bb.jpg')] bg-no-repeat bg-cover bg-[#00000099] bg-blend-color ">
     <h1 className="text-6xl mt-8 uppercase text-white">{title}</h1> 
    </div>
  );
};

export default Featured;
