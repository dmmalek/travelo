import React from "react";
import Header from "@/component/Global/Header";
import Footer from "@/component/Global/Footer";
import Hero from "@/component/Home/Hero";
import Quote from "@/component/Home/Quote";
import Events from "@/component/Home/Events";

const index = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Quote/>
      <Events/>
      <Footer />
      
    </>
  );
};

export default index;
