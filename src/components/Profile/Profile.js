import React from 'react'
import InfoSection from './InfoSection/InfoSection'
import Posts from './Posts/Posts'
import Style from './Profile.module.css'

const Profile = props => {
   
   return (
      <section className={Style.profile}>
         <InfoSection
            name={props.name} 
            data={props.data} 
            sity={props.sity} 
         />
         <Posts 
            posts={props.posts} 
            valueTextInput={props.onValueTextInput}
            onClickButtonAddPost = {props.onClickButtonAddPost}
            onChengeTextArea = {props.onChengeTextArea}
         />
      </section>
   )
}

export default Profile;