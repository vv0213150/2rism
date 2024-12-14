import React from 'react'
import { LuSearch } from "react-icons/lu"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { RiRidingLine, RiCalendarEventFill, RiGroupLine  } from "react-icons/ri";
import cls from './index.module.css'

const Header = () => {
  return (
    <div className={cls.main}>
        <div className={cls.container}>
            <div className={cls.advertising}>
                <h1>Discover the most engaging places</h1>
                <button>Discover on 3D Globe</button>
            </div>
            <div className={cls.info_search}>
                <div className={cls.block}>
                    <div className={cls.icon}><HiOutlineLocationMarker /></div>
                    <div className={cls.text}>
                        <p>Location</p>
                        <h2>Explore nearby destinations</h2>
                    </div>
                </div>
                <div className={cls.block}>
                    <div className={cls.icon}><RiRidingLine /></div> 
                    <div className={cls.text}>
                        <p>Activity</p>
                        <h2>All Activities</h2>
                    </div>
                </div>
                <div className={cls.block}>
                    <div className={cls.icon}><RiCalendarEventFill /></div>
                    <div className={cls.text}>
                        <p>When</p>
                        <h2>Choose a Date</h2>
                    </div>
                </div>
                <div className={cls.block}>
                    <div className={cls.icon}><RiGroupLine  /></div>
                    <div className={cls.text}>
                        <p>Guests</p>
                        <h2>1 guest</h2>
                    </div>
                </div>
                <div className={cls.search}><LuSearch /></div>
            </div>
        </div>
    </div>
  )
}

export default Header
