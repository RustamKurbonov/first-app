import React, { Component } from 'react'
import Posts from './Posts/Posts'
import Style from './Profile.module.css'

export default class Profile extends Component {
   render() {
      return (
         <section className={Style.profile}>
            <div className={Style.body}>
               <div className={Style.icon}>
                  <img src='https://sun9-20.userapi.com/c856032/v856032760/1f05fe/WrCdvrmMtr8.jpg' />
               </div>
               <div className={Style.descripcion}>
                  <div className={Style.name}>
                     <p>Рустам Курбонов</p>
                  </div>
                  <div className={Style.data_of_birth}>
                     <p>Дата рождения: </p><data>25.03.1996</data>
                  </div>
                  <div className={Style.sity}>
                     <p>Город: </p><p>Нижний Новгород</p>
                  </div>
               </div>
            </div>
            <Posts />
         </section>
      )
   }
}
