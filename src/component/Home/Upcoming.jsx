import Link from 'next/link'
import React from 'react'

const Upcoming = () => {
  return (
    <section className='container !mt-14' >
    <div className="grid sm:grid-cols-[1fr,2fr] grid-cols-1 gap-6 container">
        <div >
            <h1 className='section__heading'>upcoming tours & destination</h1>
            <span className="line !m-0"></span>
            <p className='mt-4 mb-12'>
                Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
                liberioris. Sinistra possedit litora ut nabataeaque. Setucant
                coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque
                constaque cepit sublime flexi nullus.
            </p>
            <Link href="#" className="btn">Learn More</Link>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1   sm:grid-rows-[205px] gap-6">
            <div className="bg-antiquewhite grid-cols-none grid-rows-none sm:col-span-1 sm:row-span-1">
                <img className=" w-full h-full object-cover" src="https://rococo-tartufo-cbea4b.netlify.app/images/home/ski-1.jpg" alt="" />
            </div>
            <div className="bg-aqua grid-cols-none grid-rows-none sm:col-span-1 sm:row-span-2">
                <img className=" w-full h-full object-cover" src="https://rococo-tartufo-cbea4b.netlify.app/images/home/ski-2.jpg" alt="" />
            </div>
            <div className="bg-aquamarine grid-cols-none grid-rows-none sm:col-span-1 sm:row-span-2">
                <img className=" w-full h-full object-cover" src="https://rococo-tartufo-cbea4b.netlify.app/images/home/ski-3.jpg" alt="" />
            </div>
            <div className="bg-beige grid-cols-none grid-rows-none sm:col-span-1 sm:row-span-1">
                <img className=" w-full h-full object-cover" src="https://rococo-tartufo-cbea4b.netlify.app/images/home/ski-4.jpg" alt="" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Upcoming