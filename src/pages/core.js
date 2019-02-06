import React from 'react'
import { Link } from 'gatsby'

import HeroLayout from '../components/HeroLayout'
import SEO from '../components/seo'
import HowTo from '../components/how-to'

import CoreHero from '../components/images/CoreHero'

import settings from '../images/settings.svg'
import clock from '../images/clock.svg'
import upload from '../images/upload.svg'
import database from '../images/database.svg'

const CorePage = () => (
  <HeroLayout hero={<CoreHero />} title="Smart to the Core.">
    <SEO title="Hiome Core" />

    <p>
      A smart home anticipates your needs and proactively makes your life easier. But more importantly, it's a <em>home</em> that welcomes
      you and your loved ones. It adapts to you, not the other way around. And it <em>definitely</em> doesn't require an
      app to use your home. In fact, the technology should be completely invisible, letting you forget it's even there.
    </p>
    <p>
      <strong>Hiome Core</strong> manages your home, so you don't have to. It sits on top of your existing setup, learns your preferences,
      and directs your devices to proactively react to you as you go about your life. That means you never see or think about it, you just
      get to enjoy the benefits of a responsive home. Think of it like an invisible butler who follows you around and constantly turns your
      lights on and off for you.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="autonomous"></a>
    <h2>Hiome is autonomous.</h2>
    <object data={settings} type="image/svg+xml" style={{
      display: `block`,
      margin: `0 auto 2rem auto`,
      width: `381px`,
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
    <a name="predictive"></a>
    <h2>Hiome is predictive.</h2>
    <object data={clock} type="image/svg+xml" style={{
      display: `block`,
      margin: `0 auto 2rem auto`,
      width: `330px`,
      height: `258px`,
    }}>
      Life is unpredictable.
    </object>
    <p>
      Other home automation systems rely heavily on time to trigger actions. For example, "turn on coffee machine at 6am" or "turn on porch
      lights at 7pm." But real life is unpredictable, and your home should adapt to that. Hiome uses your actions (like leaving a room) and
      the current state of your home (like how dark it is) to decide what to do, rather than guessing what you want based on the clock.
    </p>
    <p>
      Of course, in order to do that, we need to reliably know what's happening. That's why Core depends
      on <Link to="/door">Hiome Door</Link> sensors to accurately detect occupancy in every room, whether or not you're moving.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="privacy"></a>
    <h2>Hiome is private by design.</h2>
    <object data={upload} type="image/svg+xml" style={{
      display: `block`,
      margin: `0 auto 2rem auto`,
      width: `376px`,
      height: `256px`,
    }}>
      Don't upload your data.
    </object>
    <p>
      We've built Hiome from the group up with privacy in mind. Your data never leaves your home because we don't want it. Storing and
      processing data is expensive, so unless we're going to sell it, it doesn't make sense for us to even collect it. (Pro-tip: any company
      that processes your data in the cloud for free is either selling it or about to go out of business.)
    </p>
    <p>
      Instead, we've worked hard to
      align our incentives with you because we want to focus on building the best product we possibly can. That includes protecting your
      data because what you do in your home is your business and privacy is a fundamental human right. <em>Alexa, you can stop listening now.</em>
    </p>
    <p>
      This approach also happens to have the benefit that your automations are insanely fast and reliable, because your home isn't dependent
      on our servers or even a working internet connection to keep running.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="setup"></a>
    <h2>Hiome is simple.</h2>
    <div style={{margin: `0 auto`, width: `90%`}}>
      <HowTo stepCount={1}>Plug in Hiome Core</HowTo>
      <HowTo stepCount={2}>Invite Hiome to <a href="#homekit">HomeKit</a></HowTo>
      <HowTo stepCount={3}>Plug in <Link to="/door">Hiome Door</Link> sensors</HowTo>
      <div style={{clear: `both`}}></div>
    </div>

    <p>
      That's it! There's no app to download or rules to program.
      After a couple days, Hiome will know which lights you like to use, turning them on right when you need them and turning them off
      as soon as you're done. You'll never think about your lights or Hiome again (until you visit a home that doesn't have it).
    </p>

    <p>We'd call it magical, but it's just damn good engineering.</p>

    {/*eslint-disable-next-line*/}
    <a name="powerful"></a>
    <h2>Hiome is powerful.</h2>
    <object data={database} type="image/svg+xml" style={{
      display: `block`,
      margin: `0 auto 2rem auto`,
      width: `352px`,
      height: `258px`,
    }}>
      Don't upload your data.
    </object>
    <p>
      To accomplish all this, we've packed a lot of technology inside a single appliance. In fact, Hiome is powered by the same advanced
      machine learning that controls self-driving cars. Hiome Core contains a cluster of 5 discrete processors, basically making it your
      own private data center dedicated to one task: making sure your home runs smoothly. Of course, comparing a smart home controller
      to a data center seems like a bit of a stretch, right?
    </p>
    <p>
      Well, in order to orchestrate your home, we needed a way to control all of your devices. We could have made yet another
      proprietary platform to lock in your data, but since <a href="#privacy">we don't even want your data</a>, that didn't make
      any sense. Instead, we built an entire event stream layer for your home on top of open protocols like MQTT.
    </p>
    <p>
      That means everything that happens in your home, whether you turn on a light, enter a room, or change the
      temperature on the thermostat, is published as an event that you can easily subscribe to. We use these events to train
      Hiome and monitor your home. If you're a developer, you can build anything you want with the same
      level of access and control that Hiome has in just a couple lines of code, opening up a world of possibilities for building
      things on top of your home. This kind of architecture is generally reserved for large, distributed services, but we've made
      it accessible for your home.
    </p>

    <p>
      All of this is the culmination of years of R&D work and over 200 prototypes, but we're just getting started. We have an exciting
      roadmap planned and we can't wait to get Hiome in your hands.
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
      Unfortunately, no. In fact, we tried hard to avoid making Hiome Door sensors at all, but machine learning is only as good as its
      input. Existing sensors use attributes like motion as a heuristic to guess whether a room is occupied, but this isn't very accurate
      or fast. If you've ever had to wave your arms to turn the lights back on, you know how bad motion sensors
      can be at detecting people. Other products have tried using Bluetooth LE beacons or GPS location to detect presence, but that only
      works if you always carry your phone around. After much frustration with existing solutions, we gave in and built our own,
      and <Link to="/door">Hiome Door</Link> was born.
    </p>

    <h4>How does it learn?</h4>
    <p>
      Hiome Core learns in much the same way as a small child or pet: it tries something and then sees how you react to it. Out of the box, it
      will make more mistakes as it learns your preferences. For example, Hiome might try turning a light off in a certain situation. If you
      correct it by turning the light back on, it will make a note that turning that light off was not the right thing to do. That means
      teaching Hiome is as easy as just turning your lights on and off like you already do! In both psychology and computer science, this
      idea is referred to as reinforcement learning.
    </p>

    {/*eslint-disable-next-line*/}
    <a name="homekit"></a>
    <h4>What's the deal with HomeKit?</h4>
    <p>
      Hiome controls any device that works with
      the <a href="https://apple.com/homekit" rel="noopener noreferrer" target="_blank">Apple HomeKit</a> platform. Each Core comes
      with a unique email address that you can use to invite Hiome to control your home in HomeKit, just like you would with a family
      member or roommate. Only your Core will be able to access your local HomeKit setup. Hiome assumes that you already
      have your devices and rooms properly configured in HomeKit, so it speeds up its learning by using that as a starting point. Note
      that Hiome controls your HomeKit setup, it does not appear in HomeKit itself.
    </p>
    <p>
      Don't use HomeKit? Support for other platforms is
      planned. <a href="mailto:support@hiome.com?subject=I%20don%27t%20use%20HomeKit">Let us know</a> which platform you use.
    </p>
  </HeroLayout>
)

export default CorePage
