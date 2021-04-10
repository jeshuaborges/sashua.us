import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Nav from './Nav'

export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 500px;
`

export const Section = styled.section`
  min-height: 1000px;
  margin-bottom: 10em;
`

export const SectionHeader = styled.h2`
  text-align: center;
  color: ${ theme.headline };
  font-family: ${ theme.fontHeadline };
  font-size: 3em;
`

export const ContentSection = ({ id, title, children}) => (
  <Section id={ id }>
    <SectionHeader>{ title }</SectionHeader>
    <Nav/>
    <ContentContainer>
      { children }
    </ContentContainer>
  </Section>
)
