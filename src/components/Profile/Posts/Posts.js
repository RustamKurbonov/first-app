import React from 'react'
import Post from './Post/Post'
import Style from './Posts.module.css'

export default function Posts(props) {
   
   let postElement = props.posts.posts.map(p => <Post nameUser={p.name} message={p.message} />);

   let newPostElement = React.createRef();
   
   return (
      <div className={Style.body}>
         <div className={Style.container}>
            <h2>Мои новости</h2>
            <div className={Style.top}>
               <textarea ref={newPostElement} placeholder="Что нового?" cols="30" rows="5" className={Style.text}></textarea>
               <button className={Style.btn}>Добавить пост</button>
            </div>
            <div className={Style.bottom}>
               {postElement}
            </div>
         </div>
      </div>
   )
}

