import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Menu, Carousel } from "antd"

import Layout from '../components/layout'
import FaqItem from '../components/FaqItem'
import FeatureBox from '../components/FeatureBox'
import SEO from '../components/seo'
import Video from '../components/Video'

// Feature icons
import smart_thumb from '../images/features/smart.svg'
import fast_thumb from '../images/features/fast.svg'
import family_thumb from '../images/features/family.svg'
import privacy_thumb from '../images/features/privacy.svg'
import eco_thumb from '../images/features/eco.svg'
import workswith_thumb from '../images/features/connectedhome.svg'

import Wired1Img from '../components/images/Wired1Img'
import Wired2Img from '../components/images/Wired2Img'
import Wired3Img from '../components/images/Wired3Img'
import Wired4Img from '../components/images/Wired4Img'
import Wired5Img from '../components/images/Wired5Img'
import Wired6Img from '../components/images/Wired6Img'

import Recessed1Img from '../components/images/Recessed1Img'
import Recessed2Img from '../components/images/Recessed2Img'

import Battery1Img from '../components/images/Battery1Img'
import Battery2Img from '../components/images/Battery2Img'

import doorsummary from '../media/doorsummary.mp4'
import dooraccurate from '../media/dooraccurate.mp4'
import corescreen from '../media/corescreen.mp4'
import doorstats from '../media/doorstats.mp4'

class IndexPage extends Component {
  state = {
    currentDesign: 'wired'
  }

  renderDesign() {
    if (this.state.currentDesign === 'recessed') return this.renderRecessedDesign()
    if (this.state.currentDesign === 'wired') return this.renderRetrofitDesign()
    if (this.state.currentDesign === 'battery') return this.renderBatteryDesign()
  }

  renderRecessedDesign() {
    return <div style={{marginBottom: `50px`}}>
      <Carousel style={{width: `100%`, height: `260px`, textAlign: `center`}} draggable={true}>
        <div>
          <Recessed1Img />
        </div>
        <div>
          <Recessed2Img />
        </div>
      </Carousel>
      <p style={{fontStyle: `italic`, fontSize: `0.6em`, textAlign: `center`, color: `#a0a0a0`}}>Swipe for more pictures.</p>
      <div className="FeatureList">
        <ul>
          <li>Embed into your door frame for a completely invisible installation.</li>
          <li>Requires 3.6-12v power supply in door frame.</li>
          <li>Ideal for remodels and new constructions.</li>
          <li>Includes embeddable magnet for optional door open/close sensing.</li>
        </ul>
      </div>
    </div>
  }

  renderRetrofitDesign() {
    return <div style={{marginBottom: `50px`}}>
      <Carousel style={{width: `100%`, height: `300px`, textAlign: `center`}} draggable={true}>
        <div>
          <Wired5Img />
        </div>
        <div>
          <Wired3Img />
        </div>
        <div>
          <Wired2Img />
        </div>
        <div>
          <Wired4Img />
        </div>
        <div>
          <Wired6Img />
        </div>
        <div>
          <Wired1Img />
        </div>
      </Carousel>
      <p style={{fontStyle: `italic`, fontSize: `0.6em`, textAlign: `center`, color: `#a0a0a0`}}>Swipe for more pictures.</p>
      <div className="FeatureList">
        <ul>
          <li>Easily install on most doors in minutes.</li>
          <li>Power with a standard microUSB cable.</li>
          <li>Includes 16ft (5m) flat white cable, power supply, and magnet for optional door open/close sensing.</li>
        </ul>
      </div>
    </div>
  }

  renderBatteryDesign() {
    return <div style={{marginBottom: `50px`}}>
      <Carousel style={{width: `100%`, height: `300px`, textAlign: `center`}} draggable={true}>
        <div>
          <Battery1Img />
        </div>
        <div>
          <Battery2Img />
        </div>
      </Carousel>
      <p style={{fontStyle: `italic`, fontSize: `0.6em`, textAlign: `center`, color: `#a0a0a0`}}>Swipe for more pictures.</p>
      <div className="FeatureList">
        <ul>
          <li>Flexible installation for doors without a nearby power outlet.</li>
          <li>Rechargeable battery pack lasts over one month between charges.</li>
          <li>Available in white, black, and bronze colors to fit your decor.</li>
        </ul>
      </div>
    </div>
  }

  handleDesignSelect = e => {
    this.setState({currentDesign: e.key})
  }

