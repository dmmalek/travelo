import React from "react";
import Link from "next/link";

const Events = () => {
  return (
    <section className="container">
      <h1 className="text-center section__heading">upcoming events</h1>
      <span className="line"></span>
      <div className=" mt-14 text-center  gap-16 grid sm:grid-cols-2 grid-cols-1">
        <div>
          <img
            className="mb-6 h-[350px] object-cover"
            src="https://rococo-tartufo-cbea4b.netlify.app/images/home/hiking-1.jpg"
            alt="hiking"
          />
          <div>
            <h3 className="blog__title">everest camp trek</h3>
            <p className="blog__description">
              {" "}
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris inistra possedit.
            </p>
            <Link href="#" className="btn">LEARN MORE</Link>
          </div>
        </div>
        <div>
          <img
            className="mb-6 h-[350px] object-cover"
            src="https://rococo-tartufo-cbea4b.netlify.app/images/home/hiking-2.jpg"
            alt="hiking"
          />
          <div>
            <h3 className="blog__title">everest camp trek</h3>
            <p className="blog__description">
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris inistra possedit.
            </p>
            <Link href="#" className="btn">LEARN MORE</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
