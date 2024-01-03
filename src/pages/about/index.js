import React from 'react'
import AboutContent from '@/component/About/AboutContent'
import Header from '@/component/Global/Header'
import Footer from '@/component/Global/Footer'
import Featured from '@/component/Global/Featured'

const index = () => {
  return (
    <>
    <Header/>
    <Featured title="Who Are You"/>
    <AboutContent/>
    <Footer/>
    </>
    
  )
}

export default index