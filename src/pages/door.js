import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'

import HeroLayout from '../components/HeroLayout'
import SEO from '../components/seo'

import DoorHero from '../components/images/DoorHero'

import dooraction from '../media/dooraction.mp4'
import doorfast from '../media/doorfast.mp4'
import doorinstall from '../media/doorinstall.mp4'
import doormultiple from '../media/doormultiple.mp4'

const DoorPage = () => (
  <HeroLayout>
    <SEO title="Hiome Door" />
    <h1 style={{textAlign: `center`, marginBottom: `50px`}}>Show everyone the Door.</h1>
    <div style={{
      margin: `2rem auto 4rem auto`,
    }}>
      <DoorHero />
    </div>

    <p>
      <strong>Hiome Door</strong> is a new type of occupancy sensor that knows exactly how many people are in each room. It looks at
      65 points of data to accurately count how many people have entered and exited a room through each door. All of this engineering
      has one goal: to know if you're in the room or not, even if you haven't moved for hours. No more waving your arms around to turn
      the lights back on.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline width="75%" style={{
        boxShadow: `2px 2px 15px #ccc`,
        backgroundColor: `#ccc`,
        marginTop: `20px`,
      }}>
        <source
          src={dooraction}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Hiome Door is fast.</h2>

    <p>Like insanely fast. It lets your home to react to your movement instantly. In addition to making your automations more
    accurate, it saves you money by making sure your home is running as efficiently as possible. You'll never find lights burning
    electricity for an empty room again.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline width="75%" style={{
        boxShadow: `2px 2px 15px #ccc`,
        backgroundColor: `#ccc`,
        marginTop: `20px`,
      }}>
        <source
          src={doorfast}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Hiome Door is built for privacy.</h2>
    <p>
      There's no cameras and it can't identify any personal information. Instead, it tracks changes in heat to know when you
      entered or exited. That means you don't have to carry your phone for your automations to work, and your home works for
      your guests too. All this in a device so small, you'll forget it's even there.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline width="75%" style={{
        boxShadow: `2px 2px 15px #ccc`,
        backgroundColor: `#ccc`,
        marginTop: `20px`,
      }}>
        <source
          src={doorinstall}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <h2>Hiome Door works with Hiome Core.</h2>
    <p>
      Hiome Doors know when you enter or exit through them, but what if your room has multiple
      doors? <Link to="/core">Hiome Core</Link> seamlessly syncs all of your sensors,
      even if your wifi coverage is spotty. This allows Hiome to work with multiple
      people too, only turning the lights off when the last person leaves.
    </p>

    <div style={{textAlign: `center`}}>
      <video autoPlay muted loop playsInline width="75%" style={{
        boxShadow: `2px 2px 15px #ccc`,
        backgroundColor: `#ccc`,
        marginTop: `20px`,
      }}>
        <source
          src={doormultiple}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>

    <div style={{
      textAlign: `center`,
      margin: `70px auto 100px auto`
    }}>
      <Link to="/order" className="primary">Order Now</Link>
    </div>

    <h2>Frequently Asked Questions</h2>

    {/*eslint-disable-next-line*/}
    <a name="compatibility"></a>
    <h4>Will Hiome Door fit on my door?</h4>
    <p>
      Most likely. Hiome Door is designed to fit most standard door frames. Your frame needs to be at least 1" (2.5cm) deep to be able
      to support Hiome Door's base, and at most 40" (1 meter) wide. We don't currently support extra-wide or double doors, but we're
      working on it! <OutboundLink href="mailto:support@hiome.com?subject=Double%20door%20support">Let us know</OutboundLink> if you're waiting for double
      door support.
    </p>

    <p>
      If you have any doubts, feel free to <OutboundLink href="mailto:support@hiome.com?subject=Check%20my%20door%27s%20compatibility">send us a picture
      of your door frame</OutboundLink> and we'll let you know.
    </p>

    <h4>How does this differ from my motion sensors?</h4>
    <p>
      As the name implies, motion sensors use motion as a heuristic for occupancy. More specifically, they start a timer when motion is
      detected. If you move again, the timer is reset. When the timer runs out, the sensor assumes the room is no longer occupied.
      That's good enough for knowing when you enter a room, but can't really tell if you're still there or when you left, creating false
      negatives and signficant delays in your automations. Hiome Door counts entries and exits using thermal signatures to accurately
      know if a room is occupied, whether or not you're moving.
    </p>

    <h4>How does Hiome Door connect to my network?</h4>
    <p>
      Hiome Door talks directly with <Link to="/core">Hiome Core</Link>, so there's no extra steps involved and it doesn't saturate your wifi
      network with constant data pings. This makes both your sensors and your wifi more reliable. Door uses a 900mhz radio with a
      1 mile (1.5km) range, which should be more than enough to cover your house. If it's not, please <OutboundLink href="mailto:investor@hiome.com">get
      in touch</OutboundLink> because we might be looking for investors <span role="img" aria-label="wink">😉</span>
    </p>

    <h4>Can I use Hiome Door without Core?</h4>
    <p>
      In addition to connectivity, Hiome Door relies on <Link to="/core">Hiome Core</Link> to collate the occupancy state of each room.
      Without Core, a Door sensor would quickly lose track of a room's occupancy count if another sensor was updating it too.
      Hiome Core is, well, <em>core</em> to the whole system.
    </p>

    <h4>Is there a battery in the sensor?</h4>
    <p>
      No, there are no batteries to replace! Instead, each Door sensor comes with a 20 foot (6 meter) white microUSB cable
      and slim power adapter. Of course, since we use a standard microUSB cable, you can substitute any size, color, or 5v power source as
      appropriate for your door frame. We also include a roll of white gaffer tape, which is a premium cotton tape Hollywood uses to hide
      wires on sets when filming.
    </p>
  </HeroLayout>
)

export default DoorPage
