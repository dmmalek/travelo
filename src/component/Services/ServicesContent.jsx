import React from "react";

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
        <div>
          <img className="w-full h-[285px] object-cover"
            src="https://rococo-tartufo-cbea4b.netlify.app/images/home/hiking-1.jpg"
            alt="hiking"
          />
          <div className="pt-4 pr-3 pb-0 pl-3">
            <h3 className="blog__title">Backpacking Trips</h3>
            <p>
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris inistra possedit.
            </p>
          </div>
        </div>

        <div>
          <img  className="w-full h-[285px] object-cover"
            
            src="https://rococo-tartufo-cbea4b.netlify.app/images/services/outdoor-2.jpg"
            alt="hiking"
          />
          <div className="pt-4 pr-3 pb-0 pl-3">
            <h3 className="blog__title">Family Hiking Trips</h3>
            <p>
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris inistra possedit.
            </p>
          </div>
        </div>

        <div>
          <img className="w-full h-[285px] object-cover"
            src="https://rococo-tartufo-cbea4b.netlify.app/images/services/outdoor-3.jpg"
            alt="hiking"
          />
          <div className="pt-4 pr-3 pb-0 pl-3">
            <h3 className="blog__title">Water Sports</h3>
            <p>
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris inistra possedit.
            </p>
          </div>
        </div>

        <div className="services__blog">
          <img className="w-full h-[285px] object-cover"
            src="https://rococo-tartufo-cbea4b.netlify.app/images/services/outdoor-4.jpg"
            alt="hiking"
          />
          <div className="pt-4 pr-3 pb-0 pl-3">
            <h3 className="blog__title">Winter Sports</h3>
            <p>
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris inistra possedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
