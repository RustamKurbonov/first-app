import React from 'react'
import Post from './Post/Post'
import Style from './Posts.module.css'

export default function Posts(props) {
   let posts = [
      { name: 'Alexey', message: 'Это я' },
      { name: 'Andrey', message: 'Привет, это второй пост' },
      { name: 'Dima', message: 'Еще один пост' }
   ];

   let postElement = posts.map(p => <Post nameUser={p.name} message={p.message} />);
   
   return (
      <div className={Style.body}>
         <div className={Style.container}>
            <h2>Мои новости</h2>
            <div className={Style.top}>
               <textarea placeholder="Что нового?" cols="30" rows="5" className={Style.text}></textarea>
               <button className={Style.btn}>Add post</button>
            </div>
            <div className={Style.bottom}>
               { postElement}
            </div>
         </div>
      </div>
   )
}

