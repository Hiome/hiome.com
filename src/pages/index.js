import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FeatureBox from '../components/feature-box'
import ProductBox from '../components/product-box'
import SEO from '../components/seo'
import Video from '../components/video'

import CoreThumb from '../components/images/core-thumb'
import DoorThumb from '../components/images/door-thumb'

import smart_thumb from "../images/features/smart.svg"
import easy_thumb from "../images/features/easy.svg"
import family_thumb from "../images/features/family.svg"
import stateart_thumb from "../images/features/stateart.svg"
import privacy_thumb from "../images/features/privacy.svg"
import powerful_thumb from "../images/features/powerful.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Hiome" />

    <h2>Meet the future of your smart home.</h2>

    <Video />

    <h2>Welcome Hiome.</h2>

    <p>
      Hiome learns your habits and proactively controls your connected home just like you would. Lights turn on when you enter a room,
      and turn off when you leave. It <em>instantly</em> reacts to your needs without any programming or manual commands. In
      other words, it's exactly how you'd expect a smart home to behave.
    </p>

    <div style={{
      margin: `40px auto 0 auto`
    }}>
      <FeatureBox icon={smart_thumb} title="Smart" link="/core">
        Automate your home with the same technology that powers self-driving cars.
      </FeatureBox>
      <FeatureBox icon={easy_thumb} title="Easy" link="/core">
        Enjoy the benefits of advanced automations without any of the headache or setup.
        {/*Your home doesn't need a fancy dashboard or voice-activated command line interface. It needs to just work.*/}
      </FeatureBox>
      <FeatureBox icon={family_thumb} title="Family Friendly" link="/core">
        Don't change your behavior. Hiome adapts to you, so there's nothing to learn.
        {/*smart homes should always be additive to your experience, and never make something harder to do.*/}
      </FeatureBox>
      <FeatureBox icon={stateart_thumb} title="State of the Art" link="/door">
        Enjoy cutting-edge custom tech designed with one goal: to make your life simpler.
      </FeatureBox>
      <FeatureBox icon={privacy_thumb} title="Private By Design" link="/core#privacy">
        Your data never leaves your home for the best privacy and security.
        {/*Alexa, you can stop listening now*/}
      </FeatureBox>
      <FeatureBox icon={powerful_thumb} title="Developer Friendly" link="/home-stream">
        Want more control? Build any customization you can think of with Home Stream.
      </FeatureBox>
    </div>

    <h2>What do I need?</h2>
    <div style={{
      margin: `40px auto 0 auto`,
    }}>
      <ProductBox icon={<DoorThumb />} title="Hiome Door" link="/door">
        Experience true occupancy detection with a Hiome Door sensor on every door to count how many people are in each room. <Link to="/door">Learn more</Link>
      </ProductBox>
      <ProductBox icon={<CoreThumb />} title="Hiome Core" link="/core">
        Core is the brains of your home, constantly processing what's going on and telling HomeKit what to do. <Link to="/core">Learn more</Link>
      </ProductBox>
      <p style={{textAlign: `center`, paddingTop: `30px`, width: `80%`, margin: `20px auto`}}>
        Hiome controls your HomeKit devices, so you also need those. <Link to="/core#homekit">Learn more</Link>
      </p>
      <p style={{textAlign: `center`, fontSize: `0.8em`}}>
        Don't have HomeKit? <a href="mailto:support@hiome.com">Let us know</a> which platform you use.
      </p>
    </div>

    {/*<h2>How does it work?</h2>
    <div style={{margin: `0 auto`, width: `90%`}}>
      <HowTo stepCount={1}>Plug in Hiome Core.</HowTo>
      <HowTo stepCount={2}>Invite Hiome to HomeKit.</HowTo>
      <HowTo stepCount={3}>Plug in Hiome Door sensors.</HowTo>
      <div style={{clear: `both`}}></div>
      <p>
        That's it! There's no app to download or rules to program. Hiome learns your habits and configures itself to manage your home.
        You won't notice any big changes right away, but after a day or so, Hiome will pick up on how you use your home
        and suddenly your preferred lights will follow you around as you move between rooms. It's pretty magical. <Link to="/setup/">Learn more</Link>.
      </p>
    </div>*/}

    <h2>Put your home on autopilot.</h2>

    <div style={{
      textAlign: `center`,
      margin: `50px auto`
    }}>
      <Link to="/order" className="primary">Order Now</Link>
    </div>
  </Layout>
)

export default IndexPage
