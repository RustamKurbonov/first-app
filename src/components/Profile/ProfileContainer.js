import React from 'react'
import Profile from './Profile';
import { createActionAddPost, createActionChengeTextPost } from './../../Redux/profileReducer';

const ProfileContainer = props => {

   let state = props.store.getState();

   let textButton = () => {
      props.store.dispatch(createActionAddPost());
   }
   let changeTextPost = (e) => {
      let text = e.target.value;
      props.store.dispatch(createActionChengeTextPost(text));
   }
   
   return (
      <Profile 
         data = {state.profilePage.descripcion.data}
         name = {state.profilePage.descripcion.name}
         sity = {state.profilePage.descripcion.sity}
         posts = {state.profilePage.posts} 
         onValueTextInput = {state.profilePage.valueTextInput}
         onClickButtonAddPost = {textButton}
         onChengeTextArea = {changeTextPost}
      />
   )
}

export default ProfileContainer;