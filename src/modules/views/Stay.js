import React from 'react'
import { ContentSection } from '../components/Section'


const Place = ({ name, url, description }) =>
  <li>
    { url
      ? <a href={ url }>{ name }</a>
      : name
    }
    <p>{ description }</p>
  </li>

export default () =>
  <ContentSection id="stay" title="Stay">
    <p>
      Your coming from far and away to share in our special weekend means so much to us! We wished our tiny house was
      a little bit bigger so everyone could stay with us but having you close by will be pretty awesome too!
    </p>
    <p>
      We are fortunate to have many friends doing the airbnb, hotel and vacation rental hustle around town. Here are
      our recommendations and please mention us for possible discounted rates!
    </p>
    <ul>
      <Place
        url="https://www.adelaideinn.com/"
        name="Adelaide Inn"
        description="Owned by the ultimate Paso Roblan Matt Masia. He's got the nicest staff and has a room block set up for us!"
      />
      <Place
        url="https://www.vrbo.com/170229"
        name="Artist's Vineyard Cottage"
        description="Owned by our friends Lisa & Randy Stromsoe. They hosted us here for one of our very early dates. Memories!"
      />

      <Place
        url="https://pasorobleswineries.net/call-booth-house-paso-robles-vacation-rental/"
        name="Call Booth House"
        description="Owned by our friends Lauren & Andrea LeKai. One of Paso's best Victorians and just a few blocks from downtown!"/>

      <Place
        url="https://pasorobleswineries.net/lekai-ranch/"
        name="LeKai Ranch"
        description="Owned by our friends Lauren & Andrea LeKai. Next door to Saturday night's reception at the Ridings!"/>

      <Place
        url="http://lojaconohomes.com/"
        name="Lojacano Homes"
        description="Managed by our friend Renee Lojacano. Three properties side-by-side and just a few blocks from downtown! Discounts available, call Sasha for details."/>

      <Place
        url="https://www.airbnb.com/rooms/42293820?source_impression_id=p3_1583159671_fqGTRLgk9PZ%2Fsr%2FZ"
        name="Loma Maria"
        description="Also managed by Renee Lojacano. We've never been here so if you rent it we will definitely come visit! Discount available, call Sasha for details."/>

      <Place
        url="https://pasoroblesvacationrentals.com/rental/park-place/"
        name="Park Place"
        description="Owned by our friends Liz and Newlin Hastings. It's right downtown and you'll get to meet them at their home on Friday night!"/>

      <Place
        url="https://pasoroblesvacationrentals.com/"
        name="Paso Robles Vacation Rentals"
        description="We love the Bonelli family! They are offering a 10% discount on base rent for a three-night or
              longer stay and a 5% discount on the base rent for a two-night stay! So generous!!!"/>

      <Place
        url="https://www.airbnb.com/rooms/11950567?location=514%20chestnut%20paso%20robles%20&source_impression_id=p3_1583183940_Jv3l99iYpa0m2oqv"
        name="Cottage on Chestnut"
        description="No discount but owned by our friend Alexis Negranti's parents!"/>

      <Place
        url="https://www.airbnb.com/rooms/25263354?location=514%20chestnut%20paso%20robles%20&source_impression_id=p3_1583184034_sGsMy9Zj3acV%2FiCD"
        name="The Blue House on Chestnut"
        description="No discount but owned by our friend Alexis Negranti's parents!"/>

      <Place
        name="Stay with the Coffins"
        description="Our friends Diane and Michael are generously offering their guest room for a single or couple. Must love dogs, jazz, quilting, and la dolce vida. Call Sasha if you're interested!"/>

      <Place
        url="https://www.airbnb.com/rooms/25263354?location=514%20chestnut%20paso%20robles%20&source_impression_id=p3_1583184034_sGsMy9Zj3acV%2FiCD"
        name="The Blue House on Chestnut"
        description="No discount but owned by our friend Alexis Negranti's parents!"/>
    </ul>
    <p>
      If you are interested in sharing a home with other guests, please let us know and we'll do our best to play
      matchmaker. We are also happy to weigh in about different spots around town in case you are having a hard time
      choosing between all the Pasotastic possibilities!
    </p>
  </ContentSection>
