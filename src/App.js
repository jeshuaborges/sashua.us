import React from 'react'
import Home from './modules/views/Home'
import Events from './modules/views/Events'
import Stay from './modules/views/Stay'
import Rsvp from './modules/views/Rsvp'
import Registry from './modules/views/Registry'
import Photos from './modules/views/Photos'
import Travel from './modules/views/Travel'
import Drive from './modules/views/Drive'
import Dress from './modules/views/Dress'
import Favorites from './modules/views/Favorites'

export default function Index() {
  return (
    <React.Fragment>
      <Home/>
      <Rsvp/>
      <Events/>
      <Travel/>
      <Stay/>
      <Drive/>
      <Dress/>
      <Favorites/>
      <Registry/>
      <Photos/>
    </React.Fragment>
  )
}
