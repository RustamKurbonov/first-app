import React from 'react';
import Style from './Message.module.css';
import MessageList from './MessageList/MessageList';
import UserItem from './UserItem/UserItem';
import { createActionAddMessage, createActionChengeTextMessage } from './../../Redux/store';

export default function Message(props) {
   let usersElement = props.state.messagePage.users.map(u => <UserItem key={u.id} name={u.name} id={u.id} />);
   let massengElement = props.state.messagePage.messangs.map(m => <MessageList key={m.id} name={m.name} message={m.message} />);

   let addMessage = () => {
      props.dispatch(createActionAddMessage());
   }

   let changeMessageText = (e) => {
      let text = e.target.value;
      props.dispatch(createActionChengeTextMessage(text));
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
               <textarea onChange={changeMessageText} className={Style.text} 
                  value={props.state.messagePage.valueTextMessage} placeholder="Введите сообщение" cols="20" rows="5"></textarea>
               <button onClick={addMessage} className={Style.btn}>Отправить</button>
            </div>
         </div>
      </section>
   )
}
