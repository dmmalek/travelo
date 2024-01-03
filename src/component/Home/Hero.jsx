import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="w-full h-[80vh] bg-[url('https://rococo-tartufo-cbea4b.netlify.app/static/media/herobg.301b96486aaa0780cd98.jpg')] bg-no-repeat bg-cover bg-[#00000099] text-white bg-blend-color">
        <div className='container h-full flex flex-col items-center justify-center text-center'>
            <h2 className='text-2xl mb-6'>Explore the Colourful World</h2>
            <span className='line'></span>
            <h1 className='mb-16 featured__title'>a wonderful gift</h1>
            <Link href='#' className='btn'> Learn More</Link>
        </div>
    </div>
  )
}

export default Hero