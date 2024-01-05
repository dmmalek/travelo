import React from "react";
import Link from "next/link";

const Explore = () => {
  return (
    <section className=" mt-14 bg-[url('https://rococo-tartufo-cbea4b.netlify.app/static/media/section-bg-img.52ce16c6c2b5cbd71c5c.jpg')] bg-cover bg-no-repeat bg-[#00000099] bg-blend-color py-44 px-0 text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2">
        <div></div>
        <div>
          <h1 className=" !text-white section__heading  ">Explore the world</h1>
          <span className="line !m-0 w-[70px]"></span>
          <p className="mt-4 mb-6">
            Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
            concordi. Fert his. Recessit mentes praecipites locum caligine sui
            egens erat. Silvas caeli regna.
          </p>
          <Link href="/blogs" className="btn">
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
