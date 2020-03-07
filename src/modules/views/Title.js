import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const H1 = styled.h1`
  text-align: center;
  color: ${ theme.headline };
  font-family: ${ theme.fontHeadline };
  font-size: 5em;
  margin-bottom: 0;
`

export default () => <H1>Sasha & Jeshua</H1>
