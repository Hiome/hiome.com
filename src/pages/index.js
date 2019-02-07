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
import precise_thumb from '../images/features/precise.svg'
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
      Hiome learns your habits and proactively controls your connected home just like you would. Lights turn on when you enter a room,
      and immediately turn off when you leave. It instantly reacts to your needs without any programming or manual commands. In
      other words, it's exactly how you'd expect a smart home to behave.
    </p>

    <div style={{
      margin: `40px auto 0 auto`
    }}>
      <FeatureBox icon={smart_thumb} title="Autonomous" link="/core#autonomous">
        Your home manages itself with the same technology that powers self-driving cars.
      </FeatureBox>
      <FeatureBox icon={easy_thumb} title="Easy" link="/core#setup">
        Enjoy the benefits of advanced automations without any of the headache or setup.
      </FeatureBox>
      <FeatureBox icon={family_thumb} title="Family Friendly" link="/core#setup">
        Don't change your behavior. Hiome adapts to you, so there's nothing to learn.
      </FeatureBox>
      <FeatureBox icon={precise_thumb} title="Precisely Engineered" link="/door">
        Experience unparalleled accuracy with a new class of occupancy sensors.
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
        True occupancy detection that's unbelievably accurate thanks to our custom thermal sensors.
      </ProductBox>
      <ProductBox icon={<CoreThumb />} title="Hiome Core" link="/core">
        The brains of your home, constantly processing what's going on and telling HomeKit what to do.
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
