import React from 'react'
import Style from './Message.module.css'
import MessageList from './MessageList/MessageList'
import UserItem from './UserItem/UserItem'

export default function Message(props) {
   let usersElement = props.state.messagePage.users.map(u => <UserItem name={u.name} id={u.id} />);
   let massengElement = props.state.messagePage.messangs.map(m => <MessageList name={m.name} message={m.messange} />);

   let text = React.createRef();
   let addMessage = () => {
      alert(text.current.value);
   }

   return (
      <section className={Style.messages}>
         <div className={Style.users_list}>
            {usersElement}
         </div>
         <div className={Style.message_list}>
            <div className={Style.message_tablo}>
               {massengElement}
            </div>
            <div className={Style.bottom}>
               <textarea ref={text} className={Style.text} placeholder="Введите сообщение" cols="20" rows="5"></textarea>
               <button onClick={addMessage} className={Style.btn}>Отправить</button>
            </div>
         </div>
      </section>
   )
}
