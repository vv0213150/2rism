import React from 'react'
import { People } from '../../assets/img'
import { HiOutlineArrowSmallRight } from "react-icons/hi2"
import cls from './index.module.css'

const AboutUs = () => {
  return (
    <div className={cls.main}>
        <div className={cls.aboutUs}>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <button>Read more <HiOutlineArrowSmallRight /></button>
        </div>
        <div><img src={People} alt="People_img" /></div>
    </div>
  )
}

export default AboutUs
