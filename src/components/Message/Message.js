import React from 'react'
import Style from './Message.module.css'
import MessageList from './MessageList/MessageList'
import UserItem from './UserItem/UserItem'

export default function Message(props) {
   
   let usersElement = props.users.map(u => <UserItem name={u.name} id={u.id} />);
   let massengElement = props.messangs.map(m => <MessageList name={m.name} message={m.messange} />);

   return (
      <section className={Style.messages}>
         <div className={Style.users_list}>
            {usersElement}
         </div>
         <div className={Style.message_list}>
            {massengElement}
         </div>
      </section>
   )
}
