import React from 'react'
import Style from './Post.module.css'

const Post = props => {
   return (
      <div className={Style.post}>
         <div className={Style.icon}>
            <a href='/'>
               <img alt='' src='data:image/png;base64,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' />
            </a>
         </div>
         <div className={Style.body}>
            <div className={Style.name}>
               <a href='/'><p>{props.nameUser}</p></a>
            </div>
            <div className={Style.text}>
               <p>{props.message}</p>
            </div>
            <div className={Style.like}>
               <button className={Style.btn}><i className="fa fa-star" aria-hidden="true"></i> {props.like}</button>
            </div>
         </div>
      </div>
   )
}

export default Post;