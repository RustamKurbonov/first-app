import React, { Component } from 'react'
import Style from './InfoSection.module.css'

export default class InfoSection extends Component {
   render() {
      return (
         <div className={Style.info}>
            <div className={Style.icon}>
               <img src='https://sun9-20.userapi.com/c856032/v856032760/1f05fe/WrCdvrmMtr8.jpg' />
            </div>
            <div className={Style.descripcion}>
               <div className={Style.name}>
                  <p>{this.props.name}</p>
               </div>
               <div className={Style.data_of_birth}>
                  <p>Дата рождения: </p><data>{this.props.data}</data>
               </div>
               <div className={Style.sity}>
                  <p>Город: </p><p>{this.props.sity}</p>
               </div>
            </div>
         </div>
      )
   }
}
