import React from 'react'
import SiteBar from './SiteBar'

const SiteBarContainer = props => {
   let state = props.store.getState();
   return <SiteBar friends={state.siteBarPage.friends} />
}

export default SiteBarContainer;