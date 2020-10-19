import React, { Component } from 'react'
import Style from './SiteBar.module.css'

export default class SiteBar extends Component {
   render() {
      return (
         <aside className={Style.body}>
            <nav className={Style.menu}>
               <div className={Style.list}>
                  <a href='#' className={Style.link}>
                     <p>Профиль</p>
                  </a>
                  <a href='#' className={Style.link}>
                     <p>Новости</p>
                  </a>
                  <a href='#' className={Style.link}>
                     <p>Сообщения</p>
                  </a>
                  <a href='#' className={Style.link}>
                     <p>Сообщества</p>
                  </a>
                  <a href='#' className={Style.link}>
                     <p>Друзья</p>
                  </a>
                  <a href='#' className={Style.link}>
                     <p>Музыка</p>
                  </a>
                  <a href='#' className={Style.link}>
                     <p>Видео</p>
                  </a>
                  <a href='#' className={Style.link}>
                     <p>Фотографии</p>
                  </a>
               </div>
            </nav>
         </aside>
      )
   }
}
