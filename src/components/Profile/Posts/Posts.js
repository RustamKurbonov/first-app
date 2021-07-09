import React from 'react';
import Post from './Post/Post';
import Style from './Posts.module.css';

const Posts = props => {

   let postElement = props.posts.map(p => <Post key={p.id} nameUser={p.name} message={p.message} like={p.like} />);

   return (
      <div className={Style.body}>
         <div className={Style.container}>
            <h2>Мои новости</h2>
            <div className={Style.top}>
               <textarea onChange={props.onChengeTextArea} placeholder="Что нового?" cols="30" rows="5" className={Style.text} 
                  value={props.valueTextInput}/>
               <button onClick={props.onClickButtonAddPost} className={Style.btn}>Добавить пост</button>
            </div>
            <div className={Style.bottom}>
               {postElement}
            </div>
         </div>
      </div>
   )
}

export default Posts;