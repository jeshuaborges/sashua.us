import React from 'react'
import styled from 'styled-components'

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`

export const Column = styled.div`
  float: left;
  width: 100%;
  border: 1px solid #D00;
  @media only screen and (min-width: 768px) {
    width: ${props => (props.span ? props.span / 12 *  100 : "8.33" )}%; 
  }
`
