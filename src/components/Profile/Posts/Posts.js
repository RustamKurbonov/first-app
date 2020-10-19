import React, { Component } from 'react'
import Post from './Post/Post'
import Style from './Posts.module.css'
export default class Posts extends Component {
   render() {
      return (
         <div className={Style.body}>
            <div className={Style.container}>
               <h2>Мои новости</h2>
               <div className={Style.top}>
                  <textarea placeholder="Что нового?" cols="30" rows="5" className={Style.text}></textarea>
                  <button className={Style.btn}>Add post</button>
               </div>
               <div className={Style.bottom}>
                  <Post nameUser='Alexey' message='Это я'/>
                  <Post nameUser='Andrey' message='Привет, это второй пост'/>
                  <Post nameUser='Dima' message='Еще один пост'/>
               </div>
            </div>
         </div>
      )
   }
}
