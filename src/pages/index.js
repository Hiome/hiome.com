import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FaqItem from '../components/FaqItem'
import FeatureBox from '../components/FeatureBox'
import SEO from '../components/seo'
import Video from '../components/Video'

// Feature icons
import smart_thumb from '../images/features/smart.svg'
import fast_thumb from '../images/features/fast.svg'
import privacy_thumb from '../images/features/privacy.svg'

import doorsummary from '../media/doorsummary.mp4'
import doorfast from '../media/doorfast.mp4'
import doorinstall from '../media/doorinstall.mp4'
import dooraccurate from '../media/dooraccurate.mp4'
import doorprivacy from '../media/doorprivacy.mp4'
import doorstats from '../media/doorstats.mp4'

const IndexPage = () => (
  <Layout>
    <SEO title="Hiome" />

    <h1>Unlock the full power of your smart home.</h1>

    <h3>Supercharge your automations <strong>with true occupancy sensing</strong>. Make your home respond to you, not the other way around.</h3>

    <Video />

    <h2 id="welcome">A whole new type of occupancy sensor.</h2>

    <p>
      <strong>Hiome Door</strong> is a small sensor for your door, a giant leap for your automations.
      It knows exactly how many people are in each room, even if you haven't moved for hours.
      Your lights stay on while you're in the room, and immediately turn off when you leave.
      No more waving your arms around in the dark.
    </p>

    <div style={{
      margin: `50px auto 0 auto`
    }}>
      <FeatureBox icon={smart_thumb} title="Accurate">
        Rethink what your smart home can do with true occupancy detection that just works.
      </FeatureBox>
      <FeatureBox icon={fast_thumb} title="Fast">
        Get spoiled by how quickly your home reacts to you. You'll think it's actually alive.
      </FeatureBox>
      <FeatureBox icon={privacy_thumb} title="Private By Design">
        Your data is processed locally for the best privacy, security, and speed.
      </FeatureBox>
    </div>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline className="videoLoop">
        <source
          src={doorsummary}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Precision engineered for accuracy.</h2>
    <p>
      Hiome Door is a unique thermal sensor with 65 sensing points to reliably detect you. It sits in your door frame to count
      entries and exits, so it doesn't matter how big your room is. It also doubles as a door contact sensor, telling you
      if the door is open or closed.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline className="videoLoop">
        <source
          src={doorstats}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Fast. <em>Really</em> fast.</h2>

    <p>
      Hiome Door processes changes in occupancy every 100 milliseconds. For comparison, the human eye takes 300ms to blink.
      We took a simple idea and engineered the shit out of it because your home should respond to you, not a motion timer.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline className="videoLoop">
        <source
          src={doorfast}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Built for privacy.</h2>
    <p>
      There are no cameras or microphones. In fact, Hiome Door can't see in your room at all. Instead, it detects body heat near the door
      to know when somebody enters or exits. There's nothing to carry, so your home works for your guests too. All this in a device so
      small, you'll forget it's even there.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline className="videoLoop">
        <source
          src={doorprivacy}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Simple to install.</h2>
    <p>
      Hiome Door has a sleek, minimalist design that lets it blend in with any style. There's no batteries to replace.
      Instead, we include a 20 foot (6 meter) microUSB cable, slim power adapter, and gaffer tape, the premium cotton mask
      that Hollywood uses to hide wires on movie sets. You'll be surprised how invisible everything is.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline className="videoLoop">
        <source
          src={doorinstall}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Smarter together.</h2>
    <p>
      Make your lights follow you from room to room by connecting more doors. Hiome Door talks to Hiome Core, the brains of
      the Hiome system, to seamlessly sync all of your sensors. Your automations keep working even if your room has multiple
      doors, and the lights only turn off when the last person leaves.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline className="videoLoop">
        <source
          src={dooraccurate}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Rethink what your home can do.</h2>
    <h3>
      Hiome Door works with HomeKit<sup>1</sup>, SmartThings<sup>1</sup>, and MQTT, so you can make any automation you can think of.
    </h3>

    <div style={{
      textAlign: `center`,
      marginTop: `70px`
    }}>
      <Link to="/order" className="primary">Order Now</Link>
    </div>

    <h4 style={{marginTop: `9em`, marginBottom: `3em`}}>Frequently Asked Questions</h4>

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

    <p style={{fontWeight: `bold`}}><Link to="/faq">More questions &#x2192;</Link></p>

    <p style={{marginTop: `4em`}} className="legal"><sup>1</sup> HomeKit and SmartThings support pending certification from Apple and Samsung, respectively.</p>
  </Layout>
)

export default IndexPage
