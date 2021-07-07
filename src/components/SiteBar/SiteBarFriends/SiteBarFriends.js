import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from './SiteBarFriends.module.css'
import FriendElement from './FriendElement/FriendElement'

export default function SiteBarFriends(props) {
   let friengElement = props.friends.map( f =>
      <FriendElement key={f.id} name={f.name} />  );
   return (
      <article className={Style.body}>
            <NavLink to='/friends' className={Style.link}>
               <h2 className={Style.title}>Друзья</h2>
            </NavLink>
         <div className={Style.items}>
            { friengElement }
         </div>
      </article>
   )
}
