import React from 'react';
import shortid from 'shortid';
import { Image } from 'semantic-ui-react';
import Airplane from './images/japan/day1/airplane.JPEG';
import AirplaneFood from './images/japan/day1/airplane_food.JPEG';
import Vending1 from './images/japan/day1/vending1.JPEG';
import Vending2 from './images/japan/day1/vending2.JPEG';
import Asakusabashi from './images/japan/day1/asakusabashi.JPEG';
import Asakusabashi1 from './images/japan/day1/asakusabashi1.JPEG';
import AkiBuild3 from './images/japan/day1/akibuilding3.JPEG';
import AkiArc1 from './images/japan/day1/akiarc1.JPEG';
import AkiArc2 from './images/japan/day1/akiarc2.JPEG';
import AkiArc3 from './images/japan/day1/akiarc3.JPEG';
import AkiArc4 from './images/japan/day1/akiarc4.JPEG';
import Gundam from './images/japan/day1/gundam.JPEG';
import Gundam2 from './images/japan/day1/gundam2.JPEG';

import Station from './images/japan/day2/station.JPEG';
import Breakfast from './images/japan/day2/breakfast.JPEG';
import Yoyogi1 from './images/japan/day2/park1.jpg';
import Yoyogi2 from './images/japan/day2/park2.jpg';
import Shinjuku1 from './images/japan/day2/shinjuku1.jpg';
import Shinjuku2 from './images/japan/day2/shinjuku2.jpg';
import Sakuras from './images/japan/day2/sakuras.JPEG';
import GoA from './images/japan/day2/goa.JPEG';
import ShinjukuStreet from './images/japan/day2/shinjukuStreet.JPEG';
import Bubble from './images/japan/day2/bubble.JPEG';

export const day2 = [
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: Breakfast,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>After a 10 hour sleep we woke up very early in the morning.</p>
            <p>
              We looked around the Asakusabashi station area for a nice place to
              have breakfast and we found hidden on the second floor of a very
              narrow building a cafe called <strong>Komeda's coffee.</strong>
            </p>
            <p>
              Komeda's coffee is a cafe chain in Japan that was honestly one of
              the friendliest and cosiest places we went during our journey. The
              waiters and staff very friendly and the place was calm and quiet.
              Whenever you were ready to order all you had to do was ring a
              small bell that was placed on top of your table (very common in
              japanese restaurants). The menu offered a breakfast option of
              toasted bread with either beaten eggs or red bean paste (a very
              common japanese cuisine ingredient for sweets). To top that we
              also ordered the plate shown in the picture above.
            </p>
          </>
        ),
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: Station,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>
              One thing I personally found fascinating was queues at the train
              stations. Almost every train stop in Tokyo had signs on the floor
              indicating where to stand and form a line while waiting for the
              train. Some stations also had arrows showing from which angle the
              train door will face you while waiting in line (shown in the
              picture above).
            </p>
          </>
        ),
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 2,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: Yoyogi1,
      },
      {
        key: shortid.generate(),
        type: 'image',
        content: Yoyogi2,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: Sakuras,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>
              Our first sightseeing stop of the day was Shinjuku Gyoen. One of
              the prettiest parks in Tokyo is a must see especially during
              Cherry Blossom season. We arrived in Tokyo at the end of the
              season but there were still many trees in full bloom in the park.
            </p>
          </>
        ),
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: GoA,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>
              This was one of my favorite places in Tokyo. I also had an otaku
              moment as I saw the famous setting from the <i>Garden of Words</i>{' '}
              movie by the legendary <i>Makoto Shinkai</i>.
            </p>
          </>
        ),
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 2,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: Shinjuku1,
      },
      {
        key: shortid.generate(),
        type: 'image',
        content: Shinjuku2,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>
              We existed Shinjuku Gyoen from the northern side and went straight
              to Shinjuku. Shinjuku is one of the most special wards of Tokyo.
              There you can find all shorts of different areas and types of
              entertainment. From Kabukichou, Tokyo's red light district, to the
              Tokyo Metropolitan Government building.
            </p>
          </>
        ),
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 2,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: Bubble,
      },
      {
        key: shortid.generate(),
        type: 'image',
        content: ShinjukuStreet,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>
              I can't find enough words to describe Shinjuku properly. By
              walking around you could see all the famous Robot restaurants,
              which in reality didn't have any real robots but japanese people
              dressed as robots, try bubble tea (shown in the picture above) and
              simply get lost in all the colors of the neon signs and loud music
              that was coming out from all those bizzare places.
            </p>
          </>
        ),
      },
    ],
  },
];

