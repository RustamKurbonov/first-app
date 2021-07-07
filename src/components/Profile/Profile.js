import React from 'react'
import InfoSection from './InfoSection/InfoSection'
import Posts from './Posts/Posts'
import Style from './Profile.module.css'

export default function Profile(props) {

   let descripcionElement = props.state.profilePage.descripcion.map(d => 
      <InfoSection key={d.id} name={d.name} data={d.data} sity={d.sity} />);

   return (
      <section className={Style.profile}>
         {descripcionElement}
         <Posts posts={props.state.profilePage} valueTextInput={props.state.profilePage.valueTextInput} 
            dispatch={props.dispatch} />
      </section>
   )
}
