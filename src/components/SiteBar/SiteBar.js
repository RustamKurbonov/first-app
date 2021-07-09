import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from './SiteBar.module.css'
import SiteBarFriends from './SiteBarFriends/SiteBarFriends'

const SiteBar = props => {
   return (
      <aside className={Style.body}>
         <nav className={Style.menu}>
            <div className={Style.list}>
               <NavLink to='/profile' activeClassName={Style.active} className={Style.link}>
                  <p>Профиль</p>
               </NavLink>
               <NavLink to='/news' activeClassName={Style.active} className={Style.link}>
                  <p>Новости</p>
               </NavLink>
               <NavLink to='/message' activeClassName={Style.active} className={Style.link}>
                  <p>Сообщения</p>
               </NavLink>
               <NavLink to='/communities' activeClassName={Style.active} className={Style.link}>
                  <p>Сообщества</p>
               </NavLink>
               <NavLink to='/music' activeClassName={Style.active} className={Style.link}>
                  <p>Музыка</p>
               </NavLink>
               <NavLink to='/video' activeClassName={Style.active} className={Style.link}>
                  <p>Видео</p>
               </NavLink>
               <NavLink to='/photos' activeClassName={Style.active} className={Style.link}>
                  <p>Фотографии</p>
               </NavLink>
            </div>
         </nav>
         <SiteBarFriends friends={props.friends} />
      </aside>
   )
}

export default SiteBar;