export const day1 = [
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: Airplane,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>
              We flew with Japan airlines (in cooperation with Finnair) and had
              a layover in Helsinki. We left Geneva Airport around 11pm and
              arrived in Helsinki at about 3pm local time (3 hour flight). We
              took the plane from Helsinki at 5:30pm and arrived in Tokyo Narita
              aiport at almost 9am local time in the following day (9,5 hours
              flight).
            </p>
            <p>
              {' '}
              In Narita airport we got our{' '}
              <strong>Japan Rail 14-day pass</strong> that we had purchased
              online some weeks prior to the trip. This pass is the best way for
              tourists to travel around Japan as it covers most central rail
              lines (not the Metro line), the famous bullet trains (Shinkansen)
              and many more!
            </p>
            <p>
              After a huge waiting line for the JR passes in Narita airport we
              had to find out which train would take us to central Tokyo, as
              Narita airport is 1 hour away from Tokyo by train. After a lot of
              confusion we ended up getting Narita Express which is the fastest
              option that gets you straight to the center of Tokyo.{' '}
            </p>
          </>
        ),
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: AirplaneFood,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>
              Our airplane dinner was chicken cooked orange flavored sauce, soba
              noodles with wasabi, miso soup, some salad and some fruits.
            </p>
            <p>
              Japan is an island so most of the dishes included fish or seafood.
              The flavour of japanese cuisine is very strong and definitely
              different from the ones we are used to in the western world. Many
              people are in love with it but personally I suffered a lot during
              my trip as seafood and fish are my list favorite things to eat.
            </p>
          </>
        ),
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 2,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: Vending1,
      },
      {
        key: shortid.generate(),
        type: 'image',
        content: Vending2,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>
              First thing you'll notice in Japan is that it's full of vending
              machines!
            </p>
            <p>
              Those containers you see in the picturs are not real products but
              fake imitations of the real ones. This is very common in Japan not
              only in vending machines but also restaurants where the catalog or
              menu is displayed at the entrance using very realistic fake food
              and drinks.
            </p>
          </>
        ),
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: Asakusabashi,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>
              We checked-in in our hotel in <strong>Asakusabashi</strong>.
            </p>
            <p>
              Asakusabashi is only one JR line stop away from Akihabara. It's a
              quiet neighborhood without many important landmarks. Walking
              around the area you will find many cosy streets and bars mainly
              for locals. I personally loved this neighborhood and its vibe. We
              were too scared to try any of the bars and restaurants there as
              all the signs were in Japanese, which means they are not very
              gaijin (foreigner) friendly.
            </p>
            <p>
              We stayed in MyStays hotel for 4 nights. MyStays is a big
              international chain so most the staff was international as well.
              The hotel was really simple and the rooms were very small, as most
              typical hotel rooms you will find in Tokyo. We had accidentaly
              booked an eco-friendly room which meant no room cleaning service
              for those 4 days. The price was cheaper than a normal room but I
              don't recommend this option to anyone staying for more than 2
              nights. We also stayed in MyStays in Kanazawa city and the it was
              pretty much the same (maybe even smaller). I would recommend this
              hotel to anyone looking easy and cheap accomondation in Tokyo but
              I wont go back there again on my next trip to Japan.
            </p>
            <Image src={Asakusabashi1} />
          </>
        ),
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: AkiBuild3,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 1,
    columns: [
      {
        key: shortid.generate(),
        type: 'text',
        content: (
          <>
            <p>
              Afte checking-in we went straight to <strong>Akihabara</strong>,
              the otaku land!
            </p>
            <p>
              This neighborhood is full of 8-9 story arcade buildings, figurine
              and collectibles shops, maid cafes, flashy panchiko parlors and
              many more! Exploring every building in Akihabara seemed impossible
              as every story was full of different experiences.
            </p>
            <p>
              Inside the arcade buildings you would see mainly japanese students
              playing passionately. Just watching at them play was part of the
              experience. On the streets you would see girls dressed in maid
              outfits promoting the maid cafes.
            </p>
            <p>
              Buying figurins, manga and collectibles in Akihabara is fairly
              overpriced as it's one of the most touristic neighborhoods of
              Tokyo.
            </p>

            <p>
              At this point we had walked around the area and checked many of
              the huge buildings. We were very tired and jet lagged from all the
              flights as we didn't get any sleep in the plane. We had our first
              meal in Japan at some random Chinese restaurant inside a Mall and
              then we decided to go to SquareEnix cafe. As it was fully reserved
              until 9pm we ended up in the Gundam Cafe next to the train
              station. Traveling fatigue was getting the best of us so we soon
              retured back to the hotel to sleep for almost 12 hours!
            </p>
          </>
        ),
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 2,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: AkiArc1,
      },
      {
        key: shortid.generate(),
        type: 'image',
        content: AkiArc3,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 2,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: AkiArc2,
      },
      {
        key: shortid.generate(),
        type: 'image',
        content: AkiArc4,
      },
    ],
  },
  {
    key: shortid.generate(),
    columnCount: 2,
    columns: [
      {
        key: shortid.generate(),
        type: 'image',
        content: Gundam,
      },
      {
        key: shortid.generate(),
        type: 'image',
        content: Gundam2,
      },
    ],
  },
];
