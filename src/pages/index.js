import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FeatureBox from '../components/FeatureBox'
import ProductBox from '../components/ProductBox'
import SEO from '../components/seo'
import Video from '../components/video'

// Product pictures
import CoreThumb from '../components/images/core-thumb'
import DoorThumb from '../components/images/door-thumb'

// Feature icons
import smart_thumb from '../images/features/smart.svg'
import easy_thumb from '../images/features/easy.svg'
import family_thumb from '../images/features/family.svg'
import stateart_thumb from '../images/features/stateart.svg'
import privacy_thumb from '../images/features/privacy.svg'
import powerful_thumb from '../images/features/powerful.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Hiome" />

    <h2>Meet the future of your smart home.</h2>

    <Video />

    <h2>Welcome Hiome.</h2>

    <p>
      Hiome learns your habits and proactively controls your connected home just like you would. Lights turn on when you enter a room,
      and immediately turn off when you leave. It instantly reacts to your needs without any programming or manual commands. In
      other words, it's exactly how you'd expect a smart home to behave.
    </p>

    <div style={{
      margin: `40px auto 0 auto`
    }}>
      <FeatureBox icon={smart_thumb} title="Autonomous" link="/core#autonomous">
        Automate your home with the same technology that powers self-driving cars.
      </FeatureBox>
      <FeatureBox icon={easy_thumb} title="Easy" link="/core#setup">
        Enjoy the benefits of advanced automations without any of the headache or setup.
      </FeatureBox>
      <FeatureBox icon={family_thumb} title="Family Friendly" link="/core#setup">
        Don't change your behavior. Hiome adapts to you, so there's nothing to learn.
      </FeatureBox>
      <FeatureBox icon={stateart_thumb} title="Unparalleled" link="/door">
        Enjoy cutting-edge custom tech designed with one goal: to make your life simpler.
      </FeatureBox>
      <FeatureBox icon={privacy_thumb} title="Private By Design" link="/core#privacy">
        Your data never leaves your home for the best privacy and security.
      </FeatureBox>
      <FeatureBox icon={powerful_thumb} title="Developer Friendly" link="/core/home-stream">
        Want more control? Build any customization you can think of with Home Stream.
      </FeatureBox>
    </div>

    <h2>What do I need?</h2>
    <div style={{
      margin: `40px auto 0 auto`,
    }}>
      <ProductBox icon={<DoorThumb />} title="Hiome Door" link="/door">
        True occupancy detection that's unbelievably accurate thanks to our custom thermal sensors.
      </ProductBox>
      <ProductBox icon={<CoreThumb />} title="Hiome Core" link="/core">
        The brains of your home, constantly processing what's going on and telling HomeKit what to do.
      </ProductBox>

      <p style={{textAlign: `center`, paddingTop: `30px`, width: `80%`, margin: `20px auto`}}>
        Hiome controls your HomeKit devices, so you also need those. <Link to="/core#homekit">Learn more</Link>
      </p>
    </div>

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
