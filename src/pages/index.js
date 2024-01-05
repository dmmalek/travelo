import React from "react";
import Header from "@/component/Global/Header";
import Footer from "@/component/Global/Footer";
import Hero from "@/component/Home/Hero";
import Quote from "@/component/Home/Quote";
import Events from "@/component/Home/Events";
import Explore from "@/component/Home/Explore";
import Upcoming from "@/component/Home/Upcoming";


const index = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Quote/>
      <Events/>
      <Explore/>
      <Upcoming/>
      <Footer />

    </>
  );
};

export default index;
