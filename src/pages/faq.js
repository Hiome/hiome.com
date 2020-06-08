import React from 'react'

import Layout from '../components/layout'
import FaqItem from '../components/FaqItem'
import SEO from '../components/seo'

import homekitscreen from '../media/homekitscreen.mp4'
import doorstats from '../media/doorstats.mp4'
import doorfast from '../media/doorfast.mp4'

const FaqPage = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />
    <h1>Frequently Asked Questions</h1>
    
    <FaqItem title="How does Hiome Door differ from motion sensors?">
      <p>
        Ever had to wave your arms to turn the lights back on, or wait for them to turn off after you leave?
        That’s because motion sensors detect motion, not occupancy. They can try to guess at occupancy based on when they last
        saw motion, but that creates false negatives and delays in your automations. Hiome Door detects actual occupancy,
        whether or not you're moving.
      </p>
    </FaqItem>

    <FaqItem title="Why not just use a voice assistant?">
      <p>
        Controlling your home with your voice feels magical at first, but it quickly becomes tiring and repetitive. As the number
        of connected devices in your home grows, the complexity of remembering every name and command becomes overwhelming, making
        it feel like a command-line interface. Grandpa shouldn't have to remember what you named the pendant lights in the living room.
      </p>
    </FaqItem>

    <FaqItem title="How does Hiome Door work?">
      <p>
        Hiome Door is an advanced thermal sensor that sits in your doorway and detects when somebody is entering or leaving the room. It
        knows what direction you're moving, so it can keep count of how many people are in the room to know if the room is still
        occupied. Hiome Door cannot see inside your room, so it doesn't matter how big the room is.
      </p>
      <p style={{textAlign: `center`, marginBottom: `40px`}}>
        <video autoPlay muted loop playsInline className="videoLoop">
          <source
            src={doorstats}
            type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </p>
    </FaqItem>

    <FaqItem title="What if my room has multiple entrances?">
      <p>
        No problem! Just place a Hiome Door sensor on each doorway, and Hiome will sync them together so you only see one occupancy
        count for the room.
      </p>
    </FaqItem>

    <FaqItem title="Can Hiome control anything other than lights?">
      <p>
        Absolutely! Hiome gives you each room's occupancy state in HomeKit. You can build any automation you can think of, whether you want to
        control lights, blinds, or the coffee machine. For more advanced users, you can use Hiome's MQTT stream to build automations depending
        on the number of people in the room, such as a party mode or family time.
      </p>
    </FaqItem>

    <FaqItem title="How does Hiome show up in HomeKit?">
      <p>
        You'll see one tile per room for occupancy, and one tile per door with magnet sensor for door open/close state.
        In this example, the first 2 tiles are added by Hiome.
      </p>
      <p style={{textAlign: `center`, marginBottom: `40px`}}>
        <video autoPlay muted loop playsInline className="videoLoop">
          <source
            src={homekitscreen}
            type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </p>
    </FaqItem>

    <FaqItem title="How responsive is Hiome?">
      <p>
        Hiome Door processes changes in occupancy every 100 milliseconds. For comparison, the human eye takes 300ms to blink.
      </p>
      <p style={{textAlign: `center`, marginBottom: `40px`}}>
        <video autoPlay muted loop playsInline className="videoLoop">
          <source
            src={doorfast}
            type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </p>
    </FaqItem>

    <FaqItem title="How do I install Hiome Door?">
      <p>
        Hiome Door is easy to install! Just stick the sensor to the bottom of your door frame and plug it in.
        You'll be surprised how invisible everything is. Alternatively, you can embed a recessed sensor into your door frame by cutting a
        39mm x 28mm x 11mm hole and wiring the sensor directly to a 3.6-12v power supply for a completely invisible setup.
      </p>
    </FaqItem>

    <FaqItem title="How does Hiome Door connect to my network?">
      <p>
        Hiome Door talks directly with Hiome Core, so there's no extra setup involved and it doesn't saturate your wifi
        network with constant chatter. This makes both your sensors and your wifi more reliable.
      </p>
    </FaqItem>

    <FaqItem title="How does Hiome Core connect to my network?">
      <p>
        Hiome Core connects to your router with the included ethernet cable. Just plug it in and go!
      </p>
    </FaqItem>

    <FaqItem title="Can I use Hiome Door without Hiome Core?">
      <p>
        No. In addition to connectivity, Hiome Door relies on Hiome Core to maintain occupancy state for each room.
        Without Hiome Core, a door sensor would quickly lose track of a room's occupancy count if another sensor was updating it too.
        Hiome Core is, well, <em>core</em> to the whole system.
      </p>
    </FaqItem>

    <FaqItem title="Will Hiome Door fit on my door?">
      <p>
        Hiome Door is designed to fit most standard door frames. Your frame needs to be at least 1" (2.5cm) deep, at most 80" (2 meters)
        wide, and between 6-12ft (1.8-3.6 meters) tall. An actual door is not required, just the doorway is important. If you're not sure,
        feel free to <a href="mailto:support@hiome.com?subject=Check%20my%20door%27s%20compatibility">email us
        a picture of your door frame</a> and we'll let you know!
      </p>
    </FaqItem>

    <FaqItem title="How many Hiome Door sensors do I need?">
      <p>
        You can get started with just one, but Hiome works better with more sensors. Make your lights follow you from room to room
        by adding a Hiome Door sensor on every door.
      </p>
    </FaqItem>

    <FaqItem title="Can I buy more Hiome Door sensors later?">
      <p>
        Of course! Once we have fulfilled all pre-orders, we'll open up orders for additional sensors without the Starter Kit.
      </p>
    </FaqItem>

    <p style={{
      textAlign: `center`,
      fontWeight: `bold`,
      marginTop: `4rem`,
      fontSize: `1.2rem`,
    }}>Have more questions? <a href="mailto:support@hiome.com">Email us</a>!</p>
  </Layout>
)

export default FaqPage
