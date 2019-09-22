import React from 'react';
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

export const day1 = [
  {
    key: 1,
    columnCount: 2,
    columns: [
      {
        key: 2,
        type: 'image',
        content: Airplane,
      },
      {
        key: 3,
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
              <strong>Japan Rail 14-day pass</strong> that we had actually
              bought online some weeks prior to the trip. This pass is the best
              way for tourists to travel around Japan as it covers all most
              central rail lines (not the Metro line), the famous bullet trains
              (Shinkansen) and many more!
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
    key: 4,
    columnCount: 2,
    columns: [
      {
        key: 5,
        type: 'image',
        content: AirplaneFood,
      },
      {
        key: 6,
        type: 'text',
        content: (
          <>
            <p>
              Our airplane dinner was chicken cooked orange flavored sauce, soba
              noodles with wasabi, miso soup, some salad and some fruits.
            </p>
            <p>
              Japan is an island so most of the foods included some fish or
              seafood. The flavour of japanse cuisine is very strong and
              definitely different from the ones we are used to in the western
              world. Many people are in love with the it but personally I
              suffered a lot during my trip as seafood and fish are my list
              favorite things to it.
            </p>
          </>
        ),
      },
    ],
  },
  {
    key: 7,
    columnCount: 3,
    columns: [
      {
        key: 8,
        type: 'image',
        content: Vending1,
      },
      {
        key: 9,
        type: 'image',
        content: Vending2,
      },
      {
        key: 10,
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
    key: 11,
    columnCount: 2,
    columns: [
      {
        key: 13,
        type: 'image',
        content: Asakusabashi,
      },
      {
        key: 13,
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
              were too scared to try any of the bars and restaurants in that
              area as all the signs were in Japanese, which means they are not
              very gaijin (foreigner) friendly.
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
    key: 14,
    columnCount: 2,
    columns: [
      {
        key: 15,
        type: 'image',
        content: AkiBuild3,
      },
      {
        key: 16,
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
    key: 17,
    columnCount: 2,
    columns: [
      {
        key: 18,
        type: 'image',
        content: AkiArc1,
      },
      {
        key: 19,
        type: 'image',
        content: AkiArc3,
      },
    ],
  },
  {
    key: 20,
    columnCount: 4,
    columns: [
      {
        key: 21,
        type: 'image',
        content: AkiArc2,
      },
      {
        key: 22,
        type: 'image',
        content: AkiArc4,
      },
      {
        key: 24,
        type: 'image',
        content: Gundam,
      },
      {
        key: 25,
        type: 'image',
        content: Gundam2,
      },
    ],
  },
];
