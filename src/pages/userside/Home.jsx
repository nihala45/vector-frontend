import React from 'react'
import Navbar from '../../components/userside/Navbar'
import Header from '../../components/userside/Header'
import Features from '../../components/userside/Features'
import CoursePreview from '../../components/userside/CoursePreview'
import Testimonials from '../../components/userside/Testimonials'
import WhyChooseUs from '../../components/userside/WhyChooseUs'
import { Parentheses } from 'lucide-react'
import Partners from '../../components/userside/Partners'
import Footer from '../../components/userside/Footer'
import Banner from '../../components/common/Banner'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Features/>
      <CoursePreview/>
      <Banner/>
      <Testimonials/>
      <WhyChooseUs/>
      <Partners/>
      <Footer/>

      
    </div>
  )
}

export default Home
