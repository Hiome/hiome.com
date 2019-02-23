import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FeatureBox from '../components/FeatureBox'
import SEO from '../components/seo'
import Video from '../components/video'

// Feature icons
import smart_thumb from '../images/features/smart.svg'
import fast_thumb from '../images/features/fast.svg'
import privacy_thumb from '../images/features/privacy.svg'

import doorsummary from '../media/doorsummary.mp4'
import doorfast from '../media/doorfast.mp4'
import doorinstall from '../media/doorinstall.mp4'
import dooraccurate from '../media/dooraccurate.mp4'
import doorprivacy from '../media/doorprivacy.mp4'

const IndexPage = () => (
  <Layout>
    <SEO title="Hiome" />

    <h1>Meet the future of your smart home.</h1>

    <Video />

    <h2 id="welcome">A whole new type of occupancy sensor.</h2>

    <p>
      <strong>Hiome Door</strong> is a small sensor for your door, a giant leap for presence detection.
      It knows exactly how many people are in each room, even if you haven't moved for hours.
      Hiome Door processes 65 points of data every 100 milliseconds to accurately and instantly react to you.
      No more waving your arms around to turn the lights back on.
    </p>

    <div style={{
      margin: `50px auto 0 auto`
    }}>
      <FeatureBox icon={smart_thumb} title="Accurate">
        Rethink what your smart home can do for you with true occupancy detection.
      </FeatureBox>
      <FeatureBox icon={fast_thumb} title="Fast">
        Get spoiled by how quickly your home reacts to you. You'll think it's actually alive.
      </FeatureBox>
      <FeatureBox icon={privacy_thumb} title="Private By Design">
        Your data is processed locally for the best privacy, security, and speed.
      </FeatureBox>
    </div>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline width="75%" style={{
        boxShadow: `2px 2px 15px #ccc`,
        backgroundColor: `#ccc`,
        marginTop: `20px`,
      }}>
        <source
          src={doorsummary}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Faster than the blink of an eye.</h2>

    <p>Hiome Door continuously looks for changes in occupancy every 100 milliseconds. To put that in perspective, the human eye takes
    up to 400ms to blink.
    In addition to making your automations more accurate, it saves you money by making sure your home is running as efficiently as possible.
    Don't leave lights burning electricity for an empty room again.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline width="75%" style={{
        boxShadow: `2px 2px 15px #ccc`,
        backgroundColor: `#ccc`,
        marginTop: `20px`,
      }}>
        <source
          src={doorfast}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Built for privacy.</h2>
    <p>
      There are no cameras or microphones. In fact, it can't identify any personal information. Instead, Hiome Door detects body heat to know when somebody
      enters or exits. It doesn't depend on your phone, so there's nothing to carry and your home works for your guests too.
      All this in a device so small, you'll forget it's even there.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline width="75%" style={{
        boxShadow: `2px 2px 15px #ccc`,
        backgroundColor: `#ccc`,
        marginTop: `20px`,
      }}>
        <source
          src={doorprivacy}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Simple to install.</h2>
    <p>
      Hiome Door has a sleek, minimalist design that lets it blend in with any style. There's no batteries to worry about replacing
      or recharging. Instead, we include a generous 20 foot (6 meter) USB cable and slim power adapter to make it easy to
      power your sensors. We also give you a roll of gaffer tape, the premium cotton tape that Hollywood uses to hide wires on movie sets.
      You'll be surprised how invisible everything is.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline width="75%" style={{
        boxShadow: `2px 2px 15px #ccc`,
        backgroundColor: `#ccc`,
        marginTop: `20px`,
      }}>
        <source
          src={doorinstall}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Smarter together.</h2>
    <p>
      Hiome Door talks to Hiome Core to count how many people entered and how many exited. That means it always knows
      if the room is occupied or not, so the lights only turn off when the last person leaves. Hiome Core also
      seamlessly syncs all of your sensors, so your automations keep working even if your room has multiple doors.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline width="75%" style={{
        boxShadow: `2px 2px 15px #ccc`,
        backgroundColor: `#ccc`,
        marginTop: `20px`,
      }}>
        <source
          src={dooraccurate}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Rethink what your home can do.</h2>
    <p>
      Hiome Door works with HomeKit, SmartThings, and MQTT, so you can build any automation you can think of.
    </p>

    <div style={{
      textAlign: `center`,
      marginTop: `70px`
    }}>
      <Link to="/order" className="primary">Order Now</Link>
    </div>

    <h2>Frequently Asked Questions</h2>

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

    <p style={{
      textAlign: `center`,
      marginTop: `2rem`,
      fontWeight: `bold`,
    }}><Link to="/faq">More questions &#x2192;</Link></p>
  </Layout>
)

export default IndexPage
