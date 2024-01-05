import React from 'react'
import { useRouter } from 'next/router'
import Blog1 from '@/component/Blog/Blog1'
import {blogData} from '@/Data/blogData'
import Header from '@/component/Global/Header'
import Footer from '@/component/Global/Footer'

const SingleBlog = () => {
  
    const route = useRouter()
    const slug = route.query.slug
    const data = blogData.filter(item => item.slug==slug)

  return (
   <>
   <Header/>
   <Blog1 data= {data}/>
   <Footer/>
   </>
  )
}

export default SingleBlog