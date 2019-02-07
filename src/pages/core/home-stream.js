import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'

import HeroLayout from '../../components/HeroLayout'
import SEO from '../../components/seo'

import developer from '../../images/developer.svg'
import stream from '../../images/stream.svg'

const HomeStreamPage = () => (
  <HeroLayout>
    <SEO title="Hiome Home Stream" />
    <h1 style={{textAlign: `center`}}>Our Love Letter To Developers</h1>

    <object data={developer} type="image/svg+xml" style={{
      display: `block`,
      margin: `2rem auto`,
      width: `381px`,
      height: `206px`,
    }}>
      Have ultimate control over your home.
    </object>

    <p>
      In order to orchestrate your home, we needed a way to control all of your devices. We could have made yet another
      proprietary platform to lock in your data, but since <Link to="/core#privacy">we don't even want your data</Link>, that didn't make
      much sense. Instead, <strong>we built an entire event stream layer for your home</strong> on top of open protocols
      like <OutboundLink href="https://en.wikipedia.org/wiki/MQTT" rel="noopener noreferrer" target="_blank">MQTT</OutboundLink>.
    </p>
    <p>
      That means everything that happens in your home, whether you turn on a light, enter a room, or change the
      temperature on the thermostat, is published as an event that you can easily subscribe to. We use these events to train
      Hiome and monitor your home. If you're a developer, you can extend Hiome's functionality to build anything you want with the same
      level of access and control that we have in just a few lines of code. This kind of architecture is generally reserved for large,
      distributed services, but we've made it accessible for your home.
    </p>

    <object data={stream} type="image/svg+xml" style={{
      display: `block`,
      margin: `2rem auto`,
      width: `293px`,
      height: `236px`,
    }}>
      Have ultimate control over your home.
    </object>

    <p>
      To get started, you can use any standard MQTT client library in your preferred language to connect to your Hiome Core.
      Each device in your home gets its own topic, so you can subscribe to updates for just one device, a subset, or all of them.
      To turn something on or off, you just publish an event to that device's topic. Hiome handles all the work of translating to
      and from HomeKit's APIs for you, as well as managing uptime, error reporting, and more. It's never been easier to gain
      control over your home!
    </p>

    <p>More information and documentation coming soon. We're really excited to see what you'll build with this new super power.</p>
  </HeroLayout>
)

export default HomeStreamPage
