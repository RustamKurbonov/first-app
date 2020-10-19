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
                  <textarea className={Style.text}></textarea>
                  <button className={Style.btn}>Add post</button>
               </div>
               <div className={Style.bottom}>
                  <Post />
               </div>
            </div>
         </div>
      )
   }
}
