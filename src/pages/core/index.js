import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'

import HeroLayout from '../../components/HeroLayout'
import SEO from '../../components/seo'
import HowTo from '../../components/HowTo'

import CoreHero from '../../components/images/CoreHero'

import settings from '../../images/settings.svg'
import clock from '../../images/clock.svg'
import upload from '../../images/upload.svg'
import database from '../../images/database.svg'

const CorePage = () => (
  <HeroLayout hero={<CoreHero />} title="Smart to the Core.">
    <SEO title="Hiome Core" />

    <p>
      A smart home anticipates your needs and proactively makes your life easier. But more importantly, it's a <em>home</em> that welcomes
      you and your loved ones. It adapts to you, not the other way around. In fact, the technology should be completely invisible,
      letting you forget it's even there.
    </p>
    <p>
      <strong>Hiome Core</strong> manages your home, so you don't have to. It sits on top of your existing setup, learns your preferences,
      and directs your devices to proactively react to you as you go about your life. That means you never see or think about it, you just
      get to enjoy the benefits of a responsive home.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="autonomous"></a>
    <h2>Hiome is autonomous.</h2>
    <object data={settings} type="image/svg+xml" style={{
      display: `block`,
      margin: `0 auto 2rem auto`,
      width: `90%`,
      maxWidth: `381px`,
      height: `233px`,
    }}>
      Don't configure your home.
    </object>
    <p>
      You shouldn't have to configure your home, let alone talk to it every time you enter a room. Hiome learns your habits and
      configures itself, redefining what it means to be "plug and play." If your habits change over time, Hiome will adjust accordingly, making your home
      feel like it's alive and responding to you.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="responsive"></a>
    <h2>Hiome is responsive.</h2>
    <object data={clock} type="image/svg+xml" style={{
      display: `block`,
      margin: `0 auto 2rem auto`,
      width: `90%`,
      maxWidth: `330px`,
      height: `258px`,
    }}>
      Life is unpredictable.
    </object>
    <p>
      Other home automation systems rely heavily on specific timing to trigger rules, like turning on the coffee machine at 6am. But real life
      is unpredictable, and your home should adapt to that. Hiome reacts to your actions (like leaving a room), rather than guessing what you
      want based on a clock, so it does exactly what you want at just the right time, even if that time is different every day.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="privacy"></a>
    <h2>Hiome is private by design.</h2>
    <object data={upload} type="image/svg+xml" style={{
      display: `block`,
      margin: `0 auto 2rem auto`,
      width: `90%`,
      maxWidth: `376px`,
      height: `256px`,
    }}>
      Don't upload your data.
    </object>
    <p>
      We've built Hiome from the ground up with privacy in mind. Your data never leaves your home because we don't want it. Storing and
      processing data is expensive, so unless we're going to sell it, it doesn't make sense for us to even collect it. What you do in your
      home is your business and privacy is a fundamental human right.
    </p>
    <p>
      This approach also happens to have the benefit that your automations are insanely fast and reliable, because your home isn't dependent
      on our servers or even a working internet connection to keep running.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="setup"></a>
    <h2>Hiome is simple.</h2>
    <div style={{margin: `0 auto`}}>
      <HowTo stepCount={1}>Plug in Hiome Core</HowTo>
      <HowTo stepCount={2}>Invite Hiome to HomeKit</HowTo>
      <HowTo stepCount={3}>Plug in <Link to="/door">Hiome Door</Link> sensors</HowTo>
      <div style={{clear: `both`}}></div>
    </div>

    <p>
      That's it! There's no app to download or rules to program. Hiome will immediately start learning which lights you like to use.
      Within a couple days, your lights will follow you from room to room.
      You'll never think about your lights or Hiome again (until you visit a home that doesn't have it).
    </p>

    <p>We'd call it magical, but it's just damn good engineering.</p>

    {/*eslint-disable-next-line*/}
    <a name="powerful"></a>
    <h2>Hiome is powerful.</h2>
    <object data={database} type="image/svg+xml" style={{
      display: `block`,
      margin: `0 auto 2rem auto`,
      width: `90%`,
      maxWidth: `352px`,
      height: `258px`,
    }}>
      Have ultimate control over your home.
    </object>
    <p>
      To accomplish all this, we packed a lot of technology inside. In fact, Hiome is powered by the same advanced
      machine learning that controls self-driving cars. Hiome Core contains a cluster of 5 discrete processors, basically making it your
      own private data center dedicated to one task: making sure your home runs smoothly. <Link to="/core/home-stream">Learn more</Link> about what you can do with all that
      power.
    </p>

    <div style={{
      textAlign: `center`,
      margin: `70px auto 100px auto`
    }}>
      <Link to="/order" className="primary">Order Now</Link>
    </div>

    <h2>Frequently Asked Questions</h2>

    <h4>Does it control more than lights?</h4>
    <p>
      We're intentionally focusing on just lights for now while we perfect the learning logic before opening it up to control
      other types of devices. Eventually, Hiome will be able to control your whole home.
    </p>

    <h4>Why not just use a voice assistant?</h4>
    <p>
      Controlling your home with your voice feels magical at first, but it quickly becomes tiring and repetitive. As the number of
      connected devices in your home grows, the complexity of remembering every name and command becomes overwhelming, making it
      feel like a command-line interface. Grandma shouldn't have to remember what you named the pendant lights in the living room.
    </p>

    <h4>Can I use Core without the Door sensors?</h4>
    <p>
      No, Hiome Core relies on the accuracy of <Link to="/door">Hiome Door</Link> sensors to be able to learn your habits.
      Other sensors use attributes like motion or phone proximity as a heuristic to guess whether a room is occupied, but
      that isn't very accurate. It'd be like trying to learn a foreign language using only your music collection:
      you might learn some words, but it's not going to be very effective.
    </p>

    <h4>How does it learn?</h4>
    <p>
      Hiome Core learns in much the same way as a small child or pet: it tries something and then sees how you react to it. Out of the box, it
      might make some mistakes as it learns your preferences. For example, Hiome might try turning a light off in a certain situation. If you
      turn the light on, it will learn that it was wrong. That means teaching Hiome is as easy as just turning your lights on and off like
      you already do! In both psychology and computer science, this idea is referred to as reinforcement learning.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="homekit"></a>
    <h4>What does it integrate with?</h4>
    <p>
      Hiome controls any device that works with
      the <OutboundLink href="https://apple.com/homekit" rel="noopener noreferrer" target="_blank">Apple HomeKit</OutboundLink> platform. Each Core comes
      with a unique email address that you can use to invite Hiome to control your home in HomeKit, just like you would with a family
      member or roommate. Only your Core will be able to access your local HomeKit setup. Hiome assumes that you already
      have your devices and rooms properly configured in HomeKit, so it speeds up its learning by using that as a starting point. Note
      that Hiome controls your HomeKit setup, it does not appear in HomeKit itself.
    </p>
    <p>
      Don't use HomeKit? Support for other platforms is
      planned. <OutboundLink href="mailto:support@hiome.com?subject=I%20don%27t%20use%20HomeKit">Let us know</OutboundLink> which platform you use.
    </p>
  </HeroLayout>
)

export default CorePage
