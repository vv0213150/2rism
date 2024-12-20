import React from 'react'
import { RiCalendar2Line, RiUserLine, RiChat3Line } from "react-icons/ri"
import cls from './index.module.css'

const TravelTips = (props) => {
  return (
    <div className={cls.container}>
      <img width='300px' height='380px' src={props.imgTwo} alt="TravelTips"/>
      <div className={cls.info}>
        <h1>{props.title}</h1>
        <p>{props.infoText}</p>
        <div className={cls.block}>
          <p><RiCalendar2Line />{props.dayText}</p>
          <p><RiUserLine />{props.user}</p>
          <p><RiChat3Line />{props.chat}</p>
        </div>
      </div>
    </div>
  )
}

export default TravelTips
