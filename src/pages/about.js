import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About Hiome" />
    <h2>About Us</h2>

    <p>
      We're a team of engineers based in Chicago, IL who enjoy smart homes, great tech, and long walks on the beach.
    </p>
    <p>
      We believe that smart homes are inevitable, but they need to be easier first. Ultimately, making something "smart" should always be
      additive to your experience, and never make your life harder. Sadly, that's not typically been the case. We got tired of seeing people
      struggle with bathroom lights turning off while they were showering or bedroom lights turning on when they moved in their sleep.
    </p>
    <p>
      So we experimented with unique machine learning models to automate smart home setup, making reliable automations accessible to
      everybody. This research eventually become <Link to="/core">Hiome Core</Link>. However, we quickly hit the problem that machine
      learning is only as good as its input. In order for our algorithm to learn correctly, it needed to know if a room was occupied or not.
      We started testing all of the solutions on the market: motion sensors, BLE beacons, geolocation, cameras, ultrasonic, and even
      LIDAR sensors, but they all came up short for one reason or another.
    </p>
    <p>
      Eventually, we gave in and started building our own solution to occupancy detection. After 50 prototypes, we learned that this is a
      much harder problem than we expected. Hundreds of prototypes later, we finally cracked the nut with a reliable, discrete thermal
      sensor: <Link to="/door">Hiome Door</Link>!
    </p>
    <p>Throughout the whole process, there's a few principles that are core to our beliefs and have impacted how we design
    our products...</p>

    <h4>Technology should be invisible.</h4>
    <p>
      This is true everywhere, but especially so in the context of your home. Few people want to think
      about debugging something when they come home. Instead, technology should be transparently woven into the fabric of your home, making
      your life easier without you even realizing it, like a tailwind helping you along in a race. This is the opposite of our current
      reality, where tech constantly needs to be touched or spoken to.
    </p>

    <h4>Technology should protect us.</h4>
    <p>
      Privacy is a human right. What you do in your home is your business, and it should not be monetized or weaponized. Even if you have
      nothing to hide, there's enough examples around the world of companies and politicians using our personal data to manipulate us
      without us even realizing. We should not have to decide whether it's worth trading privacy for convenience. As Ben Franklin said,
      "Those who would give up essential privacy to purchase a smart home, deserve neither privacy nor a smart home," or something like
      that. We won't let you down, Ben.
    </p>

    <h4>Technology should delight us.</h4>
    <p>
      In order to delight, technology must anticipate our needs and dynamically adapt to us, not the other way around. The best technologies
      augment our lives without requiring major changes in our behavior. The internet of things will drastically impact the way we work and
      live. If we're not careful as a society, it could make us slaves to our own technology. At Hiome, we're working hard to make sure that
      technology feels enchanted instead.
    </p>

    <p>
    If you're in Chicago and interested in meeting up, find us at
    the <a href="https://www.meetup.com/Chicago-Home-Automation/" rel="noopener noreferrer" target="_blank">Chicago Home Automation</a> meetups!
    </p>

  </Layout>
)

export default AboutPage
