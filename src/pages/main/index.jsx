import React from 'react'
import Header from '../../components/layout/Header'
import PopularDestinationsCard from '../../components/PopularDestinationsCards'
import { sea, nature, home, railway, sight, city, img, imgTwo, imgThree, imgFour, grade, gradeTwo, gradeThree, gradeFour, ActivitiesImg, Climbing, Skiing, Hiking, iceCream, BrooklynBridge } from '../../assets/img'
import { GrLocation } from "react-icons/gr"
import { HiOutlineArrowSmallRight } from "react-icons/hi2"

import cls from './index.module.css'
import TravelTips from '../../components/TravelTips'
import AboutUs from '../../components/AboutUs'

const data = [
  {
    header: 'Popular Destinations',
    img: sea,
    text: 'Big Sur',
    h2_text: 'California, USA'
  },
  {
    img: nature,
    text: 'Prescott',
    h2_text: 'Arizona, USA'
  },
  {
    img: home,
    text: 'Fort Mayers',
    h2_text: 'Florida, USA'
  },
  {
    img: railway,
    text: 'Tucson',
    h2_text: 'Arizona, USA'
  },
  {
    img: sight,
    text: 'St. Joseph',
    h2_text: 'Michigan, USA'
  },
  {
    img: city,
    text: 'Madrid',
    h2_text: 'Spain'
  },
]
const dataTwo = [
  {
    header: 'Popular Destinations',
    img: img,
    text: 'Monastero Santa Rosa Hotel & Spa',
    icon: <GrLocation />,
    p_text: 'California, USA',
    images: grade,
  },
  {
    img: imgTwo,
    text: 'Grand Hotel Tremezzo',
    icon: <GrLocation />,
    p_text: 'Arizona, USA',
    images: gradeTwo,
  },
  {
    img: imgThree,
    text: 'The Oberoi Udaivilas, Udaipur',
    icon: <GrLocation />,
    p_text: 'Florida, USA',
    images: gradeThree,
  },
  {
    img: imgFour,
    text: 'AKA Beverly Hills',
    icon: <GrLocation />,
    p_text: 'Arizona, USA',
    images: gradeFour,
  }
]
const dataThree = [
  {
    img: ActivitiesImg,
    text: 'Sailing',
  },
  {
    img: Climbing,
    text: 'Climbing',
  },
  {
    img: Skiing,
    text: 'Skiing',
  },
  {
    img: Hiking,
    text: 'Hiking',
  }
]
const dataFour = [
  {
    imgTwo: iceCream,
    title: 'East Village Ice Cream Crawl',
    infoText: 'We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store well explore the story behind the business and see what makes the ice cream unique as you savor every…',
    dayText: 'Today',
    user: 'Maria Philips',
    chat: 2
  },
  {
    imgTwo: BrooklynBridge,
    title: 'Brooklyn Bridge cinematic photo walk',
    infoText: 'This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. ',
    dayText: 'Today',
    user: 'James Calzoni',
    chat: 17
  }
]

const Main = (props) => {
  return (
    <div>
      <Header />
      <h1 style={{padding: '120px 120px 0', fontFamily: '"Poppins", serif', fontWeight: '600', color: '#161414'}} >Popular Destinations</h1>
      <div style={{display: 'flex', padding: '64px 110px 120px', gap: '9px'}}>
        {data.map((item)  => <PopularDestinationsCard 
          img={item.img}
          text={item.text}
          h2_text={item.h2_text}
        />)}
      </div>
      <div className={cls.content}><h1>Hotels and Restaurants</h1><button>View all <HiOutlineArrowSmallRight /></button></div>
      <div style={{display: 'flex', padding: '64px 100px 120px', gap: '9px'}}>
        {dataTwo.map((item)  => <PopularDestinationsCard 
          img={item.img}
          text={item.text}
          icon={item.icon}
          p_text={item.p_text}
          images={item.images}
        />)}
      </div>
      <div className={cls.content}><h1>Hotels and Restaurants</h1><button>View all <HiOutlineArrowSmallRight /></button></div>
      <div style={{display: 'flex', padding: '64px 100px 120px', gap: '25px', alignItems: 'center'}}>
        {dataFour.map((item)  => <TravelTips 
          imgTwo={item.imgTwo}
          title={item.title}
          infoText={item.infoText}
          dayText={item.dayText}
          user={item.user}
          chat={item.chat}
        />)}
      </div>
      <div className={cls.content}><h1>Activities</h1><button>View all <HiOutlineArrowSmallRight /></button></div>
      <div style={{display: 'flex', padding: '64px 100px 120px', gap: '9px'}}>
        {dataThree.map((item)  => <PopularDestinationsCard 
          img={item.img}
          text={item.text}
        />)}
      </div>
      <AboutUs />
    </div>
  )
}

export default Main