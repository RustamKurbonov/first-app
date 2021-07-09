import React from 'react';
import Style from './Message.module.css';
import MessageList from './MessageList/MessageList';
import UserItem from './UserItem/UserItem';

const Message = props => {

   let usersElement = props.users.map(u => <UserItem key={u.id} name={u.name} id={u.id} />);
   let massengElement = props.messangs.map(m => <MessageList key={m.id} name={m.name} message={m.message} />);

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
               <textarea onChange={props.changeMessageTextArea} className={Style.text} 
                  value={props.valueTextMessage} placeholder="Введите сообщение" cols="20" rows="5"></textarea>
               <button onClick={props.addNewMessage} className={Style.btn}>Отправить</button>
            </div>
         </div>
      </section>
   )
}

export default Message;