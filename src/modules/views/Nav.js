import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import dasherize from 'dashify'

const Nav = styled.ul`
  text-align: center;
  list-style: none;
  margin-top: 0; 
  padding-right: 30px;
  font-family: ${ theme.nav.fontFamily };
  font-weight: ${ theme.nav.fontWeight };
  font-size: ${ theme.nav.fontSize }
`

const NavItem = styled.li`
  + li {
    margin-left: 30px;
  }
  display: inline-block;
`

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid black;
  } 
`

const nav = [
  'Home',
  'RSVP',
  'Events',
  'Travel',
  'Stay',
  'Drive',
  'Dress',
  'Favorites',
  'Registry',
  'Photos',
  // 'More Wedding Fun',
]


export default () =>
  <Nav>
    { nav.map(n =>
      <NavItem><NavLink href={ `#${ dasherize(n) }` }>{ n }</NavLink></NavItem>,
    ) }
  </Nav>
