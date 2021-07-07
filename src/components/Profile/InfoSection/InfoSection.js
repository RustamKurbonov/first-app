import React from 'react'
import Style from './InfoSection.module.css'

export default function InfoSection(props) {
   
   return (
      <div className={Style.info}>
         <div className={Style.icon}>
            <img alt='' src='https://sun9-20.userapi.com/c856032/v856032760/1f05fe/WrCdvrmMtr8.jpg' />
         </div>
         <div className={Style.descripcion}>
            <div className={Style.name}>
               <p>{props.name}</p>
            </div>
            <div className={Style.data_of_birth}>
               <p>Дата рождения: </p><data>{props.data}</data>
            </div>
            <div className={Style.sity}>
               <p>Город: </p><p>{props.sity}</p>
            </div>
         </div>
      </div>
   )
}
