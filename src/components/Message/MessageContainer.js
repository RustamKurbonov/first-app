import React from 'react';
import Message from './Message'
import { createActionAddMessage, createActionChengeTextMessage } from './../../Redux/messageReducer';

const MessageContainer = props => {

   let state = props.store.getState();

   let addMessage = () => {
      props.store.dispatch(createActionAddMessage());
   }

   let changeMessageText = (e) => {
      let text = e.target.value;
      props.store.dispatch(createActionChengeTextMessage(text));
   }
   
   return (
      <Message 
         users = {state.messagePage.users}
         messangs = {state.messagePage.messangs} 
         valueTextMessage = {state.messagePage.valueTextMessage}
         addNewMessage = {addMessage}
         changeMessageTextArea = {changeMessageText}
      />
   )
}

export default MessageContainer;