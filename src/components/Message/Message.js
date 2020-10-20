import React from 'react'
import Style from './Message.module.css'
import MessageList from './MessageList/MessageList'
import UserItem from './UserItem/UserItem'

export default function Message(props) {
   let users = [
      { name: 'Alexey', id: 1 },
      { name: 'Dima', id: 2 },
      { name: 'Ric', id: 3 }
   ];
   let messangs = [
      { name: 'Alexey', messange: 'Hi'},
      { name: 'Me', messange: 'Hi!' },
      { name: 'Alexey', messange: 'nkjn wenfjnlnf nvj nwoefnlnf' }
   ];
   let usersElement = users.map(u => <UserItem name={u.name} id={u.id} />);
   let massengElement = messangs.map(m => <MessageList name={m.name} message={m.messange} />);
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
