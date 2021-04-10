import React from 'react'
import { ContentSection } from '../components/Section'
import styled from 'styled-components'
import theme from '../theme'

const Date = styled.h3`
  text-align: center;
  color: ${ theme.headline };
  font-family: ${ theme.fontHeadline };
  font-size: 2em;
`

const Title = styled.h4`
  text-align: center;
  color: ${ theme.headline };
  font-family: ${ theme.fontHeadline };
  font-size: 1.5em;
`

const Subtext = styled.h4`
  text-align: center;
  color: ${ theme.headline };
  font-family: ${ theme.fontHeadline };
  font-size: 1.5em;
`

const Event = ({ children }) =>
  <section>
    { children }
  </section>

const Day = ({children, date}) =>
  <div>
    <Date>{date}</Date>
    {children}
  </div>

const WelcomeGathering = () =>
  <Event>
    <Title>Welcome Gathering</Title>
    <Subtext>hosted by Liz and Newlin Hastings</Subtext>

    6 pm - 9 pm<br/>
    Refreshments<br/>

    <address>
      Hastings Ranch<br/>
      6880 Adelaida Road<br/>
      Paso Robles, CA<br/>
    </address>

    Casual<br/>
    Carpooling Suggested<br/>
  </Event>

const RiseAndShine = () =>
  <Event>
    <Title>Rise & Shine</Title>
    <Subtext>at the Ranch House</Subtext>

    8 am - 9:30 am
    Coffee & Pastries

    <address>
      Adelaida Angus Ranch<br/>
      7070 Angus Ranch Road<br/>
      Paso Robles, CA<br/>
    </address>

    Not Yer PJs<br/>
  </Event>

const CeremonyAndLunch = () =>
  <Event>
    <Title>Wedding Ceremony & Lunch</Title>
    <Subtext>at the Ranch</Subtext>

    9:45 am<br/>
    Mimosas & BBQ<br/>

    <address>
      Adelaida Angus Ranch<br/>
      Further down the dirt road<br/>
      Paso Robles, CA<br/>
    </address>

    Boots & Hats<br/>
    Optional swimming session to follow at Lake Nacimiento<br/>
  </Event>

const SunsetReception = () =>
  <Event>
    <Title>Sunset Reception</Title>
    <Subtext>at Marilyn & Ken Riding’s</Subtext>
    5:30 pm with cheers & cake at 7:30 pm<br/>
    Flatbreads & Cake<br/>

    <address>
      La Vista<br/>
      3030 Adara Road<br/>
    </address>

    Cocktail, Adults Only<br/>
    Carpooling Essential<br/>
  </Event>

const CannonballLunch = () =>
  <Event>
    <Title>Cannonball Lunch</Title>
    <Subtext>at Nikki & Brian’s</Subtext>

    12 noon<br/>
    Tacos & Swimming<br/>

    <address>
      Lopai<br/>
      5170 Vineyard<br/>
      Paso Robles, CA<br/>
    </address>

    Swimwear<br/>
  </Event>

const Parades = () =>
  <Event>
    <Title>Independence Day Parades</Title>
    <Subtext>in Templeton & Cayucos</Subtext>
  </Event>

const TrailHike = () =>
  <Event>
    <Title>Point Buchon Trail Hike</Title>
    <Subtext>at Montaña de Oro</Subtext>

    10 am<br/>
    Salads & Wraps<br/>

    <address>
      Coon Creek Parking Lot<br/>
      Pecho Valley Road<br/>
      Los Osos, CA<br/>
    </address>
  </Event>

export default () => (
  <ContentSection id="events" title="Events">
    <Day date="Friday, the 1st of July, 2022">
      <WelcomeGathering/>
    </Day>

    <Day date="Saturday, the 2nd of July, 2022">
      <RiseAndShine/>
      <CeremonyAndLunch/>
      <SunsetReception/>
    </Day>

    <Day date="Sunday, the 3rd of July, 2022">
      <CannonballLunch/>
    </Day>

    <Day date="Monday, the 4th of July, 2022">
      <Parades/>
      <TrailHike/>
    </Day>
  </ContentSection>
)
