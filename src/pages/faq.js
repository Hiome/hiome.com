import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FaqPage = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />
    <h1>Frequently Asked Questions</h1>
    
    <h4>How does Hiome Door differ from motion sensors?</h4>
    <p>
      As the name implies, motion sensors detect motion, not occupancy. More specifically, they start a timer when motion is
      detected. If you move again, the timer is reset. When the timer runs out, the sensor assumes the room is no longer occupied.
      That's good enough for knowing when you enter a room, but can't really tell if you're still there or when you left, creating false
      negatives and delays in your automations. Hiome Door counts entries and exits using thermal signatures to accurately
      know if a room is occupied, whether or not you're moving.
    </p>

    <h4>How does Hiome Door connect to my network?</h4>
    <p>
      Hiome Door talks directly with Hiome Core, so there's no extra setup involved and it doesn't saturate your wifi
      network with constant chatter. This makes both your sensors and your wifi more reliable.
    </p>

    <h4>Can I use Hiome Door without Hiome Core?</h4>
    <p>
      No. In addition to connectivity, Hiome Door relies on Hiome Core to maintain occupancy state for each room.
      Without Hiome Core, a door sensor would quickly lose track of a room's occupancy count if another sensor was updating it too.
      Hiome Core is, well, <em>core</em> to the whole system.
    </p>

    <h4>Is the tape removable?</h4>
    <p>
      Yup! Gaffer tape is specifically designed for use on movie sets and stage productions, so it can be very easily applied and removed
      without any risk of damage to your walls or mouldings. Hiome Door uses standard double-sided 3M tape, which is also easily removed
      and replaceable.
    </p>

    <h4>What if my wall isn't white?</h4>
    <p>
      Hiome Door uses standard parts as much as possible, so it's easy to replace the microUSB power cable or gaffer tape with another color!
    </p>

    <h4>Will Hiome Door fit on my door?</h4>
    <p>
      Hiome Door is designed to fit most standard door frames. Your frame needs to be at least 1" (2.5cm) deep and at most 40" (1 meter)
      wide. <OutboundLink href="mailto:support@hiome.com?subject=Double%20door%20support">Let us know</OutboundLink> if you have
      extra-wide or double doors.
    </p>
    <p>
      If you have any questions, feel free to <OutboundLink href="mailto:support@hiome.com?subject=Check%20my%20door%27s%20compatibility">send us a picture
      of your door frame</OutboundLink> and we'll let you know.
    </p>

    <h4>How many Hiome Door sensors do I need?</h4>
    <p>
      You can get started with just one, but Hiome works better with more sensors. As you connect more doors, your lights will be able
      to follow you from room to room.
    </p>

    <h4>Can I buy more Hiome Door sensors later?</h4>
    <p>
      Of course! Once we have fulfilled all pre-orders, we'll open up orders for additional sensors without the Starter Kit.
    </p>

    <p style={{
      textAlign: `center`,
      fontWeight: `bold`,
      marginTop: `4rem`,
      fontSize: `1.2rem`,
    }}>Have more questions? <OutboundLink href="mailto:support@hiome.com">Email us</OutboundLink>!</p>
  </Layout>
)

export default FaqPage
