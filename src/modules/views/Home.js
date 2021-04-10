import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import { Section } from '../components/Section'
import Nav from '../components/Nav'
import Title from '../components/Title'

const H2 = styled.h2`
  text-align: center;
  color: ${ theme.headline };
  font-family: ${ theme.fontHeadline };
  font-size: 2.5em;
  margin-top: -0.9em;
`

const H3 = styled.h3`
  text-align: center;
  color: ${ theme.headline };
  font-family: ${ theme.fontHeadline };
  font-size: 2em;
  margin-top: -0.9em;
`

const Artwork = styled.div`
  background-image: url(/mountains.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  height: 500px;
`

export default () => (
  <Section id="home" includeNav={ false }>
    <Title>Sasha & Jeshua</Title>
    <H2>are getting married</H2>
    <H3>July 2, 2022 * Paso Robles, California</H3>
    <Nav/>
    <Artwork/>
  </Section>
)
