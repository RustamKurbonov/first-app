import React from 'react';
import Style from './Message.module.css';
import MessageList from './MessageList/MessageList';
import UserItem from './UserItem/UserItem';
import { createActionAddMessage, createActionChengeTextMessage } from './../../Redux/store';

export default function Message(props) {
   let usersElement = props.state.messagePage.users.map(u => <UserItem name={u.name} id={u.id} />);
   let massengElement = props.state.messagePage.messangs.map(m => <MessageList name={m.name} message={m.message} />);

   let textInput = React.createRef();

   let addMessage = () => {
      props.dispatch(createActionAddMessage());
   }
   let changeMessageText = () => {
      let text = textInput.current.value;
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
               <textarea onChange={changeMessageText} ref={textInput} className={Style.text} 
                  value={props.state.messagePage.valueTextMessage} placeholder="Введите сообщение" cols="20" rows="5"></textarea>
               <button onClick={addMessage} className={Style.btn}>Отправить</button>
            </div>
         </div>
      </section>
   )
}
