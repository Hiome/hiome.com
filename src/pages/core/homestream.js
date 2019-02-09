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
      width: `90%`,
      maxWidth: `381px`,
      height: `206px`,
    }}>
      Have ultimate control over your home.
    </object>

    <p>
      In order to orchestrate your home, we needed a way to talk to all of your devices. We could have made yet another
      proprietary platform to lock in your data, but since <Link to="/core#privacy">we don't even want your data</Link>, that didn't make
      much sense. Instead, we built the tools we wish existed when we started Hiome.
    </p>
    <p>
      <strong>HomeStream</strong><span className="tm">&#8482;</span> is a complete event streaming layer
      for your home, built on top of open protocols
      like <OutboundLink href="https://en.wikipedia.org/wiki/MQTT" rel="noopener noreferrer" target="_blank">MQTT</OutboundLink>.
    </p>
    <p>
      That means everything that happens in your home, whether you turn on a light, enter a room, or change the
      temperature on the thermostat, is published as an event that you can easily subscribe to. We use these events to train
      Hiome and monitor your home's status. If you're a developer, you can use the same events to build anything you want
      in just a few lines of code.
    </p>

    <object data={stream} type="image/svg+xml" style={{
      display: `block`,
      margin: `2rem auto`,
      width: `90%`,
      maxWidth: `293px`,
      height: `236px`,
    }}>
      Have ultimate control over your home.
    </object>

    <p>
      This level of infrastructure is typically reserved for large, distributed services, but we've made it accessible for your home.
      To get started, you can use any standard MQTT client library in your preferred language to connect to your Hiome Core.
      Each device in your home gets its own topic, so you can subscribe to updates for just one device, a subset, or all of them.
      To turn something on or off, you just publish an event to that device's topic. Hiome Core handles all the work of translating to
      and from HomeKit's APIs for you, as well as managing uptime, error reporting, and more. It's never been easier to gain
      control over your home!
    </p>

    <p>We're really excited to see what you'll build with this new super power.</p>
  </HeroLayout>
)

export default HomeStreamPage
