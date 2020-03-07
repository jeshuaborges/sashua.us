import React from 'react'
import { ContentSection } from './Section'
import * as dashify from 'dashify'

export default ({name}) => (
  <ContentSection id={dashify(name)} title={name}>
    More soon...
  </ContentSection>
)
