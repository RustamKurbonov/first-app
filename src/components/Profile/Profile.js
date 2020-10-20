import React, { Component } from 'react'
import InfoSection from './InfoSection/InfoSection'
import Posts from './Posts/Posts'
import Style from './Profile.module.css'

export default class Profile extends Component {
   render() {
      return (
         <section className={Style.profile}>
            <InfoSection name='Rustam Kurbonov' sity='Nizhny Novgorod' data ='25.03.1996'/>
            <Posts />
         </section>
      )
   }
}
