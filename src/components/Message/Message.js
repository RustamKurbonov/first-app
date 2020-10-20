import React, { Component } from 'react'
import Style from './Message.module.css'
import MessageList from './MessageList/MessageList'
import UserItem from './UserItem/UserItem'

export default class Message extends Component {
   render() {
      return (
         <section className={Style.messages}>
            <div className={Style.users_list}>
               <UserItem name='Alexey' id='1' />
               <UserItem name='Dima' id='2' />
               <UserItem name='Ric' id='3' />
            </div>
            <div className={Style.message_list}>
               <MessageList name='Alexey' message='Hi' />
               <MessageList name='Me' message='Hi!' />
               <MessageList name='Alexey' message='lorem lorem ckmnc jdnwekn ejvdovnwj nkwlneufne jnkjn wenfjnlnf nvj nwoefnlnf' />
            </div>
         </section>
      )
   }
}

