import React from 'react'
import { profile } from '../../../assets/img'
import { RiTelegram2Fill } from "react-icons/ri"
import cls from './index.module.css'

const Nav = () => {
  return (
    <div className={cls.main}>
        <div className={cls.logo}>
            <h1>2rism<RiTelegram2Fill className={cls.icon} /></h1>
        </div>
        <div className={cls.infonav}>
            <ul>
                <li>home</li>
                <li>hotels</li>
                <li>restaurants</li>
                <li>tours</li>
                <li>destinations</li>
                <li>activities</li>
                <li>contact</li>
            </ul>
        </div>
        <div className={cls.profile}>
            <p><span>Holla,</span> Ales Nesetril</p>
            <img src={profile} alt="profile" />
        </div>
    </div>
  )
}

export default Nav