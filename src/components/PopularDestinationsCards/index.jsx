import React from 'react'
import cls from './index.module.css'

const PopularDestinationsCard = (props) => {
  return (
    <>
      <div><h1>{props.header}</h1></div>
      <div className={cls.cards}>
        <div className={cls.card}>
          <img src={props.img} alt={props.header}/>
          <h1>{props.text}</h1>
          <h2>{props.h2_text}</h2>
            <div className={cls.grade}>
              <div className={cls.gradeTwo}>
                {props.icon} 
                <div className={cls.text}><p>{props.p_text}</p></div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default PopularDestinationsCard
