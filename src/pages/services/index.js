import Featured from '@/component/Global/Featured'
import Footer from '@/component/Global/Footer'
import Header from '@/component/Global/Header'
import ServicesContent from '@/component/Services/ServicesContent'
import ServicesInfo from '@/component/Services/ServicesInfo'
import React from 'react'

const index = () => {
  return (
    <>
    <Header/>
    <Featured title="Services"/>
    <ServicesContent/>
    <ServicesInfo/>
    <Footer/>
    </>
  )
}

export default index