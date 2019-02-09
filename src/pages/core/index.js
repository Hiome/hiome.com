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

    {/*eslint-disable-next-line*/}
    <a name="learning"></a>
    <h2>Hiome learns what you like.</h2>
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
      <strong>Hiome Core</strong> uses reinforcement learning to automate your home based on your habits. That means your smart home thinks
      for itself, so you don't have to manage it. As it learns, Hiome builds an algorithm specifically for your home.
      If your habits change over time, Hiome will adjust, so your home grows with you.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="adaptive"></a>
    <h2>Hiome adapts to you.</h2>
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
      Hiome controls your lights for you, so you don't have to do anything. It reacts to you, not preset times,
      because life is unpredictable. If you want to change things up, just use your lights like before and Hiome
      will take note. That means everybody, including grandma, will love Hiome, without having to be told how to use it.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="setup"></a>
    <h2>Hiome is "plug and forget" simple.</h2>
    <div style={{margin: `0 auto`}}>
      <HowTo stepCount={1}>Plug in Hiome Core</HowTo>
      <HowTo stepCount={2}>Invite Hiome to HomeKit</HowTo>
      <HowTo stepCount={3}>Plug in <Link to="/door">Hiome Door</Link> sensors</HowTo>
      <div style={{clear: `both`}}></div>
    </div>

    <p>
      That's it! There's no app to download or rules to program. Hiome immediately starts learning how you use your home,
      so you won't think about your lights or Hiome again (until you visit a home that doesn't have it). We'd call it magical,
      but it's just damn good engineering.
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
      We built Hiome from the ground up with privacy in mind. Your data is stored 100% locally and never leaves your home because
      we don't want it. Storing and processing data is expensive, so unless we're going to sell it, it doesn't make sense for us
      to even collect it. What you do in your home is your business.
    </p>
    <p>
      That also means your automations are insanely fast and reliable, because your home isn't dependent
      on our servers or even a working internet connection to keep running.
    </p>

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
      Hiome Core is packed with technology designed to make your home intuitive as possible.
      A cluster of 5 discrete processors are dedicated to one task: making sure your home runs smoothly.
      They power finely-tuned machine learning algorithms that enable Hiome to quickly understand your preferences
      and manage all of your devices. If you're a developer, we think you're going to
      love <Link to="/core/homestream">what's under the hood</Link>.
    </p>

    <div style={{
      textAlign: `center`,
      margin: `70px auto 100px auto`
    }}>
      <Link to="/order" className="primary">Order Now</Link>
    </div>

    <h2>Frequently Asked Questions</h2>

    <h4>Can it control more than lights?</h4>
    <p>
      We're intentionally focusing on just lights for now while we develop Hiome's learning skills before opening it up to control
      other types of devices. Eventually, Hiome will be able to mange your whole home.
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
      Hiome Core learns in much the same way as a small child or pet: it tries something and then sees how you react to it.
      If you have to change your lights, it learns that it did something wrong and takes that into account next time.
      That means teaching Hiome is as easy as just turning your lights on and off like you already do!
    </p>

    {/*eslint-disable-next-line*/}
    <a name="homekit"></a>
    <h4>What devices does it work with?</h4>
    <p>
      Hiome integrates with any light switches or bulbs that work with
      the <OutboundLink href="https://apple.com/homekit" rel="noopener noreferrer" target="_blank">Apple HomeKit</OutboundLink> platform.
      Each Core comes with a unique email address that you can use to invite Hiome to manage your home via HomeKit, just like you would with
      a family member or roommate. Only your local Core will be able to access your HomeKit setup. Hiome assumes that you already
      have your devices and rooms setup in HomeKit, so it speeds up its learning by using that as a starting point. Hiome only uses HomeKit
      to control your devices, it does not appear in HomeKit itself.
    </p>
    <p>
      Don't use HomeKit? Support for other platforms is
      planned. <OutboundLink href="mailto:support@hiome.com?subject=I%20don%27t%20use%20HomeKit">Let us know</OutboundLink> which platform
      you use.
    </p>
  </HeroLayout>
)

export default CorePage