  render() {
    return <Layout>
      <SEO title="Hiome" />

      <h1>Unlock the full power of your smart home.</h1>

      <h3>Meet the first <strong>true occupancy sensor</strong> for your home. Supercharge your automations and make your home react to you.</h3>

      <Video />

      <h2 id="welcome">A whole new type of occupancy sensor.</h2>

      <p>
        <strong>Hiome Door</strong> is a small sensor for your door, a giant leap for your home.
        It knows exactly how many people are in each room, even if you haven't moved for hours.
        Your lights stay on while you're in the room, and immediately turn off when you leave.
        No more waving your arms around in the dark.
      </p>

      <div style={{
        margin: `50px auto 0 auto`
      }}>
        <FeatureBox icon={smart_thumb} title="Smart">
          Rethink what your smart home can do with true occupancy detection that just works.
        </FeatureBox>
        <FeatureBox icon={fast_thumb} title="Fast">
          Get spoiled by how quickly your home reacts to you. You'll think it's actually alive.
        </FeatureBox>
        <FeatureBox icon={family_thumb} title="Family Friendly">
          There's nothing to learn or carry, so your home works for the whole family, including grandpa.
        </FeatureBox>
        <FeatureBox icon={privacy_thumb} title="Protects Your Privacy">
          Your data is processed locally for the best privacy, security, and speed.
        </FeatureBox>
        <FeatureBox icon={eco_thumb} title="Saves Energy">
          Enjoy a more efficient home, and never leave your lights burning for an empty room again.
        </FeatureBox>
        <FeatureBox icon={workswith_thumb} title="Works With Your Home">
          Connect Philips Hue, HomeKit, or MQTT to automate your existing smart home devices.
        </FeatureBox>
      </div>

      <h2>Works with multiple people and doors.</h2>
      <p className="subtitle">Make your lights follow you like a sci-fi billionaire.</p>
      <p>
        Hiome Door sits in your doorway to count entries and exits. It uses over 66 data points to instantly detect you. It doesn't
        matter if there are multiple people or the room has multiple doors. You just need one sensor per door, and Hiome will
        figure out the rest.
      </p>

      <div style={{textAlign: `center`}}>
        <video autoPlay muted loop playsInline className="videoLoop">
          <source
            src={dooraccurate}
            type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>

      <h2>Nothing to memorize or carry.</h2>
      <p className="subtitle">Finally, a smart home for the rest of us.</p>
      <p>
        You don't have to carry your phone around or learn to do anything differently. Just walk through the door. Your home works
        for everybody, even when your phone is on the charger or you have guests over.
      </p>

      <div style={{textAlign: `center`}}>
        <video autoPlay muted loop playsInline className="videoLoop">
          <source
            src={doorsummary}
            type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>

      <h2>Private by design.</h2>
      <p className="subtitle">Your data never leaves your home. Full stop.</p>
      <p>
        Hiome Door talks to Hiome Core, the brains of the Hiome system,
        to seamlessly sync all of your sensors without a cloud connection. See real-time occupancy, historical logs, and more within the
        comfort <em>and privacy</em> of your own home.
      </p>

      <div style={{textAlign: `center`}}>
        <video autoPlay muted loop playsInline className="videoLoop">
          <source
            src={corescreen}
            type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>

      <h2>Designed for your home.</h2>
      <p className="subtitle">Choose how you want to power Hiome Door.</p>
      <Menu selectedKeys={[this.state.currentDesign]} mode="horizontal" onClick={this.handleDesignSelect}>
        <Menu.Item key="wired">
          Wired
        </Menu.Item>
        <Menu.Item key="recessed">
          Recessed
        </Menu.Item>
        <Menu.Item key="battery">
          Battery
        </Menu.Item>
      </Menu>

      {this.renderDesign()}
      <div className="clear"></div>

      <h2>What Others Are Saying.</h2>

      <Carousel autoplay style={{fontStyle: `italic`, paddingBottom: `10px`}}>
        <div>
          <h3>"I didn't realize how much I was conditioned to accept the weird behavior of motion sensors."</h3>
        </div>
        <div>
          <h3>"I hate using lights in other homes now."</h3>
        </div>
        <div>
          <h3>"Feels like I am walking around the Enterprise!"</h3>
        </div>
        <div>
          <h3>"Okay Hiome is magic... my mind is blown."</h3>
        </div>
        <div>
          <h3>"Bloody hell, that's fast!"</h3>
        </div>
      </Carousel>

      <h2>Rethink what your home can do.</h2>
      <h3>
        Hiome works with Philips Hue, HomeKit<sup>1</sup>, and MQTT, so you can make any automation you can think of.
      </h3>

      <div style={{
        textAlign: `center`,
        marginTop: `70px`
      }}>
        <Link to="/order" className="primary">Order Now</Link>
      </div>

      <h4 style={{marginTop: `5em`, marginBottom: `3em`}}>Frequently Asked Questions</h4>

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

      <p style={{fontWeight: `bold`}}><Link to="/faq">More questions &#x2192;</Link></p>

      <p style={{marginTop: `4em`}} className="legal"><sup>1</sup> HomeKit is uncertified and pending certification from Apple.</p>
    </Layout>
  }
}

export default IndexPage
