import React from 'react'
import { RiTelegram2Fill, RiInstagramFill, RiMailLine, RiArrowRightFill } from "react-icons/ri"
import { FaFacebook, FaTwitter } from "react-icons/fa"

import cls from './index.module.css'

const Footer = () => {
  return (
    <div className={cls.main}>
      <div className={cls.warp}>
        <h1>2rism<RiTelegram2Fill className={cls.icon}/></h1>
        <p>We always make our customers happy by providing as many choises as possible</p>
        <div className={cls.icons}>
          <FaFacebook />
          <FaTwitter />
          <RiInstagramFill />
        </div>
      </div>
      <div className={cls.info}>
        <div>
          <h2>About</h2>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>News</li>
            <li>Menu</li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>Why 2rism</li>
            <li>Partner With Us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h2>Support</h2>
          <ul>
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className={cls.end}>
        <h3>Subscribe on our destination review newsletters</h3>
        <div className={cls.container}>
          <div className={cls.email}>
            <RiMailLine className={cls.iconTwo} />
            <div>
              <h5>Your Email</h5>
              <h4>johndoe@gmail.com</h4>
            </div>
          </div>
          <button><RiArrowRightFill /></button>
        </div>
      </div>
    </div>
  )
}

export default Footer
