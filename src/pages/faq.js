import React from 'react'
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/layout'
import FaqItem from '../components/FaqItem'
import SEO from '../components/seo'

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

    <FaqItem title="Is the tape removable?">
      <p>
        Yup! Gaffer tape is specifically designed for use on movie sets and stage productions, so it can be very easily applied and removed
        without any risk of damage to your walls or mouldings. The sensor uses standard double-sided 3M tape to attach to your door frame,
        which is also easily removed and replaceable.
      </p>
    </FaqItem>

    <FaqItem title="What if my wall isn't white?">
      <p>
        Hiome Door uses standard parts as much as possible, so it's easy to replace the microUSB power cable or gaffer tape with another color!
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
        Hiome Core connects directly to your router with the included ethernet cable. We even built a 5 port ethernet
        switch into Hiome Core, so you can easily connect all of your smart home hubs without running out of ports.
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
        Hiome Door is designed to fit most standard door frames. Your frame needs to be at least 1" (2.5cm) deep and at most 40" (1 meter)
        wide. <OutboundLink href="mailto:support@hiome.com?subject=Double%20door%20support">Let us know</OutboundLink> if you have
        extra-wide or double doors.
      </p>
      <p>
        If you have any questions, feel free to <OutboundLink href="mailto:support@hiome.com?subject=Check%20my%20door%27s%20compatibility">send us a picture
        of your door frame</OutboundLink> and we'll let you know.
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
    }}>Have more questions? <OutboundLink href="mailto:support@hiome.com">Email us</OutboundLink>!</p>
  </Layout>
)

export default FaqPage
