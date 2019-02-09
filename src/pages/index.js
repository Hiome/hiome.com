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
import fast_thumb from '../images/features/fast.svg'
import privacy_thumb from '../images/features/privacy.svg'
import powerful_thumb from '../images/features/powerful.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Hiome" />

    <h2>Meet the future of your smart home.</h2>

    <Video />

    {/*eslint-disable-next-line*/}
    <a id="welcome"></a>
    <h2>Welcome Hiome.</h2>

    <p>
      Hiome learns your habits and controls your home just like you. The right lights turn on when you enter a room,
      and immediately turn off when you leave. It instantly responds to your needs without any programming or manual commands.
      In other words, it's exactly how you'd expect a smart home to behave.
    </p>

    <div style={{
      margin: `50px auto 0 auto`
    }}>
      <FeatureBox icon={smart_thumb} title="Personalized" link="/core#learning">
        Every home is unique, so Hiome ships as a blank slate and learns what you like.
      </FeatureBox>
      <FeatureBox icon={easy_thumb} title="Easy" link="/core#setup">
        Just plug it in and forget about it. There's not even an app to download.
      </FeatureBox>
      <FeatureBox icon={family_thumb} title="Family Friendly" link="/core#adaptive">
        Keep doing what you're doing. Hiome adapts to you, not the other way around.
      </FeatureBox>
      <FeatureBox icon={fast_thumb} title="Fast" link="/door">
        Get spoiled by how quickly your home reacts to you. You'll forget it's not actually alive.
      </FeatureBox>
      <FeatureBox icon={privacy_thumb} title="Private By Design" link="/core#privacy">
        Your data never leaves your home for the best privacy and security.
      </FeatureBox>
      <FeatureBox icon={powerful_thumb} title="Developer Friendly" link="/core/homestream">
        Want more control? Change your home however you want with a few lines of code.
      </FeatureBox>
    </div>

    <h2>What do I need?</h2>
    <div style={{
      margin: `40px auto 0 auto`,
    }}>
      <ProductBox icon={<DoorThumb />} title="Hiome Door" link="/door">
        Unbelievably accurate occupancy detection, made possible with custom thermal sensors.
      </ProductBox>
      <ProductBox icon={<CoreThumb />} title="Hiome Core" link="/core">
        Intelligent automations specific to your home, powered by reinforcement learning.
      </ProductBox>

      <p style={{textAlign: `center`, paddingTop: `30px`, width: `80%`, margin: `20px auto`}}>
        Hiome controls your lights with HomeKit, so you also need that. <Link to="/core#homekit">Learn more</Link>
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
