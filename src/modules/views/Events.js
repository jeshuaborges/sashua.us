import React from 'react'
import { ContentSection } from './Section'
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
    <Subtext>at the Turnpike on Uncle Bill’s</Subtext>

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
    <Date>Friday, the 4th of September, 2020</Date>
    <WelcomeGathering/>

    <Date>Saturday, the 6th of September, 2020</Date>
    <RiseAndShine/>
    <CeremonyAndLunch/>
    <SunsetReception/>

    <Date>Sunday, the 7th of September, 2020</Date>
    <CannonballLunch/>

    <Date>Monday, the 8th of September, 2020</Date>
    <TrailHike/>
  </ContentSection>
)
