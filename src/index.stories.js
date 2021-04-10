import React from 'react'
import styled from 'styled-components'
import theme from './modules/theme'

export default { title: 'Typeography' }

const Headline =  styled.h1`
  color: ${ theme.headline };
  font-family: ${ theme.fontHeadline };
  font-size: 5em;
  margin-bottom: 0;
`

const Nav = styled.nav`
  font-family: oswald, sans-serif;
  font-weight: 200;
  font-style: normal;
`

const Copy = styled.p`
  font-family: open-sans, sans-serif;
  font-weight: 300;
  font-style: normal;
`

export const typography = () =>
  <React.Fragment>
    <Headline>Headline</Headline>
    <Nav>Navigation</Nav>
    <Copy>Copy</Copy>
  </React.Fragment>

